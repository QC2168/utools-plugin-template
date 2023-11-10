import { defineConfig } from 'vite'
import utools from '@qc2168/vite-plugin-utools'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [vue(),
  utools({
    entry: [
      { entry: './utools/preload.js' },
      { entry: './utools/main.js' }],
    upx: {
      pluginJsonPath: './public/plugin.json',
    }
  })
  ],
})
