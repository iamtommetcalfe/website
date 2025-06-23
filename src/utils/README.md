# Analytics Optimization

This directory contains utilities for optimizing third-party script loading, specifically Google Analytics.

## Implementation Details

The analytics implementation follows best practices for optimizing third-party script loading:

1. **Lazy Loading**: Google Analytics is only loaded when needed, not on initial page load
2. **Non-Blocking**: The script uses the `defer` attribute and is appended to the body
3. **Error Handling**: Script loading errors are handled gracefully
4. **Development Mode**: Analytics are not loaded in development mode to avoid polluting analytics data
5. **Manual Control**: Page views are sent manually for better control over timing

## Files

- `analytics.ts`: Core module for loading and using Google Analytics
- `../plugins/analytics.ts`: Vue plugin that integrates with Vue Router to track page views

## Usage

### Automatic Page View Tracking

Page views are automatically tracked when the route changes. This is handled by the analytics plugin, which is initialized in `main.ts`.

### Sending Custom Events

To send custom events from components:

```vue
<template>
  <button @click="trackButtonClick">Click Me</button>
</template>

<script>
export default {
  methods: {
    trackButtonClick() {
      this.$analytics.sendEvent('button_click', {
        button_name: 'example_button',
        page: this.$route.path
      });
    }
  }
}
</script>
```

## Performance Benefits

This implementation provides several performance benefits:

1. **Reduced Initial Load Time**: The Google Analytics script is not loaded until needed
2. **Improved Core Web Vitals**: By not blocking the main thread during initial load
3. **Reduced Network Contention**: By loading analytics after critical resources

## Future Improvements

Potential future improvements include:

1. **Consent Management**: Add a cookie consent mechanism before loading analytics
2. **Local Analytics Proxy**: Implement a proxy to reduce the impact of analytics on performance
3. **Offline Support**: Queue analytics events when offline and send them when online