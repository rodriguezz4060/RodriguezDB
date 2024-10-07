'use client'

import React from 'react'
import { useFormContext, Controller } from 'react-hook-form'
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
    control,
    formState: { errors },
  } = useFormContext()

  const errorText = errors[name]?.message as string

  return (
    <div className={className}>
      {label && (
        <p className='font-medium mb-2'>
          {label} {required && <RequiredSymbol />}
        </p>
      )}

      <div className='relative'>
        <Controller
          name={name}
          control={control}
          render={({ field }) => (
            <Select
              onValueChange={value => field.onChange(value === '' ? undefined : Number(value))}
              value={field.value}
            >
              <SelectTrigger className='h-10 text-md dark:bg-[#121212] dark:border-[#1e293b] dark:border-2'>
                <SelectValue placeholder={label} />
              </SelectTrigger>
              <SelectContent>
                {React.Children.map(children, child => {
                  if (React.isValidElement(child)) {
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
          )}
        />
      </div>

      {errorText && <ErrorText text={errorText} className='mt-2' />}
    </div>
  )
}
