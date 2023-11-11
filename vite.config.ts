import { defineConfig } from 'vite'
import utools from '@qc2168/vite-plugin-utools'
import vue from '@vitejs/plugin-vue'
import pkg from './package.json'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [vue(),
  utools({
    entry: [
      { entry: './utools/preload.ts' },
      { entry: './utools/main.ts' }
    ],
    pluginJsonPath: './public/plugin.json',
    hmr: true,
    upx: {
      pluginJsonPath: './public/plugin.json',
    }
  })
  ],
  server: {
    host: pkg.env.VITE_DEV_SERVER_HOST,
    port: pkg.env.VITE_DEV_SERVER_PORT,
  },
})
