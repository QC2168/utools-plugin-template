import { defineConfig } from 'vite'
import utools from '@qc2168/vite-plugin-utools'
import vue from '@vitejs/plugin-vue'
import pkg from './package.json'
import electron from 'vite-plugin-electron'
import { rmSync } from 'node:fs'
import { notBundle } from 'vite-plugin-electron/plugin'



// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  rmSync('dist-electron', { recursive: true, force: true })

  const isServe = command === 'serve'
  const isBuild = command === 'build'
  const isStartElectron = mode === 'electron'
  const sourcemap = isServe || !!process.env.VSCODE_DEBUG
  return {
    base: './',
    plugins: [vue(),
    utools({
      entry: [
        { entry: 'utools/preload.ts' }
      ],
      hmr: {
        pluginJsonPath: './plugin.json'
      },
      upx: {
        pluginJsonPath: './plugin.json',
      }
    }),
    isStartElectron && electron([
      {
        // Main process entry file of the Electron App.
        entry: 'electron/main/index.ts',
        onstart({ startup }) {
          if (process.env.VSCODE_DEBUG) {
            console.log(/* For `.vscode/.debug.script.mjs` */'[startup] Electron App')
          } else {
            startup()
          }
        },
        vite: {
          build: {
            sourcemap,
            minify: isBuild,
            outDir: 'dist-electron/main',
            rollupOptions: {
              // Some third-party Node.js libraries may not be built correctly by Vite, especially `C/C++` addons, 
              // we can use `external` to exclude them to ensure they work correctly.
              // Others need to put them in `dependencies` to ensure they are collected into `app.asar` after the app is built.
              // Of course, this is not absolute, just this way is relatively simple. :)
              external: Object.keys('dependencies' in pkg ? pkg.dependencies : {}),
            },
          },
          plugins: [
            // This is just an option to improve build performance, it's non-deterministic!
            // e.g. `import log from 'electron-log'` -> `const log = require('electron-log')`
            isServe && notBundle(),
          ],
        },
      },
      {
        entry: 'utools/preload.ts',
        onstart({ reload }) {
          // Notify the Renderer process to reload the page when the Preload scripts build is complete,
          // instead of restarting the entire Electron App.
          reload()
        },
        vite: {
          build: {
            sourcemap: sourcemap ? 'inline' : undefined, // #332
            minify: isBuild,
            outDir: 'dist-electron/preload',
            rollupOptions: {
              external: Object.keys('dependencies' in pkg ? pkg.dependencies : {}),
            },
          },
          plugins: [
            isServe && notBundle(),
          ],
        },
      }
    ]),
    ],
    server: {
      host: pkg.env.VITE_DEV_SERVER_HOST,
      port: pkg.env.VITE_DEV_SERVER_PORT,
    },
  }
})
