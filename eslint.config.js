// eslint.config.js
import antfu from '@antfu/eslint-config'

export default antfu({
  rules: {
    'curly': ['error', 'all'],
    'node/prefer-global/process': 'off',
  },
})