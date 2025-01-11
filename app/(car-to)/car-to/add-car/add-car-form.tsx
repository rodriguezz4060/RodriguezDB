'use client'

import { Brands } from '@/@types/prisma'
import { FormInput, FormSelect, LabeledBox } from '@/shared/components/shared'
import {
  formCarSchema,
  TFormCarSchema,
} from '@/shared/components/shared/add-forms/schemas/add-car-schemas'
import { Button } from '@/shared/components/ui'
import { useAddCarToForm } from '@/shared/hooks'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'
import { useIntl } from 'react-intl'

interface Props {
  carBrands: Brands[]
  className?: string
}

export function AddCarForm({ carBrands, className }: Props) {
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

  const { onSubmit, isLoading } = useAddCarToForm(form)

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
