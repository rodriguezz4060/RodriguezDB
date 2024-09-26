'use client'
import { cn } from '@/shared/lib/utils'
import React from 'react'
import { ProductImage } from './product-image'
import { Title } from './title'

interface Props {
  name: string
  imageUrl: string | null
  cars: any[]
  form: string
  type: string
  dIn: number
  dOut: number
  height: number
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
  cars,
  className,
}) => {
  /*сделать заглушку когда нет картинки у товара, вместо уродства с проверкой*/
  const src = imageUrl ?? ''
  return (
    <div className={cn(className, 'flex flex-1')}>
      <ProductImage imageUrl={imageUrl} />

      <div className='w-[490px] bg-[#fcfcfc] dark:bg-[#2b2b2b] p-7'>
        <Title text={name} size='md' className='font-extrabold ' />

        <div className='grid grid-cols-2 gap-4'>
          <div>
            <p className='font-semibold text-gray-700 dark:text-gray-300'>Форма пыльника:</p>
            <p className='text-gray-600 dark:text-gray-400'>{form}</p>
          </div>
          <div>
            <p className='font-semibold text-gray-700 dark:text-gray-300'>Тип пыльника:</p>
            <p className='text-gray-600 dark:text-gray-400'>{type}</p>
          </div>
          <div>
            <p className='font-semibold text-gray-700 dark:text-gray-300'>Наружный:</p>
            <p className='text-gray-600 dark:text-gray-400'>{dIn} мм</p>
          </div>
          <div>
            <p className='font-semibold text-gray-700 dark:text-gray-300'>Внутренний:</p>
            <p className='text-gray-600 dark:text-gray-400'>{dOut} мм</p>
          </div>
          <div>
            <p className='font-semibold text-gray-700 dark:text-gray-300'>Высота:</p>
            <p className='text-gray-600 dark:text-gray-400'>{height} мм</p>
          </div>
        </div>
      </div>
    </div>
  )
}
