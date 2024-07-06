<script setup lang="ts">
import { ElMaxForm } from '@element-plus-max/components'
import { ElButton, ElPagination, ElTable, ElTableColumn } from 'element-plus'
import { ref } from 'vue'
import type { ElMaxListPageProps } from './types'

defineOptions({
  name: 'ElMaxListPage',
})

const props = withDefaults(defineProps<ElMaxListPageProps>(), {
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
  paginationSizes: () => [10, 20, 30, 40, 50],
  paginationSize: 10,
  paginationLayout: 'total, sizes, prev, pager, next, jumper',
  firstPage: 1,
})

// pagination
const total = ref(0)
const page = ref(props.firstPage)
const size = ref(props.paginationSize)

function handleSizeChange() {}
function handleCurrentChange() {}

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

      <ElTable
        :data="[
          { name: '小坤', age: 23, no: '0717' },
          { name: '小坤', age: 23, no: '0717' },
        ]"
      >
        <ElTableColumn v-for="column in columns" :key="column.id" v-bind="column" />
        <ElTableColumn label="操作" />
      </ElTable>

      <div class="el-max-list-page__pagination">
        <ElPagination
          :current-page="page"
          :page-sizes="paginationSizes"
          :page-size="size"
          :total="total"
          :layout="paginationLayout"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
      </div>
    </div>
  </div>
</template>
