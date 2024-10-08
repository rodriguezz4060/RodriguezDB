'use client'

import React from 'react'
import { Title } from '../title'
import Link from 'next/link'
import { Button } from '../../ui'
import { Diameter, Ruler, SquareArrowOutUpRight } from 'lucide-react'
import { useIntl } from 'react-intl'
import { ProductImage } from '../product-image'
import { cn } from '@/shared/lib/utils'
import useTranslations from '@/shared/hooks/use-translations'

interface Props {
  name: string
  imageUrl: string | null
  form: {
    id: number
    form: string
  }
  type: {
    id: number
    type: string
  }
  dIn: number
  dOut: number
  height: number
  partNumber: string
  className?: string
}

export const BootCoverInfo: React.FC<Props> = ({
  name,
  imageUrl,
  form,
  type,
  dIn,
  dOut,
  height,
  partNumber,
  className,
}) => {
  const { formatMessage } = useIntl()
  const translations = useTranslations()
  const formTranslation = translations.getFormTranslation(form.id)
  const typeTranslation = translations.getTypeTranslation(type.id)

  return (
    <div className={cn(className, 'flex flex-1')}>
      <ProductImage imageUrl={imageUrl} />
      <div className='w-[490px] p-7 mr-4 bg-[#fcfcfc] dark:bg-[#2b2b2b] rounded-lg shadow-md'>
        <Title text={name} size='md' className='font-extrabold mb-4 text-center' />

        <div className='grid grid-cols-2 gap-4'>
          <div>
            <p className='font-semibold text-gray-700 dark:text-gray-300'>
              {formatMessage({ id: 'bootCoverInfo.form' })}
            </p>
            <p className='text-gray-600 dark:text-gray-400'>{formTranslation}</p>
          </div>
          <div>
            <p className='font-semibold text-gray-700 dark:text-gray-300'>
              {formatMessage({ id: 'bootCoverInfo.type' })}
            </p>
            <p className='text-gray-600 dark:text-gray-400'>{typeTranslation}</p>
          </div>
          <div>
            <p className='font-semibold text-gray-700 dark:text-gray-300 inline-flex items-center'>
              {formatMessage({ id: 'bootCoverInfo.dIn' })}
              <Diameter size={20} className='ml-1' />:
            </p>
            <p className='text-gray-600 dark:text-gray-400 '>{dIn} мм</p>
          </div>
          <div>
            <p className='font-semibold text-gray-700 dark:text-gray-300 inline-flex items-center'>
              {formatMessage({ id: 'bootCoverInfo.dOut' })}
              <Diameter size={20} className='ml-2' />:
            </p>
            <p className='text-gray-600 dark:text-gray-400'>{dOut} мм</p>
          </div>
          <div>
            <p className='font-semibold text-gray-700 dark:text-gray-300 inline-flex items-center'>
              {formatMessage({ id: 'bootCoverInfo.height' })}
              <Ruler className='ml-1' />:
            </p>
            <p className='text-gray-600 dark:text-gray-400'>{height} мм</p>
          </div>
        </div>

        <div className='flex justify-between items-center mt-10'>
          <div className='text-[20px]'>{partNumber}</div>
          <Link href={`https://autoyamato.com.ua/newsearch/?keyword=${partNumber}`} target='_blank'>
            <Button className='text-base font-bold'>
              <SquareArrowOutUpRight size={20} className='mr-1' />
              {formatMessage({ id: 'bootCoverInfo.link' })}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
