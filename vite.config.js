import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  // If you deploy to GitHub Pages at https://<user>.github.io/<repo>/,
  // set base to '/<repo>/'. For a custom domain or user page, keep '/'.
  base: process.env.GITHUB_PAGES === 'true' ? '/Nandikha-Portfolio/' : '/',
  plugins: [react(), tailwindcss()],
  server: {
    host: '0.0.0.0',
    port: 5173,
    allowedHosts: true,
  },
  preview: {
    host: '0.0.0.0',
    port: 4173,
    allowedHosts: true,
  },
})
