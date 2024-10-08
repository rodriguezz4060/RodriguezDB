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
import { Loader, Save } from 'lucide-react'

export const AddCarForm: React.FC = () => {
  const { formatMessage } = useIntl()
  const [isLoading, setIsLoading] = useState(false)

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
      setIsLoading(true)
      await createCar(data)

      toast.success(formatMessage({ id: 'toast.carAddSuccess' }), {
        icon: '✅',
      })

      form.reset()
    } catch (error) {
      return toast.error(formatMessage({ id: 'toast.carAddError' }), {
        icon: '❌',
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <Title text={formatMessage({ id: 'addCar.formTitle' })} size='lg' className='font-bold' />
      <Container className='flex items-center justify-center'>
        <FormProvider {...form}>
          <form className='flex flex-col gap-5 w-96 mt-10' onSubmit={form.handleSubmit(onSubmit)}>
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
            <FormInput
              name='modelYear'
              label={formatMessage({ id: 'addCar.modelYear' })}
              required
            />
            <FormInput name='engine' label={formatMessage({ id: 'addCar.engine' })} required />
            <FormInput name='volume' label={formatMessage({ id: 'addCar.volume' })} required />

            <Button variant='default' type='submit' disabled={isLoading} className='mt-5 mb-20'>
              {isLoading ? (
                <>
                  <Loader size={20} className='mr-2 animate-spin' />
                  {formatMessage({ id: 'addCar.loading' })}
                </>
              ) : (
                <>
                  <Save size={20} className='mr-2' />
                  {formatMessage({ id: 'addCar.saveButton' })}
                </>
              )}
            </Button>
          </form>
        </FormProvider>
      </Container>
    </>
  )
}
