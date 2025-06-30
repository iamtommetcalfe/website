# Linting and Formatting Guide

This guide explains how to automatically fix linting and formatting errors in the project.

## Available Commands

The project has several commands set up to help maintain code quality:

### `npm run lint`

This command runs ESLint on all supported files in the project with the `--fix` flag, which automatically fixes many linting errors.

```bash
npm run lint
```

ESLint checks for code quality issues like:

- Syntax errors
- Potential bugs
- Code style inconsistencies
- Best practices violations

Many of these issues can be automatically fixed, but some may require manual intervention.

### `npm run format`

This command runs Prettier on all files in the `src` directory and automatically formats them according to the project's formatting rules.

```bash
npm run format
```

Prettier enforces a consistent code style by handling:

- Indentation
- Line length
- Quotes
- Semicolons
- Trailing commas
- And more

Unlike ESLint, Prettier is focused solely on code formatting and will rewrite your code to match the configured style.

### `npm run fix`

This is a convenience command that runs both `lint` and `format` in sequence, fixing both linting and formatting issues with a single command.

```bash
npm run fix
```

Use this command when you want to ensure your code meets all quality and style requirements before committing.

## Linting vs. Formatting

It's important to understand the difference between linting and formatting:

- **Linting** (ESLint): Analyzes your code for potential errors, bugs, and style issues. It can fix some issues automatically but focuses more on identifying problems.

- **Formatting** (Prettier): Focuses solely on code style and formatting. It doesn't check for errors or bugs but ensures consistent formatting across the codebase.

Using both tools together provides the best results: ESLint catches potential bugs and enforces best practices, while Prettier ensures consistent formatting.

## Configuration

The project uses the following configuration files:

- `.eslintrc.json`: Configures ESLint rules
- `.prettierrc.json`: Configures Prettier formatting options

These files define the coding standards for the project and should not be modified without team discussion.

## Pre-commit Hooks (Future Enhancement)

In the future, the project may implement pre-commit hooks using Husky to automatically run these commands before each commit, ensuring that all committed code meets the project's quality standards.
