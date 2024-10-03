'use client'

import React, { useEffect, forwardRef } from 'react'
import { useFormContext } from 'react-hook-form'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './../../ui/select'
import { RequiredSymbol } from '../required-symbol'
import { ErrorText } from '../error-text'

interface FormSelectProps {
  name: string
  label: string
  required?: boolean
  children: React.ReactNode
  className?: string
}

const FormSelectComponent = forwardRef<HTMLSelectElement, FormSelectProps>(
  ({ name, label, required = false, children, className }, ref) => {
    const {
      register,
      setValue,
      watch,
      formState: { errors },
    } = useFormContext()
    const selectedValue = watch(name)
    const errorText = errors[name]?.message as string

    useEffect(() => {
      if (selectedValue) {
        setValue(name, selectedValue)
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
          <Select
            {...register(name, { required })}
            onValueChange={value => setValue(name, value)}
            value={selectedValue}
            ref={ref}
          >
            <SelectTrigger className='border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500'>
              <SelectValue placeholder={label} />
            </SelectTrigger>
            <SelectContent>
              {React.Children.map(children, child => {
                if (React.isValidElement(child) && child.type === 'option') {
                  return <SelectItem value={child.props.value}>{child.props.children}</SelectItem>
                }
                return null
              })}
            </SelectContent>
          </Select>
        </div>

        {errorText && <ErrorText text={errorText} className='mt-2' />}
      </div>
    )
  }
)

FormSelectComponent.displayName = 'FormSelect'

export const FormSelect = FormSelectComponent
