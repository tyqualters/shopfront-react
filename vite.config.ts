import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { reactRouter } from '@react-router/dev/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), reactRouter()],
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler'
      }
    }
  },
  resolve: {
    tsconfigPaths: true,
    alias: {
    	'@': path.resolve(__dirname, '/app'),
    }
  },
})
