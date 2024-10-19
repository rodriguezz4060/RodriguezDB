'use client'

import React, { useState } from 'react'
import { useFormContext } from 'react-hook-form'
import { Input } from '../../ui'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../ui/table'
import { ClearButton } from '../clear-button'
import { ErrorText } from '../error-text'
import Link from 'next/link'
import { useIntl } from 'react-intl'
import { Button } from '../../ui'
import { ChevronLeft, ChevronRight, Pencil, Plus, Settings } from 'lucide-react'
import { useSession } from 'next-auth/react'
import { DeleteCarButton } from '../buttons'
import { Popover } from '@radix-ui/react-popover'
import { PopoverContent, PopoverTrigger } from '../../ui/popover'

interface Props {
  name: string
  label?: string
  required?: boolean
  className?: string
  data: any[]
  columns: { key: string; label: string }[]
  onLinkClick?: (carId: number) => void
  itemsPerPage?: number
  onDeleteCar?: (carId: number) => void
}

export const FormDataTable: React.FC<Props> = ({
  className,
  name,
  label,
  required,
  data,
  columns,
  onLinkClick,
  itemsPerPage = 10,
  onDeleteCar,
}) => {
  const {
    formState: { errors },
  } = useFormContext()

  const { formatMessage } = useIntl()
  const { data: session } = useSession()
  const userRole = session?.user?.role

  const [searchTerm, setSearchTerm] = useState('')
  const [currentPage, setCurrentPage] = useState(1)

  const errorText = errors[name]?.message as string

  const filteredData = data.filter(item => {
    const model = item.models ? item.models.toLowerCase() : ''
    return model.includes(searchTerm.toLowerCase())
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

  // Фильтрация колонок на основе роли пользователя
  const filteredColumns =
    userRole === 'ADMIN' ? columns : columns.filter(column => column.key !== 'actions')

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
      <div className='rounded-[5px] border overflow-hidden'>
        <Table>
          <TableHeader>
            <TableRow>
              {filteredColumns.map(column => (
                <TableHead key={column.key}>{column.label}</TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentItems.map((item, index) => (
              <TableRow key={index}>
                {filteredColumns.map(column => (
                  <TableCell key={column.key}>
                    {column.key === 'imageUrl' ? (
                      <img
                        src={getValue(item, column.key) ?? ''}
                        alt='Logo'
                        className='h-[30px] w-auto'
                      />
                    ) : column.key === 'actions' ? (
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button variant='ghost'>
                            <Settings className='mr-2' />
                            {formatMessage({ id: 'bootCoverInfo.settings' })}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className='w-auto'>
                          <div className='mb-2'>
                            <Button className='text-sm font-bold bg-[#4CAF50] hover:bg-[#388E3C] items-center'>
                              <Link href={`/cars/edit/${item.id}`}>
                                <Pencil size={18} className='mr-1 inline-block items-center pb-1' />
                                {formatMessage({ id: 'bootCars.carEdit' })}
                              </Link>
                            </Button>
                          </div>
                          <div className=''>
                            <DeleteCarButton id={item.id} onDelete={onDeleteCar} />
                          </div>
                        </PopoverContent>
                      </Popover>
                    ) : column.key === 'carConnect' ? (
                      onLinkClick && (
                        <Button
                          size='custom'
                          onClick={() => onLinkClick(item.id)}
                          className='text-sm  font-bold bg-[#4CAF50] hover:bg-[#388E3C]'
                        >
                          <Plus size={20} className='mr-1' />
                          {formatMessage({ id: 'bootCars.carConnect' })}
                        </Button>
                      )
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
