'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'
import React, { useEffect, useState } from 'react'
import { CarBrand } from '@prisma/client'
import toast from 'react-hot-toast'
import { createCar } from '@/app/actions'
import { Container } from '../container'
import { FormInput, FormSelect } from '../form'
import { formCarSchema, TFormCarSchema } from './schemas/add-car-schemas'
import { Title } from '../title'
import { Button } from '../../ui'

import { useIntl } from 'react-intl'
import { getCarsBrands } from '@/shared/services/cars'

export const AddCarForm: React.FC = () => {
  const { formatMessage } = useIntl()

  const form = useForm<TFormCarSchema>({
    resolver: zodResolver(formCarSchema),
    defaultValues: {
      imageUrl: '',
      models: '',
      carBody: '',
      modelYear: '',
      engine: '',
      volume: '',
      carBrandId: undefined,
    },
  })

  const [carBrands, setCarBrands] = useState<CarBrand[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const carBrands = await getCarsBrands()
        setCarBrands(carBrands)
      } catch (error) {
        console.error('Error fetching car brands:', error)
        toast.error(formatMessage({ id: 'toast.carBrandsFetchingError' }))
      }
    }

    fetchData()
  }, [])

  const onSubmit = async (data: TFormCarSchema) => {
    try {
      await createCar(data)

      toast.success('Автомобиль добавлен 🚗', {
        icon: '✅',
      })
    } catch (error) {
      return toast.error('Ошибка при добавлении автомобиля', {
        icon: '❌',
      })
    }
  }

  return (
    <Container className='my-10'>
      <Title text='Добавление нового автомобиля' size='md' className='font-bold' />

      <FormProvider {...form}>
        <form className='flex flex-col gap-5 w-96 mt-10' onSubmit={form.handleSubmit(onSubmit)}>
          <FormSelect name='carBrandId' label='Бренд автомобиля' required>
            {carBrands.map(brand => (
              <option key={brand.id} value={brand.id}>
                {brand.name}
              </option>
            ))}
          </FormSelect>
          <FormInput name='imageUrl' label='URL изображения' />
          <FormInput name='models' label='Модель' required />
          <FormInput name='carBody' label='Кузов' required />
          <FormInput name='modelYear' label='Год выпуска' required />
          <FormInput name='engine' label='Двигатель' required />
          <FormInput name='volume' label='Объем двигателя' required />

          <Button disabled={form.formState.isSubmitting} className='text-base mt-10' type='submit'>
            Добавить
          </Button>
        </form>
      </FormProvider>
    </Container>
  )
}
