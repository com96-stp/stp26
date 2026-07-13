import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  // Served from the custom domain root (stopallansia.com), not a GitHub Pages
  // project subpath, so base stays '/'.
  base: '/',
  plugins: [
    tailwindcss(),
    react(),
  ],
})
