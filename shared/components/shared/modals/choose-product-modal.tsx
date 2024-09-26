'use client'

import { cn } from '@/shared/lib/utils'
import { BootDustCover } from '@prisma/client'
import React from 'react'
import { Dialog, DialogContent, DialogTitle } from '../../ui/dialog'
import { useRouter } from 'next/navigation'
import { ChooseBootForm } from '../choose-boot-form'
import { VisuallyHidden } from '@radix-ui/react-visually-hidden'

interface Props {
  product: BootDustCover
  className?: string
}

export const ChooseProductModal: React.FC<Props> = ({ product, className }) => {
  const router = useRouter()

  return (
    <Dialog open={Boolean(product)} onOpenChange={() => router.back()}>
      <DialogContent
        aria-describedby={undefined}
        className={cn('p-0 w-[1060px] max-w-[1060px] min-h-[510px] bg-white overflow-hidden')}
      >
        <VisuallyHidden>
          <DialogTitle>{product.name}</DialogTitle>
        </VisuallyHidden>
        <ChooseBootForm
          name={product.name}
          imageUrl={product.imageUrl}
          form={product.form}
          type={product.type}
          dIn={product.dIn}
          dOut={product.dOut}
          height={product.height}
          cars={[]}
        />
      </DialogContent>
    </Dialog>
  )
}
