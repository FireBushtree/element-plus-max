import path from 'node:path'
import { build, defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Dts from 'vite-plugin-dts'
import { componentsPath } from '@element-plus-max/shared/path'

export function buildComponents() {
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
            dir: path.resolve(componentsPath, './dist'),
          },
        ],
      },
      lib: {
        entry: path.resolve(componentsPath, './src/index.ts'),
      },
    },
    plugins: [
      Vue(),
      Dts({
        root: componentsPath,
        entryRoot: path.resolve(componentsPath, './src'),
        outDir: path.resolve(componentsPath, './dist/types'),
      }),
    ],
  })

  console.log(config)
  build(config)
}
