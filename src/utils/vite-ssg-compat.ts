import { ViteSSG as OriginalViteSSG } from 'vite-ssg';
import type { RouteRecordRaw, Router } from 'vue-router';
import type { App, Component } from 'vue';

/**
 * Options for configuring the ViteSSG function
 */
interface UserOptions {
  routes: RouteRecordRaw[];
  base?: string;
  [key: string]: unknown;
}

/**
 * Parameters passed to the setup function
 */
interface SetupParams {
  app: App;
  router: Router;
  routes: RouteRecordRaw[];
  initialState: Record<string, unknown>;
  head?: unknown;
  isClient?: boolean;
}

/**
 * Setup function type definition
 */
type SetupFunction = (params: SetupParams) => void;

/**
 * Return type of the ViteSSG function
 */
type ViteSSGReturn = (params?: Record<string, unknown>) => Promise<{
  app: App;
  router: Router;
  routes: RouteRecordRaw[];
  initialState: Record<string, unknown>;
}>;

/**
 * Wrapper for ViteSSG that filters out specific routes
 *
 * This wrapper filters out the sitemap.xml route to prevent conflicts during static site generation,
 * allowing the physical sitemap.xml file in the public directory to be used instead.
 *
 * @param {Component} rootComponent - The root Vue component of the application
 * @param {UserOptions} options - Configuration options for ViteSSG
 * @param {SetupFunction} [fn] - Optional setup function called during app initialization
 * @returns {ViteSSGReturn} A function that creates the app when called
 */
export function ViteSSG(
  rootComponent: Component,
  options: UserOptions,
  fn?: SetupFunction
): ViteSSGReturn {
  // Filter out the sitemap.xml route
  const filteredOptions: UserOptions = { ...options };
  if (filteredOptions.routes) {
    filteredOptions.routes = filteredOptions.routes.filter(
      (route) => route.path !== '/sitemap.xml'
    );
  }

  // Pass the filtered options to the original ViteSSG function
  return OriginalViteSSG(rootComponent, filteredOptions, fn);
}

// Re-export other exports from vite-ssg
export * from 'vite-ssg';
