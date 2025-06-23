# Vue Composables

This directory contains reusable Vue 3 composable functions that encapsulate and share stateful logic across components.

## What are Composables?

Composables are functions that leverage Vue's Composition API to extract and reuse stateful logic between components. They follow a simple convention:

- They start with "use" (e.g., `useTheme`, `useAnalytics`)
- They return an object with reactive state and functions

## Available Composables

### useTheme

Manages the application's theme (dark/light mode).

```typescript
import { useTheme } from '@/composables/useTheme';

// In a component setup function
const { theme, isDarkTheme, toggleTheme, setTheme } = useTheme();
```

**Returns:**
- `theme`: Reactive reference to the current theme ('light' or 'dark')
- `isDarkTheme`: Computed boolean indicating if dark theme is active
- `toggleTheme()`: Function to toggle between light and dark themes
- `setTheme(theme)`: Function to set a specific theme

### useAnalytics

Provides Google Analytics tracking functionality.

```typescript
import { useAnalytics } from '@/composables/useAnalytics';
import router from '@/router';

// With automatic page tracking
const { trackEvent: trackEventWithRouter } = useAnalytics(router);

// Without automatic page tracking
const { trackPageView, trackEvent: trackEventManual } = useAnalytics();
```

**Parameters:**
- `router` (optional): Vue Router instance for automatic page tracking

**Returns:**
- `isLoaded`: Reactive boolean indicating if analytics is loaded
- `trackPageView(path, title)`: Function to track page views
- `trackEvent(eventName, params)`: Function to track custom events

### useBuildInfo

Manages build information display.

```typescript
import { useBuildInfo } from '@/composables/useBuildInfo';

// In a component setup function
const { showBuildInfo, timestamp, toggleBuildInfo, forceRefresh } = useBuildInfo(import.meta.env.VITE_BUILD_TIMESTAMP);
```

**Parameters:**
- `buildTimestamp`: The build timestamp from environment variables

**Returns:**
- `showBuildInfo`: Reactive boolean controlling visibility of build info
- `timestamp`: Computed value of the build timestamp (null if in development)
- `toggleBuildInfo()`: Function to toggle build info visibility
- `forceRefresh()`: Function to force refresh the page, bypassing cache

## Benefits of Using Composables

1. **Code Reuse**: Extract common logic into reusable functions
2. **Separation of Concerns**: Separate UI from business logic
3. **Testability**: Easier to test logic in isolation
4. **Type Safety**: Better TypeScript integration
5. **Maintainability**: Centralized logic is easier to maintain
