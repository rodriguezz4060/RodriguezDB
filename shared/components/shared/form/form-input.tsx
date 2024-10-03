'use client'

import React from 'react'
import { RequiredSymbol } from '../required-symbol'
import { Input } from '../../ui'
import { ErrorText } from '../error-text'
import { ClearButton } from '../clear-button'
import { useFormContext } from 'react-hook-form'

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string
  label?: string
  required?: boolean
  className?: string
}

export const FormInput: React.FC<Props> = ({ className, name, label, required, ...props }) => {
  const {
    register,
    formState: { errors },
    watch,
    setValue,
  } = useFormContext()

  const value = watch(name)
  const errorText = errors[name]?.message as string

  const onClickClear = () => {
    setValue(name, '')
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
          className='h-12 text-md dark:bg-[#121212] dark:border-[#1e293b] dark:border-2'
          {...register(name, { valueAsNumber: props.type === 'number' })}
          {...props}
        />

        {value && <ClearButton onClick={onClickClear} />}
      </div>

      {errorText && <ErrorText text={errorText} className='mt-2' />}
    </div>
  )
}
