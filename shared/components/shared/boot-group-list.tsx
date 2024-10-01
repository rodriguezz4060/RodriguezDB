import { cn } from '@/shared/lib/utils'
import React from 'react'
import { BootCard } from './boot-card'
import { BootWithRelation } from '@/@types/prisma'

interface Props {
  items: BootWithRelation[]
  listClassName?: string
  className?: string
}

export const BootGroupList: React.FC<Props> = ({ items, listClassName, className }) => {
  return (
    <div className={className}>
      <div className={cn('grid grid-cols-3 gap-[50px]', listClassName)}>
        {items.map((product, i) => (
          <BootCard
            key={product.id}
            id={product.id}
            name={product.name.name}
            type={product.type}
            imageUrl={product.imageUrl ?? ''}
            dIn={product.dIn}
            dOut={product.dOut}
            height={product.height}
            partNumber={product.partNumber}
          />
        ))}
      </div>
    </div>
  )
}
