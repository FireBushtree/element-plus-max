import type { Plugin } from 'vite'
import MagicString from 'magic-string'
import type { ImportSpecifier } from 'es-module-lexer'
import { init, parse } from 'es-module-lexer'

// options
const lib = 'element-plus-max'
const useSource = false
const prefix = 'ElMax'
const ignoreComponents: string[] = []

const hyphenateRE = /\B([A-Z])/g
function hyphenate(str: string) {
  return str.replaceAll(hyphenateRE, '-$1').toLowerCase()
}

const multilineCommentsRE = /\/\*\s(.|[\n\r])*?\*\//g
const singlelineCommentsRE = /\/\/\s.*/g

function stripeComments(code: string) {
  return code
    .replaceAll(multilineCommentsRE, '')
    .replaceAll(singlelineCommentsRE, '')
}

export function ImportStyle(): Plugin {
  return {
    name: 'import-style',
    enforce: 'post',
    transform(source) {
      transformStyle(source)
    },
  }
}

async function transformStyle(source: string) {
  if (!source)
    return

  await init

  const [imports] = parse(source)
  const specifiers = imports.filter(({ n }) => {
    return (
      n === lib || n === `${lib}/es/components`
    )
  })

  if (specifiers.length === 0)
    return

  const styleImports = specifiers
    .map((s) => {
      const ret = transformImportStyle(s, source)
      return ret
    })
    .filter(s => s)
    .join('\n')

  const lastSpecifier = specifiers.at(-1)!

  const s = new MagicString(source)
  s.appendLeft(lastSpecifier.se + 1, `\n${styleImports}\n`)

  return {
    code: s.toString(),
    get map() {
      return s.generateMap({ hires: true, includeContent: true })
    },
  }
}

function transformImportStyle(
  specifier: ImportSpecifier,
  source: string,
) {
  const statement = stripeComments(source.slice(specifier.ss, specifier.se))
  const leftBracket = statement.indexOf('{')
  if (leftBracket > -1) {
    // remove { } to get raw imported items. Maybe this will fail since there could be
    // special cases
    const identifiers = statement.slice(leftBracket + 1, statement.indexOf('}'))
    const components = identifiers.split(',')
    const styleImports: string[] = []
    components.forEach((c) => {
      const trimmed = c.replace(/\sas\s.+/, '').trim()
      if (trimmed.startsWith(prefix)) {
        const component = trimmed.slice(prefix.length)
        if (ignoreComponents.includes(component))
          return
        if (useSource) {
          styleImports.push(
            `import '${lib}/es/components/${hyphenate(
              component,
            )}/style/index'`,
          )
        }
        else {
          styleImports.push(
            `import '${lib}/es/components/${hyphenate(
              component,
            )}/style/css'`,
          )
        }
      }
    })
    return styleImports.join('\n')
  }
}
