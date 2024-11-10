import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // Use a relative base path to avoid path issues
  build: {
    outDir: 'dist',   // Output directory for Netlify
    assetsDir: 'assets', // Directory for bundled files
  },
})
