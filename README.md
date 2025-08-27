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
# install dependencies
npm install

# serve with hot reload at localhost:5173
npm run dev

# build for production
npm run build

# preview the production build locally
npm run preview

# run type checking
npm run type-check
```

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
