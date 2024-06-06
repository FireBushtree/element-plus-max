import { defineConfig } from 'vitepress'
import { demoBlock } from './plugins/demo-block'
import { getHooksSidebar } from './config-helper/sidebar'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Element Plus Max',
  description: 'Help Faster Build App',
  head: [
  ],
  markdown: {
    theme: 'vitesse-dark',
    config(md: any) {
      demoBlock(md)
    },
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
    ],
  },
})
