# Code Splitting Implementation

This document explains the code splitting implementation for the website.

## Overview

Code splitting is a technique that allows breaking down the application bundle into smaller chunks that can be loaded on demand. This improves the initial load time of the application by only loading the code that is needed for the current view.

## Implementation Details

### Route-Based Code Splitting

All route components are now loaded using dynamic imports:

```javascript
const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Homepage.vue'),
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/About.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('../views/NotFound.vue'),
  },
];
```

This ensures that each route component is loaded only when the user navigates to that route, reducing the initial bundle size.

### Component-Level Code Splitting

The MrRobotPopUp component is dynamically imported in the Homepage component:

```javascript
import { ref, defineAsyncComponent } from 'vue';

// Dynamically import the MrRobotPopUp component
const MrRobotPopUp = defineAsyncComponent(() => import('@/components/MrRobotPopUp.vue'));
```

This ensures that the popup component is only loaded when needed, which is when the user clicks on the "Hello" text.

### Utility-Level Code Splitting

The analytics functionality is also code-split:

1. The sendPageView function is dynamically imported in the analytics plugin:

```javascript
setTimeout(async () => {
  const title = document.title || to.meta.title || to.name || 'Unknown';
  // Dynamically import the sendPageView function
  const { sendPageView } = await import('@/utils/analytics');
  sendPageView(to.fullPath, title);
}, 100);
```

2. The sendEvent function is dynamically imported when needed:

```javascript
sendEvent: async (eventName, params = {}) => {
  // Import dynamically to avoid loading analytics in development
  if (import.meta.env.DEV) {
    console.log('Analytics event (dev mode):', eventName, params);
    return;
  }

  const { sendEvent } = await import('@/utils/analytics');
  sendEvent(eventName, params);
};
```

## Benefits

This implementation provides several benefits:

1. **Reduced Initial Load Time**: The initial bundle size is smaller, resulting in faster load times
2. **Improved Performance**: Resources are loaded only when needed, improving overall performance
3. **Better User Experience**: The application becomes interactive more quickly
4. **Reduced Memory Usage**: Less JavaScript is loaded and parsed initially

## Future Improvements

Potential future improvements include:

1. **Prefetching**: Implement prefetching for routes that are likely to be visited next
2. **Component Libraries**: Apply code splitting to any future component libraries
3. **Monitoring**: Add performance monitoring to measure the impact of code splitting
