import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './assets/styles/main.css'

// Log build timestamp for debugging cache issues
if (import.meta.env.VITE_BUILD_TIMESTAMP) {
  console.log(`Build timestamp: ${import.meta.env.VITE_BUILD_TIMESTAMP}`);
}

const app = createApp(App);

// Add a global property for the build timestamp
app.config.globalProperties.$buildTimestamp = import.meta.env.VITE_BUILD_TIMESTAMP || 'development';

app.use(router);
app.use(store);
app.mount('#app');
