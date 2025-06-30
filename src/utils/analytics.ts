// Google Analytics Optimization Module
// This module provides utility functions for Google Analytics

// Google Analytics Measurement ID
const GA_MEASUREMENT_ID = 'G-8998EV7FR0';

// Flag to check if analytics is available
let analyticsChecked = false;

/**
 * Checks if Google Analytics is available
 * Since the script is now loaded directly in the HTML, we just need to check if gtag is defined
 */
export const checkAnalyticsAvailable = (): boolean => {
  if (analyticsChecked) {
    return typeof window !== 'undefined' && typeof window.gtag === 'function';
  }

  if (typeof window === 'undefined') {
    return false;
  }

  // eslint-disable-next-line no-console
  console.log('[utils/analytics] Checking if Google Analytics is available');

  const isAvailable = typeof window.gtag === 'function';
  analyticsChecked = true;

  // eslint-disable-next-line no-console
  console.log('[utils/analytics] Google Analytics available:', isAvailable);

  return isAvailable;
};

/**
 * Loads Google Analytics
 * This is now just a compatibility function that checks if GA is available
 * The actual script is loaded directly in the HTML
 */
export const loadAnalytics = (): Promise<void> => {
  // eslint-disable-next-line no-console
  console.log('[utils/analytics] loadAnalytics called');

  return new Promise((resolve) => {
    // Check if GA is available
    const isAvailable = checkAnalyticsAvailable();

    if (isAvailable) {
      // eslint-disable-next-line no-console
      console.log('[utils/analytics] Google Analytics is already available');
      resolve();
      return;
    }

    // If not available, we can't do much since the script is supposed to be in the HTML
    // Just log a warning and resolve
    // eslint-disable-next-line no-console
    console.warn(
      '[utils/analytics] Google Analytics is not available. Make sure the script is included in the HTML.'
    );
    resolve();
  });
};

/**
 * Sends a page view to Google Analytics
 * @param {string} path - The page path
 * @param {string} title - The page title
 */
export const sendPageView = async (path: string, title: string): Promise<void> => {
  // Skip in server environment
  if (typeof window === 'undefined') {
    return;
  }

  // eslint-disable-next-line no-console
  console.log('[utils/analytics] sendPageView called with:', { path, title });

  // Check if GA is available
  if (!checkAnalyticsAvailable()) {
    // eslint-disable-next-line no-console
    console.warn(
      '[utils/analytics] Google Analytics is not available, skipping page_view tracking'
    );
    return;
  }

  // Debug info
  // eslint-disable-next-line no-console
  console.log('[utils/analytics] Sending page_view event to GA:', {
    page_path: path,
    page_title: title,
    page_location: window.location.href,
    dataLayerState: window.dataLayer ? window.dataLayer.length : 'undefined',
  });

  // Send the page view
  window.gtag('event', 'page_view', {
    page_path: path,
    page_title: title,
    page_location: window.location.href,
    send_to: GA_MEASUREMENT_ID, // Ensure the send_to parameter is included
  });

  // eslint-disable-next-line no-console
  console.log('[utils/analytics] page_view event sent');
};

/**
 * Sends an event to Google Analytics
 * @param {string} eventName - The name of the event
 * @param {Object} params - The event parameters
 */
export const sendEvent = async (
  eventName: string,
  params: Record<string, unknown> = {}
): Promise<void> => {
  // Skip in server environment
  if (typeof window === 'undefined') {
    return;
  }

  // eslint-disable-next-line no-console
  console.log('[utils/analytics] sendEvent called with:', { eventName, params });

  // Check if GA is available
  if (!checkAnalyticsAvailable()) {
    // eslint-disable-next-line no-console
    console.warn('[utils/analytics] Google Analytics is not available, skipping event tracking');
    return;
  }

  // Ensure the send_to parameter is included
  const eventParams = {
    ...params,
    send_to: GA_MEASUREMENT_ID,
  };

  // Debug info
  // eslint-disable-next-line no-console
  console.log('[utils/analytics] Sending event to GA:', {
    eventName,
    eventParams,
    dataLayerState: window.dataLayer ? window.dataLayer.length : 'undefined',
  });

  // Send the event
  window.gtag('event', eventName, eventParams);

  // eslint-disable-next-line no-console
  console.log(`[utils/analytics] Event '${eventName}' sent to GA`);
};

// Add type definitions for the global window object
declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (command: string, ...args: unknown[]) => void;
  }
}
