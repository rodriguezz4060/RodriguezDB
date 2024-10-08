'use client'

import { Dialog, DialogContent, DialogTitle } from '@/shared/components/ui/dialog'
import { cn } from '@/shared/lib/utils'
import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { FormDataTable } from '../../form'
import { useIntl } from 'react-intl'
import { DataTableConnectColumns } from '@/shared/constants/table'
import { Car } from '@prisma/client'

interface Props {
  cars: Car[]
  open: boolean
  onclose: () => void
  className?: string
  onLinkClick?: (carId: number) => void
}

export const EditBootModal: React.FC<Props> = ({ cars, open, onclose, onLinkClick, className }) => {
  const { formatMessage } = useIntl()
  const columns = DataTableConnectColumns()
  const methods = useForm()

  const handleClose = () => {
    onclose()
  }

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent
        className={cn(
          'w-[1060px] max-w-[1060px] min-h-[510px] bg-[#fcfcfc] dark:bg-zinc-900',
          className
        )}
        aria-describedby={undefined}
      >
        <DialogTitle className='text-[30px]'>
          {formatMessage({ id: 'bootCars.carsList' })}
        </DialogTitle>
        <FormProvider {...methods}>
          {cars && cars.length > 0 && (
            <FormDataTable name='cars' data={cars} columns={columns} onLinkClick={onLinkClick} />
          )}
        </FormProvider>
      </DialogContent>
    </Dialog>
  )
}
