import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  // '/stp26/' matches the GitHub Pages project URL (https://com96-stp.github.io/stp26/).
  // Once a custom domain is configured in repo Settings → Pages, change this back to '/'
  // (a custom domain serves the site from the root).
  base: '/stp26/',
  plugins: [
    tailwindcss(),
    react(),
  ],
})
