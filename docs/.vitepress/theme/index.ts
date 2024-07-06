import DefaultTheme from 'vitepress/theme'

// element-plus
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

// custom-demo
import { globals } from '../vitepress'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // 注册自定义全局组件
    app.use(ElementPlus, { locale: zhCn })

    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
      app.component(key, component)
    }

    globals.forEach(([name, Comp]) => {
      app.component(name, Comp)
    })
  },
}
