import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'

const basePath = process.env.NODE_ENV === 'production'
    ? '/website/'
    : '/';

// https://vitejs.dev/config/
export default defineConfig({
  publicPath: basePath,
  plugins: [
      vue(),
      VitePWA()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
