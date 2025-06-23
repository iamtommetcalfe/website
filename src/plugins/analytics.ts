import { Router } from 'vue-router';
import { sendPageView } from '@/utils/analytics';

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
  install: (app: any, options: { router: Router }) => {
    if (!options || !options.router) {
      console.warn('Analytics plugin requires a router instance');
      return;
    }

    const router = options.router;

    // Track page views when the route changes
    router.afterEach((to) => {
      // Don't track page views during development
      if (import.meta.env.DEV) {
        return;
      }

      // Small delay to ensure the page title is updated
      setTimeout(() => {
        const title = document.title || to.meta.title as string || to.name as string || 'Unknown';
        sendPageView(to.fullPath, title);
      }, 100);
    });

    // Add a global property for sending events
    app.config.globalProperties.$analytics = {
      // Expose the sendEvent function to components
      sendEvent: async (eventName: string, params: Record<string, any> = {}) => {
        // Import dynamically to avoid loading analytics in development
        if (import.meta.env.DEV) {
          console.log('Analytics event (dev mode):', eventName, params);
          return;
        }
        
        const { sendEvent } = await import('@/utils/analytics');
        sendEvent(eventName, params);
      }
    };
  }
};

// Add type definitions for the global properties
declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $analytics: {
      sendEvent: (eventName: string, params?: Record<string, any>) => Promise<void>;
    };
  }
}