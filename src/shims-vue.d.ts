declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  const component: DefineComponent<Record<string, never>, Record<string, never>, unknown>;
  export default component;
}

// Declare global properties
declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $buildTimestamp: string;
  }
}

// Declare Vite environment variables
interface ImportMetaEnv {
  readonly VITE_BUILD_TIMESTAMP?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
