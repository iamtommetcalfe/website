import { ViteSSG as OriginalViteSSG } from 'vite-ssg';
import type { RouteRecordRaw, Router } from 'vue-router';
import type { App, Component } from 'vue';

/**
 * Options for configuring the ViteSSG function
 *
 * @interface UserOptions
 * @property {RouteRecordRaw[]} routes - Array of route definitions
 * @property {string} [base] - Base URL for the application
 * @property {unknown} [key] - Additional options passed to the underlying ViteSSG
 */
interface UserOptions {
  routes: RouteRecordRaw[];
  base?: string;
  [key: string]: unknown;
}

/**
 * Parameters passed to the setup function
 *
 * @interface SetupParams
 * @property {App} app - The Vue application instance
 * @property {Router} router - The Vue Router instance
 * @property {RouteRecordRaw[]} routes - Array of route definitions
 * @property {Record<string, unknown>} initialState - Initial state for the application
 */
interface SetupParams {
  app: App;
  router: Router;
  routes: RouteRecordRaw[];
  initialState: Record<string, unknown>;
}

/**
 * Setup function type definition
 * This function is called during app initialization
 */
type SetupFunction = (params: SetupParams) => void;

/**
 * Return type of the ViteSSG function
 * This matches the return type of the original ViteSSG function
 */
type ViteSSGReturn = (params?: Record<string, unknown>) => Promise<{
  app: App;
  router: Router;
  routes: RouteRecordRaw[];
  initialState: Record<string, unknown>;
}>;

/**
 * Compatibility wrapper for ViteSSG to work with Vite 6
 *
 * This wrapper adds compatibility by:
 * 1. Filtering out the sitemap.xml route to prevent conflicts during static site generation
 * 2. Providing a thin wrapper around the original ViteSSG function
 * 3. Ensuring compatibility with Vite 6 through the use of --legacy-peer-deps
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
  // Filter out the sitemap.xml route to prevent conflicts during static site generation
  // This allows the physical sitemap.xml file in the public directory to be used instead
  const filteredOptions: UserOptions = { ...options };
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
