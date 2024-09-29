import React from 'react'
import { Title } from '../title'
import Link from 'next/link'
import { Button } from '../../ui'
import { SquareArrowOutUpRight } from 'lucide-react'

interface Props {
  name: string
  form: string
  type: string
  dIn: number
  dOut: number
  height: number
  partNumber: string
  className?: string
}

export const BootCoverInfo: React.FC<Props> = ({
  name,
  form,
  type,
  dIn,
  dOut,
  height,
  partNumber,
  className,
}) => {
  return (
    <div className={className}>
      <div className='w-[490px] p-7 mr-4 bg-[#fcfcfc] dark:bg-[#2b2b2b] rounded-lg shadow-md'>
        <Title text={name} size='md' className='font-extrabold mb-4 text-center' />

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

        <div className='flex justify-between items-center mt-10'>
          <div className='text-[20px]'>{partNumber}</div>
          <Link href={`https://autoyamato.com.ua/newsearch/?keyword=${partNumber}`} target='_blank'>
            <Button className='text-base font-bold'>
              <SquareArrowOutUpRight size={20} className='mr-1' />
              Наличие
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
