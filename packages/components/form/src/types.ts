import type { Component } from 'vue'
import type { FormProps as ElFormProps } from 'element-plus'

export type ElMaxFormItemType = 'row' | 'group'

export interface ElMaxFormItem<T = any> {
  label: string
  id: string
  component: Component
  el?: T
}

export interface ElMaxFormRowItem<T = any> {
  type: 'row'
  gutter?: number
  span?: number
  items: Array<{
    span?: number
  } & ElMaxFormItem<T>>
}

export interface ElMaxFormGroupItem<T = any> {
  type: 'group'
  items: Array<ElMaxFormItem<T>>
}

export type ElMaxFormItemWithType<T = any> = ElMaxFormRowItem<T> | ElMaxFormGroupItem<T>
export type ElMaxFormContentItem<T = any> = ElMaxFormItem<T> | ElMaxFormItemWithType<T>
export type ElMaxFormContent<T = any> = Array<ElMaxFormContentItem<T>>

export interface ElMaxFormProps extends Partial<ElFormProps> {
  content: ElMaxFormContent
}
