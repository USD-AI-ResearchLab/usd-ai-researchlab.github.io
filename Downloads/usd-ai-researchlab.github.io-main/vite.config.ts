import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  base: '/',
  publicDir: 'public',
  plugins: [
    react(),
    tailwindcss(),
  ],
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    sourcemap: false, // Disable sourcemaps for production
    minify: 'esbuild', // Use esbuild for faster builds
    target: 'es2015', // Better browser compatibility
    rollupOptions: {
      output: {
        // Force new hashes to break cache
        assetFileNames: 'assets/[name]-[hash]-v3[extname]',
        chunkFileNames: 'assets/[name]-[hash]-v3.js',
        entryFileNames: 'assets/[name]-[hash]-v3.js',
        // Optimize chunk splitting
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          ui: ['framer-motion', 'boxicons'],
        }
      }
    },
    // Optimize build performance
    chunkSizeWarningLimit: 1000,
  },
  // Optimize dev server
  server: {
    host: true,
    port: 5173
  },
  // Optimize preview
  preview: {
    host: true,
    port: 4173
  }
});
