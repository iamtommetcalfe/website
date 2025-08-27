import { ref, onMounted, onUnmounted, getCurrentInstance, Ref } from 'vue';

/**
 * Type definition for analytics tracking function
 */
type TrackEventFunction = (eventName: string, params: Record<string, unknown>) => void;

/**
 * Interface for the return value of the useEasterEgg composable
 *
 * @interface EasterEggReturn
 * @property {Ref<boolean>} showEasterEgg - Whether to show the easter egg
 * @property {() => void} toggleEasterEgg - Function to toggle the visibility of the easter egg
 * @property {() => void} closeEasterEgg - Function to close the easter egg
 */
interface EasterEggReturn {
  showEasterEgg: Ref<boolean>;
  toggleEasterEgg: () => void;
  closeEasterEgg: () => void;
}

/**
 * Composable for managing the "hire me" easter egg
 *
 * This composable provides functionality for a keyboard-activated easter egg
 * that can be triggered by typing "hireme" anywhere on the site. It also
 * includes tracking for when the easter egg is triggered, toggled, or closed.
 *
 * @param {TrackEventFunction} [customTrackEvent] - Optional custom tracking function
 * @returns {EasterEggReturn} Object containing easter egg state and functions
 *
 * @example
 * // Basic usage
 * const { showEasterEgg, closeEasterEgg } = useEasterEgg();
 *
 * @example
 * // With custom tracking function
 * const { showEasterEgg } = useEasterEgg((event, params) => {
 *   console.log(`Tracked: ${event}`, params);
 * });
 */
export function useEasterEgg(customTrackEvent?: TrackEventFunction): EasterEggReturn {
  // State for whether to show the easter egg
  const showEasterEgg: Ref<boolean> = ref(false);

  // Get the current instance to access global properties
  const app = getCurrentInstance();

  // Use provided tracking function or get from global properties
  // Use a safe fallback function if neither is available
  const trackEvent: TrackEventFunction =
    customTrackEvent || app?.appContext.config.globalProperties.$trackEvent;

  // The secret code to trigger the easter egg
  const secretCode: string = 'hireme';

  // The current sequence of keys pressed
  let keySequence: string = '';

  /**
   * Handle keydown events to detect the secret code
   *
   * @param {KeyboardEvent} event - The keyboard event
   */
  const handleKeyDown = (event: KeyboardEvent): void => {
    // Add the key to the sequence
    keySequence += event.key.toLowerCase();

    // Check if the sequence contains the secret code
    if (keySequence.includes(secretCode)) {
      // Show the easter egg
      showEasterEgg.value = true;

      // Track the event in Google Analytics
      trackEvent('easter_egg_triggered', {
        event_category: 'user_interaction',
        event_label: 'Hire Me Easter Egg',
      });

      // Reset the key sequence
      keySequence = '';
    }

    // Keep only the last 10 characters to avoid memory issues
    if (keySequence.length > 10) {
      keySequence = keySequence.slice(keySequence.length - 10);
    }
  };

  /**
   * Toggle the visibility of the easter egg
   */
  const toggleEasterEgg = (): void => {
    showEasterEgg.value = !showEasterEgg.value;

    // Track the event in Google Analytics if the easter egg is being shown
    if (showEasterEgg.value) {
      trackEvent('easter_egg_toggled', {
        event_category: 'user_interaction',
        event_label: 'Hire Me Easter Egg Manually Toggled',
      });
    }
  };

  /**
   * Close the easter egg
   */
  const closeEasterEgg = (): void => {
    // Only track if it was actually visible before closing
    if (showEasterEgg.value) {
      trackEvent('easter_egg_closed', {
        event_category: 'user_interaction',
        event_label: 'Hire Me Easter Egg Closed',
      });
    }

    showEasterEgg.value = false;
  };

  // Add and remove event listeners only in browser environment
  onMounted(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('keydown', handleKeyDown);
    }
  });

  onUnmounted(() => {
    if (typeof window !== 'undefined') {
      window.removeEventListener('keydown', handleKeyDown);
    }
  });

  return {
    showEasterEgg,
    toggleEasterEgg,
    closeEasterEgg,
  };
}
