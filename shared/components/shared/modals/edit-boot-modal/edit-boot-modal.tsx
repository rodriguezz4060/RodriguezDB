'use client'

import { CarWithBoot, CarWithBrand } from '@/@types/prisma'
import { Button } from '@/shared/components/ui'
import { Dialog, DialogContent } from '@/shared/components/ui/dialog'
import { cn } from '@/shared/lib/utils'
import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { Container } from '../../container'
import { FormDataTable } from '../../form'
import { useIntl } from 'react-intl'

interface Props {
  cars: CarWithBrand[]
  open: boolean
  onclose: () => void
  className?: string
}

export const EditBootModal: React.FC<Props> = ({ open, onclose, cars, className }) => {
  const { formatMessage } = useIntl()
  const methods = useForm()

  const handleClose = () => {
    onclose()
  }

  const columns = [
    { key: 'carBrand.name', label: formatMessage({ id: 'bootCars.carBrand' }) },
    { key: 'imageUrl', label: formatMessage({ id: 'bootCars.carImage' }) },
    { key: 'models', label: formatMessage({ id: 'bootCars.carModel' }) },
    { key: 'carBody', label: formatMessage({ id: 'bootCars.carBody' }) },
    { key: 'modelYear', label: formatMessage({ id: 'bootCars.carYear' }) },
    { key: 'engine', label: formatMessage({ id: 'bootCars.carEngine' }) },
    { key: 'volume', label: formatMessage({ id: 'bootCars.carVolume' }) },
    { key: 'actions', label: formatMessage({ id: 'bootCars.actions' }) },
  ]

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent
        className={cn('w-[650px] p-10 bg-[#fcfcfc] dark:bg-zinc-900', className)}
        aria-describedby={undefined}
      >
        <FormProvider {...methods}>
          <Container className='h-full flex flex-col py-5 secondary dark:bg-zinc-900'>
            {cars && cars.length > 0 && (
              <FormDataTable
                name='cars'
                label={formatMessage({ id: 'bootCars.carsList' })}
                data={cars}
                columns={columns}
              />
            )}
          </Container>
        </FormProvider>
      </DialogContent>
    </Dialog>
  )
}
