import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { VitePWA } from 'vite-plugin-pwa';

const basePath = process.env.NODE_ENV === 'production' ? '/website/' : '/';

export default defineConfig({
    base: basePath,
    plugins: [
        vue(),
        VitePWA(),
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
        },
    },
});