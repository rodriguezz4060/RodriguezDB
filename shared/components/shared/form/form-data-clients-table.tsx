'use client'

import React, { useState } from 'react'
import { useFormContext } from 'react-hook-form'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../ui/table'
import { ErrorText } from '../error-text'
import { Button, Input } from '../../ui'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import { useIntl } from 'react-intl'

interface Props {
  name: string
  label?: string
  required?: boolean
  className?: string
  data: any[]
  columns: { key: string; label: string }[]
  itemsPerPage?: number
}

export const FormTableClientData: React.FC<Props> = ({
  className,
  name,
  label,
  required,
  data,
  columns,
  itemsPerPage = 10,
}) => {
  const {
    formState: { errors },
  } = useFormContext()

  const { formatMessage } = useIntl()
  const errorText = errors[name]?.message as string

  const [searchTerm, setSearchTerm] = useState('')
  const [currentPage, setCurrentPage] = useState(1)

  const filteredData = data.filter(item => {
    const nameMatch = item.name?.toLowerCase().includes(searchTerm.toLowerCase())
    const telMatch = item.tel?.toLowerCase().includes(searchTerm.toLowerCase())
    const vinMatch = item.VIN?.toString().toLowerCase().includes(searchTerm.toLowerCase())
    const gosNumberMatch = item.clientCar?.gosNumber
      ?.toString()
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
    return nameMatch || telMatch || vinMatch || gosNumberMatch
  })

  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem)

  const totalPages = Math.ceil(filteredData.length / itemsPerPage)

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber)

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
          placeholder={formatMessage({ id: 'bootCars.searchPlaceholder' })}
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
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
            {currentItems.map((item, index) => (
              <TableRow key={index} className='cursor-pointer'>
                {columns.map(column => (
                  <TableCell key={column.key}>
                    {column.key === 'imageUrl' ? (
                      <img
                        src={getValue(item, column.key) ?? ''}
                        alt='Logo'
                        className='h-[30px] w-auto'
                      />
                    ) : (
                      <Link href={`/clients/${item.id}/profile`} passHref>
                        <span className='cursor-pointer'>{getValue(item, column.key)}</span>
                      </Link>
                    )}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      {errorText && <ErrorText text={errorText} className='mt-2' />}

      <div className='mt-4 flex justify-between items-center'>
        <div>
          <span>
            {formatMessage({ id: 'bootCars.page' })} {currentPage}{' '}
            {formatMessage({ id: 'bootCars.of' })} {totalPages}
          </span>
        </div>
        <div className='flex items-center'>
          <Button
            variant='outline'
            size='sm'
            disabled={currentPage === 1}
            onClick={() => paginate(currentPage - 1)}
            className='mr-2 disabled:bg-opacity-0 disabled:cursor-not-allowed'
          >
            <ChevronLeft size={18} className='inline-block' />
            {formatMessage({ id: 'bootCars.previousPage' })}
          </Button>
          <Button
            variant='outline'
            size='sm'
            disabled={currentPage === totalPages}
            onClick={() => paginate(currentPage + 1)}
            className='disabled:bg-opacity-0 disabled:cursor-not-allowed'
          >
            {formatMessage({ id: 'bootCars.nextPage' })}
            <ChevronRight size={18} className='inline-block' />
          </Button>
        </div>
      </div>
    </div>
  )
}
