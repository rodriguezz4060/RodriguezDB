'use client'

import React from 'react'
import { useIntl } from 'react-intl'
import { Container } from '../container'
import { CarWithBrand } from '@/@types/prisma'
import { FormProvider, useForm } from 'react-hook-form'
import { FormDataTable } from '../form'

interface Props {
  cars: CarWithBrand[]
  classNames?: string
}

export const CarsPage: React.FC<Props> = ({ cars, classNames }) => {
  const { formatMessage } = useIntl()
  const methods = useForm()

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
  )
}
