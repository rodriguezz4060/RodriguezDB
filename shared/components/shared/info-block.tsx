'use client'

import React from 'react'
import { Button } from '../ui/button'
import { ArrowLeft } from 'lucide-react'
import { cn } from '@/shared/lib/utils'
import { Title } from './title'
import Link from 'next/link'
import { useIntl } from 'react-intl'

interface Props {
  title: string
  text: string
  className?: string
  imageUrl?: string
}

export const InfoBlock: React.FC<Props> = ({ className, title, text, imageUrl }) => {
  const { formatMessage } = useIntl()
  return (
    <div className={cn(className, 'flex items-center justify-between w-[840px] gap-12')}>
      <div className='flex flex-col'>
        <div className='w-[445px]'>
          <Title size='lg' text={title} className='font-extrabold' />
          <p className='text-gray-400 text-lg'>{text}</p>
        </div>

        <div className='flex gap-5 mt-11'>
          <Link href='/'>
            <Button variant='outline' className='gap-2'>
              <ArrowLeft />
              {formatMessage({ id: 'noFoundPage.onHomePage' })}
            </Button>
          </Link>
          <a href=''>
            <Button variant='outline' className='text-gray-500 border-gray-400 hover:bg-gray-50'>
              {formatMessage({ id: 'noFoundPage.refresh' })}
            </Button>
          </a>
        </div>
      </div>

      <img src={imageUrl} alt={title} width={300} />
    </div>
  )
}
