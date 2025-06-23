import { ref, computed } from 'vue';

/**
 * Composable for managing build information display
 * 
 * @param {string} buildTimestamp - The build timestamp from environment variables
 * @returns {Object} Build information functions and state
 */
export function useBuildInfo(buildTimestamp?: string) {
  // State for whether to show the build info
  const showBuildInfo = ref(false);
  
  // Computed property to get the build timestamp
  const timestamp = computed(() => {
    return buildTimestamp && buildTimestamp !== 'development' 
      ? buildTimestamp 
      : null;
  });
  
  // Toggle the visibility of build info
  const toggleBuildInfo = () => {
    showBuildInfo.value = !showBuildInfo.value;
  };
  
  // Force refresh the page, bypassing cache
  const forceRefresh = () => {
    window.location.reload(true);
  };
  
  return {
    showBuildInfo,
    timestamp,
    toggleBuildInfo,
    forceRefresh
  };
}