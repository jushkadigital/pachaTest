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
        // chunkFileNames: 'pages/[name]-[hash].html',
        // entryFileNames: 'pages/[name]-[hash].html',
        assetFileNames: ({name}) => {
 //          if (/\.(gif|jpe?g|png|svg)$/.test(name ?? '')){
 //              return 'assets/images/[name]-[hash][extname]';
 //          }
 //          
          if (/\.html$/.test(name ?? '')) {
              return 'assets/css/[name]-[hash][extname]';   
          }
 // 
          // default value
          // ref: https://rollupjs.org/guide/en/#outputassetfilenames
          return 'assets/[name]-[hash][extname]';
        },
      }
    }
  }
});
