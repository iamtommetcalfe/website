import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './assets/styles/main.css';
import { useAnalytics } from './composables/useAnalytics';

const app = createApp(App);

// Initialize analytics with router for automatic page tracking
const { trackEvent, trackPageView } = useAnalytics(router);

// Make analytics functions available globally
app.config.globalProperties.$trackEvent = trackEvent;
app.config.globalProperties.$trackPageView = trackPageView;

// Add a global property for the build timestamp
app.config.globalProperties.$buildTimestamp = import.meta.env.VITE_BUILD_TIMESTAMP || 'development';

// Use plugins
app.use(router);
app.use(store);

app.mount('#app');
