import path from 'node:path'
import { build, defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Dts from 'vite-plugin-dts'
import { rimrafSync } from 'rimraf'
import { componentsPath, tsconfigPath } from './path.js'

const outputDir = path.resolve(componentsPath, './dist/es')

export function buildComponents() {
  clear()

  const config = defineConfig({
    build: {
      rollupOptions: {
        external: ['vue'],
        output: [
          {
            format: 'es',
            entryFileNames: '[name].js',
            preserveModules: true,
            exports: 'named',
            dir: outputDir,
          },
        ],
      },
      lib: {
        entry: path.resolve(componentsPath, './index.ts'),
      },
    },
    plugins: [
      Vue(),
      Dts({
        root: componentsPath,
        entryRoot: path.resolve(componentsPath, './'),
        outDir: path.resolve(outputDir, './types'),
        tsconfigPath,
      }),
    ],
  })

  build(config)
}

function clear() {
  rimrafSync(path.resolve(componentsPath, './dist'))
}
