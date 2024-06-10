<script setup lang="ts">
import { ElMaxForm } from 'element-plus-max'
import { ElInput } from 'element-plus'
import { onMounted, ref } from 'vue'

const content = [
  {
    label: '姓名',
    id: 'name',
    component: ElInput,
    el: { placeholder: '请输入姓名' },
  },
  {
    label: '年龄',
    id: 'age',
    component: ElInput,
    el: { placeholder: '请输入年龄' },
  },
]

const labelWidth = ref('100px')

onMounted(() => {
  setTimeout(() => {
    labelWidth.value = '200px'
  }, 1000)
})
</script>

<template>
  <ElMaxForm :label-width="labelWidth" :content="content" />
</template>
