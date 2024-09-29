'use client'
import { cn } from '@/shared/lib/utils'
import React from 'react'
import { ProductImage } from './product-image'
import { Title } from './title'
import Link from 'next/link'
import { Button } from '../ui'
import { Diameter, Ruler, SquareArrowOutUpRight } from 'lucide-react'
import { useIntl } from 'react-intl'

interface Props {
  name: string
  imageUrl: string | null
  form: string
  type: string
  dIn: number
  dOut: number
  height: number
  partNumber: string

  className?: string
}

export const ChooseBootForm: React.FC<Props> = ({
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
  /*сделать заглушку когда нет картинки у товара, вместо уродства с проверкой*/
  const src = imageUrl ?? ''
  const { formatMessage } = useIntl()

  return (
    <div className={cn(className, 'flex flex-1')}>
      <ProductImage imageUrl={imageUrl} className='' />

      <div className='w-[490px] bg-[#fcfcfc] dark:bg-[#2b2b2b] p-7 relative'>
        <Title text={name} size='md' className='font-extrabold ' />
        <div className='grid grid-cols-2 gap-4'>
          <div>
            <p className='font-semibold text-gray-700 dark:text-gray-300'>
              {formatMessage({ id: 'bootCoverInfo.form' })}
            </p>
            <p className='text-gray-600 dark:text-gray-400'>{form}</p>
          </div>
          <div>
            <p className='font-semibold text-gray-700 dark:text-gray-300'>
              {formatMessage({ id: 'bootCoverInfo.type' })}
            </p>
            <p className='text-gray-600 dark:text-gray-400'>{type}</p>
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

        <div className='flex justify-between  items-center mt-10 absolute bottom-0 left-0 right-0 p-7 bg-[#e7e7e7] dark:bg-[#1f1e1e]'>
          <div className='text-[20px] font-extrabold'>{partNumber}</div>
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
