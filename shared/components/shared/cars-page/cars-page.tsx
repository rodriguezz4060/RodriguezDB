'use client'

import React, { useState } from 'react'
import { useIntl } from 'react-intl'
import { Container } from '../container'
import { CarWithBrand } from '@/@types/prisma'
import { FormProvider, useForm } from 'react-hook-form'
import { FormDataTable } from '../form'
import { DataTableColumns } from '@/shared/constants/table'
import { AddCarButton } from '../buttons'

interface Props {
  cars: CarWithBrand[]
  className?: string
}

export const CarsPage: React.FC<Props> = ({ cars: initialCars, className }) => {
  const { formatMessage } = useIntl()
  const columns = DataTableColumns()
  const methods = useForm()
  const [cars, setCars] = useState(initialCars)

  const handleDeleteCar = (deletedCarId: number) => {
    setCars(prevCars => prevCars.filter(car => car.id !== deletedCarId))
  }

  return (
    <FormProvider {...methods}>
      <Container className='h-full flex flex-col py-5 secondary dark:bg-zinc-900'>
        {cars && cars.length > 0 ? (
          <FormDataTable
            name='cars'
            label={formatMessage({ id: 'bootCars.carsList' })}
            data={cars}
            columns={columns}
            itemsPerPage={25}
            onDeleteCar={handleDeleteCar}
          />
        ) : (
          <div className='flex flex-col items-center justify-center h-full'>
            <p className='text-lg text-gray-600 dark:text-gray-400 mb-4'>
              {formatMessage({ id: 'bootCars.noInformation' })}
            </p>
            <AddCarButton />
          </div>
        )}
      </Container>
    </FormProvider>
  )
}

export const dynamic = 'auto'
