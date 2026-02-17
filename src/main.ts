import { ViteSSG } from 'vite-ssg';
import { createUnhead } from '@unhead/vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';
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

    // Proactively unregister any previously installed service workers (legacy PWA)
    if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
      // eslint-disable-next-line no-console
      console.log('[main] Attempting to unregister any existing service workers');
      navigator.serviceWorker
        .getRegistrations()
        .then((regs) => regs.forEach((r) => r.unregister()))
        .catch(() => void 0);
    }

    // Install head manager (Unhead)
    const head = createUnhead();
    app.use(head);

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
    console.log('[main] Registering Pinia store');
    app.use(createPinia());

    // eslint-disable-next-line no-console
    console.log('[main] App initialization complete');
  }
);
