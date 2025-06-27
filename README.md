<p style="margin:auto;width:100%;text-align: center">
    <a href="https://www.iamtommetcalfe.com" target="_blank">
        <img alt="Tom Metcalfe Logo" src="https://raw.githubusercontent.com/iamtommetcalfe/website/gh-pages/img/tom-metcalfe-logo.png"
            width="300">
    </a>
</p>

# Personal Website

This is the repository for Tom Stirrop-Metcalfe's personal website, built with Vue.js, TypeScript, and Vite.

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

For more information about linting and formatting, see the [Linting Guide](docs/linting-guide.md).

## Documentation

- [Linting Guide](docs/linting-guide.md) - How to automatically fix linting and formatting errors
- [Tasks](docs/tasks.md) - List of improvement tasks for the project
- [Website Improvements Summary](docs/website-improvements-summary.md) - Summary of all improvements made to the website
