# Sitemap.xml Fix

## Issue

The sitemap.xml file was accessible locally at http://localhost:5173/sitemap.xml but returned a 404 error when accessed in production at https://iamtommetcalfe.com/sitemap.xml. This was because the Vue router was intercepting all requests, including those for static files like sitemap.xml, and serving the NotFound component for any path that didn't match the explicitly defined routes.

## Solution

The solution involved two main changes:

1. **Modified the Vite configuration** to include XML files in the service worker cache:

   ```javascript
   VitePWA({
     registerType: 'autoUpdate',
     workbox: {
       globPatterns: ['**/*.{js,css,html,ico,png,svg,webp,jpg,jpeg,json,xml}'],
       cleanupOutdatedCaches: true,
     },
   });
   ```

2. **Created a dedicated Sitemap component** that serves the raw XML content:
   - Added a new route in the router configuration for `/sitemap.xml`
   - Created a new component (`src/views/Sitemap.vue`) that serves the sitemap content directly
   - Used `document.open('text/xml')`, `document.write()`, and `document.close()` to replace the entire HTML document with the raw XML content
   - Set the appropriate content type meta tag to indicate that the content is XML

## How It Works

When a request is made for `/sitemap.xml`:

1. The Vue router matches the path to the Sitemap component
2. The Sitemap component replaces the entire HTML document with the raw XML content
3. The content is served with the correct content type (`text/xml; charset=UTF-8`)

This approach ensures that the sitemap.xml file is accessible in production, even on GitHub Pages where the server configuration is limited.

## Alternative Approaches Considered

1. **Server Configuration**: In a typical Vue application with history mode routing, the server should be configured to serve the index.html file for all routes except for static files. However, GitHub Pages doesn't provide this level of configuration.

2. **Redirect Approach**: Another approach would be to add a specific route for sitemap.xml that redirects to the actual file. However, this would cause an infinite loop because the router would intercept the redirected URL as well.

3. **Moving the File**: Moving the sitemap.xml file to a different location that wouldn't be intercepted by the router was also considered, but this would require updating all references to the file.

The current solution was chosen because it's the most reliable and doesn't require any server configuration changes.
