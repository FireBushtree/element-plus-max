<script setup lang="ts">
import { ElCol, ElRow } from 'element-plus'
import ElMaxFormItem from './form-item.vue'
import type { ElMaxFormRowItem } from './types'

defineOptions({
  name: 'ElMaxFormRow',
})

defineProps<ElMaxFormRowItem>()
</script>

<template>
  <ElRow :gutter="gutter || 24" class="el-max-form-row">
    <ElCol v-for="(item, index) in items" :key="index" :span="span || item.span || 8">
      <ElMaxFormItem v-bind="item" />
    </ElCol>
  </ElRow>
</template>
