import { ComponentPropsWithoutRef, ElementType } from 'react'
import s from './input.module.scss'

export type InputProps<T extends ElementType = 'input'> = {
  as?: T
  variant?: 'primary' | 'withIcon' | 'search'
  fullWidth?: boolean
  className?: string
} & ComponentPropsWithoutRef<T>

export const Input = <T extends ElementType = 'input'>(
  props: InputProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof InputProps<T>>
) => {
  const { variant = 'primary', fullWidth, className, as: Component = 'input', ...rest } = props

  return (
    <Component className={`${s[variant]} ${fullWidth ? s.fullWidth : ''} ${className}`} {...rest} />
  )
}
