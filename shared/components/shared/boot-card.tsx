'use client'

import Link from 'next/link'
import React from 'react'
import { Title } from './title'
import { Button } from '../ui'
import { SquareArrowOutUpRight } from 'lucide-react'
import { useIntl } from 'react-intl'
import useTranslations from '@/shared/hooks/use-translations'

interface Props {
  id: number
  name: string
  type: {
    id: number
    type: string
  }
  dIn: number
  dOut: number
  height: number
  partNumber: string
  imageUrl?: string
  className?: string
}

export const BootCard: React.FC<Props> = ({
  id,
  name,
  type,
  dIn,
  dOut,
  height,
  imageUrl,
  partNumber,
  className,
}) => {
  const { formatMessage } = useIntl()
  const translations = useTranslations()
  const typeTranslation = translations.getTypeTranslation(type.id)
  const src = imageUrl || '/no_img.jpg'

  return (
    <div className={className}>
      <Link href={`/boot-kit/${id}`}>
        <div className='flex justify-center p-6 bg-secondary rounded-lg h-[260px]'>
          <img className='w-[215px] h-[215px]' src={src} alt={name} />
        </div>

        <Title text={name} size='sm' className='flex mb-1 mt-3 font-bold' />

        <div className='w-[230px] ml-2'>
          <div className='flex my-2'>
            <span className='flex flex-1 text-sm'>
              {formatMessage({ id: 'bootCard.type' })}
              <div className='flex-1 border-b border-dashed border-b-neutral-200 relative -top-1 mx-2' />
              {typeTranslation}
            </span>
          </div>
          <div className='flex my-2'>
            <span className='flex flex-1 text-sm'>
              {formatMessage({ id: 'bootCard.dIn' })}
              <div className='flex-1 border-b border-dashed border-b-neutral-200 relative -top-1 mx-2' />
              {`${dIn} мм`}
            </span>
          </div>
          <div className='flex my-2'>
            <span className='flex flex-1 text-sm'>
              {formatMessage({ id: 'bootCard.dOut' })}
              <div className='flex-1 border-b border-dashed border-b-neutral-200 relative -top-1 mx-2' />
              {`${dOut} мм`}
            </span>
          </div>
          <div className='flex my-2'>
            <span className='flex flex-1 text-sm'>
              {formatMessage({ id: 'bootCard.height' })}
              <div className='flex-1 border-b border-dashed border-b-neutral-200 relative -top-1 mx-2' />
              {`${height}мм`}
            </span>
          </div>
        </div>
      </Link>
      <div className='flex justify-between items-center mt-4'>
        <div className='text-[20px]'>{partNumber}</div>
        <Link href={`https://autoyamato.com.ua/newsearch/?keyword=${partNumber}`} target='_blank'>
          <Button className='text-base font-bold'>
            <SquareArrowOutUpRight size={20} className='mr-1' />
            Наличие
          </Button>
        </Link>
      </div>
    </div>
  )
}
