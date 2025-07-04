import { ref, computed, ComputedRef, Ref } from 'vue';

/**
 * Interface for the return value of the useBuildInfo composable
 *
 * @interface BuildInfoReturn
 * @property {Ref<boolean>} showBuildInfo - Whether to show the build information
 * @property {ComputedRef<string | null>} timestamp - The build timestamp, or null if not available
 * @property {() => void} toggleBuildInfo - Function to toggle the visibility of build information
 * @property {() => void} forceRefresh - Function to force a page refresh, bypassing cache
 */
interface BuildInfoReturn {
  showBuildInfo: Ref<boolean>;
  timestamp: ComputedRef<string | null>;
  toggleBuildInfo: () => void;
  forceRefresh: () => void;
}

/**
 * Composable for managing build information display
 *
 * This composable provides functionality for displaying and managing build information,
 * including the build timestamp and the ability to force a page refresh.
 *
 * @param {string} [buildTimestamp] - The build timestamp from environment variables
 * @returns {BuildInfoReturn} Object containing build information state and functions
 *
 * @example
 * // Basic usage
 * const { showBuildInfo, timestamp, toggleBuildInfo } = useBuildInfo();
 *
 * @example
 * // With build timestamp
 * const { timestamp } = useBuildInfo(import.meta.env.VITE_BUILD_TIMESTAMP);
 */
export function useBuildInfo(buildTimestamp?: string): BuildInfoReturn {
  // State for whether to show the build info
  const showBuildInfo: Ref<boolean> = ref(false);

  // Computed property to get the build timestamp
  const timestamp: ComputedRef<string | null> = computed(() => {
    return buildTimestamp && buildTimestamp !== 'development' ? buildTimestamp : null;
  });

  /**
   * Toggle the visibility of build info
   */
  const toggleBuildInfo = (): void => {
    showBuildInfo.value = !showBuildInfo.value;
  };

  /**
   * Force refresh the page, bypassing cache
   * Only works in browser environment
   */
  const forceRefresh = (): void => {
    // Only run in browser environment
    if (typeof window !== 'undefined') {
      window.location.reload(true);
    }
  };

  return {
    showBuildInfo,
    timestamp,
    toggleBuildInfo,
    forceRefresh,
  };
}
