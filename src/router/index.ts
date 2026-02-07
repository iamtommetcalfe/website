import { createRouter, createWebHistory, createMemoryHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Homepage.vue'),
    meta: {
      title: 'Homepage | Tom Stirrop-Metcalfe | Engineering Leader',
      description:
        'I build calm, capable, fast-moving engineering teams. I focus on measurable impact, strong systems, and sustainable delivery.',
    },
  },
  {
    path: '/about/',
    name: 'about',
    component: () => import('../views/About.vue'),
    meta: {
      title: 'About | Tom Stirrop-Metcalfe | Engineering Function Manager',
      description:
        'About Tom Stirrop-Metcalfe. Engineering Function Manager focused on sustainable delivery, healthy teams, and quietly reliable systems.',
    },
  },
  {
    path: '/projects/',
    name: 'projects',
    component: () => import('../views/Projects.vue'),
    meta: {
      title: 'Projects | Tom Stirrop-Metcalfe | Engineering Leader',
      description:
        "Explore Tom Stirrop-Metcalfe's public GitHub projects, including ENCOM Smart Home, Amiqus ATS Demo, and Vue Pokédex.",
    },
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('../views/NotFound.vue'),
    meta: {
      title: '404 - Page Not Found | Tom Stirrop-Metcalfe',
      description:
        'Oops! The page you are looking for does not exist. Please check the URL or navigate back to the homepage.',
    },
  },
];

// Use memory history for SSG (server environment) and web history for browser
const history = typeof window !== 'undefined' ? createWebHistory() : createMemoryHistory();

const router = createRouter({
  history,
  routes,
});

export default router;
