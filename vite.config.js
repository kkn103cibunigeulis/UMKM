import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path' // Tambahkan ini

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Mengarahkan @ ke folder src
      "@": path.resolve(__dirname, "./src"),
    },
  },
})