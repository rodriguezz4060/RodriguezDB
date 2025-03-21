'use client'

import React, { useState } from 'react'
import { useIntl } from 'react-intl'
import { Container } from '../container'
import { CarTo } from '@/@types/prisma'
import Link from 'next/link'
import { cn } from '@/shared/lib/utils'
import { Input, Separator } from '../../ui'
import { AddCarToButton, EditCarToButton } from '../buttons'
import { PaginationComponent } from '../pagination'

interface Props {
  carTo: CarTo[]
  rout: string
  className?: string
}

export const CarCard: React.FC<Props> = ({ carTo, rout, className }) => {
  const { formatMessage } = useIntl()
  const [searchTerm, setSearchTerm] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 10

  // Сортируем массив carTo по полю createdAt в порядке убывания
  const sortedCarTo = carTo.sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  )

  // Фильтруем отсортированный массив
  const filteredCarTo = sortedCarTo.filter(button =>
    Object.values(button).some(value =>
      String(value).toLowerCase().includes(searchTerm.toLowerCase())
    )
  )

  const totalPages = Math.ceil(filteredCarTo.length / itemsPerPage)
  const paginatedCarTo = filteredCarTo.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }

  return (
    <Container className='h-full flex flex-col py-5 secondary dark:bg-zinc-900'>
      <div className='flex justify-between mb-5'>
        <Input
          type='text'
          placeholder={formatMessage({ id: 'carToPage.searchPlaceholder' })}
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          className='p-2 border rounded-sm max-w-xl'
        />
        <AddCarToButton />
      </div>
      {paginatedCarTo.length === 0 ? (
        <div className='text-center text-3xl font-extrabold'>
          {formatMessage({ id: 'carToPage.noInformation' })}
        </div>
      ) : (
        <>
          <div className='grid grid-cols-2 gap-[20px]'>
            {paginatedCarTo.map(button => {
              const src = button.imageUrl || '/no_img.jpg'
              return (
                <Link
                  key={button.id}
                  href={`${rout}/${button.id}`}
                  className={cn(
                    `flex flex-row border items-start p-3 bg-secondary
             dark:bg-[#18181A] rounded-[5px] h-auto hover:bg-secondary
               dark:hover:opacity-60 hover:opacity-80 hover:shadow-md transition duration-200 relative`,
                    className
                  )}
                >
                  <div className='flex flex-row items-center w-full'>
                    <img className='min-w-[200px] max-h-[100px]' src={src} alt={button.models} />

                    <Separator orientation='vertical' className='w-px h-24 mx-6 bg-gray-300' />

                    <div className='flex flex-col flex-1'>
                      <div className='flex flex-col'>
                        <div className='flex'>
                          <span className='flex flex-1 '>
                            {formatMessage({ id: 'carToPage.model' })}
                            <div className='flex-1 border-b border-dashed border-b-neutral-200 relative -top-1 mx-2' />
                            <div className=''>{button.models}</div>
                          </span>
                        </div>

                        <div className='flex'>
                          <span className='flex flex-1 '>
                            {formatMessage({ id: 'carToPage.body' })}
                            <div className='flex-1 border-b border-dashed border-b-neutral-200 relative -top-1 mx-2' />
                            {button.carBody}
                          </span>
                        </div>

                        <div className='flex'>
                          <span className='flex flex-1 '>
                            {formatMessage({ id: 'carToPage.carYear' })}
                            <div className='flex-1 border-b border-dashed border-b-neutral-200 relative -top-1 mx-2' />
                            {button.modelYear}
                          </span>
                        </div>

                        <div className='flex'>
                          <span className='flex flex-1 '>
                            {formatMessage({ id: 'carToPage.engine' })}
                            <div className='flex-1 border-b border-dashed border-b-neutral-200 relative -top-1 mx-2' />
                            {button.engine}
                          </span>
                        </div>

                        <div className='flex'>
                          <span className='flex flex-1 '>
                            {formatMessage({ id: 'carToPage.engineVolume' })}
                            <div className='flex-1 border-b border-dashed border-b-neutral-200 relative -top-1 mx-2' />
                            {button.volume}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <EditCarToButton id={button.id} className='absolute top-2 right-2 mr-2' />
                </Link>
              )
            })}
          </div>
          <div className='mt-5'>
            <PaginationComponent
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </div>
        </>
      )}
    </Container>
  )
}
