import DefaultTheme from 'vitepress/theme'

// element-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

// custom-demo
import { globals } from '../vitepress'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // 注册自定义全局组件
    app.use(ElementPlus)

    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
      app.component(key, component)
    }

    globals.forEach(([name, Comp]) => {
      app.component(name, Comp)
    })
  },
}
