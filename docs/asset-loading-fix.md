# Asset Loading Fix

This document explains the changes made to fix 404 errors when loading dynamically imported modules and other assets.

> **Note:** This document has been updated to reflect the latest changes. The original solution using relative paths was later found to cause issues with trailing slashes, so we've reverted to using absolute paths. See the "Trailing Slash Issue" section below for details.

## Issue Description

The website was experiencing 404 errors when trying to load dynamically imported modules and other assets:

```
Failed to load resource: the server responded with a status of 404 ()
TypeError: Failed to fetch dynamically imported module: https://iamtommetcalfe.com/assets/About.ByuVc9tI.js
Failed to load resource: the server responded with a status of 404 ()
```

These errors occurred because the browser was unable to find the assets at the specified paths.

## Root Cause

The issue was caused by how assets were being referenced in the application:

1. The Vite configuration was using an absolute base URL (`base: '/'`), which works well for sites deployed at the root of a domain but can cause issues with how assets are resolved in certain hosting environments.
2. Asset references in the HTML file were using absolute paths (starting with `/`), which can also cause issues in certain hosting environments.
3. The router was configured to use `createWebHistory(import.meta.env.BASE_URL)`, which was inheriting the base URL from the Vite configuration.

## Solution

The solution involved changing how assets are referenced throughout the application:

1. **Updated Vite Configuration**:
   - Changed the base URL from `'/'` to `'./'` to use relative paths
   - Updated manifest icon paths to use relative paths

   ```
   // Before
   base: '/'

   // After
   base: './'
   ```

2. **Updated Router Configuration**:
   - Removed the base URL parameter from `createWebHistory()`

   ```
   // Before
   history: createWebHistory(import.meta.env.BASE_URL)

   // After
   history: createWebHistory()
   ```

3. **Updated HTML Asset References**:
   - Changed asset references in index.html from absolute paths to relative paths

   ```html
   <!-- Before -->
   <link rel="manifest" href="/manifest.json" />
   <!-- After -->
   <link rel="manifest" href="./manifest.json" />
   ```
   - Updated the script tag for the main entry point

   ```html
   <!-- Before -->
   <script type="module" src="/src/main.ts"></script>
   <!-- After -->
   <script type="module" src="./src/main.ts"></script>
   ```

## Benefits

These changes ensure that:

1. Dynamically imported modules are correctly loaded from the right paths
2. All assets are referenced using relative paths, which provides better compatibility across different hosting environments
3. The application works correctly when deployed to GitHub Pages

## Testing

The changes were tested by:

1. Building the application locally and verifying that assets load correctly
2. Deploying to GitHub Pages and verifying that dynamically imported modules load without 404 errors
3. Testing navigation between different routes to ensure that lazy-loaded components load correctly

## Trailing Slash Issue

After implementing the solution described above, a new issue was discovered:

When users hard reload and clear the cache in Chrome when viewing a page with a trailing slash (e.g., `/about/` instead of `/about`), the browser would request assets from the wrong path:

```
GET https://iamtommetcalfe.com/about/assets/app.kqQ8NlpS.js net::ERR_ABORTED 404 (Not Found)
GET https://iamtommetcalfe.com/about/assets/app.1Skqh7gi.css net::ERR_ABORTED 404 (Not Found)
GET https://iamtommetcalfe.com/about/registerSW.js net::ERR_ABORTED 404 (Not Found)
GET https://iamtommetcalfe.com/about/assets/About.DksiBXRl.css net::ERR_ABORTED 404 (Not Found)
GET https://iamtommetcalfe.com/about/assets/About.6kRclf9J.js net::ERR_ABORTED 404 (Not Found)
```

### Root Cause

The issue was caused by the combination of:

1. Using relative paths (`base: './'`) for assets
2. Using a nested directory structure for static site generation (`dirStyle: 'nested'`)

When a URL has a trailing slash (e.g., `/about/`), the browser interprets relative paths differently than when there's no trailing slash (`/about`):

- With `/about`, a relative path `./assets/app.js` resolves to `/assets/app.js`
- With `/about/`, a relative path `./assets/app.js` resolves to `/about/assets/app.js`

### Updated Solution

To fix this issue, we reverted to using absolute paths:

1. **Updated Vite Configuration**:
   - Changed the base URL back to `'/'` to use absolute paths
   - Updated manifest icon paths to use absolute paths

   ```
   // Before (previous fix)
   base: './'

   // After (current fix)
   base: '/'
   ```

2. **Updated HTML Asset References**:
   - Changed asset references in index.html back to absolute paths

   ```html
   <!-- Before (previous fix) -->
   <link rel="manifest" href="./manifest.json" />
   <!-- After (current fix) -->
   <link rel="manifest" href="/manifest.json" />
   ```
   - Updated the script tag for the main entry point

   ```html
   <!-- Before (previous fix) -->
   <script type="module" src="./src/main.ts"></script>
   <!-- After (current fix) -->
   <script type="module" src="/src/main.ts"></script>
   ```

### Benefits of the Updated Solution

Using absolute paths ensures that:

1. Assets are always referenced from the root of the domain, regardless of whether the URL has a trailing slash or not
2. The application works correctly with the nested directory structure used for static site generation
3. Users don't experience 404 errors when hard reloading pages with trailing slashes

## Related Documentation

- [Vite Base URL Configuration](https://vitejs.dev/config/shared-options.html#base)
- [Vue Router History Mode](https://router.vuejs.org/api/#createwebhistory)
- [Understanding URL Paths with Trailing Slashes](https://developer.mozilla.org/en-US/docs/Web/API/URL)
