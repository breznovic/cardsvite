import * as CheckboxRadix from '@radix-ui/react-checkbox'
import * as LabelRadix from '@radix-ui/react-label'
import s from './checkbox.module.scss'
import checkboxChecked from '../../../assets/images/CheckBox/checked.svg'
import checkboxDisabledChecked from '../../../assets/images/CheckBox/disableChecked.svg'
import { Typography } from '../Typography'

export type CheckBoxProps = {
  checked: boolean
  onChange: (checked: boolean) => void
  disabled?: boolean
  label?: string
  id: string
  className?: string
}

export const CheckBox: React.FC<CheckBoxProps> = ({
  checked,
  onChange,
  disabled,
  label,
  id,
  className,
}) => {
  const classLabel = disabled ? s.label + ' ' + s.disabled : s.label
  const classButtonWrapper = disabled ? s.buttonWrapper + ' ' + s.disabled : s.buttonWrapper

  return (
    <LabelRadix.Root className={`${classLabel} ${className}`}>
      <div className={classButtonWrapper}>
        <CheckboxRadix.Root
          className={s.root}
          checked={checked}
          onCheckedChange={() => onChange(!checked)}
          disabled={disabled}
          id={id}
        >
          <CheckboxRadix.Indicator className={s.indicator}>
            <img src={disabled ? checkboxDisabledChecked : checkboxChecked} />
          </CheckboxRadix.Indicator>
        </CheckboxRadix.Root>
      </div>
      <Typography variant="body2">{label}</Typography>
    </LabelRadix.Root>
  )
}
