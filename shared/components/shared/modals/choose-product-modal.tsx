'use client'

import { cn } from '@/shared/lib/utils'
import React, { useState, useEffect } from 'react'
import { Dialog, DialogContent, DialogTitle } from '../../ui/dialog'
import { useRouter, useSearchParams } from 'next/navigation'
import { ChooseBootForm } from '../choose-boot-form'
import { VisuallyHidden } from '@radix-ui/react-visually-hidden'
import { BootWithRelation } from '@/@types/prisma'

interface Props {
  product: BootWithRelation
  className?: string
}

export const ChooseProductModal: React.FC<Props> = ({ product, className }) => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [isOpen, setIsOpen] = useState(Boolean(product))
  const [originalSearchParams, setOriginalSearchParams] = useState('')

  useEffect(() => {
    if (isOpen) {
      // Сохраняем исходные параметры поиска при открытии модального окна
      setOriginalSearchParams(searchParams.toString())
    } else {
      // Возвращаемся к исходным параметрам поиска при закрытии модального окна
      router.push(`/boot-kit?${originalSearchParams}`)
    }
  }, [isOpen, router, originalSearchParams, searchParams])

  const handleClose = () => {
    setIsOpen(false)
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
          partNumber={product.partNumber}
        />
      </DialogContent>
    </Dialog>
  )
}
