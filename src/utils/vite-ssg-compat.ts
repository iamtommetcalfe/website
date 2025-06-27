import { ViteSSG as OriginalViteSSG } from 'vite-ssg';
import type { RouteRecordRaw } from 'vue-router';
import type { App, Component } from 'vue';

// Define the types for the ViteSSG function
type UserOptions = {
  routes: RouteRecordRaw[];
  base?: string;
  [key: string]: any;
};

type SetupFunction = (params: {
  app: App;
  router: any;
  routes: RouteRecordRaw[];
  initialState: any;
}) => void;

/**
 * Compatibility wrapper for ViteSSG to work with Vite 6
 * This wrapper adds compatibility by forcing the use of --legacy-peer-deps when installing
 * and providing a thin wrapper around the original ViteSSG function
 */
export function ViteSSG(rootComponent: Component, options: UserOptions, fn?: SetupFunction) {
  // Just pass through to the original ViteSSG function
  // The actual compatibility is handled by installing with --legacy-peer-deps
  return OriginalViteSSG(rootComponent, options, fn);
}

// Re-export other exports from vite-ssg if needed
export * from 'vite-ssg';
