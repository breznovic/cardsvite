import { ReactNode, useState } from 'react'

import CloseIcon from '@/assets/images/CloseIcon'
import EyeOffOutlineIcon from '@/assets/images/EyeOffOutlineIcon'
import EyeOutlineIcon from '@/assets/images/EyeOutlineIcon'
import SearchIcon from '@/assets/images/SearchIcon'
import { Button } from '@/components/ui/Button'

import s from './input.module.scss'

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  fullWidth?: boolean
  icon?: ReactNode
  isError?: boolean
  label?: string
}

const Input = ({
  className,
  disabled,
  fullWidth,
  isError,
  label,
  onClick,
  size,
  type,
  ...rest
}: InputProps) => {
  const [value, setValue] = useState('')
  const [reveal, setReveal] = useState(false)

  return (
    <div className={s.inputWrapper}>
      <label className={`${s.inputLabel} ${disabled ? s.disabledLabel : ''}`} htmlFor={'input'}>
        {label}
      </label>
      <div className={`${s.inputContainer} }`}>
        <input
          className={`${s.input} ${className} ${isError ? s.error : ''} ${
            fullWidth ? s.fullWidth : ''
          } ${disabled ? s.disabled : ''} ${type === 'search' ? s.inputSearch : ''} `}
          disabled={disabled}
          id={'input'}
          onChange={e => setValue(e.target.value)}
          placeholder={isError ? 'Error' : 'Input'}
          value={value}
          {...rest}
        />
        {type === 'password' && (
          <div className={s.eyeIcon}>
            <Button className={s.inputIconButton} onClick={() => setReveal(!reveal)}>
              {reveal ? (
                <EyeOffOutlineIcon />
              ) : (
                <EyeOutlineIcon color={disabled ? 'var(--color-dark-300)' : 'white'} />
              )}
            </Button>
          </div>
        )}

        {type === 'search' && (
          <div className={s.searchIcon}>
            <Button className={s.inputSearchButton}>
              <SearchIcon color={disabled ? 'var(--color-dark-300)' : 'white'} />
            </Button>
            {value.length > 0 && (
              <Button className={s.inputCloseButton}>
                <CloseIcon />
              </Button>
            )}
          </div>
        )}
      </div>
      <span className={s.errorText}>{isError ? 'Error!' : ''}</span>
    </div>
  )
}

export default Input
