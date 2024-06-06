import 'normalize.css'
import type { Component } from 'vue'
import 'element-plus/theme-chalk/dark/css-vars.css'

import VPDemo from './components/vp-demo.vue'

export const globals: [string, Component][] = [
  ['Demo', VPDemo],
]
