'use client'

import React from 'react'
import { useFormContext } from 'react-hook-form'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../ui/table'
import { ErrorText } from '../error-text'
import { Button } from '../../ui'
import { Trash } from 'lucide-react'

interface Props {
  name: string
  label?: string
  required?: boolean
  className?: string
  data: any[]
  columns: { key: string; label: string }[]
  onRemove: (carId: number) => void
}

export const FormTable: React.FC<Props> = ({
  className,
  name,
  label,
  required,
  data,
  columns,
  onRemove,
}) => {
  const {
    formState: { errors },
  } = useFormContext()

  const errorText = errors[name]?.message as string

  const getValue = (item: any, key: string) => {
    const keys = key.split('.')
    return keys.reduce((acc, k) => acc?.[k], item)
  }

  return (
    <div className={className}>
      {label && (
        <p className='font-extrabold text-[36px] mb-8 mt-4 ml-2'>
          {label} {required && <span className='text-red-500'>*</span>}
        </p>
      )}

      <div className='rounded-[5px] border overflow-hidden'>
        <Table>
          <TableHeader>
            <TableRow>
              {columns.map(column => (
                <TableHead key={column.key}>{column.label}</TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((item, index) => (
              <TableRow key={index}>
                {columns.map(column => (
                  <TableCell key={column.key}>
                    {column.key === 'imageUrl' ? (
                      <img
                        src={getValue(item, column.key) ?? ''}
                        alt='Logo'
                        className='h-[30px] w-auto'
                      />
                    ) : column.key === 'actions' ? (
                      <Button
                        className='rounded-[5px]'
                        variant={'destructive'}
                        size={'trash'}
                        onClick={() => onRemove(item.id)}
                      >
                        <Trash size={18} />
                      </Button>
                    ) : (
                      getValue(item, column.key)
                    )}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      {errorText && <ErrorText text={errorText} className='mt-2' />}
    </div>
  )
}
