<script setup lang="ts">
import { ElMaxForm } from '@element-plus-max/components'
import { ElButton, ElTable, ElTableColumn } from 'element-plus'
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
  columns: () => [],
})

function search() {}

function resetSearch() {}
</script>

<template>
  <div class="el-max-list-page">
    <div v-if="hasSearchForm" class="el-max-list-page__filter">
      <ElMaxForm label-position="top" :content="searchForm">
        <template #filterButton>
          <div class="el-max-list-page__filter__action">
            <ElButton class="search-button" type="primary" @click="search">
              查询
            </ElButton>
            <ElButton class="reset-button" @click="resetSearch">
              重置
            </ElButton>
          </div>
        </template>
      </ElMaxForm>
    </div>

    <div class="el-max-list-page__body">
      <ElButton v-if="hasNew" class="el-max-list-page__body__button" type="primary">
        {{ newText }}
      </ElButton>

      <ElTable>
        <ElTableColumn v-for="column in columns" :key="column.id" v-bind="column" />
        <ElTableColumn label="操作" />
      </ElTable>
    </div>
  </div>
</template>
