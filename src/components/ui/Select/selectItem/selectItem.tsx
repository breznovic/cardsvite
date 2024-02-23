import React, { ComponentPropsWithoutRef } from 'react'

import * as SelectRadix from '@radix-ui/react-select'

import s from '@/components/ui/Select/select.module.scss'

export type Props = React.SelectHTMLAttributes<HTMLSelectElement> &
  ComponentPropsWithoutRef<typeof SelectRadix.Item>

export const SelectItem = React.forwardRef(
  ({ children, className, disabled, ...rest }: Props, forwardedRef) => {
    return (
      <SelectRadix.Item
        className={`${s.SelectItem} ${className}`}
        disabled={disabled}
        {...rest}
        ref={forwardedRef}
      >
        <SelectRadix.ItemText>{children}</SelectRadix.ItemText>
        <SelectRadix.ItemIndicator className={s.SelectItemIndicator}></SelectRadix.ItemIndicator>
      </SelectRadix.Item>
    )
  }
)
