import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/_tests_/setup.ts'
  },
  server: {
    port: 3001,
    open: false,
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        secure: false,
        changeOrigin: true
      }
    }
  }
})
