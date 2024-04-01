// vite.config.js
import { defineConfig } from 'vite';
import {resolve} from 'path'

export default defineConfig({
  build: {
    // Directorio de salida
    
    outDir: 'dist',
    // Opciones de Rollup
    rollupOptions: {
      // Configurar los fragmentos manuales
      input:{
        main: resolve(__dirname,'index.html'),
        pacha8:resolve(__dirname,'pacha8/index.html')
      },
      output:{
chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        
        assetFileNames: ({name}) => {
          if (/\.(gif|jpe?g|png|svg)$/.test(name ?? '')){
              return 'assets/images/[name]-[hash][extname]';
          }
          
          if (/\.css$/.test(name ?? '')) {
              return 'assets/css/[name]-[hash][extname]';   
          }
 
          // default value
          // ref: https://rollupjs.org/guide/en/#outputassetfilenames
          return 'assets/[name]-[hash][extname]';
        },
      }
    }
  }
});
