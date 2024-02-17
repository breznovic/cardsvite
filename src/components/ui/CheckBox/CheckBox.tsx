import * as CheckboxRadix from '@radix-ui/react-checkbox'
import * as LabelRadix from '@radix-ui/react-label'

import s from './CheckBox.module.scss'

import checkboxChecked from '../../../assets/images/CheckBox/checked.svg'
import checkboxDisabledChecked from '../../../assets/images/CheckBox/disableChecked.svg'
import { Typography } from '../Typography'

export type CheckBoxProps = {
  checked: boolean
  className?: string
  disabled?: boolean
  id: string
  label?: string
  onChange: (checked: boolean) => void
}

export const CheckBox: React.FC<CheckBoxProps> = ({
  checked,
  className,
  disabled,
  id,
  label,
  onChange,
}) => {
  const classLabel = disabled ? s.label + ' ' + s.disabled : s.label
  const classButtonWrapper = disabled ? s.buttonWrapper + ' ' + s.disabled : s.buttonWrapper

  return (
    <LabelRadix.Root className={`${classLabel} ${className}`}>
      <div className={classButtonWrapper}>
        <CheckboxRadix.Root
          checked={checked}
          className={s.root}
          disabled={disabled}
          id={id}
          onCheckedChange={() => onChange(!checked)}
        >
          <CheckboxRadix.Indicator className={s.indicator}>
            <img src={disabled ? checkboxDisabledChecked : checkboxChecked} />
          </CheckboxRadix.Indicator>
        </CheckboxRadix.Root>
      </div>
      <Typography variant={'body2'}>{label}</Typography>
    </LabelRadix.Root>
  )
}
