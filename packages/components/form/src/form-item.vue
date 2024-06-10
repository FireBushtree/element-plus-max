<script setup lang="ts">
import { ElFormItem } from 'element-plus'
import type { FormItem } from './types'

defineProps<FormItem>()
</script>

<template>
  <ElFormItem class="el-max-form-item" :label="label" :rules="[]">
    <component :is="component" v-bind="el" />
  </ElFormItem>
</template>
