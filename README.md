<p style="margin:auto;width:100%;text-align: center">
    <a href="https://www.iamtommetcalfe.com" target="_blank">
        <img alt="Tom Metcalfe Logo" src="https://raw.githubusercontent.com/iamtommetcalfe/website/refs/heads/gh-pages/images/large-icon.png"
            width="300">
    </a>
</p>

# Personal Website

This is the repository for Tom Stirrop-Metcalfe's personal website, built with Vue.js, TypeScript, and Vite. The site is statically generated during the build process to ensure optimal performance and SEO.

## Build Setup

```bash
# install dependencies (standard way)
npm install

# install dependencies with compatibility mode for Vite 6
npm run install-compat

# serve with hot reload at localhost:5173
npm run dev

# build for production
npm run build

# build for production with compatibility mode for Vite 6
npm run build-compat

# preview the production build locally
npm run preview

# run type checking
npm run type-check
```

> **Note:** The project uses Vite 6 with a compatibility layer for vite-ssg. If you encounter dependency conflicts during installation, use the `install-compat` script which uses the `--legacy-peer-deps` flag.

## Code Quality

The project uses ESLint and Prettier to maintain code quality and consistent formatting. The following commands are available:

```bash
# run ESLint with automatic fixing
npm run lint

# run Prettier with automatic formatting
npm run format

# run both lint and format in sequence
npm run fix
```

### Pre-commit Hooks

The project uses Husky and lint-staged to automatically run ESLint and Prettier on staged files before each commit. This ensures that all committed code follows the project's code style and passes linting checks.

If any linting or formatting issues are found during the commit process, the commit will fail, and you'll need to fix the issues before you can commit your changes. This helps maintain code quality and consistency throughout the codebase.

## Static Site Generation

The website uses [vite-ssg](https://github.com/antfu/vite-ssg) to generate static HTML for all routes during the build process. This provides several benefits:

- **Improved SEO**: Search engines can index the content without executing JavaScript
- **Faster Initial Load**: Users see the content immediately without waiting for JavaScript to load
- **Better Performance**: Reduced time-to-interactive and improved Core Web Vitals
- **Enhanced Accessibility**: Content is available even if JavaScript fails to load

In development mode, the site runs as a standard single-page application (SPA). During the production build process, each route is pre-rendered to static HTML.
