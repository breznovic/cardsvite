import { ComponentPropsWithoutRef, ReactNode, forwardRef } from 'react'

import { Close } from '@/components/ui/Text-field/Close'
import { Password } from '@/components/ui/Text-field/Password'
import { Search } from '@/components/ui/Text-field/Search'
import { Typography } from '@/components/ui/Typography'
import { clsx } from 'clsx'

import s from './Text-field.module.scss'

export type TextFieldProps = {
  error?: boolean
  errorMessage?: string
  iconEye?: ReactNode
  iconSearch?: ReactNode
  label?: string
  password?: boolean
  search?: boolean
  value?: string
} & ComponentPropsWithoutRef<'input'>

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  (
    {
      className,
      error,
      errorMessage,
      iconEye,
      iconSearch,
      label,
      password,
      placeholder,
      search,
      type = 'text',
      ...rest
    },
    ref
  ) => {
    if (search) {
      iconSearch = <Search />
    }
    if (password) {
      iconEye = <Password />
    }
    const showError = errorMessage && errorMessage.length > 0
    const isShowCloseButton = rest.value?.length! > 0
    const classNames = {
      btnIconEnd: clsx(s.iconEnd),
      btnIconStart: clsx(s.iconStart),
      error: clsx(s.inputContainer, s.error),
      input: clsx(s.input, showError && s.error),
      root: clsx(s.box, className),
    }

    const dataIconStart = iconSearch ? 'start' : ''
    const dataIconEnd = iconEye || isShowCloseButton ? 'end' : ''
    const dataIcon = dataIconStart + dataIconEnd

    return (
      <div className={classNames.root}>
        <Typography as={'label'} className={s.label} variant={'body1'}>
          {label}
        </Typography>
        <div className={s.inputContainer}>
          {!!iconSearch && <button className={classNames.btnIconStart}>{iconSearch}</button>}

          {!!iconEye && <button className={classNames.btnIconEnd}>{iconEye}</button>}
          <input
            {...rest}
            className={classNames.input}
            data-icon={dataIcon}
            disabled={rest.disabled}
            placeholder={placeholder}
            ref={ref}
            type={type}
          />
          {isShowCloseButton && (
            <button type={'button'}>{<Close className={s.iconClose} />}</button>
          )}
          {showError && (
            <Typography as={'span'} className={classNames.error} variant={'caption'}>
              {errorMessage}
            </Typography>
          )}
        </div>
      </div>
    )
  }
)
