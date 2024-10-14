'use client'

import { CarBodyFormData } from '@/@types/client-car'
import { FormInput, LabeledBox } from '@/shared/components/shared'
import {
  formEditClientCarSchema,
  TFormEditClientCarSchema,
} from '@/shared/components/shared/clients/schemas/edit-client-car-schemas'
import { Button } from '@/shared/components/ui'
import { Tabs, TabsContent, TabsTrigger } from '@/shared/components/ui/tabs'
import { useClientCarForm } from '@/shared/hooks/'
import { zodResolver } from '@hookform/resolvers/zod'
import { TabsList } from '@radix-ui/react-tabs'
import { FormProvider, useForm } from 'react-hook-form'

interface Props {
  clientCar: CarBodyFormData
}

export function CarBodyForm({ clientCar }: Props) {
  const form = useForm<TFormEditClientCarSchema>({
    resolver: zodResolver(formEditClientCarSchema),
    defaultValues: {
      id: clientCar.id,

      driversWiper: clientCar.driversWiper ?? '',
      passengerWiper: clientCar.passengerWiper ?? '',
      hoodShockAbsorbers: clientCar.hoodShockAbsorbers ?? '',
    },
  })

  const { onSubmit, isSubmitting } = useClientCarForm()

  return (
    <FormProvider {...form}>
      <form className='gap-5' onSubmit={form.handleSubmit(onSubmit)}>
        <Tabs defaultValue='wiper'>
          <TabsList>
            <TabsTrigger value='wiper'>Дворник</TabsTrigger>
            <TabsTrigger value='hoodShockAbsorbers'>Амортизаторы капота</TabsTrigger>
          </TabsList>

          <TabsContent value='wiper'>
            <LabeledBox label='Дворник'>
              <FormInput name='driversWiper' label='Водителя' />
              <FormInput name='passengerWiper' label='Пассажира' />
            </LabeledBox>
          </TabsContent>

          <TabsContent value='hoodShockAbsorbers'>
            <LabeledBox label='Амортизаторы капота'>
              <FormInput name='hoodShockAbsorbers' label='Амортизаторы капота' />
            </LabeledBox>
          </TabsContent>
        </Tabs>

        <Button disabled={isSubmitting} className='text-base mt-5 col-span-full' type='submit'>
          Сохранить
        </Button>
      </form>
    </FormProvider>
  )
}
