import { defineConfig } from 'vite';
import { createServer } from 'vite';

export default defineConfig({
  server: {
    // Configuración personalizada del servidor
    middleware: (customMiddleware) => {
      return (req, res, next) => {
        // Obtener la ruta de la solicitud
        const url = req.url;
        
        // Si la solicitud no termina con '.html', enviar una respuesta 404
        if (!url.endsWith('.html')) {
          res.statusCode = 404;
          res.end('Not found');
          return;
        }

        // Llamar a la función `next()` para pasar al siguiente middleware
        next();
      };
    }
  }
});
