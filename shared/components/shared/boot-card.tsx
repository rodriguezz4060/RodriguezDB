import Link from 'next/link'
import React from 'react'
import { Title } from './title'
import { Button } from '../ui'
import { SquareArrowOutUpRight } from 'lucide-react'

interface Props {
  id: number
  name: string
  type: string
  form: string
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
  form,
  dIn,
  dOut,
  height,
  imageUrl,
  partNumber,
  className,
}) => {
  return (
    <div className={className}>
      <Link href={`/boot-kit/${id}`}>
        <div className='flex justify-center p-6 bg-secondary rounded-lg h-[260px]'>
          <img className='w-[215px] h-[215px]' src={imageUrl} alt={name} />
        </div>

        <Title text={name} size='sm' className='mb-1 mt-3 font-bold' />
        <p className='text-sm'>
          Тип: {type}
          <br />
          Внутренний ⌀: {dIn} мм
          <br />
          Наружный ⌀: {dOut} мм
          <br />
          Высота: {height} мм
        </p>
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
