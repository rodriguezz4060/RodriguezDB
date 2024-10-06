'use client'

import React, { useEffect } from 'react'
import { useFormContext } from 'react-hook-form'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './../../ui/select'
import { RequiredSymbol } from '../required-symbol'
import { ErrorText } from '../error-text'

interface FormSelectProps extends React.InputHTMLAttributes<HTMLSelectElement> {
  name: string
  label: string
  required?: boolean
  children: React.ReactNode
  className?: string
}

export const FormSelect: React.FC<FormSelectProps> = ({
  name,
  label,
  required = false,
  children,
  className,
}) => {
  const {
    register,
    setValue,
    watch,
    formState: { errors },
  } = useFormContext()
  const selectedValue = watch(name)
  const errorText = errors[name]?.message as string

  useEffect(() => {
    if (selectedValue !== undefined && selectedValue !== '') {
      setValue(name, Number(selectedValue)) // Преобразуем значение в число, если оно не пустое
    } else {
      setValue(name, undefined) // Устанавливаем значение в undefined, если оно пустое
    }
  }, [selectedValue, name, setValue])

  return (
    <div className={className}>
      {label && (
        <p className='font-medium mb-2'>
          {label} {required && <RequiredSymbol />}
        </p>
      )}

      <div className='relative'>
        <div {...register(name, { required })}>
          <Select
            onValueChange={value => setValue(name, value === '' ? undefined : Number(value))}
            value={selectedValue}
          >
            <SelectTrigger className='h-10 text-md dark:bg-[#121212] dark:border-[#1e293b] dark:border-2'>
              <SelectValue placeholder={label} />
            </SelectTrigger>
            <SelectContent>
              {React.Children.map(children, child => {
                if (React.isValidElement(child) && child.type === 'option') {
                  return (
                    <SelectItem key={child.props.value} value={child.props.value}>
                      {child.props.children}
                    </SelectItem>
                  )
                }
                return null
              })}
            </SelectContent>
          </Select>
        </div>
      </div>

      {errorText && <ErrorText text={errorText} className='mt-2' />}
    </div>
  )
}
