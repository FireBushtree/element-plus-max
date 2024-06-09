import path from 'node:path'
import { build, defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Dts from 'vite-plugin-dts'
import { rimrafSync } from 'rimraf'
import { dest, parallel, series, src } from 'gulp'
import * as dartSass from 'sass'
import gulpSass from 'gulp-sass'
import autoprefixer from 'gulp-autoprefixer'
import { componentsPath, packagesPath, tsconfigPath } from './path.js'

const sass = gulpSass(dartSass)
const outputDir = path.resolve(componentsPath, './dist/es')

export default series(
  async () => clear(),
  parallel(
    async () => buildStyle(),
    async () => buildComponents(),
  ),
)

export function buildComponents() {
  const config = defineConfig({
    resolve: {
      alias: [
        {
          find: '@element-plus-max',
          replacement: packagesPath,
        },
      ],
    },
    build: {
      emptyOutDir: false,
      rollupOptions: {
        external: ['vue', /\.scss/],
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
        include: [componentsPath],
      }),
    ],
  })

  build(config)
}

function clear() {
  rimrafSync(path.resolve(componentsPath, './dist'))
}

function buildStyle() {
  return src(`${componentsPath}/**/style/**.scss`)
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(dest(`${outputDir}/components`))
}
