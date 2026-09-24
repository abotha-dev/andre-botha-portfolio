import { defineConfig } from 'vite'
import type { Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// Dev-only mirror of the vercel.json rewrites that give the standalone pages in
// public/work/ clean URLs, so their links work under `npm run dev` too.
// (The Healio password gate is Vercel middleware and does not run locally.)
function standalonePages(): Plugin {
  return {
    name: 'standalone-pages',
    apply: 'serve',
    configureServer(server) {
      server.middlewares.use((req, _res, next) => {
        const m = req.url?.match(/^\/work\/(healio-screens|olay-design-system)\/?(\?.*)?$/)
        if (m) req.url = `/work/${m[1]}.html${m[2] ?? ''}`
        next()
      })
    },
  }
}

export default defineConfig({
  plugins: [react(), tailwindcss(), standalonePages()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
