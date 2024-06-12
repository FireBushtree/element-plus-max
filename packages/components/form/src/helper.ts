import type { Component } from 'vue'
import type {
  ElMaxFormContentItem,
  ElMaxFormItemType,
  ElMaxFormItemWithType,
} from './types'
import ElMaxFormItem from './form-item.vue'
import ElMaxFormRow from './form-row.vue'
import ElMaxFormGroup from './form-group.vue'

export const ROW_TYPE = 'row'
export const GROUP_TYPE = 'group'

export function getComponentType(formItem: ElMaxFormContentItem) {
  const { type } = formItem as ElMaxFormItemWithType
  if (type) {
    const typeMap = new Map<ElMaxFormItemType, Component>([
      [ROW_TYPE, ElMaxFormRow],
      [GROUP_TYPE, ElMaxFormGroup],
    ])
    return typeMap.get(type)
  }

  return ElMaxFormItem
}
