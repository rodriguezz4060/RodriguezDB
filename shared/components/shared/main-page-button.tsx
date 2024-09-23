'use client'

import { Api } from '@/shared/services/api-client'
import { MainButton } from '@prisma/client'
import Link from 'next/link'
import React, { useEffect } from 'react'
import { useIntl } from 'react-intl'

interface Props {
  className?: string
}

export const MainPageButtons: React.FC<Props> = ({ className }) => {
  const { formatMessage } = useIntl()
  const [mainPage, setMainPage] = React.useState<MainButton[]>([])

  useEffect(() => {
    Api.mainPage.getButtons().then(buttons => setMainPage(buttons))
  }, [])

  return (
    <div className='flex justify-center gap-6'>
      {mainPage.map(button => (
        <Link
          key={button.id}
          href={button.link}
          className='flex flex-row items-start p-3 bg-secondary rounded-lg h-[280px] w-[240px] hover:bg-secondary hover:opacity-80 hover:shadow-md transition duration-200'
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
