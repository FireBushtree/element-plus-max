<script setup lang="ts">
import { ElForm } from 'element-plus'
import { getComponentType } from './helper'
import type { FormProps } from './types'

defineOptions({
  name: 'ElMaxForm',
})

const props = withDefaults(defineProps<FormProps>(), {
  content: () => [],
})
</script>

<template>
  <ElForm class="el-max-form" v-bind="props">
    <template v-for="item in content" :key="item.id">
      <component :is="getComponentType(item)" v-bind="item" />
    </template>
  </ElForm>
</template>
