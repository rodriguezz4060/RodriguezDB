'use client'

import React from 'react'
import { useFormContext } from 'react-hook-form'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../ui/table'
import { ErrorText } from '../error-text'
import { Button } from '../../ui'

interface Props {
  name: string
  label?: string
  required?: boolean
  className?: string
  data: any[]
  columns: { key: string; label: string }[]
}

export const FormTableClientTo: React.FC<Props> = ({
  className,
  name,
  label,
  required,
  data,
  columns,
}) => {
  const {
    formState: { errors },
  } = useFormContext()

  const errorText = errors[name]?.message as string

  const getValue = (item: any, key: string) => {
    const keys = key.split('.')
    return keys.reduce((acc, k) => acc?.[k], item)
  }

  // Фильтрация данных, чтобы удалить все null значения
  const filteredData = data
    .map(item => {
      const filteredItem = {} as any
      columns.forEach(column => {
        const value = getValue(item, column.key)
        if (value !== null && value !== undefined && value !== '') {
          filteredItem[column.key] = value
        }
      })
      return filteredItem
    })
    .filter(item => Object.keys(item).length > 0) // Удаление пустых объектов

  return (
    <div className={className}>
      {label && (
        <p className='font-extrabold text-[36px] mb-8 mt-4 ml-2'>
          {label} {required && <span className='text-red-500'>*</span>}
        </p>
      )}

      {filteredData.length === 0 ? (
        <p className='text-gray-500'>Данные отсутствуют</p>
      ) : (
        <div className='rounded-md border overflow-hidden'>
          <Table>
            <TableHeader>
              <TableRow>
                {columns.map(column => (
                  <TableHead key={column.key}>{column.label}</TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredData.map((item, index) => (
                <TableRow key={index}>
                  {columns.map(column => (
                    <TableCell key={column.key}>
                      {column.key === 'actions' ? (
                        getValue(item, 'partNumber') ? (
                          <Button
                            className='ml-9'
                            variant={'link'}
                            size={'icon'}
                            onClick={() =>
                              window.open(
                                `https://autoyamato.com.ua/newsearch/?keyword=${getValue(
                                  item,
                                  'partNumber'
                                )}`,
                                '_blank'
                              )
                            }
                          >
                            Стоимость масла
                          </Button>
                        ) : null
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
      )}
      {errorText && <ErrorText text={errorText} className='mt-2' />}
    </div>
  )
}
