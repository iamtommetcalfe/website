import { ref, computed, watch } from 'vue';

/**
 * Composable for managing theme (dark/light mode)
 * 
 * @returns {Object} Theme management functions and state
 */
export function useTheme() {
  // Initialize theme from localStorage or default to 'light'
  const theme = ref(localStorage.getItem('theme') || 'light');
  
  // Computed property to check if dark theme is active
  const isDarkTheme = computed(() => theme.value === 'dark');
  
  // Toggle between light and dark themes
  const toggleTheme = () => {
    theme.value = theme.value === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme', theme.value);
  };
  
  // Set a specific theme
  const setTheme = (newTheme: string) => {
    if (newTheme === 'light' || newTheme === 'dark') {
      theme.value = newTheme;
      localStorage.setItem('theme', theme.value);
    }
  };
  
  // Apply theme to HTML element
  watch(isDarkTheme, (newValue) => {
    if (newValue) {
      document.documentElement.classList.add('dark-mode');
    } else {
      document.documentElement.classList.remove('dark-mode');
    }
  }, { immediate: true });
  
  return {
    theme,
    isDarkTheme,
    toggleTheme,
    setTheme
  };
}