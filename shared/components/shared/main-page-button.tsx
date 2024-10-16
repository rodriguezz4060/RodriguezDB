'use client'

import { Api } from '@/shared/services/api-client'
import { MainButton } from '@prisma/client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useIntl } from 'react-intl'
import { Skeleton } from '../ui'
import { cn } from '@/shared/lib/utils'

interface Props {
  className?: string
  loading?: boolean
}

export const MainPageButtons: React.FC<Props> = ({ className }) => {
  const { formatMessage } = useIntl()
  const [mainPage, setMainPage] = React.useState<MainButton[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    Api.mainPage
      .getButtons()
      .then(setMainPage)
      .finally(() => setIsLoading(false))
  }, [])

  if (isLoading) {
    return (
      <div className={cn('flex justify-center gap-6', className)}>
        {Array(4)
          .fill(0)
          .map((_, index) => (
            <div
              key={index}
              className='flex flex-row items-start p-3 bg-secondary rounded-lg h-[280px] w-[240px] animate-pulse'
            >
              <div className='flex flex-col items-start'>
                <Skeleton className='mb-2 h-6 w-32' />
                <Skeleton className='w-[215px] h-[215px]' />
              </div>
            </div>
          ))}
      </div>
    )
  }

  return (
    <div className='flex justify-center gap-6'>
      {mainPage.map(button => (
        <Link
          key={button.id}
          href={button.link}
          className='flex flex-row border items-start p-3 bg-secondary dark:bg-[#18181A] rounded-lg h-[280px] w-[240px] hover:bg-secondary hover:opacity-80 hover:shadow-md transition duration-200'
        >
          <div className='flex flex-col items-start'>
            <p className='mb-2 text-base'>
              <b>{formatMessage({ id: `mainPage.${button.name}` })}</b>
            </p>
            <img
              className='w-[215px] h-[215px] mb-5'
              src={button.imageUrl}
              alt={formatMessage({ id: `mainPage.${button.name}` })}
            />
          </div>
        </Link>
      ))}
    </div>
  )
}
