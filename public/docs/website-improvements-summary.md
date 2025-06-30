# Website Improvements Summary

This document summarizes all the improvements made to the personal website project with the help of Vibe Coding.

## Architecture and Code Organization

1. **Migrated from hash-based routing to history mode routing**
   - Changed from `createWebHashHistory` to `createWebHistory` in the router configuration
   - Resulted in cleaner URLs without the `#` symbol

2. **Implemented Vuex for state management**
   - Added Vuex as a dependency
   - Created a store with state, mutations, actions, and getters
   - Implemented theme switching functionality (light/dark mode)
   - Added persistence of theme preference using localStorage

3. **Created a consistent folder structure for assets**
   - Organized assets into logical directories:
     - `src/assets/images` for component-imported images
     - `src/assets/styles` for CSS files
     - `src/assets/fonts` for future font files
     - `public/images` for publicly accessible images
   - Updated all import paths throughout the codebase

4. **Implemented TypeScript**
   - Added TypeScript configuration files
   - Converted JavaScript files to TypeScript
   - Added type definitions for better developer experience
   - Implemented proper interfaces and type checking

5. **Implemented MrRobotPopUp functionality**
   - Created a popup component that displays a "Hello Friend" GIF
   - Added click functionality to the "Hello" text on the homepage
   - Implemented proper animations and styling for the popup

## Performance Optimization

1. **Configured proper caching strategies**
   - Implemented content hashing for all assets
   - Added build timestamp for cache busting
   - Added cache purging in GitHub Actions workflow
   - Created a version.json file with build information
   - Added a hidden build info indicator in the footer
   - Initially fixed 404 errors by using relative paths, then reverted to absolute paths to fix trailing slash issues
   - Ensured assets load correctly regardless of whether URLs have trailing slashes

2. **Optimized Google Analytics**
   - Implemented lazy loading of the Google Analytics script
   - Made the script non-blocking
   - Added proper error handling
   - Implemented development mode detection
   - Created a Vue plugin for easy tracking
   - Added event tracking for user interactions:
     - Tracking when users click the "Hello" text to trigger the Mr. Robot popup
     - Tracking when users trigger the "hire me" easter egg by typing the secret code
     - Tracking when users manually toggle or close the easter egg

3. **Optimized image assets**
   - Converted large GIFs to more efficient video formats (MP4/WebM)
   - Implemented the video element with multiple sources for better browser compatibility
   - Added lazy loading to non-critical images to improve initial page load time
   - Created optimized versions of unused images for potential future use
   - Maintained fallback support for browsers that don't support modern formats

## PWA Enhancements

1. **Fixed issues in manifest.json**
   - Corrected typo in short_name
   - Updated outdated description
   - Fixed paths to icon files

## SEO and Metadata

1. **Ensured consistent metadata**
   - Fixed inconsistencies in author name (Tom Stirrop-Metcalfe vs Tom Metcalfe)
   - Updated all references to the author name throughout the site

2. **Implemented structured data**
   - Added JSON-LD for better search results
   - Included information about the person, job, and social profiles

3. **Created a sitemap.xml file**
   - Added proper XML structure
   - Included all important pages
   - Added lastmod, changefreq, and priority attributes

4. **Implemented meta tags for social sharing**
   - Added Open Graph tags for Facebook
   - Added X (formerly Twitter) Card tags
   - Included proper images and descriptions

5. **Ensured proper canonical URLs**
   - Added canonical link tag to prevent duplicate content issues

6. **Implemented static site generation**
   - Added vite-ssg for pre-rendering all pages to static HTML
   - Configured the build process to generate static HTML for all routes
   - Improved SEO by making content directly indexable by search engines
   - Enhanced performance with faster initial page loads
   - Maintained SPA functionality for client-side navigation after initial load

## User Experience Enhancements

1. **Added "hire me" easter egg**
   - Implemented a hidden feature that appears when typing "hireme" anywhere on the site
   - Created a modal with contact information and call-to-action buttons
   - Added animations for a polished user experience
   - Implemented keyboard event tracking using a custom composable
   - Ensured compatibility with both light and dark themes

## Code Quality Improvements

1. **Implemented pre-commit hooks with Husky and lint-staged**
   - Added Husky for Git hooks management
   - Configured lint-staged to run on staged files before commits
   - Set up automatic ESLint and Prettier checks before each commit
   - Ensured commits fail if linting or formatting issues are found
   - Added documentation about pre-commit hooks in README.md

## Build and Dependency Management

1. **Fixed dependency conflicts**
   - Initially resolved compatibility issues by downgrading vite from v6.3.5 to v5.1.4
   - Later implemented a compatibility layer to allow using Vite 6 with vite-ssg:
     - Created a wrapper around ViteSSG in src/utils/vite-ssg-compat.ts
     - Added scripts for installing dependencies with --legacy-peer-deps
     - Updated GitHub Actions workflow to use compatibility flags
     - Maintained static site generation functionality while using latest Vite version
   - Created detailed documentation explaining both approaches and their trade-offs

2. **Fixed browser API reference issues during static site generation**
   - Resolved "window is not defined" and "localStorage is not defined" errors during the SSG process
   - Updated router configuration to conditionally use createMemoryHistory in server environment
   - Added guards for browser-specific code in all composables and components:
     - Protected window references in useAnalytics.ts
     - Added checks before accessing window.location in useBuildInfo.ts
     - Guarded event listeners in useEasterEgg.ts
     - Added checks before accessing localStorage in Vuex store
     - Added guards for document manipulation in useTheme.ts
     - Protected document references in Sitemap.vue
   - Ensured the static site generation process completes successfully
   - Created comprehensive documentation explaining the changes

3. **Fixed sitemap.xml static site generation conflict**
   - Resolved conflict between the physical sitemap.xml file and the dynamic route during SSG
   - Modified the vite-ssg-compat.ts wrapper to exclude the sitemap.xml route from SSG
   - Maintained the dynamic route for development while using the physical file in production
   - Prevented the "file already exists" error during the build process
   - Created detailed documentation explaining the issue and solution

4. **Fixed trailing slash URL issues**
   - Resolved 404 errors when accessing URLs with trailing slashes (e.g., /about/)
   - Changed from relative paths to absolute paths for asset references
   - Updated Vite configuration to use absolute base URL
   - Updated HTML asset references to use absolute paths
   - Ensured assets load correctly regardless of whether URLs have trailing slashes
   - Created comprehensive documentation explaining the issue and solution

## Documentation

1. **Created comprehensive documentation**
   - Added README files explaining implementation details
   - Documented cache busting implementation
   - Documented Google Analytics optimization
   - Added documentation for asset loading fixes
   - Updated asset loading documentation to address trailing slash issues
   - Added pre-commit hooks documentation
   - Added dependency version fix documentation
   - Added SSG window reference fix documentation
   - Added sitemap.xml SSG conflict fix documentation
   - Added markdown documentation implementation

2. **Implemented documentation viewing system**
   - Created a system to serve markdown files as pages within the website template
   - Added a dropdown navigation item for Docs
   - Created components for rendering markdown content and listing documentation pages
   - Added routes for documentation pages
   - Implemented a build process to make markdown files accessible via HTTP requests
