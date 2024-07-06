<script setup lang="ts">
import type { ElMaxListPageProps } from '@element-plus-max/components'
import { ElInput } from 'element-plus'
import { ElMaxListPage } from 'element-plus-max'

const config: ElMaxListPageProps = {
  searchForm: [{
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
      {
        label: '学号',
        id: 'no',
        component: ElInput,
        el: { placeholder: '请输入学号' },
      },
    ],
  }],
  columns: [
    { label: '姓名', prop: 'name' },
    { label: '年龄', prop: 'age' },
    { label: '学号', prop: 'no' },
  ],
}
</script>

<template>
  <ElMaxListPage v-bind="config" />
</template>
