# Trailing Slash URL Fix

This document explains the changes made to fix issues with trailing slashes in URLs causing 404 errors for assets.

## Issue Description

When users hard reload and clear the cache in Chrome when viewing a page with a trailing slash (e.g., `/about/` instead of `/about`), the browser would request assets from the wrong path, resulting in 404 errors:

```
GET https://iamtommetcalfe.com/about/assets/app.kqQ8NlpS.js net::ERR_ABORTED 404 (Not Found)
GET https://iamtommetcalfe.com/about/assets/app.1Skqh7gi.css net::ERR_ABORTED 404 (Not Found)
GET https://iamtommetcalfe.com/about/registerSW.js net::ERR_ABORTED 404 (Not Found)
GET https://iamtommetcalfe.com/about/assets/About.DksiBXRl.css net::ERR_ABORTED 404 (Not Found)
GET https://iamtommetcalfe.com/about/assets/About.6kRclf9J.js net::ERR_ABORTED 404 (Not Found)
GET https://iamtommetcalfe.com/about/images/favicon.ico 404 (Not Found)
GET https://iamtommetcalfe.com/about/assets/manifest.hgQmXtGG.json 404 (Not Found)
```

## Root Cause

The issue was caused by the combination of:

1. Using relative paths (`base: './'` in vite.config.ts) for assets
2. Using a nested directory structure for static site generation (`dirStyle: 'nested'` in ssgOptions)

When a URL has a trailing slash (e.g., `/about/`), the browser interprets relative paths differently than when there's no trailing slash (`/about`):

- With `/about`, a relative path `./assets/app.js` resolves to `/assets/app.js`
- With `/about/`, a relative path `./assets/app.js` resolves to `/about/assets/app.js`

This behavior is standard across browsers and is part of how URLs are resolved.

## Solution

To fix this issue, we changed from using relative paths to absolute paths:

1. **Updated Vite Configuration**:
   - Changed the base URL from `'./'` to `'/'` to use absolute paths
   - Updated manifest icon paths to use absolute paths

   ```javascript
   // Before
   export default defineConfig({
     base: './',
     // ...
   });

   // After
   export default defineConfig({
     base: '/',
     // ...
   });
   ```

2. **Updated HTML Asset References**:
   - Changed asset references in index.html from relative paths to absolute paths

   ```html
   <!-- Before -->
   <link rel="manifest" href="./manifest.json" />
   <link rel="shortcut icon" href="./images/favicon.ico" type="image/x-icon" />
   <script type="module" src="./src/main.ts"></script>

   <!-- After -->
   <link rel="manifest" href="/manifest.json" />
   <link rel="shortcut icon" href="/images/favicon.ico" type="image/x-icon" />
   <script type="module" src="/src/main.ts"></script>
   ```

## Benefits

Using absolute paths ensures that:

1. Assets are always referenced from the root of the domain, regardless of whether the URL has a trailing slash or not
2. The application works correctly with the nested directory structure used for static site generation
3. Users don't experience 404 errors when hard reloading pages with trailing slashes

## Testing

The changes were tested by:

1. Building the application locally and verifying that assets load correctly
2. Testing with URLs that have trailing slashes to ensure assets load properly
3. Hard reloading and clearing the cache to verify that assets still load correctly

## Related Documentation

- [Asset Loading Fix](asset-loading-fix.md) - Contains additional information about the history of asset loading fixes
- [Vite Base URL Configuration](https://vitejs.dev/config/shared-options.html#base)
- [Understanding URL Paths with Trailing Slashes](https://developer.mozilla.org/en-US/docs/Web/API/URL)
