'use client'

import React, { useState } from 'react'
import { useFormContext } from 'react-hook-form'
import { Input } from '../../ui'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../ui/table'
import { ClearButton } from '../clear-button'
import { ErrorText } from '../error-text'
import Link from 'next/link'
import { useIntl } from 'react-intl'

interface Props {
  name: string
  label?: string
  required?: boolean
  className?: string
  data: any[]
  columns: { key: string; label: string }[]
}

export const FormDataTable: React.FC<Props> = ({
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

  const { formatMessage } = useIntl()
  const [searchTerm, setSearchTerm] = useState('')

  const errorText = errors[name]?.message as string

  const filteredData = data.filter(item => {
    const model = item.models ? item.models.toLowerCase() : ''
    return model.includes(searchTerm.toLowerCase())
  })

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

      <div className='relative w-[400px] mb-4 ml-2'>
        <Input
          className='h-10 text-md dark:bg-[#121212] dark:border-[#1e293b] dark:border-2'
          placeholder={formatMessage({ id: 'bootCars.searchByModel' })}
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />

        {searchTerm && <ClearButton onClick={() => setSearchTerm('')} />}
      </div>
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
                    {column.key === 'imageUrl' ? (
                      <img
                        src={getValue(item, column.key) ?? ''}
                        alt='Logo'
                        className='h-[30px] w-auto'
                      />
                    ) : column.key === 'actions' ? (
                      <Link
                        href={`/cars/edit/${item.id}`}
                        className='text-blue-500 hover:underline'
                      >
                        Edit
                      </Link>
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
