<script setup lang="ts">
import { ElMaxForm } from 'element-plus-max'
import { ElInput } from 'element-plus'

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
</script>

<template>
  <ElMaxForm :content="content" />
</template>
