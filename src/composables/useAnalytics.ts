import { ref } from 'vue';
import { Router } from 'vue-router';

// Google Analytics Measurement ID
const GA_MEASUREMENT_ID = 'G-8998EV7FR0';

/**
 * Composable for Google Analytics tracking
 *
 * @param {Router} router - Vue Router instance (optional)
 * @returns {Object} Analytics tracking functions
 */
export function useAnalytics(router?: Router) {
  const isLoaded = ref(false);

  /**
   * Loads the Google Analytics script dynamically
   */
  const loadAnalytics = async (): Promise<void> => {
    if (isLoaded.value) return;

    // Skip in development mode
    if (import.meta.env.DEV) {
      isLoaded.value = true;
      return;
    }

    return new Promise((resolve) => {
      // Create the script element
      const script = document.createElement('script');
      script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
      script.defer = true;

      // Set up the gtag function
      window.dataLayer = window.dataLayer || [];
      window.gtag = function (...args: unknown[]) {
        dataLayer.push(args);
      };

      // Initialize gtag
      window.gtag('js', new Date());
      window.gtag('config', GA_MEASUREMENT_ID, {
        send_page_view: false, // We'll send page views manually for better control
      });

      // Append the script to the body
      document.body.appendChild(script);

      // Mark as loaded and resolve the promise when the script loads
      script.onload = () => {
        isLoaded.value = true;
        resolve();
      };

      // Also resolve if there's an error, to prevent blocking the app
      script.onerror = () => {
        resolve();
      };
    });
  };

  /**
   * Sends a page view to Google Analytics
   *
   * @param {string} path - The page path
   * @param {string} title - The page title
   */
  const trackPageView = async (path: string, title: string): Promise<void> => {
    await loadAnalytics();

    if (import.meta.env.DEV) {
      return;
    }

    window.gtag('event', 'page_view', {
      page_path: path,
      page_title: title,
      page_location: window.location.href,
    });
  };

  /**
   * Sends an event to Google Analytics
   *
   * @param {string} eventName - The name of the event
   * @param {Object} params - The event parameters
   */
  const trackEvent = async (
    eventName: string,
    params: Record<string, unknown> = {}
  ): Promise<void> => {
    await loadAnalytics();

    if (import.meta.env.DEV) {
      return;
    }

    window.gtag('event', eventName, params);
  };

  // Set up automatic page tracking if router is provided
  if (router) {
    router.afterEach((to) => {
      // Small delay to ensure the page title is updated
      setTimeout(() => {
        const title =
          document.title || (to.meta.title as string) || (to.name as string) || 'Unknown';
        trackPageView(to.fullPath, title);
      }, 100);
    });
  }

  return {
    isLoaded,
    trackPageView,
    trackEvent,
  };
}

// Add type definitions for the global window object
declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}
