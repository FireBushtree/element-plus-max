import type { ElMaxFormContent } from '@element-plus-max/components'
import type { TableColumnCtx } from 'element-plus'

export type ElMaxListPageProps<T = any> = Partial<{
  hasSearchForm: boolean
  searchForm: ElMaxFormContent
  /**
   * 是否有新增按钮
   */
  hasNew: boolean
  /**
   * 是否有编辑按钮
   */
  hasEdit: boolean
  /**
   * 是否有查看按钮
   */
  hasView: boolean
  /**
   * 是否有删除按钮
   */
  hasDelete: boolean

  /**
   * 新增按钮文案
   */
  newText: string
  /**
   * 修改按钮文案
   */
  editText: string
  /**
   * 查看按钮文案
   */
  viewText: string
  /**
   * 删除按钮文案
   */
  deleteText: string

  columns: Partial<TableColumnCtx<T>>[]

  paginationSizes: Array<number>

  paginationSize: number

  paginationLayout: string

  firstPage: number
}>
