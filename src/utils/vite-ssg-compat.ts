import { ViteSSG as OriginalViteSSG } from 'vite-ssg';
import type { RouteRecordRaw, Router } from 'vue-router';
import type { App, Component } from 'vue';

// Define the types for the ViteSSG function
type UserOptions = {
  routes: RouteRecordRaw[];
  base?: string;
  [key: string]: unknown;
};

type SetupFunction = (params: {
  app: App;
  router: Router;
  routes: RouteRecordRaw[];
  initialState: unknown;
}) => void;

/**
 * Compatibility wrapper for ViteSSG to work with Vite 6
 * This wrapper adds compatibility by forcing the use of --legacy-peer-deps when installing
 * and providing a thin wrapper around the original ViteSSG function
 */
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
  // The actual compatibility is handled by installing with --legacy-peer-deps
  return OriginalViteSSG(rootComponent, filteredOptions, fn);
}

// Re-export other exports from vite-ssg if needed
export * from 'vite-ssg';
