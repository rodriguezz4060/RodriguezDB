// pages/cars/[id]/edit.tsx

'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'
import React, { useEffect, useState } from 'react'
import { CarWithBoot, CarWithBrand } from '@/@types/prisma'
import toast from 'react-hot-toast'
import { useIntl } from 'react-intl'
import { BootDustCover, CarBrand } from '@prisma/client'
import { getCarsBrands } from '@/shared/services/cars'
import { Container } from '../container'
import { FormInput, FormSelect } from '../form'
import { Button } from '../../ui'
import { useRouter } from 'next/navigation'
import { Title } from '../title'
import { updatedCar } from '@/app/actions'
import { formEditCarSchema, TFormEditCarSchema } from '../add-forms/schemas/edit-car-schema'
import { getBootDustCover } from '@/shared/services/boot-dust-cover'

interface Props {
  car: CarWithBoot
}

export const EditCarForm: React.FC<Props> = ({ car }) => {
  const { formatMessage } = useIntl()
  const router = useRouter()

  const form = useForm<TFormEditCarSchema>({
    resolver: zodResolver(formEditCarSchema),
    defaultValues: {
      id: car.id,
      carBrandId: car.carBrandId,
      imageUrl: car.imageUrl,
      models: car.models,
      carBody: car.carBody,
      modelYear: car.modelYear,
      engine: car.engine,
      volume: car.volume,
      bootDustCoverId: car.bootDustCoverId,
    },
  })

  console.log(car)

  const [carBrands, setCarBrands] = useState<CarBrand[]>([])
  const [bootDustCovers, setBootDustCovers] = useState<BootDustCover[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [carBrands, bootDustCovers] = await Promise.all([getCarsBrands(), getBootDustCover()])

        setCarBrands(carBrands)
        setBootDustCovers(bootDustCovers)
      } catch (error) {
        console.error('Error fetching data:', error)
        toast.error(formatMessage({ id: 'toast.fetchingError' }))
      }
    }

    fetchData()
  }, [])

  const onSubmit = async (data: TFormEditCarSchema) => {
    try {
      await updatedCar(data)

      toast.success('Автомобиль обновлен 🚗', {
        icon: '✅',
      })

      router.push('/cars')
    } catch (error) {
      return toast.error('Ошибка при обновлении автомобиля', {
        icon: '❌',
      })
    }
  }

  return (
    <Container className='my-10'>
      <Title text={`Редактирование автомобиля | #${car.id}`} size='md' className='font-bold' />
      <div className='flex gap-[80px]'>
        <div className='w-[400px]'>
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

              <Button
                disabled={form.formState.isSubmitting}
                className='text-base mt-10'
                type='submit'
              >
                Сохранить
              </Button>
            </form>
          </FormProvider>
        </div>

        <div className='flex-1'>
          <div className='flex flex-col w-[400px] gap-5 mt-9'>
            <FormProvider {...form}>
              <FormSelect name='bootDustCoverId' label='Пыльник'>
                {bootDustCovers.map(dustCover => (
                  <option key={dustCover.id} value={dustCover.id}>
                    {dustCover.partNumber}
                  </option>
                ))}
              </FormSelect>
            </FormProvider>

            <div>
              <Title text='Связанные пыльники' size='sm' className='font-bold' />
              <ul>
                {car.bootDustCover.map(dustCover => (
                  <li key={dustCover.id}>{dustCover.partNumber}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}
