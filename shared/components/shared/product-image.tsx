import { cn } from '@/shared/lib/utils'
import React from 'react'

interface Props {
  className?: string
  imageUrl: string | null
}

export const ProductImage: React.FC<Props> = ({ imageUrl, className }) => {
  /*сделать заглушку когда нет картинки у товара, вместо уродства с проверкой*/
  const src = imageUrl ?? ''

  return (
    <div className={cn('flex justify-center flex-1 w-full', className)}>
      <img
        src={src}
        alt='Logo'
        className={cn('relative left-2 transition-all z-10 duration-300 h-auto w-[450px] ')}
      />
    </div>
  )
}
