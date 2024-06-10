<script setup lang="ts">
import { ElForm } from 'element-plus'
import { toRefs, toValue } from 'vue'
import { getComponentType } from './helper'
import type { FormProps } from './types'

const props = withDefaults(defineProps<FormProps>(), {
  content: () => [],
})

const { content, ...elFormProps } = toRefs(props)
</script>

<template>
  <ElForm class="el-max-form" v-bind="(elFormProps)">
    <template v-for="item in content" :key="item.id">
      <component :is="getComponentType(item)" v-bind="item" />
    </template>
  </ElForm>
</template>
