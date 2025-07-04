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
  ({ app, router: ssgRouter, head, isClient, initialState }) => {
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

    // Handle SEO metadata from SSR context during static site generation
    if (!isClient) {
      // eslint-disable-next-line no-console
      console.log('[main] Setting up SSR hooks for SEO metadata');

      // Add hook to apply SEO metadata from context
      ssgRouter.beforeResolve(async (to, from, next) => {
        try {
          // Get the matched components for the route
          const matched = ssgRouter.resolve(to).matched;
          const matchedComponents = [];

          for (const record of matched) {
            for (const name in record.components) {
              const component = record.components[name];
              matchedComponents.push(component);
            }
          }

          // Load the components
          await Promise.all(
            matchedComponents.map((Component) => {
              if (Component.ssrRender) {
                return Component();
              }
              return Promise.resolve(Component);
            })
          );

          // Check if the SSR context has SEO metadata
          if (initialState.seoMeta) {
            // eslint-disable-next-line no-console
            console.log('[main] Applying SEO metadata from SSR context:', initialState.seoMeta);

            // Apply SEO metadata to head
            if (initialState.seoMeta.title) {
              head.title = initialState.seoMeta.title;
            }

            if (initialState.seoMeta.description) {
              head.meta.push({
                name: 'description',
                content: initialState.seoMeta.description,
              });
            }

            if (initialState.seoMeta.canonicalUrl) {
              head.link.push({
                rel: 'canonical',
                href: initialState.seoMeta.canonicalUrl,
              });
            }
          }
        } catch (error) {
          // eslint-disable-next-line no-console
          console.error('[main] Error in SSR hook:', error);
        }

        next();
      });
    }

    // eslint-disable-next-line no-console
    console.log('[main] App initialization complete');
  }
);
