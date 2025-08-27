import { createRouter, createWebHistory, createMemoryHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Homepage.vue'),
    meta: {
      title: 'Homepage | Tom Stirrop-Metcalfe | Engineering Leader',
      description:
        'My name is Tom Stirrop-Metcalfe. I am a passionate and driven engineering leader who wants to enable others to realise their full potential.',
    },
  },
  {
    path: '/about/',
    name: 'about',
    component: () => import('../views/About.vue'),
    meta: {
      title: 'About | Tom Stirrop-Metcalfe | Engineering Leader',
      description:
        'Learn more about Tom Stirrop-Metcalfe, a passionate and committed engineering leader with over 15 years of experience in software development.',
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
