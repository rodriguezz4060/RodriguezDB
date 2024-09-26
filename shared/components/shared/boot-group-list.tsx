import { cn } from '@/shared/lib/utils'
import React from 'react'
import { BootCard } from './boot-card'

interface Props {
  items: any[]
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
            name={product.name}
            type={product.type}
            form={product.form}
            imageUrl={product.imageUrl}
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
