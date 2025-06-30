// Google Analytics Optimization Module
// This module provides an optimized way to load and use Google Analytics

// Google Analytics Measurement ID
const GA_MEASUREMENT_ID = 'G-8998EV7FR0';

// Flag to track if analytics has been loaded
let analyticsLoaded = false;

/**
 * Loads the Google Analytics script dynamically
 * This prevents the script from blocking the initial page load
 */
export const loadAnalytics = (): Promise<void> => {
  return new Promise((resolve) => {
    if (analyticsLoaded) {
      resolve();
      return;
    }

    // Create the script element
    const script = document.createElement('script');
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    script.defer = true;

    // Set up the gtag function
    window.dataLayer = window.dataLayer || [];
    window.gtag = function (command: string, ...args: unknown[]) {
      // Create an array with the command and args
      const gtag_args = [command, ...args];
      // Push the array to the dataLayer
      dataLayer.push(gtag_args);
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
      analyticsLoaded = true;
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
 * @param {string} path - The page path
 * @param {string} title - The page title
 */
export const sendPageView = async (path: string, title: string): Promise<void> => {
  // Load analytics if not already loaded
  await loadAnalytics();

  // Send the page view
  window.gtag('event', 'page_view', {
    page_path: path,
    page_title: title,
    page_location: window.location.href,
  });
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
  // Load analytics if not already loaded
  await loadAnalytics();

  // Send the event
  window.gtag('event', eventName, params);
};

// Add type definitions for the global window object
declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (command: string, ...args: unknown[]) => void;
  }
}
