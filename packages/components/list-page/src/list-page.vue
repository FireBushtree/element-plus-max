<script setup lang="ts">
import type { ElMaxListPageProps } from './types'

defineOptions({
  name: 'ElMaxListPage',
})

withDefaults(defineProps<ElMaxListPageProps>(), {
  hasSearchForm: true,
  searchForm: () => [],
  hasNew: true,
  hasEdit: true,
  hasView: true,
  hasDelete: true,
  newText: '新增',
  editText: '修改',
  viewText: '查看',
  deleteText: '删除',
})
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
