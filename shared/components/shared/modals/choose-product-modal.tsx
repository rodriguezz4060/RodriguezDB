'use client'

import { cn } from '@/shared/lib/utils'
import React, { useState } from 'react'
import { Dialog, DialogContent, DialogTitle } from '../../ui/dialog'
import { useRouter } from 'next/navigation'
import { ChooseBootForm } from '../choose-boot-form'
import { VisuallyHidden } from '@radix-ui/react-visually-hidden'
import { BootWithRelation } from '@/@types/prisma'

interface Props {
  product: BootWithRelation
  className?: string
}

export const ChooseProductModal: React.FC<Props> = ({ product, className }) => {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(Boolean(product))

  const handleClose = () => {
    setIsOpen(false)
    router.back()
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent
        aria-describedby={undefined}
        className={cn(
          'p-0 w-[1060px] max-w-[1060px] min-h-[510px] bg-white overflow-hidden',
          className
        )}
      >
        <VisuallyHidden>
          <DialogTitle>{product.name.name}</DialogTitle>
        </VisuallyHidden>
        <ChooseBootForm product={product} />
      </DialogContent>
    </Dialog>
  )
}
