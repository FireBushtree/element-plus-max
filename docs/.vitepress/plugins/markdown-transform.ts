import type { Plugin } from 'vite'

type Append = Record<'headers' | 'footers' | 'scriptSetups', string[]>

export function MarkdownTransform(): Plugin {
  return {
    name: 'markdown-transform',

    enforce: 'pre',

    async buildStart() {
    },

    async transform(code, id) {
      if (
        !id.endsWith('.md')
        || id.endsWith('index.md')
      ) {
        return
      }

      const match = /docs\/((?:\w+\/)*\w+)/i.exec(id)
      if (!match) {
        return
      }
      const folder = match[1]
      const folderDeep = folder.split('/').length - 1
      const append: Append = {
        headers: [],
        footers: [],
        scriptSetups: [
          `const demos = import.meta.glob('${'../'.repeat(folderDeep)}examples/${folder}/*.vue', { eager: true })`,
        ],
      }

      return combineMarkdown(
        code,
        [combineScriptSetup(append.scriptSetups), ...append.headers],
        append.footers,
      )
    },
  }
}

function combineScriptSetup(codes: string[]) {
  return `\n<script setup>
${codes.join('\n')}
</script>
`
}

function combineMarkdown(code: string, headers: string[], footers: string[]) {
  const frontmatterEnds = code.indexOf('---\n\n')
  const firstHeader = code.search(/\n#{1,6}\s.+/)
  const sliceIndex
    = firstHeader < 0
      ? frontmatterEnds < 0
        ? 0
        : frontmatterEnds + 4
      : firstHeader

  if (headers.length > 0) {
    code
      = code.slice(0, sliceIndex) + headers.join('\n') + code.slice(sliceIndex)
  }
  code += footers.join('\n')

  return `${code}\n`
}
