import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './assets/styles/main.css';
import { useAnalytics } from './composables/useAnalytics';

// Initialize analytics with router for automatic page tracking
useAnalytics(router);

const app = createApp(App);

// Add a global property for the build timestamp
app.config.globalProperties.$buildTimestamp = import.meta.env.VITE_BUILD_TIMESTAMP || 'development';

// Use plugins
app.use(router);
app.use(store);

app.mount('#app');
