'use client'
import { cn } from '@/shared/lib/utils'
import React from 'react'
import { ProductImage } from './product-image'
import { Title } from './title'
import Link from 'next/link'
import { Button } from '../ui'
import { Diameter, Ruler, SquareArrowOutUpRight } from 'lucide-react'
import { useIntl } from 'react-intl'
import { BootWithRelation } from '@/@types/prisma'
import useTranslations from '@/shared/hooks/use-translations'
import { FormProvider, useForm } from 'react-hook-form'
import { FormTable } from './form'

interface Props {
  product: BootWithRelation
  className?: string
}

export const ChooseBootForm: React.FC<Props> = ({ product, className }) => {
  /*сделать заглушку когда нет картинки у товара, вместо уродства с проверкой*/
  const src = product.imageUrl ?? ''
  const { formatMessage } = useIntl()
  const methods = useForm()
  const translations = useTranslations()
  const formTranslation = translations.getFormTranslation(product.form.id)
  const typeTranslation = translations.getTypeTranslation(product.type.id)

  const columns = [
    { key: 'carBrand.name', label: formatMessage({ id: 'bootCars.carBrand' }) },
    { key: 'models', label: formatMessage({ id: 'bootCars.carModel' }) },
    { key: 'carBody', label: formatMessage({ id: 'bootCars.carBody' }) },
    { key: 'modelYear', label: formatMessage({ id: 'bootCars.carYear' }) },
    { key: 'engine', label: formatMessage({ id: 'bootCars.carEngine' }) },
    { key: 'volume', label: formatMessage({ id: 'bootCars.carVolume' }) },
  ]

  return (
    <div className={cn(className, 'flex flex-1')}>
      <ProductImage imageUrl={product.imageUrl} className='' />

      <div className='w-[490px] bg-[#fcfcfc] dark:bg-[#2b2b2b] p-7 relative'>
        <div>
          <Title text={product.name.name} size='md' className='font-extrabold ' />
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
              <p className='text-gray-600 dark:text-gray-400 '>{product.dIn} мм</p>
            </div>
            <div>
              <p className='font-semibold text-gray-700 dark:text-gray-300 inline-flex items-center'>
                {formatMessage({ id: 'bootCoverInfo.dOut' })}
                <Diameter size={20} className='ml-2' />:
              </p>
              <p className='text-gray-600 dark:text-gray-400'>{product.dOut} мм</p>
            </div>
            <div>
              <p className='font-semibold text-gray-700 dark:text-gray-300 inline-flex items-center'>
                {formatMessage({ id: 'bootCoverInfo.height' })}
                <Ruler className='ml-1' />:
              </p>
              <p className='text-gray-600 dark:text-gray-400'>{product.height} мм</p>
            </div>
          </div>
          <div className=' rounded-md h-[200px] overflow-y-auto mt-4 pb-10 scrollbar'>
            <div>
              <FormProvider {...methods}>
                {product.cars && product.cars.length > 0 && (
                  <FormTable
                    name='cars'
                    data={product.cars}
                    columns={columns}
                    onRemove={(carId: number) => console.log(carId)}
                  />
                )}
              </FormProvider>
            </div>
          </div>
        </div>
        <div className='flex justify-between  items-center mt-10 absolute bottom-0 left-0 p-4 right-0 bg-[#e7e7e7] dark:bg-[#1f1e1e]'>
          <div className='text-[20px] font-extrabold'>{product.partNumber}</div>
          <Link
            href={`https://autoyamato.com.ua/newsearch/?keyword=${product.partNumber}`}
            target='_blank'
          >
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
