'use client'

import React from 'react'
import { useIntl } from 'react-intl'
import { Container } from '../container'
import { Brands } from '@/@types/prisma'
import Link from 'next/link'

interface Props {
  brands: Brands[]
  classNames?: string
}

export const CarToMainPage: React.FC<Props> = ({ brands, classNames }) => {
  const { formatMessage } = useIntl()

  return (
    <Container className='h-full flex flex-col py-5 secondary dark:bg-zinc-900'>
      <div className='flex flex-wrap justify-center gap-6'>
        {brands.map(button => (
          <Link
            key={button.id}
            href={`car-to/${button.name.toLowerCase()}`}
            className={`flex flex-row border items-start p-3 bg-secondary dark:bg-[#18181A] rounded-lg h-[280px] w-[240px] hover:bg-secondary hover:opacity-80 hover:shadow-md transition duration-200 ${classNames}`}
          >
            <div className='flex flex-col items-start'>
              <p className='mb-2 text-base'>
                <b>{button.name}</b>
              </p>
              <img className='w-[215px] h-[215px] mb-5' src={button.imageUrl} alt={button.name} />
            </div>
          </Link>
        ))}
      </div>
    </Container>
  )
}
