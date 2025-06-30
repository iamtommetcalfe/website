# Sitemap.xml Static Site Generation Fix

## Issue Description

The website was experiencing an error during the static site generation process:

```
[vite-ssg] Rendering Pages... (3)
file:///home/runner/work/website/website/node_modules/vite-ssg/dist/node.mjs:1058
        throw new Error(`${gray("[vite-ssg]")} ${red(`Error on page: ${cyan(route)}`)}
              ^

Error: [vite-ssg] Error on page: /sitemap.xml
Error: EEXIST: file already exists, mkdir '/home/runner/work/website/website/dist/sitemap.xml'
```

This error occurred because:

1. The project has a physical `sitemap.xml` file in the `public` directory
2. There's also a route defined in the router for `/sitemap.xml` that points to a `Sitemap.vue` component
3. During static site generation, vite-ssg tries to create a directory named `sitemap.xml` to place an `index.html` file inside it (based on the nested directory structure configuration)
4. This fails because there's already a file with that name

## Solution

The solution was to exclude the `/sitemap.xml` route from the static site generation process while keeping it in the router for client-side rendering. This was implemented by modifying the `vite-ssg-compat.ts` file to filter out the sitemap.xml route before passing the routes to the original ViteSSG function:

```typescript
export function ViteSSG(rootComponent: Component, options: UserOptions, fn?: SetupFunction) {
  // Filter out the sitemap.xml route to prevent conflicts during static site generation
  // This allows the physical sitemap.xml file in the public directory to be used instead
  const filteredOptions = { ...options };
  if (filteredOptions.routes) {
    filteredOptions.routes = filteredOptions.routes.filter(
      (route) => route.path !== '/sitemap.xml'
    );
  }

  // Pass the filtered options to the original ViteSSG function
  return OriginalViteSSG(rootComponent, filteredOptions, fn);
}
```

## Benefits

This approach provides several benefits:

1. **Prevents Build Errors**: The static site generation process completes successfully without errors
2. **Maintains Dual Approach**: The physical sitemap.xml file is used in production, while the dynamic route is available during development
3. **No Code Duplication**: The sitemap content is maintained in a single place
4. **Minimal Changes**: Only required a small modification to the existing compatibility wrapper

## Alternative Approaches Considered

1. **Changing dirStyle to 'flat'**: This would generate `/sitemap.xml.html` instead of `/sitemap.xml/index.html`, but would affect all routes and might not be desirable for the overall URL structure
2. **Removing the sitemap.xml route**: This would solve the issue but would remove the ability to view the sitemap in development mode
3. **Moving the physical file**: Renaming the file to something like `sitemap-static.xml` would avoid the conflict but would require updating all references to the sitemap
