// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    // Directorio de salida
    outDir: 'dist',
    // Opciones de Rollup
    rollupOptions: {
      // Configurar los fragmentos manuales
      output: {
        chunkFileNames: 'pages/[name]-[hash].html',
        entryFileNames: 'pages/[name]-[hash].html',
      }
    }
  }
});
