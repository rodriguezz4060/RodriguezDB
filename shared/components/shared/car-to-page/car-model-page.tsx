'use client'

import React from 'react'
import { useIntl } from 'react-intl'
import { Container } from '../container'
import { CarTo } from '@/@types/prisma'
import Link from 'next/link'
import { cn } from '@/shared/lib/utils'
import { Separator } from '../../ui'

interface Props {
  carTo: CarTo[]
  className?: string
}

export const CarModelPage: React.FC<Props> = ({ carTo, className }) => {
  const { formatMessage } = useIntl()

  return (
    <Container className='h-full flex flex-col py-5 secondary dark:bg-zinc-900'>
      <div className='grid grid-cols-2 gap-[20px]'>
        {carTo.map(button => (
          <Link
            key={button.id}
            href={`nissan/${button.id}`}
            className={cn(
              `flex flex-row border items-start p-3 bg-secondary
               dark:bg-[#18181A] rounded-[5px] h-auto  hover:bg-secondary
                hover:opacity-80 hover:shadow-md transition duration-200`,
              className
            )}
          >
            <div className='flex flex-row items-center'>
              <img className='min-w-[200px]' src={button.imageUrl} alt={button.models} />

              <Separator orientation='vertical' className='w-px h-24 mx-6 bg-gray-300' />

              <div className='flex flex-col'>
                <div>{button.models}</div>
                <div>{button.carBody}</div>
                <div>{button.modelYear}</div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </Container>
  )
}
