import type { Component } from 'vue'
import type { FormContentItem, FormItemType, FormItemWithType } from './types'
import ElMaxFormItem from './form-item.vue'
import ElMaxFormRow from './form-row.vue'
import ElMaxFormGroup from './form-group.vue'

export const ROW_TYPE = 'row'
export const GROUP_TYPE = 'group'

export function getComponentType(formItem: FormContentItem) {
  const { type } = formItem as FormItemWithType
  if (type) {
    const typeMap = new Map<FormItemType, Component>([
      [ROW_TYPE, ElMaxFormRow],
      [GROUP_TYPE, ElMaxFormGroup],
    ])
    return typeMap.get(type)
  }

  return ElMaxFormItem
}
