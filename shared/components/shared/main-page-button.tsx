'use client'

import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useIntl } from 'react-intl'

interface Props {
  className?: string
}

interface MainButton {
  id: number
  name: string
  link: string
  imageUrl: string
}

export const MainPageButtons: React.FC<Props> = ({ className }) => {
  const { formatMessage } = useIntl()
  const [buttons, setButtons] = useState<MainButton[]>([])

  useEffect(() => {
    async function fetchButtons() {
      try {
        const response = await fetch('/api/main-page-buttons')
        if (!response.ok) {
          throw new Error('Failed to fetch buttons')
        }
        const data = await response.json()
        setButtons(data)
      } catch (error) {
        console.error('Error fetching buttons:', error)
      }
    }

    fetchButtons()
  }, [])

  return (
    <div className='flex justify-center gap-6'>
      {buttons.map(button => (
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
