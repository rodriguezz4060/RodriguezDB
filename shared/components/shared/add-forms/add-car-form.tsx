'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'
import React from 'react'
import { Container } from '../container'
import { FormInput, FormSelect, LabeledBox } from '../form'
import { formCarSchema, TFormCarSchema } from './schemas/add-car-schemas'
import { Title } from '../title'
import { Button } from '../../ui'
import { useIntl } from 'react-intl'
import { ArrowLeft, Loader, Save } from 'lucide-react'
import { useAddCarForm } from '@/shared/hooks'
import { Brands } from '@/@types/prisma'
import Link from 'next/link'

interface Props {
  carBrands: Brands[]
  className?: string
}

export const AddCarForm: React.FC<Props> = ({ carBrands }) => {
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

  const { onSubmit, isLoading } = useAddCarForm(form)

  return (
    <>
      <div className='flex items-center justify-between mt-4'>
        <Title text={formatMessage({ id: 'addCar.formTitle' })} size='lg' className='font-bold' />
        <Link href='/cars/'>
          <Button className='font-bold px-4 py-2'>
            <ArrowLeft size={20} className='mr-2' />
            {formatMessage({ id: 'addBootForm.backButton' })}
          </Button>
        </Link>
      </div>
      <Container className='flex items-center justify-center pb-10'>
        <div className='flex gap-10 w-[800px]'>
          <div className='flex-1'>
            <FormProvider {...form}>
              <form className='flex flex-col gap-5 w-96' onSubmit={form.handleSubmit(onSubmit)}>
                <LabeledBox label={''}>
                  <FormSelect
                    name='carBrandId'
                    label={formatMessage({ id: 'addCar.carBrand' })}
                    required
                  >
                    {carBrands.map(brand => (
                      <option key={brand.id} value={brand.id}>
                        {brand.name}
                      </option>
                    ))}
                  </FormSelect>
                  <FormInput name='imageUrl' label={formatMessage({ id: 'addCar.imageUrl' })} />
                </LabeledBox>
              </form>
            </FormProvider>
          </div>

          <div className='flex-1'>
            <FormProvider {...form}>
              <form className='flex flex-col gap-5 w-96' onSubmit={form.handleSubmit(onSubmit)}>
                <LabeledBox label={''}>
                  <FormInput
                    name='models'
                    label={formatMessage({ id: 'addCar.carModel' })}
                    required
                  />
                  <FormInput
                    name='carBody'
                    label={formatMessage({ id: 'addCar.carBody' })}
                    required
                  />
                  <FormInput
                    name='modelYear'
                    label={formatMessage({ id: 'addCar.modelYear' })}
                    required
                  />
                  <FormInput
                    name='engine'
                    label={formatMessage({ id: 'addCar.engine' })}
                    required
                  />
                  <FormInput
                    name='volume'
                    label={formatMessage({ id: 'addCar.volume' })}
                    required
                  />
                </LabeledBox>
                <Button variant='default' type='submit' disabled={isLoading} className='mt-5 '>
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
          </div>
        </div>
      </Container>
    </>
  )
}
