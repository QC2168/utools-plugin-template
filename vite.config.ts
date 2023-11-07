import { defineConfig} from 'vite'
import utools from 'vite-plugin-utools'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [vue(), utools([{ entry: './utools/preload.js' }, { entry: './utools/main.js' }])],
})
