# Dependency Version Fix

This document explains the changes made to fix dependency conflicts in the project.

## Issue Description

The project was experiencing a dependency conflict between `vite` and `vite-ssg`. The error message was:

```
npm error code ERESOLVE
npm error ERESOLVE unable to resolve dependency tree
npm error
npm error While resolving: personal-website@0.1.0
npm error Found: vite@6.3.5
npm error node_modules/vite
npm error   dev vite@"^6.3.5" from the root project
npm error
npm error Could not resolve dependency:
npm error peer vite@"^2.0.0 || ^3.0.0 || ^4.0.0 || ^5.0.0-0" from vite-ssg@0.23.8
npm error node_modules/vite-ssg
npm error   dev vite-ssg@"^0.23.6" from the root project
```

This error occurred because the project was using `vite@6.3.5`, but `vite-ssg@0.23.8` only supports vite versions up to `^5.0.0-0`.

## Previous Solution

Initially, the conflict was resolved by downgrading Vite:

1. **Downgraded vite to a compatible version**:
   - Changed from `vite@^6.3.5` to `vite@^5.1.4`

2. **Updated related dependencies to ensure compatibility**:
   - Changed `@vitejs/plugin-vue` from `^5.2.4` to `^5.0.0`
   - Changed `vite-plugin-pwa` from `^1.0.0` to `^0.17.4`

## New Solution: Using Vite 6 with Compatibility Layer

To allow the project to use Vite 6 while still using vite-ssg, a new approach has been implemented:

1. **Upgraded back to Vite 6**:
   - Changed from `vite@^5.1.4` to `vite@^6.3.5`
   - Changed `vite-plugin-pwa` from `^0.17.4` to `^1.0.0`

2. **Created a compatibility wrapper**:
   - Added a new file `src/utils/vite-ssg-compat.ts` that wraps the original ViteSSG function
   - Updated imports in `main.ts` to use this wrapper instead of importing directly from vite-ssg

3. **Added compatibility installation scripts**:
   - Added `install-compat` script that uses `--legacy-peer-deps` flag
   - Added `build-compat` script that runs install-compat before building

4. **Updated GitHub Actions workflow**:
   - Modified CI/CD pipeline to use `--legacy-peer-deps` when installing dependencies

## How It Works

The compatibility approach works by:

1. Using the `--legacy-peer-deps` flag to ignore peer dependency conflicts during installation
2. Providing a thin wrapper around the original ViteSSG function that can be extended if needed
3. Ensuring that all build processes use the same approach for handling dependencies

This allows the project to use the latest version of Vite while still leveraging the static site generation capabilities of vite-ssg.

## Why This Approach

This approach was chosen because:

1. It allows the project to benefit from the latest features and performance improvements in Vite 6
2. It maintains the critical static site generation functionality provided by vite-ssg
3. It provides a clean abstraction that can be extended if needed to handle compatibility issues
4. It's a more forward-looking solution than downgrading dependencies

## Potential Risks

While this approach works, there are some potential risks to be aware of:

1. Using `--legacy-peer-deps` bypasses npm's peer dependency checks, which could lead to compatibility issues
2. Future updates to either Vite or vite-ssg might break this compatibility
3. The wrapper adds a small layer of indirection that could complicate debugging

## Future Considerations

When `vite-ssg` adds official support for vite v6.x, the project should:

1. Remove the compatibility wrapper
2. Update to use the officially supported version
3. Remove the `--legacy-peer-deps` flag from installation scripts
4. Simplify the build process

This should be monitored periodically to ensure the project stays up-to-date with the latest features and security patches.
