# Cache Busting Implementation

This document explains the cache busting implementation for the website.

## Overview

To prevent browsers from serving cached older versions of the website, we've implemented several cache busting techniques:

1. **Content Hashing**: All assets (JS, CSS, images) include a hash in their filenames that changes when the content changes.
2. **Build Timestamp**: Each build includes a unique timestamp that forces browsers to fetch the latest version.
3. **Cache Purging**: The GitHub Actions workflow includes a step to purge the cache when deploying.
4. **Version Verification**: A hidden build info indicator in the footer allows users to verify they're seeing the latest version.

## Implementation Details

### Vite Configuration

The Vite configuration in `vite.config.js` includes:

- Content hashing for all assets
- PWA configuration with `cleanupOutdatedCaches: true`

### GitHub Actions Workflow

The GitHub Actions workflow in `.github/workflows/main.yml` includes:

- A build timestamp environment variable that changes with each build
- A step to create a version.json file with build information
- A step to purge the GitHub Pages cache using curl

### Application Code

The application code includes:

- A global property for the build timestamp in `main.js`
- A hidden build info indicator in the footer that displays the build timestamp
- A method to force refresh the page, bypassing cache

## Verifying the Latest Version

Users can verify they're seeing the latest version by:

1. Looking for the small dot in the bottom right corner of the page
2. Clicking on it to display the build timestamp
3. If needed, forcing a refresh by pressing Ctrl+F5 (Windows) or Cmd+Shift+R (Mac)