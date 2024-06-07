import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Dts from 'vite-plugin-dts'

export default defineConfig({
  build: {
    rollupOptions: {
      external: ['vue'],
      output: [
        {
          format: 'es',
          entryFileNames: '[name].js',
          preserveModules: true,
          exports: 'named',
          dir: './dist/components',
        },
      ],
    },
    lib: {
      entry: './src/index.ts',
    },
  },
  plugins: [
    Vue(),
    Dts({
      root: './',
      entryRoot: './src',
      outDir: './dist/types',
    }),
  ],
})
