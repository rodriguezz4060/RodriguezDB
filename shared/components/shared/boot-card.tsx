import Link from 'next/link'
import React from 'react'
import { Title } from './title'
import { Button } from '../ui'
import { SquareArrowOutUpRight } from 'lucide-react'

interface Props {
  id: number
  name: string
  dIn: number
  dOut: number
  high: number
  partNumber: string
  imageUrl?: string
  className?: string
}

export const BootCard: React.FC<Props> = ({
  id,
  name,
  dIn,
  dOut,
  high,
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
          Тип: Резиновый
          <br />
          Внутренний ⌀: 100мм
          <br />
          Наружный ⌀: 22мм
          <br />
          Высота: 100мм
        </p>
      </Link>
      <div className='flex justify-between items-center mt-4'>
        <div className='text-[20px]'>{partNumber}</div>
        <Button className='text-base font-bold'>
          <SquareArrowOutUpRight size={20} className='mr-1' />
          Наличие
        </Button>
      </div>
    </div>
  )
}
