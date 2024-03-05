import { ComponentPropsWithoutRef } from 'react'
import { FieldValues, UseControllerProps, useController } from 'react-hook-form'
import { Input } from '../Input/input'

type Props<T extends FieldValues> = UseControllerProps<T> & ComponentPropsWithoutRef<typeof Input>

export const TextField = <T extends FieldValues>({
  control,
  defaultValue,
  disabled,
  isError,
  label,
  name,
  rules,
  shouldUnregister,
  ...rest
}: Props<T>) => {
  const {
    field: { onBlur, onChange, value },
  } = useController({
    control,
    defaultValue,
    disabled,
    name,
    rules,
    shouldUnregister,
  })

  return (
    <Input
      {...rest}
      isError={isError}
      label={label}
      name={name}
      onBlur={onBlur}
      onChange={onChange}
      value={value}
    />
  )
}
