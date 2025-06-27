import { ViteSSG } from './utils/vite-ssg-compat';
import App from './App.vue';
import router from './router';
import store from './store';
import './assets/styles/main.css';
import { useAnalytics } from './composables/useAnalytics';

// https://github.com/antfu/vite-ssg
export const createApp = ViteSSG(
  App,
  { routes: router.options.routes },
  ({ app, router: ssgRouter }) => {
    // Initialize analytics with router for automatic page tracking
    const { trackEvent, trackPageView } = useAnalytics(ssgRouter);

    // Make analytics functions available globally
    app.config.globalProperties.$trackEvent = trackEvent;
    app.config.globalProperties.$trackPageView = trackPageView;

    // Add a global property for the build timestamp
    app.config.globalProperties.$buildTimestamp =
      import.meta.env.VITE_BUILD_TIMESTAMP || 'development';

    // Use plugins
    app.use(store);
  }
);
