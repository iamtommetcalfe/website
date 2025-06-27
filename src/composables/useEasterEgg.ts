import { ref, onMounted, onUnmounted } from 'vue';
import { useAnalytics } from './useAnalytics';

/**
 * Composable for managing the "hire me" easter egg
 *
 * @returns {Object} Easter egg functions and state
 */
export function useEasterEgg() {
  // State for whether to show the easter egg
  const showEasterEgg = ref(false);

  // Initialize analytics
  const { trackEvent } = useAnalytics();

  // The secret code to trigger the easter egg
  const secretCode = 'hireme';

  // The current sequence of keys pressed
  let keySequence = '';

  // Handle keydown events to detect the secret code
  const handleKeyDown = (event: KeyboardEvent) => {
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

  // Toggle the visibility of the easter egg
  const toggleEasterEgg = () => {
    showEasterEgg.value = !showEasterEgg.value;

    // Track the event in Google Analytics if the easter egg is being shown
    if (showEasterEgg.value) {
      trackEvent('easter_egg_toggled', {
        event_category: 'user_interaction',
        event_label: 'Hire Me Easter Egg Manually Toggled',
      });
    }
  };

  // Close the easter egg
  const closeEasterEgg = () => {
    // Only track if it was actually visible before closing
    if (showEasterEgg.value) {
      trackEvent('easter_egg_closed', {
        event_category: 'user_interaction',
        event_label: 'Hire Me Easter Egg Closed',
      });
    }

    showEasterEgg.value = false;
  };

  // Add and remove event listeners
  onMounted(() => {
    window.addEventListener('keydown', handleKeyDown);
  });

  onUnmounted(() => {
    window.removeEventListener('keydown', handleKeyDown);
  });

  return {
    showEasterEgg,
    toggleEasterEgg,
    closeEasterEgg,
  };
}
