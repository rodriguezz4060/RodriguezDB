'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'
import React, { useState } from 'react'
import { Brands } from '@/@types/prisma'
import toast from 'react-hot-toast'
import { useIntl } from 'react-intl'
import { useRouter } from 'next/navigation'
import { updatedOilCar } from '@/app/actions'
import {
  formEditCarSchema,
  TFormEditCarSchema,
} from '@/shared/components/shared/add-forms/schemas/edit-car-schema'
import { FormInput, FormSelect, LabeledBox } from '@/shared/components/shared'
import { Car } from '@prisma/client'
import { Button } from '@/shared/components/ui'

interface Props {
  car: Car
  carBrands: Brands[]
}

export const CarForm: React.FC<Props> = ({ car, carBrands }) => {
  const { formatMessage } = useIntl()
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const form = useForm<TFormEditCarSchema>({
    resolver: zodResolver(formEditCarSchema),
    defaultValues: {
      id: car.id,
      carBrandId: car.carBrandId,
      imageUrl: car.imageUrl === null ? undefined : car.imageUrl,
      models: car.models,
      carBody: car.carBody,
      modelYear: car.modelYear,
      engine: car.engine,
      volume: car.volume,
    },
  })

  const onSubmit = async (data: TFormEditCarSchema) => {
    try {
      setIsLoading(true)
      await updatedOilCar(data)

      toast.success('Автомобиль обновлен 🚗', {
        icon: '✅',
      })
    } catch (error) {
      return toast.error('Ошибка при обновлении автомобиля', {
        icon: '❌',
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <LabeledBox label={''}>
          <FormSelect name='carBrandId' label={formatMessage({ id: 'addCar.carBrand' })} required>
            {carBrands.map(brand => (
              <option key={brand.id} value={brand.id}>
                {brand.name}
              </option>
            ))}
          </FormSelect>
          <FormInput name='imageUrl' label={formatMessage({ id: 'addCar.imageUrl' })} />
          <FormInput name='models' label={formatMessage({ id: 'addCar.carModel' })} required />
          <FormInput name='carBody' label={formatMessage({ id: 'addCar.carBody' })} required />
          <FormInput name='modelYear' label={formatMessage({ id: 'addCar.modelYear' })} required />
          <FormInput name='engine' label={formatMessage({ id: 'addCar.engine' })} required />
          <FormInput name='volume' label={formatMessage({ id: 'addCar.volume' })} required />
        </LabeledBox>

        <Button disabled={isLoading} className='text-base mt-5 col-span-full' type='submit'>
          {formatMessage({ id: 'clients.saveButton' })}
        </Button>
      </form>
    </FormProvider>
  )
}
