# SSG Window Reference Fix

This document explains the changes made to fix the issue with window references during static site generation (SSG).

## Issue Description

The website was experiencing errors during the static site generation process. Initially, there was an issue with window references:

```
[vite-ssg] An internal error occurred.
[vite-ssg] Please report an issue, if none already exists: https://github.com/antfu/vite-ssg/issues
file:///home/runner/work/website/website/node_modules/vue-router/dist/vue-router.mjs:664
    const { history, location } = window;
                                  ^

ReferenceError: window is not defined
```

Later, another issue was encountered with localStorage references:

```
[vite-ssg] An internal error occurred.
[vite-ssg] Please report an issue, if none already exists: https://github.com/antfu/vite-ssg/issues
file:///home/runner/work/website/website/.vite-ssg-temp/grlqyni3hy/main.mjs:265
      theme: localStorage.getItem("theme") || "light"
             ^

ReferenceError: localStorage is not defined
```

These errors occurred because the code was trying to access browser-specific objects during server-side rendering, but these objects are only available in browser environments, not in Node.js where the static site generation happens.

## Root Cause

The main issues were:

1. The router configuration was using `createWebHistory()` without checking if it was running in a browser or server environment
2. The Vuex store was accessing localStorage during state initialization without checking for browser environment
3. Several composables were using browser-specific objects (`window`, `document`) without proper guards
4. The Sitemap component was manipulating the document without checking for browser environment

## Solution

The following changes were made to fix the issues:

1. **Updated Router Configuration**:
   - Modified the router to conditionally use `createMemoryHistory()` during server-side rendering and `createWebHistory()` in the browser
   - Removed the base parameter from the ViteSSG options in main.ts

2. **Updated Vuex Store**:
   - Added checks for `typeof window !== 'undefined'` before accessing localStorage in state initialization
   - Added checks before writing to localStorage in mutations

3. **Added Guards to Composables**:
   - Added checks for `typeof window !== 'undefined'` before accessing browser-specific objects
   - Updated the following composables:
     - `useAnalytics.ts`: Added guards for window references in loadAnalytics, trackPageView, trackEvent, and router.afterEach
     - `useBuildInfo.ts`: Added a guard for window.location.reload in forceRefresh
     - `useEasterEgg.ts`: Added guards for window event listeners in onMounted and onUnmounted
     - `useTheme.ts`: Added a guard for document.documentElement in the theme watcher

4. **Updated Sitemap Component**:
   - Added a check for `typeof document !== 'undefined'` before manipulating the document in the mounted hook

## Implementation Details

### Router Configuration

```typescript
// Before
const router = createRouter({
  history: createWebHistory(),
  routes,
});

// After
const history = typeof window !== 'undefined' ? createWebHistory() : createMemoryHistory();

const router = createRouter({
  history,
  routes,
});
```

### Vuex Store

```typescript
// Before
state() {
  return {
    // ...other state
    theme: localStorage.getItem('theme') || 'light',
  };
},

// After
state() {
  return {
    // ...other state
    theme: typeof window !== 'undefined' ? localStorage.getItem('theme') || 'light' : 'light',
  };
},

// Before
setTheme(state, theme: string) {
  state.theme = theme;
  localStorage.setItem('theme', theme);
},

// After
setTheme(state, theme: string) {
  state.theme = theme;
  if (typeof window !== 'undefined') {
    localStorage.setItem('theme', theme);
  }
},
```

### Theme Composable

```typescript
// Before
watch(
  isDarkTheme,
  (newValue) => {
    if (newValue) {
      document.documentElement.classList.add('dark-mode');
    } else {
      document.documentElement.classList.remove('dark-mode');
    }
  },
  { immediate: true }
);

// After
watch(
  isDarkTheme,
  (newValue) => {
    if (typeof document !== 'undefined') {
      if (newValue) {
        document.documentElement.classList.add('dark-mode');
      } else {
        document.documentElement.classList.remove('dark-mode');
      }
    }
  },
  { immediate: true }
);
```

### Sitemap Component

```typescript
// Before
mounted() {
  // Set the content type to XML
  document.title = 'Sitemap';

  // Set the content type header
  const metaContentType = document.createElement('meta');
  metaContentType.httpEquiv = 'Content-Type';
  metaContentType.content = 'text/xml; charset=UTF-8';
  document.head.appendChild(metaContentType);

  // Replace the entire HTML document with the raw XML
  document.open('text/xml');
  document.write(this.rawSitemapContent);
  document.close();
},

// After
mounted() {
  // Only execute in browser environment
  if (typeof document !== 'undefined') {
    // Set the content type to XML
    document.title = 'Sitemap';

    // Set the content type header
    const metaContentType = document.createElement('meta');
    metaContentType.httpEquiv = 'Content-Type';
    metaContentType.content = 'text/xml; charset=UTF-8';
    document.head.appendChild(metaContentType);

    // Replace the entire HTML document with the raw XML
    document.open('text/xml');
    document.write(this.rawSitemapContent);
    document.close();
  }
},
```

## Benefits

These changes ensure that:

1. The static site generation process completes successfully without errors
2. The website can be properly indexed by search engines
3. The code works correctly in both browser and server environments
4. The user experience is improved with faster initial page loads

## Related Documentation

- [Static Site Generation](static-site-generation.md) - Details about the static site generation implementation
- [Dependency Version Fix](dependency-version-fix.md) - Explanation of dependency version constraints and compatibility
