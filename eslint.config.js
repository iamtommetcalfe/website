import fs from 'node:fs';
import path from 'node:path';
import js from '@eslint/js';
import pluginVue from 'eslint-plugin-vue';
import vueParser from 'vue-eslint-parser';
import tsParser from '@typescript-eslint/parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import prettier from 'eslint-config-prettier';

// Load ignore patterns from .gitignore (fallback to common defaults if missing)
function loadGitignorePatterns() {
  const giPath = path.resolve(process.cwd(), '.gitignore');
  try {
    const content = fs.readFileSync(giPath, 'utf8');
    return content
      .split(/\r?\n/)
      .map((l) => l.trim())
      .filter((l) => l && !l.startsWith('#'));
  } catch {
    // Reasonable defaults if .gitignore does not exist
    return ['node_modules', 'dist', 'coverage', 'build', '.cache'];
  }
}

export default [
  // Respect .gitignore
  {
    ignores: loadGitignorePatterns(),
  },

  // Establish browser-like globals for source files
  {
    files: ['**/*.{js,jsx,ts,tsx,vue,mts,cts}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        window: 'readonly',
        document: 'readonly',
        console: 'readonly',
        setTimeout: 'readonly',
        localStorage: 'readonly',
        navigator: 'readonly',
        location: 'readonly',
        KeyboardEvent: 'readonly',
        CustomEvent: 'readonly',
        history: 'readonly',
      },
    },
  },

  // JavaScript recommended rules
  js.configs.recommended,

  // Vue 3 flat recommended rules
  ...pluginVue.configs['flat/recommended'],

  // TypeScript for .ts/.tsx/.mts/.cts files
  {
    files: ['**/*.{ts,tsx,mts,cts}'],
    languageOptions: {
      parser: tsParser,
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
    },
    rules: {
      // Let TypeScript handle undefined names to avoid false positives
      'no-undef': 'off',
      // Prefer TS-aware unused vars rule
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_', ignoreRestSiblings: true },
      ],
      '@typescript-eslint/no-explicit-any': 'warn',
    },
  },

  // Ensure .vue SFCs parse TS sections properly and apply TS rules
  {
    files: ['**/*.vue'],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: tsParser,
        ecmaVersion: 'latest',
        sourceType: 'module',
        extraFileExtensions: ['.vue'],
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
    },
    rules: {
      // Let TypeScript handle undefined names to avoid false positives
      'no-undef': 'off',
      // Prefer TS-aware unused vars rule
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_', ignoreRestSiblings: true },
      ],
      '@typescript-eslint/no-explicit-any': 'warn',
    },
  },

  // Declaration files: ignore unused vars types noise
  {
    files: ['**/*.d.ts'],
    rules: {
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
    },
  },

  // Node environment for config and build scripts (limit scope)
  {
    files: ['eslint.config.js', '**/vite.config.*', '**/*.config.{js,ts,mjs,cjs}'],
    languageOptions: {
      globals: {
        process: 'readonly',
        __dirname: 'readonly',
        module: 'readonly',
        require: 'readonly',
      },
    },
  },

  // Disable rules that conflict with Prettier formatting
  prettier,

  // Project-specific tweaks to mirror previous .eslintrc.json behavior
  {
    rules: {
      'vue/multi-word-component-names': 'off',
      'vue/no-v-html': 'off',
      'no-console': ['warn', { allow: ['warn', 'error'] }],
    },
  },
];
