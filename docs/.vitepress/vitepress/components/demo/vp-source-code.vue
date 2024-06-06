<script setup lang="ts">
import { ref, watch } from 'vue'
import { codeToHtml } from 'shiki'

const props = defineProps({
  source: {
    type: String,
    required: true,
  },
})

const code = ref(props.source)
watch(() => props.source, async (newValue) => {
  const decoded = decodeURIComponent(newValue)
  const html = await codeToHtml(decoded, {
    lang: 'vue',
    theme: 'vitesse-dark',
    transformers: [{
      pre(node) {
        node.properties.class += ' vp-doc'
        delete node.properties.style
      },
    }],
  })
  code.value = html
}, { immediate: true })
</script>

<template>
  <div class="vp-source-code">
    <div class="language-vue">
      <button title="Copy Code" class="copy" />
      <span class="lang">vue</span>
      <div v-html="code" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.vp-source-code {
  .language-vue {
    margin: 0;
    border-radius: 0;
  }
}
</style>
