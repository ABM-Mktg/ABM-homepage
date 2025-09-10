import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { readFileSync } from 'fs'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'v2r396-middleware',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          // Serve the main v2r396 page
          if (req.url === '/v2r396' || req.url === '/v2r396/') {
            try {
              const html = readFileSync(resolve('public/v2r396/index.html'), 'utf-8')
              res.setHeader('Content-Type', 'text/html')
              res.end(html)
            } catch (error) {
              console.error('Error serving v2r396 page:', error)
              next(error)
            }
          } 
          // Serve v2r396 assets (CSS, JS, images, etc.)
          else if (req.url?.startsWith('/v2r396/')) {
            const filePath = req.url
            const fullPath = resolve('public' + filePath)
            try {
              const fileContent = readFileSync(fullPath)
              
              // Set correct content type based on file extension
              const ext = filePath.split('.').pop()?.toLowerCase()
              const contentTypes = {
                'css': 'text/css',
                'js': 'application/javascript',
                'svg': 'image/svg+xml',
                'png': 'image/png',
                'webp': 'image/webp',
                'jpg': 'image/jpeg',
                'jpeg': 'image/jpeg',
                'woff': 'font/woff',
                'woff2': 'font/woff2',
                'ttf': 'font/ttf',
                'eot': 'application/vnd.ms-fontobject'
              }
              
              const contentType = contentTypes[ext] || 'application/octet-stream'
              res.setHeader('Content-Type', contentType)
              res.end(fileContent)
            } catch (error) {
              console.error('Error serving v2r396 asset:', req.url, error.message)
              next()
            }
          } else {
            next()
          }
        })
      }
    }
  ],
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        v2r396: 'public/v2r396/index.html'
      }
    }
  }
})