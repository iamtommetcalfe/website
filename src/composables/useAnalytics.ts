import { ref } from 'vue';
import { Router } from 'vue-router';
import { checkAnalyticsAvailable } from '@/utils/analytics';

// Google Analytics Measurement ID
const GA_MEASUREMENT_ID = 'G-8998EV7FR0';

/**
 * Composable for Google Analytics tracking
 *
 * @param {Router} router - Vue Router instance (optional)
 * @returns {Object} Analytics tracking functions
 */
export function useAnalytics(router?: Router) {
  const isAvailable = ref(false);
  const isChecked = ref(false);

  /**
   * Checks if Google Analytics is available
   * Since the script is now loaded directly in the HTML, we just need to check if gtag is defined
   */
  const checkAnalytics = (): boolean => {
    // Skip in server environment
    if (typeof window === 'undefined') {
      return false;
    }

    // If already checked, return the cached result
    if (isChecked.value) {
      return isAvailable.value;
    }

    // eslint-disable-next-line no-console
    console.log('Checking if Google Analytics is available');

    // Check if GA is available using the utility function
    const available = checkAnalyticsAvailable();

    // Cache the result
    isAvailable.value = available;
    isChecked.value = true;

    // eslint-disable-next-line no-console
    console.log('Google Analytics available:', available);

    return available;
  };

  /**
   * Sends a page view to Google Analytics
   *
   * @param {string} path - The page path
   * @param {string} title - The page title
   */
  const trackPageView = async (path: string, title: string): Promise<void> => {
    // Skip in server environment
    if (typeof window === 'undefined') {
      // eslint-disable-next-line no-console
      console.log('Skipping GA Page View in server environment:', path, title);
      return;
    }

    // eslint-disable-next-line no-console
    console.log('trackPageView called with:', { path, title });

    // Check if GA is available
    if (!checkAnalytics()) {
      // eslint-disable-next-line no-console
      console.warn('Google Analytics is not available, skipping page_view tracking');
      return;
    }

    // Debug info
    // eslint-disable-next-line no-console
    console.log('Sending page_view event to GA:', {
      page_path: path,
      page_title: title,
      page_location: window.location.href,
      dataLayerState: window.dataLayer ? window.dataLayer.length : 'undefined',
    });

    // Send page_view event
    window.gtag('event', 'page_view', {
      page_path: path,
      page_title: title,
      page_location: window.location.href,
      send_to: GA_MEASUREMENT_ID,
    });

    // eslint-disable-next-line no-console
    console.log('page_view event sent');
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
    // Skip in server environment
    if (typeof window === 'undefined') {
      // eslint-disable-next-line no-console
      console.log('Skipping GA Event in server environment:', eventName, params);
      return;
    }

    // eslint-disable-next-line no-console
    console.log('trackEvent called with:', { eventName, params });

    // Check if GA is available
    if (!checkAnalytics()) {
      // eslint-disable-next-line no-console
      console.warn('Google Analytics is not available, skipping event tracking');
      return;
    }

    // Ensure the send_to parameter is included
    const eventParams = {
      ...params,
      send_to: GA_MEASUREMENT_ID,
    };

    // Debug info
    // eslint-disable-next-line no-console
    console.log('Sending event to GA:', {
      eventName,
      eventParams,
      dataLayerState: window.dataLayer ? window.dataLayer.length : 'undefined',
    });

    window.gtag('event', eventName, eventParams);

    // eslint-disable-next-line no-console
    console.log(`Event '${eventName}' sent to GA`);
  };

  // Check analytics availability as soon as possible
  if (typeof window !== 'undefined') {
    // eslint-disable-next-line no-console
    console.log('Checking analytics availability');
    // Check if GA is available
    checkAnalytics();
  }

  // Set up automatic page tracking if router is provided and in browser environment
  if (router && typeof window !== 'undefined') {
    // eslint-disable-next-line no-console
    console.log('Setting up automatic page tracking with router');

    router.afterEach((to, from) => {
      // eslint-disable-next-line no-console
      console.log('Router navigation detected:', {
        to: to.fullPath,
        from: from?.fullPath || 'initial',
        toName: to.name,
        toMeta: to.meta,
        analyticsAvailable: isAvailable.value,
      });

      // Small delay to ensure the page title is updated
      setTimeout(() => {
        const title =
          document.title || (to.meta.title as string) || (to.name as string) || 'Unknown';

        // eslint-disable-next-line no-console
        console.log('Tracking page view after navigation with title:', title);

        trackPageView(to.fullPath, title);
      }, 100);
    });
  } else {
    // eslint-disable-next-line no-console
    console.log('Automatic page tracking not set up:', {
      hasRouter: !!router,
      hasWindow: typeof window !== 'undefined',
    });
  }

  return {
    isAvailable,
    trackPageView,
    trackEvent,
  };
}

// Add type definitions for the global window object
declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (command: string, ...args: unknown[]) => void;
  }
}
