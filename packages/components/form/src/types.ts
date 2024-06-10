import type { Component } from 'vue'
import type { FormProps as ElFormProps } from 'element-plus'

export type FormItemType = 'row' | 'group'

export interface FormItem<T = any> {
  label: string
  id: string
  component: Component
  el?: T
}

export interface FormItemWithType<T = any> {
  type: FormItemType
  items: FormItem<T>
}

export type FormContentItem<T = any> = FormItem<T> | FormItemWithType<T>

export type FormContent<T = any> = Array<FormContentItem<T>>

export interface FormProps extends Partial<ElFormProps> {
  content: FormContent
}
