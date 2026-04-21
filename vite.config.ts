import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import Sitemap from 'vite-plugin-sitemap';
import type { UserConfig } from 'vite-ssg';

export default defineConfig({
  base: '/',
  define: {
    'import.meta.env.VITE_BUILD_TIMESTAMP': JSON.stringify(
      process.env.VITE_BUILD_TIMESTAMP || new Date().toISOString()
    ),
  },
  plugins: [
    vue(),
    Sitemap({
      hostname: 'https://iamtommetcalfe.com',
      dynamicRoutes: [
        '/about/',
        '/projects/',
        '/writing/',
        '/writing/wearing-every-hat/',
        '/writing/ai-adoption-small-teams/',
        '/writing/early-stage-engineering-culture/',
      ],
      trailingSlash: true,
      outDir: 'dist',
    }),
    // Temporarily disabled VitePWA due to build issues
    // VitePWA({
    //   registerType: 'autoUpdate',
    //   workbox: {
    //     globPatterns: ['**/*.{js,css,html,ico,png,svg,webp,jpg,jpeg,json,xml}'],
    //     cleanupOutdatedCaches: true,
    //     skipWaiting: true,
    //     clientsClaim: true,
    //     // Add build timestamp to cache name to force cache invalidation
    //     cacheId: 'iamtommetcalfe-' + (process.env.VITE_BUILD_TIMESTAMP || Date.now()),
    //   },
    //   // Add manifest options
    //   manifest: {
    //     name: 'Tom Stirrop-Metcalfe',
    //     short_name: 'iamtommetcalfe.com',
    //     theme_color: '#384452',
    //     icons: [
    //       {
    //         src: '/images/apple-touch-icon.png',
    //         sizes: '192x192',
    //         type: 'image/png',
    //       },
    //     ],
    //   },
    // }),
  ],
  ssgOptions: {
    script: 'async',
    formatting: 'minify',
    crittersOptions: {
      // Enable CSS inlining for critical path CSS
      preload: 'js-lazy',
      inlineFonts: true,
    },
    dirStyle: 'nested', // Generate /about/index.html instead of /about.html
  } as UserConfig['ssgOptions'],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    // Enable content hashing for better cache control
    rollupOptions: {
      output: {
        entryFileNames: 'assets/[name].[hash].js',
        chunkFileNames: 'assets/[name].[hash].js',
        assetFileNames: 'assets/[name].[hash].[ext]',
      },
    },
  },
});
