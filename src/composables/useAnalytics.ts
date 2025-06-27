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
      script.async = true; // Use async instead of defer for faster loading

      // Set up the gtag function
      window.dataLayer = window.dataLayer || [];
      window.gtag = function (...args: unknown[]) {
        window.dataLayer.push(...args);
      };

      // Append the script to the body
      document.body.appendChild(script);

      // Initialize gtag
      window.gtag('js', new Date());
      window.gtag('config', GA_MEASUREMENT_ID, {
        send_page_view: false, // We'll send page views manually for better control
        transport_type: 'beacon', // Use beacon for more reliable tracking
      });

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
      // eslint-disable-next-line no-console
      console.log('GA Page View (DEV):', path, title);
      return;
    }

    // Send page_view event
    window.gtag('event', 'page_view', {
      page_path: path,
      page_title: title,
      page_location: window.location.href,
      send_to: GA_MEASUREMENT_ID,
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
      // eslint-disable-next-line no-console
      console.log('GA Event (DEV):', eventName, params);
      return;
    }

    // Ensure the send_to parameter is included
    const eventParams = {
      ...params,
      send_to: GA_MEASUREMENT_ID,
    };

    window.gtag('event', eventName, eventParams);
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
