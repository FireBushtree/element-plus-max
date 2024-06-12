<script setup lang="ts">
import { elMaxListPageDefaultProps } from './helper'
import type { ElMaxListPageProps } from './types'

defineOptions({
  name: 'ElMaxListPage',
})

withDefaults(defineProps<ElMaxListPageProps>(), elMaxListPageDefaultProps)
</script>

<template>
  <div class="el-max-list-page">
    <div v-if="hasSearchForm" class="el-max-list-page__filter">
      header
    </div>

    <div class="el-ext-list-page__body">
      body
    </div>
  </div>
</template>
