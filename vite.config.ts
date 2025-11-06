import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  base: '/',
  plugins: [
    react(),
    tailwindcss(),
  ],
  server: {
    fs: {
      allow: ['..']
    }
  },
  build: {
    target: 'es2015',
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    minify: 'esbuild',
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split('.');
          const extType = info[info.length - 1];
          if (/\.(png|jpe?g|svg|gif|tiff|bmp|ico)$/i.test(assetInfo.name)) {
            return `images/[name].[ext]`;
          }
          if (/\.(css)$/i.test(assetInfo.name)) {
            return `css/[name].[ext]`;
          }
          return `assets/[name].[ext]`;
        },
        chunkFileNames: 'js/[name].js',
        entryFileNames: 'js/[name].js'
      }
    }
  },
});
