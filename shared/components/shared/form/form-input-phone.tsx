'use client'

import React, { useState, useEffect } from 'react'
import { useFormContext } from 'react-hook-form'
import { Input } from '../../ui'
import { ErrorText } from '../error-text'
import { ClearButton } from '../clear-button'
import { RequiredSymbol } from '../required-symbol'

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string
  label?: string
  required?: boolean
  className?: string
}

export const FormPhoneInput: React.FC<Props> = ({ className, name, label, required, ...props }) => {
  const {
    register,
    setValue,
    formState: { errors },
    watch,
  } = useFormContext()

  const [phone, setPhone] = useState('+380')
  const value = watch(name)
  const errorText = errors[name]?.message as string

  useEffect(() => {
    setValue(name, phone)
  }, [phone, name, setValue])

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value
    if (inputValue.startsWith('+380')) {
      // Ограничиваем длину введенного значения до 12 символов
      const limitedValue = inputValue.slice(0, 12)
      setPhone(limitedValue)
    } else {
      setPhone('+380' + inputValue.slice(0, 8))
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && phone.length <= 4) {
      e.preventDefault()
    }
  }

  const onClickClear = () => {
    setPhone('+380')
  }

  return (
    <div className={className}>
      {label && (
        <p className='font-medium mb-2'>
          {label} {required && <RequiredSymbol />}
        </p>
      )}

      <div className='relative'>
        <Input
          className='h-10 text-md dark:bg-[#121212] dark:border-[#1e293b] dark:border-2'
          value={phone}
          onChange={handlePhoneChange}
          onKeyDown={handleKeyDown}
          {...props}
        />

        {value && <ClearButton onClick={onClickClear} />}
      </div>

      {errorText && <ErrorText text={errorText} className='mt-2' />}
    </div>
  )
}
