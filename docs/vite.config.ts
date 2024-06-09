import path from 'node:path'
import { defineConfig } from 'vite'
// TODO: import from node_modules
import { ImportStyle } from '../packages/plugins'
import { MarkdownTransform } from './.vitepress/plugins/markdown-transform'

const __dirname = path.resolve()

export default defineConfig({
  plugins: [
    MarkdownTransform(),
    ImportStyle(),
  ],
  resolve: {
    alias: [
      {
        find: '@element-plus-max',
        replacement: path.resolve(__dirname, '../packages'),
      },
    ],
  },
})
