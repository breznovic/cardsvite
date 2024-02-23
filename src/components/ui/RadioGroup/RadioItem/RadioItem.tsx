import React, { ComponentPropsWithoutRef } from 'react'

import { Typography } from '@/components/ui/Typography'
import * as RadioGroupRadix from '@radix-ui/react-radio-group'

import s from '@/components/ui/RadioGroup/RadioGroup.module.scss'

type Props = React.InputHTMLAttributes<HTMLInputElement> &
  ComponentPropsWithoutRef<typeof RadioGroupRadix.Item> & {
    label: string
    value: number | string
  }

export const RadioItem = React.forwardRef(
  ({ disabled, isRadioGroupDisabled, label, value, ...rest }: Props, ref) => {
    return (
      <div style={{ alignItems: 'center', display: 'flex' }}>
        <RadioGroupRadix.Item
          className={s.RadioGroupItem}
          disabled={disabled}
          id={value}
          {...rest}
          ref={ref}
          value={value}
        >
          <RadioGroupRadix.Indicator className={s.RadioGroupIndicator} />
        </RadioGroupRadix.Item>

        <Typography
          as={'label'}
          className={`${s.Label} ${disabled || isRadioGroupDisabled ? s.LabelDisabled : ''}`}
          htmlFor={value}
          variant={'body2'}
        >
          {label}
        </Typography>
      </div>
    )
  }
)
