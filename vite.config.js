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
    }
  }
});
