import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@utils': path.resolve(__dirname, './src/utils'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
      '@partials': path.resolve(__dirname, './src/styles/partials'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        // Use the alias defined in `resolve.alias` inside SCSS
        additionalData: `@use "@partials/mixins" as *; @use "@partials/variables" as *;`,
      },
    },
  },
});
