import { defineConfig } from 'vite'
import utools, { BuildMode } from '@qc2168/vite-plugin-utools'
import vue from '@vitejs/plugin-vue'
import pkg from './package.json'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const isServe = command === 'serve'
  const isBuild = command === 'build'
  return {
    base: './',
    plugins: [
      vue(),
      utools({
        entry: [
          {
            entry: 'utools/preload.ts',
            // 是否忽略打包第三方依赖
            mode: isBuild ? BuildMode.ExcludeDependencies : BuildMode.IncludeDependencies
          }
        ],
        hmr: true,
      })
    ],
    server: {
      host: pkg.env.VITE_DEV_SERVER_HOST,
      port: pkg.env.VITE_DEV_SERVER_PORT,
    },
  }
})
