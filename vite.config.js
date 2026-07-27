import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// The site is published to https://northstar112.github.io/NAVAX/, so every asset
// URL has to be prefixed with the repo name. GitHub Pages serves the built files
// straight out of the committed `docs/` folder on `main`.
export default defineConfig({
  base: '/NAVAX/',
  plugins: [react()],
  build: {
    outDir: 'docs',
    emptyOutDir: true,
    assetsDir: 'assets',
  },
})
