import { createRouter, createWebHistory, createMemoryHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Homepage.vue'),
  },
  {
    path: '/about/',
    name: 'about',
    component: () => import('../views/About.vue'),
  },
  {
    path: '/sitemap.xml',
    name: 'sitemap',
    component: () => import('../views/Sitemap.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('../views/NotFound.vue'),
  },
];

// Use memory history for SSG (server environment) and web history for browser
const history = typeof window !== 'undefined' ? createWebHistory() : createMemoryHistory();

const router = createRouter({
  history,
  routes,
});

export default router;
