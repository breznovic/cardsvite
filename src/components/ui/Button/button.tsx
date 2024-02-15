import { ComponentPropsWithoutRef, ElementType } from 'react'

import s from './button.module.scss'

export type ButtonProps<T extends ElementType = 'button'> = {
  as?: T
  fullWidth?: boolean
  variant?: 'default' | 'link' | 'primary' | 'secondary'
} & ComponentPropsWithoutRef<T>

export const Button = <T extends ElementType = 'button'>(props: ButtonProps<T>) => {
  const {
    as: Component = 'button',
    className,
    disabled,
    fullWidth,
    variant = 'default',
    ...rest
  } = props
  const isDisabled = disabled && (Component === 'a' || Component === 'button')

  return (
    <Component
      className={`${s.button} ${s[variant]} ${fullWidth ? s.fullWidth : ''} ${className} ${isDisabled ? s.disabledLink : ''}`}
      {...rest}
      disabled={isDisabled && Component === 'button' ? true : undefined}
    />
  )
}
