import type { Component } from 'vue'
import type { FormProps as ElFormProps } from 'element-plus'

export type FormItemType = 'row' | 'group'

export interface FormItem<T = any> {
  label: string
  id: string
  component: Component
  el?: T
}

export interface FormRowItem<T = any> {
  type: 'row'
  gutter?: number
  span?: number
  items: Array<{
    span?: number
  } & FormItem<T>>
}

export interface FormGroupItem<T = any> {
  type: 'group'
  items: Array<FormItem<T>>
}

export type FormItemWithType<T = any> = FormRowItem<T> | FormGroupItem<T>
export type FormContentItem<T = any> = FormItem<T> | FormItemWithType<T>
export type FormContent<T = any> = Array<FormContentItem<T>>

export interface FormProps extends Partial<ElFormProps> {
  content: FormContent
}
