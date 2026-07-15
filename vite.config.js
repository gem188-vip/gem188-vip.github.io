import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],

  // Root GitHub Pages:
  // https://gem188-vip.github.io/
  base: '/',
})