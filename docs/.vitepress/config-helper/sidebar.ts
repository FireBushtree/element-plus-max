import fs from 'node:fs'
import path from 'node:path'
import type { DefaultTheme } from 'vitepress'

export function getHooksSidebar() {
  // root folder is '.vitepress'
  const hooksFolder = path.resolve(__dirname, '../../hooks')
  const files = fs.readdirSync(hooksFolder)

  const sideItems: Array<DefaultTheme.SidebarItem> = []
  files.forEach((file) => {
    // ignore home file
    if (file.endsWith('home.md')) {
      return
    }

    // remove suffix
    file = file.replace('.md', '')
    sideItems.push({ text: file, link: `/hooks/${file}` })
  })

  return [
    {
      text: 'Hooks',
      items: sideItems,
    },
  ]
}
