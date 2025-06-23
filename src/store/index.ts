import { createStore } from 'vuex';

// Define types for state
interface User {
  isAuthenticated: boolean;
  name: string;
}

interface State {
  count: number;
  user: User;
  theme: string;
}

// Create a new store instance
export default createStore<State>({
  state() {
    return {
      // Define your state properties here
      count: 0,
      user: {
        isAuthenticated: false,
        name: '',
      },
      theme: localStorage.getItem('theme') || 'light',
    };
  },
  mutations: {
    // Define mutations to change state
    increment(state) {
      state.count++;
    },
    setUser(state, user: User) {
      state.user = user;
    },
    setTheme(state, theme: string) {
      state.theme = theme;
      localStorage.setItem('theme', theme);
    },
  },
  actions: {
    // Define actions for async operations
    incrementAsync({ commit }) {
      setTimeout(() => {
        commit('increment');
      }, 1000);
    },
    login({ commit }, user: { name: string }) {
      // Simulate API call
      return new Promise<void>((resolve) => {
        setTimeout(() => {
          commit('setUser', {
            isAuthenticated: true,
            name: user.name,
          });
          resolve();
        }, 1000);
      });
    },
    toggleTheme({ commit, state }) {
      const newTheme = state.theme === 'light' ? 'dark' : 'light';
      commit('setTheme', newTheme);
    },
  },
  getters: {
    // Define getters to access state
    count: (state) => state.count,
    isAuthenticated: (state) => state.user.isAuthenticated,
    userName: (state) => state.user.name,
    currentTheme: (state) => state.theme,
  },
});