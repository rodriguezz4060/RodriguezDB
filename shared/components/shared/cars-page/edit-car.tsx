'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'
import React from 'react'
import { CarWithBoot } from '@/@types/prisma'
import { useIntl } from 'react-intl'
import { BootDustCover, CarBrand } from '@prisma/client'
import { Container } from '../container'
import { FormInput, FormSelect } from '../form'
import { Button } from '../../ui'
import { Title } from '../title'
import { formEditCarSchema, TFormEditCarSchema } from '../add-forms/schemas/edit-car-schema'
import { DeleteBootToCarsButton } from '../buttons'
import { useEditCarForm } from '@/shared/hooks'

interface Props {
  car: CarWithBoot
  carBrands: CarBrand[]
  bootDustCovers: BootDustCover[]
}

export const EditCarForm: React.FC<Props> = ({ car, carBrands, bootDustCovers }) => {
  const { formatMessage } = useIntl()

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

  const { isLoading, connectedDustCovers, onSubmit, handleRemoveDustCover } = useEditCarForm(
    car.id,
    car.bootDustCover
  )

  return (
    <Container>
      <Title
        text={`${formatMessage({ id: 'carToPage.editCar' })} | ${car.models}`}
        size='md'
        className='font-bold'
      />
      <div className='flex gap-[80px]'>
        <div className='w-[400px]'>
          <FormProvider {...form}>
            <form className='flex flex-col gap-5 w-96 mt-10' onSubmit={form.handleSubmit(onSubmit)}>
              <FormSelect
                name='carBrandId'
                label={formatMessage({ id: 'carToPage.carBrandId' })}
                required
              >
                {carBrands.map(brand => (
                  <option key={brand.id} value={brand.id}>
                    {brand.name}
                  </option>
                ))}
              </FormSelect>
              <FormInput name='imageUrl' label={formatMessage({ id: 'carToPage.imageUrl' })} />
              <FormInput name='models' label={formatMessage({ id: 'carToPage.models' })} required />
              <FormInput
                name='carBody'
                label={formatMessage({ id: 'carToPage.carBody' })}
                required
              />
              <FormInput
                name='modelYear'
                label={formatMessage({ id: 'carToPage.modelYear' })}
                required
              />
              <FormInput name='engine' label={formatMessage({ id: 'carToPage.engine' })} required />
              <FormInput name='volume' label={formatMessage({ id: 'carToPage.volume' })} required />
              <Button disabled={isLoading} className='text-base mt-5 mb-5' type='submit'>
                {formatMessage({ id: 'addBootForm.editSave' })}
              </Button>
            </form>
          </FormProvider>
        </div>
        <div className='flex-1'>
          <div className='flex flex-col w-[400px] gap-5 mt-10'>
            <FormProvider {...form}>
              <FormSelect name='bootDustCoverId' label='Пыльник' required={false}>
                {bootDustCovers.map((dustCover, i) => (
                  <option key={dustCover.id} value={dustCover.id}>
                    {dustCover.partNumber}
                  </option>
                ))}
              </FormSelect>
            </FormProvider>

            <div>
              <Title
                text={formatMessage({ id: 'carToPage.connectBoot' })}
                size='sm'
                className='font-bold'
              />
              <ul>
                {connectedDustCovers.map(dustCover => (
                  <DeleteBootToCarsButton
                    key={dustCover.id}
                    dustCover={dustCover}
                    onRemove={handleRemoveDustCover}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}
