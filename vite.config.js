import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath, URL } from 'node:url';

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  plugins: [react()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL('./src', import.meta.url)),
      "@components": fileURLToPath(new URL('./src/components', import.meta.url)),
      "@utils": fileURLToPath(new URL('./src/utils', import.meta.url)),
      "@hooks": fileURLToPath(new URL('./src/hooks', import.meta.url)),
      "@partials": fileURLToPath(new URL('./src/styles/partials', import.meta.url)),
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
  build: {
    // Build optimizations for better performance and SEO
    target: 'es2015', // Support older browsers
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false, // Disable sourcemaps in production for security
    minify: 'terser', // Use terser for better minification
    terserOptions: {
      compress: {
        drop_console: true, // Remove console.log in production
        drop_debugger: true, // Remove debugger statements
      },
    },
    rollupOptions: {
      output: {
        // Optimize chunk splitting for better caching
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          icons: ['react-icons', 'lucide-react'],
        },
        // Optimize asset naming for better caching
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split('.');
          const ext = info[info.length - 1];
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(ext)) {
            return `assets/images/[name]-[hash][extname]`;
          }
          if (/css/i.test(ext)) {
            return `assets/css/[name]-[hash][extname]`;
          }
          return `assets/[name]-[hash][extname]`;
        },
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
      },
    },
    // Enable chunk size warnings
    chunkSizeWarningLimit: 1000,
  },
  // Development server optimizations
  server: {
    port: 3000,
    open: true,
    cors: true,
  },
  // Preview server for testing production build
  preview: {
    port: 4173,
    open: true,
  },
});
