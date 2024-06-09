import path from 'node:path'
import fs from 'node:fs'
import MarkdownIt from 'markdown-it'
import mdContainer from 'markdown-it-container'
import type Token from 'markdown-it/lib/token.mjs'
import type Renderer from 'markdown-it/lib/renderer.mjs'

const localMd = MarkdownIt()

interface ContainerOpts {
  marker?: string | undefined
  validate?: (params: string) => boolean
  render?: (tokens: Token[], index: number, options: any, env: any, self: Renderer) => string
}

// eslint-disable-next-line regexp/no-super-linear-backtracking
const reg = /^demo\s*(.*)$/

export function demoBlock(md: MarkdownIt) {
  md.use(mdContainer, 'demo', {
    validate(params) {
      return !!params.trim().match(reg)
    },

    render(tokens, idx) {
      const m = tokens[idx].info.trim().match(reg)
      if (tokens[idx].nesting === 1 /* means the tag is opening */) {
        const description = m && m.length > 1 ? m[1] : ''
        const sourceFileToken = tokens[idx + 2]
        let source = ''
        const sourceFile = sourceFileToken.children?.[0].content ?? ''

        if (sourceFileToken.type === 'inline') {
          const _path = path.resolve(__dirname, '../../examples', `${sourceFile}.vue`)
          source = fs.readFileSync(_path, 'utf-8')
        }

        if (!source) {
          throw new Error(`Incorrect source file: ${sourceFile}`)
        }
        return `<Demo :demos="demos" source="${encodeURIComponent(source)}" path="${sourceFile}" raw-source="${encodeURIComponent(
          source,
        )}" description="${encodeURIComponent(localMd.render(description))}">`
      }
      else {
        return '</Demo>'
      }
    },
  } as ContainerOpts)
}
