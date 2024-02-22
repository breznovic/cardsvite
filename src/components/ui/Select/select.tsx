import React, { ComponentPropsWithoutRef, ReactNode } from 'react'

import ArrowDownIcon from '@/assets/images/Select/ArrowDownIcon'
import { SelectItem } from '@/components/ui/Select/selectItem/selectItem'
import * as SelectRadix from '@radix-ui/react-select'

import s from '@/components/ui/Select/select.module.scss'

export type OptionType = { disabled?: boolean; title: string; value: string }

type Props = {
  className?: string
  disabled?: boolean
  label?: string
  onChange?: (value: string) => void
  options: OptionType[]
  placeholder?: ReactNode
  required?: string
  variant: 'default' | 'pagination'
} & ComponentPropsWithoutRef<typeof SelectRadix.Root>
export const Select = ({
  className,
  disabled,
  label,
  onChange,
  options,
  placeholder,
  value,
  variant = 'default',
}: Props) => {
  return (
    <>
      <div className={s.labelWrapper}>
        <label className={`${s.SelectLabel} ${disabled ? s.disabledLabel : ''}`} htmlFor={'select'}>
          {label}
        </label>
      </div>
      <SelectRadix.Root disabled={disabled} onValueChange={onChange} value={value}>
        <SelectRadix.Trigger
          aria-label={'List'}
          className={`${s.SelectTrigger} ${s[variant]} ${disabled ? s.disabledTrigger : ''} }`}
        >
          <SelectRadix.Value
            className={`${disabled ? s.disabledTrigger : ''}`}
            placeholder={placeholder}
          />
          <SelectRadix.Icon className={s.SelectIcon}>
            <ArrowDownIcon color={disabled ? 'var(--color-dark-300)' : 'var(--color-light-100)'} />
          </SelectRadix.Icon>
        </SelectRadix.Trigger>
        <SelectRadix.Portal>
          <SelectRadix.Content
            className={`${s.SelectContent} ${variant === 'pagination' ? s.paginationContent : ''}`}
            position={'popper'}
          >
            <SelectRadix.Viewport className={`${className} ${s.SelectViewport}`} id={'select'}>
              <SelectRadix.Group>
                {options.map(option => (
                  <SelectItem disabled={option.disabled} key={option.value} value={option.value}>
                    {option.title}
                  </SelectItem>
                ))}
              </SelectRadix.Group>
            </SelectRadix.Viewport>
          </SelectRadix.Content>
        </SelectRadix.Portal>
      </SelectRadix.Root>
    </>
  )
}
