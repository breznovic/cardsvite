import { RadioGroup, RadioGroupProps } from '@radix-ui/react-radio-group'
import { FieldValues, UseControllerProps, useController } from 'react-hook-form'

export type ControlledRadioGroupProps<T extends FieldValues> = UseControllerProps<T> &
  Omit<RadioGroupProps, 'id' | 'onChange' | 'value'>

export const ControlledRadioGroup = <T extends FieldValues>({
  control,
  defaultValue,
  name,
  rules,
  shouldUnregister,
  ...radioGroupProps
}: ControlledRadioGroupProps<T>) => {
  const { field } = useController({
    control,
    defaultValue,
    name,
    rules,
    shouldUnregister,
  })

  return <RadioGroup {...radioGroupProps} {...field} />
}
