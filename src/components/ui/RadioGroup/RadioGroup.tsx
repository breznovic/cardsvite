import { ComponentPropsWithoutRef } from 'react'
import { RadioItem } from '@/components/ui/RadioGroup/RadioItem/RadioItem'
import * as RadioGroupRadix from '@radix-ui/react-radio-group'
import s from './RadioGroup.module.scss'

export type OptionType = {
  disabled?: boolean
  label: string
  value: string
}

type Props = {
  disabled?: boolean
  onChange: () => void
  options: OptionType[]
} & ComponentPropsWithoutRef<typeof RadioGroupRadix.Root>
export const RadioGroup = ({ disabled, options }: Props) => {
  //Property which disabled all RadioGroups items
  const isRadioGroupDisabled = disabled

  return (
    <RadioGroupRadix.Root
      aria-label={'View radio'}
      className={s.RadioGroupRoot}
      defaultValue={options[0].value}
      disabled={isRadioGroupDisabled}
    >
      {options.map(option => (
        <RadioItem
          disabled={option.disabled}
          isRadioGroupDisabled={isRadioGroupDisabled}
          key={option.value}
          label={option.label}
          value={option.value}
        />
      ))}
    </RadioGroupRadix.Root>
  )
}
