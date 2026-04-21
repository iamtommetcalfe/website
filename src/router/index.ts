import { createRouter, createWebHistory, createMemoryHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Homepage.vue'),
    meta: {
      title: 'Tom Stirrop-Metcalfe | Engineering Leader & AI Advocate',
      description:
        'Engineering leader with 15 years building teams at early-stage startups. Championing AI and LLM adoption at Amiqus.',
    },
  },
  {
    path: '/about/',
    name: 'about',
    component: () => import('../views/About.vue'),
    meta: {
      title:
        'About Tom Stirrop-Metcalfe | 15 Years of Engineering Leadership at Early-Stage Startups',
      description:
        'Tom Stirrop-Metcalfe is an engineering leader with 15 years of early-stage startup experience, championing AI adoption and sustainable delivery at Amiqus.',
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
    path: '/writing/',
    name: 'writing',
    component: () => import('../views/Writing.vue'),
    meta: {
      title: 'Writing | Tom Stirrop-Metcalfe',
      description:
        'Articles on engineering leadership, AI adoption, and the multi-hat startup EM experience.',
    },
  },
  {
    path: '/writing/ai-adoption-small-teams/',
    name: 'ai-adoption-small-teams',
    component: () => import('../views/writing/AiAdoptionSmallTeams.vue'),
    meta: {
      title:
        'How small engineering teams can adopt AI without losing control | Tom Stirrop-Metcalfe',
      description:
        'Practical lessons from championing Claude and LLM tooling adoption at a small engineering team.',
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
