import { ViteSSG } from './utils/vite-ssg-compat';
import App from './App.vue';
import router from './router';
import store from './store';
import './assets/styles/main.css';
import { useAnalytics } from './composables/useAnalytics';

// https://github.com/antfu/vite-ssg
// eslint-disable-next-line no-console
console.log('[main] Starting app initialization', {
  isDev: import.meta.env.DEV,
  mode: import.meta.env.MODE,
  buildTimestamp: import.meta.env.VITE_BUILD_TIMESTAMP || 'development',
});

export const createApp = ViteSSG(
  App,
  { routes: router.options.routes },
  ({ app, router: ssgRouter }) => {
    // eslint-disable-next-line no-console
    console.log('[main] App setup function called, initializing components');

    // eslint-disable-next-line no-console
    console.log('[main] Initializing analytics with router for automatic page tracking');

    // Initialize analytics with router for automatic page tracking
    const { trackEvent, trackPageView } = useAnalytics(ssgRouter);

    // eslint-disable-next-line no-console
    console.log('[main] Making analytics functions available globally');

    // Make analytics functions available globally
    app.config.globalProperties.$trackEvent = trackEvent;
    app.config.globalProperties.$trackPageView = trackPageView;

    // Add a global property for the build timestamp
    app.config.globalProperties.$buildTimestamp =
      import.meta.env.VITE_BUILD_TIMESTAMP || 'development';

    // Use plugins
    // eslint-disable-next-line no-console
    console.log('[main] Registering Vuex store');
    app.use(store);

    // eslint-disable-next-line no-console
    console.log('[main] App initialization complete');
  }
);
