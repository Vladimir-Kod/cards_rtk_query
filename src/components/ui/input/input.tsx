import { ChangeEvent, useState } from 'react'

import s from './input.module.scss'

import { EyeIcon, SearchIcon, XIcon } from '@/assets/icons'
import { Typography } from '@/components/ui/typography'

type Props = {
  value?: string
  error?: string
  disabled?: boolean
  password?: boolean
  search?: boolean
}

export const Input = (props: Props) => {
  const { value, error, disabled, password, search } = props
  const [inputValue, setInputValue] = useState('')

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  }

  const handleClearInput = () => {
    setInputValue('')
  }

  return (
    <div className={s.Root}>
      <span>
        <Typography className={disabled ? s.LabelDisabled : s.Label} size={'body2'}>
          {value}
        </Typography>
      </span>
      <div className={s.InputContainer}>
        {search && <SearchIcon className={s.SearchIcon} />}
        <input
          disabled={disabled}
          className={`${error ? s.InputError : s.Input} ${search ? s.WithSearchIcon : ''}`}
          type={password ? 'password' : 'text'}
          placeholder={value}
          onChange={handleInputChange}
          value={inputValue}
        />
        {inputValue && search && (
          <XIcon
            className={`${s.EyeIcon} ${disabled ? s.EyeIconDisabled : ''} ${
              error ? s.ErrorEye : ''
            } ${search ? s.XIcon : ''}`}
            onClick={handleClearInput}
          />
        )}
      </div>
      {password && (
        <EyeIcon
          className={`${s.EyeIcon} ${disabled ? s.EyeIconDisabled : ''} ${error ? s.ErrorEye : ''}`}
        />
      )}
      {/*{search && (*/}
      {/*  <XIcon*/}
      {/*    className={`${s.EyeIcon} ${disabled ? s.EyeIconDisabled : ''} ${error ? s.ErrorEye : ''}`}*/}
      {/*  />*/}
      {/*)}*/}
      <span>
        <Typography className={s.Error} size={'overline'}>
          {error}
        </Typography>
      </span>
    </div>
  )
}
