import { Router } from 'vue-router';
import { App } from 'vue';

/**
 * Analytics plugin for Vue
 * Integrates with Vue Router to track page views
 */
export default {
  /**
   * Install the plugin
   * @param app - Vue app instance
   * @param options - Plugin options
   */
  install: (app: App, options: { router: Router }) => {
    // eslint-disable-next-line no-console
    console.log('[plugins/analytics] Installing analytics plugin', {
      isDev: import.meta.env.DEV,
      hasRouter: !!options?.router,
    });

    if (!options || !options.router) {
      console.warn('Analytics plugin requires a router instance');
      return;
    }

    const router = options.router;

    // eslint-disable-next-line no-console
    console.log('[plugins/analytics] Router instance found, proceeding with setup');

    // Track page views when the route changes
    // eslint-disable-next-line no-console
    console.log('[plugins/analytics] Setting up router navigation tracking');

    router.afterEach((to, from) => {
      // eslint-disable-next-line no-console
      console.log('[plugins/analytics] Router navigation detected:', {
        to: to.fullPath,
        from: from?.fullPath || 'initial',
        isDev: import.meta.env.DEV,
      });

      // Comment out DEV check to allow analytics in development mode for debugging
      // if (import.meta.env.DEV) {
      //   return;
      // }

      // Small delay to ensure the page title is updated
      setTimeout(async () => {
        const title =
          document.title || (to.meta.title as string) || (to.name as string) || 'Unknown';

        // eslint-disable-next-line no-console
        console.log('[plugins/analytics] Tracking page view with title:', title);

        // Dynamically import the sendPageView function
        const { sendPageView } = await import('@/utils/analytics');
        sendPageView(to.fullPath, title);
      }, 100);
    });

    // Add a global property for sending events
    // eslint-disable-next-line no-console
    console.log('[plugins/analytics] Setting up global $analytics property');

    app.config.globalProperties.$analytics = {
      // Expose the sendEvent function to components
      sendEvent: async (eventName: string, params: Record<string, unknown> = {}) => {
        // eslint-disable-next-line no-console
        console.log('[plugins/analytics] $analytics.sendEvent called:', {
          eventName,
          params,
          isDev: import.meta.env.DEV,
        });

        // Comment out DEV check to allow analytics in development mode for debugging
        // if (import.meta.env.DEV) {
        //   return;
        // }

        // eslint-disable-next-line no-console
        console.log('[plugins/analytics] Importing and calling sendEvent from utils/analytics');
        const { sendEvent } = await import('@/utils/analytics');
        sendEvent(eventName, params);
      },
    };
  },
};

// Add type definitions for the global properties
declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $analytics: {
      sendEvent: (eventName: string, params?: Record<string, unknown>) => Promise<void>;
    };
  }
}
