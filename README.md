# Cache Busting Implementation

This document explains the cache busting implementation for the website.

## Overview

To prevent browsers from serving cached older versions of the website, we've implemented several cache busting techniques:

1. **Content Hashing**: All assets (JS, CSS, images) include a hash in their filenames that changes when the content changes.
2. **Build Timestamp**: Each build includes a unique timestamp that forces browsers to fetch the latest version.
3. **Cache Control Headers**: Different cache control strategies are applied to different types of files:
   - HTML and JSON files: `max-age=0, must-revalidate` to ensure they're always fresh
   - Static assets (JS, CSS, images): `max-age=31536000, immutable` for efficient long-term caching
4. **Cache Purging**: The GitHub Actions workflow includes a comprehensive step to purge the cache for multiple URLs when deploying.
5. **Service Worker Updates**: The service worker is configured to immediately activate and take control of all clients when updated.
6. **Version Verification**: A hidden build info indicator in the footer allows users to verify they're seeing the latest version and force a refresh if needed.

## Implementation Details

### Vite Configuration

The Vite configuration in `vite.config.ts` includes:

- Content hashing for all assets with `[name].[hash].[ext]` pattern
- Enhanced PWA configuration with:
  - `cleanupOutdatedCaches: true` to remove outdated caches
  - `skipWaiting: true` to activate new service worker immediately
  - `clientsClaim: true` to take control of all clients
  - Dynamic `cacheId` that includes the build timestamp to force cache invalidation
  - Proper manifest configuration for PWA installation

### GitHub Actions Workflow

The GitHub Actions workflow in `.github/workflows/main.yml` includes:

- A build timestamp environment variable that changes with each build
- A step to create a version.json file with build information
- A comprehensive cache purging step that:
  - Purges the cache for the main site URL and common routes
  - Purges asset directories
  - Sets appropriate cache control headers for different file types:
    - `Cache-Control: public, max-age=31536000, immutable` for static assets
    - `Cache-Control: public, max-age=0, must-revalidate` for HTML and JSON files

### Application Code

The application code includes:

- A meta tag with the build timestamp in `index.html` to force cache invalidation
- A global property for the build timestamp in `main.ts`
- A hidden build info indicator in the footer that:
  - Displays the build timestamp when clicked
  - Includes a refresh button to force refresh the page, bypassing cache
- A `useBuildInfo` composable that manages build information display and provides the force refresh functionality

## Verifying the Latest Version

Users can verify they're seeing the latest version by:

1. Looking for the small dot in the bottom right corner of the page
2. Clicking on it to display the build timestamp
3. If needed, clicking the refresh button (↻) next to the build timestamp to force a refresh
4. Alternatively, forcing a refresh by pressing Ctrl+F5 (Windows) or Cmd+Shift+R (Mac)

The service worker is configured to automatically update when a new version is available, but the refresh button provides a manual option if needed.
