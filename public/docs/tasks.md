# Improvement Tasks

This document contains a comprehensive list of actionable improvement tasks for the website project. Tasks are organized by category and should be completed in the order presented.

## Architecture and Code Organization

1. [x] Migrate from hash-based routing to history mode routing for cleaner URLs
2. [x] Implement Vuex or Pinia for state management
3. [x] Create a consistent folder structure for assets (images, styles, fonts)
4. [x] Implement TypeScript for better type safety and developer experience
5. [x] Remove empty file (MrRobotPopUp.vue) or implement its functionality
6. [x] Extract reusable logic into composable functions
7. [ ] Create a component library with consistent styling and behavior

## Performance Optimization

8. [x] Implement lazy loading for all route components
9. [x] Optimize image assets with proper sizing and formats
10. [ ] Add preload directives for critical resources
11. [x] Implement code splitting for better initial load time
12. [x] Configure proper caching strategies for static assets
13. [x] Optimize third-party script loading (Google Analytics)
14. [ ] Implement performance monitoring

## PWA Enhancements

15. [x] Fix typo in manifest.json short_name ("iamtommetcalfe,com" → "iamtommetcalfe.com")
16. [x] Update outdated description in manifest.json (mentions PHP but project is Vue.js)
17. [ ] Configure proper offline experience with service worker caching
18. [ ] Add offline fallback page
19. [ ] Implement push notifications for important updates
20. [ ] Add proper PWA installation prompt

## Testing

21. [ ] Implement unit testing with Vitest or Jest
22. [ ] Add component testing with Vue Test Utils
23. [ ] Implement end-to-end testing with Cypress or Playwright
24. [ ] Set up automated accessibility testing
25. [ ] Create test coverage reporting
26. [ ] Implement visual regression testing

## Accessibility

27. [ ] Audit and fix accessibility issues (WCAG compliance)
28. [ ] Add proper ARIA attributes to interactive elements
29. [ ] Ensure proper keyboard navigation throughout the site
30. [ ] Implement focus management for modals and dialogs
31. [ ] Add skip navigation links
32. [ ] Ensure proper color contrast ratios

## Documentation

33. [x] Create comprehensive README with setup and contribution guidelines
34. [ ] Document component API with proper JSDoc comments
35. [ ] Create architectural decision records (ADRs) for major decisions
36. [x] Document build and deployment processes
37. [x] Create user documentation for site features

## Build and Deployment

38. [ ] Implement environment-specific configuration
39. [ ] Set up continuous integration with GitHub Actions
40. [ ] Configure automated deployment pipeline
41. [ ] Implement feature flags for controlled rollouts
42. [ ] Set up monitoring and error tracking (e.g., Sentry)
43. [ ] Configure proper build optimization for production

## Security

44. [ ] Implement Content Security Policy (CSP)
45. [ ] Add security headers (X-Content-Type-Options, X-Frame-Options, etc.)
46. [ ] Audit and update dependencies for security vulnerabilities
47. [ ] Implement privacy-friendly analytics solution
48. [ ] Configure proper CORS settings
49. [ ] Implement rate limiting for API endpoints if applicable

## SEO and Metadata

50. [x] Ensure consistent metadata across the application
51. [x] Fix inconsistencies in author name (Tom Stirrop-Metcalfe vs Tom Metcalfe)
52. [x] Implement structured data (JSON-LD) for better search results
53. [x] Create a sitemap.xml file
54. [x] Implement meta tags for social sharing (Open Graph, X Cards (formerly Twitter Cards))
55. [x] Ensure proper canonical URLs
56. [x] Implement static site generation for better SEO and indexability

## Code Quality

57. [x] Implement ESLint for code linting
58. [x] Add Prettier for consistent code formatting
59. [x] Set up Husky for pre-commit hooks
60. [ ] Implement conventional commits for better version control
61. [x] Add automated code quality checks in CI pipeline
