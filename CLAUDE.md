# CLAUDE.md

This file provides context and conventions for AI assistants working in this repository.

## Project Overview

Personal website for Tom Stirrop-Metcalfe, a Software Engineering Manager based in Birmingham, UK. The site is statically generated and hosted on GitHub Pages at [iamtommetcalfe.com](https://iamtommetcalfe.com).

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Vue 3 (Composition API, `<script setup>`) |
| Language | TypeScript (strict mode) |
| Build tool | Vite 7 |
| SSG | vite-ssg (Static Site Generation) |
| Routing | Vue Router 4 |
| State management | Pinia |
| Head management | @unhead/vue |
| Analytics | Google Analytics 4 (`G-8998EV7FR0`) |
| Linting | ESLint 9 (flat config) + eslint-plugin-vue + @typescript-eslint |
| Formatting | Prettier |
| Git hooks | Husky + lint-staged |

## Development Commands

```bash
npm install          # Install dependencies
npm run dev          # Dev server at http://localhost:5173 (hot reload)
npm run build        # Production SSG build → ./dist
npm run preview      # Preview production build locally
npm run type-check   # TypeScript type checking (non-blocking in CI)
npm run lint         # ESLint with auto-fix
npm run format       # Prettier format src/
npm run fix          # Run lint then format (use before committing)
```

## Repository Structure

```
/
├── src/
│   ├── App.vue                  # Root component; global no-cache meta headers, layout shell
│   ├── main.ts                  # App entry point; ViteSSG setup, Pinia, analytics init
│   ├── router/
│   │   └── index.ts             # Route definitions with SEO meta; memory vs web history for SSG
│   ├── views/                   # Page-level components (one per route)
│   │   ├── Homepage.vue
│   │   ├── About.vue
│   │   ├── Projects.vue
│   │   └── NotFound.vue
│   ├── components/              # Reusable UI components
│   │   ├── Header.vue           # Site header with desktop nav
│   │   ├── Footer.vue
│   │   ├── MobileNav.vue        # Mobile navigation drawer
│   │   ├── MrRobot.vue          # Easter egg keyboard listener component
│   │   ├── MrRobotPopUp.vue     # Easter egg popup/modal
│   │   └── PrinciplesSection.vue
│   ├── composables/             # Reusable Vue composables
│   │   ├── useAnalytics.ts      # GA4 page view & event tracking
│   │   ├── useBuildInfo.ts      # Build timestamp display & force-refresh
│   │   ├── useEasterEgg.ts      # "hireme" keyboard sequence easter egg
│   │   ├── useMobileMenu.ts     # Mobile menu open/close state + scroll lock
│   │   ├── useSeo.ts            # Declarative SEO head management via Unhead
│   │   └── useTheme.ts          # Light/dark theme toggle (reads/writes Pinia + DOM)
│   ├── stores/
│   │   └── theme.ts             # Pinia store for light/dark theme (persisted to localStorage)
│   ├── config/
│   │   └── seo.ts               # Schema.org type definitions + per-page SEO/structured-data configs
│   ├── plugins/
│   │   └── analytics.ts         # Analytics plugin
│   ├── utils/
│   │   └── analytics.ts         # GA availability check utility
│   ├── assets/
│   │   ├── images/              # Site images (.webp preferred, .jpeg/.png as fallback)
│   │   └── styles/
│   │       └── main.css         # Global CSS with CSS custom properties for theming
│   └── shims-vue.d.ts           # TypeScript shim for .vue imports
├── public/                      # Static assets copied verbatim to dist/
├── .github/
│   ├── workflows/
│   │   └── main.yml             # CI/CD: quality checks + deploy to GitHub Pages
│   ├── ISSUE_TEMPLATE/
│   └── dependabot.yml
├── .husky/
│   └── pre-commit               # Runs: npx lint-staged
├── vite.config.ts               # Vite + vite-ssg + sitemap plugin config
├── eslint.config.js             # ESLint flat config (reads .gitignore for ignores)
├── tsconfig.json                # TypeScript config (strict, ESNext, paths alias)
└── package.json
```

## Key Conventions

### Vue Components
- Use `<script setup lang="ts">` (Composition API) for all components.
- Component names may be single-word (ESLint rule `vue/multi-word-component-names` is off).
- `v-html` is permitted where needed (`vue/no-v-html` is off).
- Import images directly in `<script setup>` and bind to `src`/`srcset` — do not hard-code paths in templates.
- Prefer `<picture>` with `<source type="image/webp">` + JPEG fallback for all images.

### TypeScript
- Strict mode is enabled. Avoid `any`; ESLint warns on `@typescript-eslint/no-explicit-any`.
- Prefix intentionally-unused variables/args with `_` to suppress warnings.
- Use the `@/` path alias for all imports from `src/`.

### SSG / SSR Safety
- Always guard browser-only APIs: `typeof window !== 'undefined'` before accessing `window`, `document`, `localStorage`, or `navigator`.
- The router uses `createMemoryHistory()` in server/SSG context and `createWebHistory()` in the browser (see `src/router/index.ts`).
- Composables must be safe to call during SSG — skip side effects if `window` is undefined.

### Routing
- All routes use trailing slashes: `/about/`, `/projects/`.
- Route `meta` fields (`title`, `description`) are used as fallback SEO values by `useSeo`.
- New routes should be added to `src/router/index.ts` **and** to the `dynamicRoutes` array in `vite.config.ts` (sitemap generation).

### SEO & Structured Data
- Every view must call `useSeo()` from `src/composables/useSeo.ts` to set page title, description, Open Graph, Twitter Card, and canonical URL.
- Structured data (JSON-LD) schemas live in `src/config/seo.ts`. Add new page configs there and pass them to `useSeo({ structuredData: ... })`.
- Schema types (`SchemaPerson`, `SchemaWebPage`, etc.) are defined in `src/config/seo.ts` — use them instead of bare objects.

### Theming
- Light/dark mode is toggled via `useTheme()` composable, backed by the `theme` Pinia store.
- The store persists the chosen theme to `localStorage` and `useTheme` applies/removes `.dark-mode` on `document.documentElement`.
- CSS custom properties (defined in `main.css`) drive colour theming — avoid hard-coded colour values in component `<style>` blocks.

### Analytics
- `useAnalytics()` is initialised in `main.ts` and exposes `trackEvent` / `trackPageView` as global Vue properties (`$trackEvent`, `$trackPageView`).
- Components access these via `getCurrentInstance()?.appContext.config.globalProperties`.
- All analytics calls must guard against the server environment (`typeof window === 'undefined'`).

### Easter Egg
- Typing `hireme` anywhere on the site triggers a Mr. Robot popup.
- Managed by `useEasterEgg` composable (listens to `keydown`, tracks GA events) and rendered in `MrRobot.vue`.

### Build & Caching
- `VITE_BUILD_TIMESTAMP` environment variable is injected at build time and used for cache-busting.
- All JS/CSS/asset filenames include a content hash (`[name].[hash].[ext]`).
- HTML and JSON files get `no-cache` meta headers (set in `App.vue`) and short-lived cache headers in CI.
- The PWA plugin (`vite-plugin-pwa`) is currently **commented out** in `vite.config.ts`; legacy service workers are proactively unregistered in `main.ts`.

## Linting & Formatting

- ESLint flat config (`eslint.config.js`) reads `.gitignore` for ignored paths automatically.
- `prettier` is integrated via `eslint-config-prettier` to disable conflicting ESLint rules.
- `no-console` is **warn** (not error) — `console.warn` and `console.error` are always allowed; other levels require explicit `eslint-disable` comments.
- Pre-commit hook runs `lint-staged` automatically on staged files (ESLint + Prettier).
- Run `npm run fix` before committing to avoid hook failures.

## CI/CD Pipeline

The GitHub Actions workflow (`.github/workflows/main.yml`) triggers on push to `main`:

1. **Code Quality** job (runs first):
   - Type check (`npm run type-check`, `continue-on-error: true`)
   - Lint (`npm run lint`)
   - Format check (`npx prettier --check src/`)

2. **Deploy** job (runs after quality checks pass):
   - Builds with `VITE_BUILD_TIMESTAMP` set to `{run_id}-{run_number}-{run_attempt}`
   - Creates `dist/version.json` with build metadata
   - Purges GitHub Pages cache for key URLs
   - Deploys `dist/` to `gh-pages` branch via `peaceiris/actions-gh-pages`
   - Sets custom CNAME: `iamtommetcalfe.com`

## Adding a New Page

1. Create `src/views/MyPage.vue` — call `useSeo()` with a page-specific config.
2. Add a route entry in `src/router/index.ts` with trailing slash and `meta.title`/`meta.description`.
3. Add the path to `dynamicRoutes` in `vite.config.ts` for sitemap inclusion.
4. Add SEO/structured data config to `src/config/seo.ts` if structured data is needed.
5. Add a nav link in `src/components/Header.vue` and `src/components/MobileNav.vue`.
