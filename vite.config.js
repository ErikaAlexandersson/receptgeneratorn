import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [
    VitePWA({
      manifest: {
        background_color: 'blue',
        display: 'standalone',
        icons: [
          {
            purpose: 'any',
            sizes: '192x192',
            src: 'manifest-icon-192.maskable.png',
            type: 'image/png'
          },
          {
            purpose: 'maskable',
            sizes: '192x192',
            src: 'manifest-icon-192.maskable.png',
            type: 'image/png'
          },
          {
            purpose: 'any',
            sizes: '512x512',
            src: 'manifest-icon-512.maskable.png',
            type: 'image/png'
          },
          {
            purpose: 'maskable',
            sizes: '512x512',
            src: 'manifest-icon-512.maskable.png',
            type: 'image/png'
          }
        ],
        name: 'Receptgeneratorn',
        short_name: 'Recept',
        start_url: '.',
        theme_color: '#709176'
      },
      registerType: 'autoUpdate',
      workbox: {
        globPatterns: ['assets/**', 'index.html', 'manifest.webmanifest'],
        runtimeCaching: [
          {
            handler: 'NetworkFirst',
            urlPattern: `https://api.edamam.com/api/recipes/v2/?q=chicken&app_id=f316c367&app_key=209131d0c229f629c823bd2904b1b72f&type=public`
          },
          {
            handler: 'NetworkFirst',
            urlPattern:
              '/https://api.edamam.com/api/recipes/v2/?q=([a-zA-Z])+&app_id=f316c367&app_key=209131d0c229f629c823bd2904b1b72f&type=public/g'
          }
        ]
      }
    }),
    vue()
  ]
})
