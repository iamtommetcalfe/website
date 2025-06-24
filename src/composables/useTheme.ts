import { computed, watch } from 'vue';
import { useStore } from 'vuex';

/**
 * Composable for managing theme (dark/light mode)
 *
 * @returns {Object} Theme management functions and state
 */
export function useTheme() {
  const store = useStore();

  // Computed property to get the current theme from Vuex store
  const theme = computed(() => store.getters.currentTheme);

  // Computed property to check if dark theme is active
  const isDarkTheme = computed(() => theme.value === 'dark');

  // Toggle between light and dark themes
  const toggleTheme = () => {
    store.dispatch('toggleTheme');
  };

  // Set a specific theme
  const setTheme = (newTheme: string) => {
    if (newTheme === 'light' || newTheme === 'dark') {
      store.commit('setTheme', newTheme);
    }
  };

  // Apply theme to HTML element
  watch(
    isDarkTheme,
    (newValue) => {
      if (newValue) {
        document.documentElement.classList.add('dark-mode');
      } else {
        document.documentElement.classList.remove('dark-mode');
      }
    },
    { immediate: true }
  );

  return {
    theme,
    isDarkTheme,
    toggleTheme,
    setTheme,
  };
}
