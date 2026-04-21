import { fileURLToPath, URL } from 'node:url';
import { writeFileSync } from 'node:fs';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
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
    {
      name: 'sitemap',
      closeBundle() {
        const hostname = 'https://iamtommetcalfe.com';
        const routes = [
          '/',
          '/about/',
          '/projects/',
          '/writing/',
          '/writing/ai-adoption-small-teams/',
        ];
        const now = new Date().toISOString();
        const urls = routes
          .map(
            (r) =>
              `  <url><loc>${hostname}${r}</loc><lastmod>${now}</lastmod><changefreq>daily</changefreq><priority>1.0</priority></url>`
          )
          .join('\n');
        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;
        writeFileSync('dist/sitemap.xml', xml);
      },
    },
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
