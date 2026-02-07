import { defineStore } from 'pinia';

export const useThemeStore = defineStore('theme', {
  state: () => ({
    theme: typeof window !== 'undefined' ? localStorage.getItem('theme') || 'light' : 'light',
  }),
  actions: {
    setTheme(theme: string) {
      this.theme = theme;
      if (typeof window !== 'undefined') {
        localStorage.setItem('theme', theme);
      }
    },
    toggleTheme() {
      const newTheme = this.theme === 'light' ? 'dark' : 'light';
      this.setTheme(newTheme);
    },
  },
  getters: {
    currentTheme: (state) => state.theme,
  },
});
