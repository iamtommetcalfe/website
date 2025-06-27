import { ref, onMounted, onUnmounted } from 'vue';

/**
 * Composable for managing the "hire me" easter egg
 *
 * @returns {Object} Easter egg functions and state
 */
export function useEasterEgg() {
  // State for whether to show the easter egg
  const showEasterEgg = ref(false);

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
  };

  // Close the easter egg
  const closeEasterEgg = () => {
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
