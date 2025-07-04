// Google Analytics Optimization Module
// This module provides utility functions for Google Analytics

/**
 * Google Analytics Measurement ID
 * This is the unique identifier for the Google Analytics property
 */
const GA_MEASUREMENT_ID: string = 'G-8998EV7FR0';

/**
 * Flag to track whether analytics availability has been checked
 * Used to avoid redundant checks
 */
let analyticsChecked: boolean = false;

/**
 * Interface for Google Analytics event parameters
 * Represents the structure of parameters that can be passed to GA events
 */
interface GAEventParams {
  [key: string]: unknown;
  send_to?: string;
}

/**
 * Interface for Google Analytics page view parameters
 * Represents the structure of parameters for page view events
 */
interface GAPageViewParams extends GAEventParams {
  page_path: string;
  page_title: string;
  page_location: string;
}

/**
 * Checks if Google Analytics is available in the current environment
 *
 * Since the script is now loaded directly in the HTML, we just need to check if gtag is defined.
 * This function caches the result to avoid redundant checks.
 *
 * @returns {boolean} True if Google Analytics is available, false otherwise
 */
export const checkAnalyticsAvailable = (): boolean => {
  // If we've already checked, return the cached result based on window and gtag availability
  if (analyticsChecked) {
    return typeof window !== 'undefined' && typeof window.gtag === 'function';
  }

  // Skip in server environment
  if (typeof window === 'undefined') {
    return false;
  }

  // eslint-disable-next-line no-console
  console.log('[utils/analytics] Checking if Google Analytics is available');

  // Check if the gtag function is available in the window object
  const isAvailable = typeof window.gtag === 'function';

  // Cache the result to avoid redundant checks
  analyticsChecked = true;

  // eslint-disable-next-line no-console
  console.log('[utils/analytics] Google Analytics available:', isAvailable);

  return isAvailable;
};

/**
 * Loads Google Analytics
 *
 * This is a compatibility function that checks if Google Analytics is available.
 * The actual script is loaded directly in the HTML, so this function primarily
 * verifies availability rather than loading the script dynamically.
 *
 * @returns {Promise<void>} A promise that resolves when the check is complete
 */
export const loadAnalytics = (): Promise<void> => {
  // eslint-disable-next-line no-console
  console.log('[utils/analytics] loadAnalytics called');

  return new Promise<void>((resolve) => {
    // Check if Google Analytics is available using the utility function
    const isAvailable = checkAnalyticsAvailable();

    if (isAvailable) {
      // If GA is already available, log and resolve immediately
      // eslint-disable-next-line no-console
      console.log('[utils/analytics] Google Analytics is already available');
      resolve();
      return;
    }

    // If not available, we can't do much since the script is supposed to be in the HTML
    // Just log a warning and resolve the promise
    // eslint-disable-next-line no-console
    console.warn(
      '[utils/analytics] Google Analytics is not available. Make sure the script is included in the HTML.'
    );
    resolve();
  });
};

/**
 * Sends a page view event to Google Analytics
 *
 * This function tracks page views in Google Analytics by sending a 'page_view' event
 * with the specified path and title. It automatically includes the current URL as the
 * page_location parameter.
 *
 * @param {string} path - The page path (e.g., '/about')
 * @param {string} title - The page title (e.g., 'About Page')
 * @returns {Promise<void>} A promise that resolves when the event is sent or skipped
 */
export const sendPageView = async (path: string, title: string): Promise<void> => {
  // Skip in server environment (SSR/SSG context)
  if (typeof window === 'undefined') {
    return;
  }

  // Log the function call with parameters for debugging
  // eslint-disable-next-line no-console
  console.log('[utils/analytics] sendPageView called with:', { path, title });

  // Check if Google Analytics is available before attempting to send the event
  if (!checkAnalyticsAvailable()) {
    // eslint-disable-next-line no-console
    console.warn(
      '[utils/analytics] Google Analytics is not available, skipping page_view tracking'
    );
    return;
  }

  // Prepare the page view parameters
  const pageViewParams: GAPageViewParams = {
    page_path: path,
    page_title: title,
    page_location: window.location.href,
    send_to: GA_MEASUREMENT_ID,
  };

  // Log debug information before sending the event
  // eslint-disable-next-line no-console
  console.log('[utils/analytics] Sending page_view event to GA:', {
    ...pageViewParams,
    dataLayerState: window.dataLayer ? window.dataLayer.length : 'undefined',
  });

  // Send the page view event to Google Analytics
  window.gtag('event', 'page_view', pageViewParams);

  // Log confirmation that the event was sent
  // eslint-disable-next-line no-console
  console.log('[utils/analytics] page_view event sent');
};

/**
 * Sends a custom event to Google Analytics
 *
 * This function tracks custom events in Google Analytics by sending an event
 * with the specified name and parameters. It automatically includes the
 * measurement ID in the parameters.
 *
 * @param {string} eventName - The name of the event (e.g., 'button_click', 'form_submit')
 * @param {GAEventParams} params - The event parameters (optional)
 * @returns {Promise<void>} A promise that resolves when the event is sent or skipped
 *
 * @example
 * // Send a simple event
 * sendEvent('button_click');
 *
 * @example
 * // Send an event with parameters
 * sendEvent('form_submit', {
 *   form_id: 'contact',
 *   form_length: 5
 * });
 */
export const sendEvent = async (eventName: string, params: GAEventParams = {}): Promise<void> => {
  // Skip in server environment (SSR/SSG context)
  if (typeof window === 'undefined') {
    return;
  }

  // Log the function call with parameters for debugging
  // eslint-disable-next-line no-console
  console.log('[utils/analytics] sendEvent called with:', { eventName, params });

  // Check if Google Analytics is available before attempting to send the event
  if (!checkAnalyticsAvailable()) {
    // eslint-disable-next-line no-console
    console.warn('[utils/analytics] Google Analytics is not available, skipping event tracking');
    return;
  }

  // Ensure the send_to parameter is included in the event parameters
  const eventParams: GAEventParams = {
    ...params,
    send_to: GA_MEASUREMENT_ID,
  };

  // Log debug information before sending the event
  // eslint-disable-next-line no-console
  console.log('[utils/analytics] Sending event to GA:', {
    eventName,
    eventParams,
    dataLayerState: window.dataLayer ? window.dataLayer.length : 'undefined',
  });

  // Send the custom event to Google Analytics
  window.gtag('event', eventName, eventParams);

  // Log confirmation that the event was sent
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
