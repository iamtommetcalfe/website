import { computed, watch, ComputedRef } from 'vue';
import { useStore } from 'vuex';

/**
 * Valid theme values for the application
 */
type ThemeType = 'light' | 'dark';

/**
 * Interface for the return value of the useTheme composable
 *
 * @interface ThemeReturn
 * @property {ComputedRef<ThemeType>} theme - The current theme ('light' or 'dark')
 * @property {ComputedRef<boolean>} isDarkTheme - Whether the dark theme is active
 * @property {() => void} toggleTheme - Function to toggle between light and dark themes
 * @property {(newTheme: ThemeType) => void} setTheme - Function to set a specific theme
 */
interface ThemeReturn {
  theme: ComputedRef<ThemeType>;
  isDarkTheme: ComputedRef<boolean>;
  toggleTheme: () => void;
  setTheme: (newTheme: ThemeType) => void;
}

/**
 * Composable for managing theme (dark/light mode)
 *
 * This composable provides functionality for managing the application theme,
 * including getting the current theme, checking if dark theme is active,
 * toggling between themes, and setting a specific theme.
 *
 * @returns {ThemeReturn} Object containing theme state and functions
 *
 * @example
 * // Basic usage
 * const { isDarkTheme, toggleTheme } = useTheme();
 *
 * @example
 * // Setting a specific theme
 * const { setTheme } = useTheme();
 * setTheme('dark');
 */
export function useTheme(): ThemeReturn {
  const store = useStore();

  // Computed property to get the current theme from Vuex store
  const theme: ComputedRef<ThemeType> = computed(() => store.getters.currentTheme as ThemeType);

  // Computed property to check if dark theme is active
  const isDarkTheme: ComputedRef<boolean> = computed(() => theme.value === 'dark');

  /**
   * Toggle between light and dark themes
   */
  const toggleTheme = (): void => {
    store.dispatch('toggleTheme');
  };

  /**
   * Set a specific theme
   *
   * @param {ThemeType} newTheme - The theme to set ('light' or 'dark')
   */
  const setTheme = (newTheme: ThemeType): void => {
    store.commit('setTheme', newTheme);
  };

  // Apply theme to HTML element when it changes
  watch(
    isDarkTheme,
    (newValue) => {
      if (typeof document !== 'undefined') {
        if (newValue) {
          document.documentElement.classList.add('dark-mode');
        } else {
          document.documentElement.classList.remove('dark-mode');
        }
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
