import type { ElMaxListPageProps } from './types'

export const elMaxListPageDefaultProps: ElMaxListPageProps = {
  hasSearchForm: true,
  searchForm: [],
  hasNew: true,
  hasEdit: true,
  hasView: true,
  hasDelete: true,
  newText: '新增',
  editText: '修改',
  viewText: '查看',
  deleteText: '删除',
}
