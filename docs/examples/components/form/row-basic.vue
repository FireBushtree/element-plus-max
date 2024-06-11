<script setup lang="ts">
import type { FormRowItem } from 'element-plus-max'
import { ElMaxForm } from 'element-plus-max'
import { ElInput } from 'element-plus'

const content: FormRowItem[] = [
  {
    type: 'row',
    items: [
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
    ],
  },
]
</script>

<template>
  <ElMaxForm label-position="top" :content="content" />
</template>
