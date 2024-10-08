'use client'

import React from 'react'
import { useIntl } from 'react-intl'
import { Container } from '../container'
import { CarWithBrand } from '@/@types/prisma'
import { FormProvider, useForm } from 'react-hook-form'
import { FormDataTable } from '../form'
import { DataTableColumns } from '@/shared/constants/table'

interface Props {
  cars: CarWithBrand[]
  classNames?: string
}

export const CarsPage: React.FC<Props> = ({ cars, classNames }) => {
  const { formatMessage } = useIntl()
  const columns = DataTableColumns()
  const methods = useForm()

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
