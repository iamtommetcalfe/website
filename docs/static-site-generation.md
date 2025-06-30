# Static Site Generation Implementation

This document explains the static site generation implementation for the website project.

## Overview

To ensure that all pages are properly indexed by search engines, the website has been configured to generate static HTML for all routes during the build process. This means that when a user or search engine crawler first visits a page, they receive pre-rendered HTML content instead of having to wait for JavaScript to execute and render the content.

## Implementation Details

### Vite SSG Integration

The implementation uses [vite-ssg](https://github.com/antfu/vite-ssg), a static site generation plugin for Vite and Vue.js. The key components of the implementation include:

1. **Dependencies**:
   - Added `vite-ssg` as a development dependency

2. **Build Configuration**:
   - Modified the build script in `package.json` to use `vite-ssg build` instead of `vite build`
   - Added SSG options in `vite.config.ts` to configure the static site generation process

3. **Application Entry Point**:
   - Refactored `main.ts` to export a setup function instead of directly creating and mounting the Vue app
   - Used the `ViteSSG` function to create the app with proper SSG support

### Configuration Details

The SSG configuration in `vite.config.ts` includes:

```typescript
ssgOptions: {
    script: 'async',
    formatting: 'minify',
    crittersOptions: {
        // Enable CSS inlining for critical path CSS
        preload: 'js-lazy',
        inlineFonts: true,
    },
    dirStyle: 'nested', // Generate /about/index.html instead of /about.html
} as UserConfig['ssgOptions'],
```

This configuration:

- Adds `async` attribute to script tags for better performance
- Minifies the HTML output
- Inlines critical CSS for faster rendering
- Uses nested directory structure for cleaner URLs

### Application Entry Point Changes

The `main.ts` file was modified to use the `ViteSSG` function:

```typescript
import { ViteSSG } from 'vite-ssg';
import App from './App.vue';
import router from './router';
import store from './store';
// ...

export const createApp = ViteSSG(
  App,
  { routes: router.options.routes, base: router.options.history.base },
  ({ app, router: ssgRouter }) => {
    // Setup code...
    app.use(store);
  }
);
```

This approach:

- Exports a function that sets up the app instead of directly creating and mounting it
- Allows vite-ssg to take control of the app creation and pre-rendering process
- Maintains all existing functionality while adding static generation capabilities

## Benefits

The static site generation implementation provides several benefits:

1. **Improved SEO**:
   - Search engines can index the content without executing JavaScript
   - All content is immediately available in the HTML source
   - Better crawlability and indexability

2. **Faster Initial Load**:
   - Users see the content immediately without waiting for JavaScript to load and execute
   - Reduced time-to-first-contentful-paint (FCP)
   - Improved Core Web Vitals scores

3. **Enhanced Accessibility**:
   - Content is available even if JavaScript fails to load or is disabled
   - Better support for users with slower connections or older devices

4. **Maintained SPA Experience**:
   - After the initial page load, the site functions as a single-page application
   - Client-side navigation between pages is still fast and smooth
   - No full page reloads when navigating between pages

## Development vs. Production

In development mode, the site runs as a standard single-page application (SPA) for faster development and hot module replacement. During the production build process, each route is pre-rendered to static HTML.

This dual-mode approach provides the best of both worlds: fast development experience and optimal production performance.
