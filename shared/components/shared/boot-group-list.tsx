'use client'

import { cn } from '@/shared/lib/utils'
import React, { useState } from 'react'
import { BootCard } from './boot-card'
import { BootWithRelation } from '@/@types/prisma'
import { PaginationComponent } from './pagination'

interface Props {
  items: BootWithRelation[]
  listClassName?: string
  className?: string
}

export const BootGroupList: React.FC<Props> = ({ items, listClassName, className }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 10

  const totalPages = Math.ceil(items.length / itemsPerPage)

  const paginatedBoot = items.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }

  return (
    <div className={className}>
      <div className='flex flex-col min-h-screen'>
        <div className='flex-grow'>
          <div className={cn('grid grid-cols-3 gap-[50px]', listClassName)}>
            {paginatedBoot.map((product, i) => (
              <BootCard
                key={product.id}
                id={product.id}
                name={product.name.name}
                type={product.type}
                imageUrl={product.imageUrl ?? ''}
                dIn={product.dIn}
                dOut={product.dOut}
                height={product.height}
                partNumber={product.partNumber}
              />
            ))}
          </div>
        </div>
        <div className='mt-5'>
          <PaginationComponent
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </div>
  )
}
