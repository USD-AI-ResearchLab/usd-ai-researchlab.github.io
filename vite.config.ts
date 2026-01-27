import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tailwindcss from '@tailwindcss/vite';

// Advanced configuration for maximum performance across all devices
export default defineConfig({
  base: '/',
  server: {
    hmr: {
      overlay: false
    }
  },
  plugins: [
    react(),
    tailwindcss(),
  ],
  build: {
    outDir: 'dist',
    sourcemap: false,
    target: ['es2019', 'chrome64', 'firefox67', 'safari12'], // Better browser support
    minify: 'terser',
    cssMinify: true,
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.warn'],
        unsafe_arrows: true,
        unsafe_methods: true,
        passes: 3, // Multiple compression passes for smaller bundles
      },
      mangle: {
        safari10: true, // Better Safari compatibility
      },
    },
    rollupOptions: {
      output: {
        manualChunks: {
          // Core React packages
          'react-vendor': ['react', 'react-dom'],
          // Router
          'react-router': ['react-router-dom'],
          // Animations - split further for mobile
          'animations': ['framer-motion'],
        },
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name!.split('.');
          const ext = info[info.length - 1];
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(ext)) {
            return `assets/images/[name]-[hash][extname]`;
          }
          if (/woff2?|eot|ttf|otf/i.test(ext)) {
            return `assets/fonts/[name]-[hash][extname]`;
          }
          if (/css/i.test(ext)) {
            return `assets/css/[name]-[hash][extname]`;
          }
          return `assets/[name]-[hash][extname]`;
        },
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js'
      }
    },
    chunkSizeWarningLimit: 400, // Smaller chunks for mobile
    assetsInlineLimit: 1024, // Smaller inline limit for mobile performance
  },
  optimizeDeps: {
    include: [
      'react', 
      'react-dom', 
      'react-router-dom', 
      'framer-motion',
      'react/jsx-runtime'
    ],
    force: true
  },
  esbuild: {
    // Remove unused imports automatically
    treeShaking: true,
  }
});
