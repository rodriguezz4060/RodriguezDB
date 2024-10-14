'use client'

import { CoolingFormData } from '@/@types/client-car'
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
  clientCar: CoolingFormData
}

export function CoolingForm({ clientCar }: Props) {
  const form = useForm<TFormEditClientCarSchema>({
    resolver: zodResolver(formEditClientCarSchema),
    defaultValues: {
      id: clientCar.id,

      waterPump: clientCar.waterPump ?? '',
      thermostat: clientCar.thermostat ?? '',
      radiator: clientCar.radiator ?? '',
      heaterRadiator: clientCar.heaterRadiator ?? '',
      airConditionerRadiator: clientCar.airConditionerRadiator ?? '',
      upperPipe: clientCar.upperPipe ?? '',
      lowerPipe: clientCar.lowerPipe ?? '',
      radiatorCap: clientCar.radiatorCap ?? '',
      expansionTankCap: clientCar.expansionTankCap ?? '',
    },
  })

  const { onSubmit, isSubmitting } = useClientCarForm()

  return (
    <FormProvider {...form}>
      <form className='gap-5' onSubmit={form.handleSubmit(onSubmit)}>
        <Tabs defaultValue='coolingAndHeating'>
          <TabsList>
            <TabsTrigger value='coolingAndHeating'>Охлаждение и Отопление</TabsTrigger>
            <TabsTrigger value='radiator'>Радиаторы</TabsTrigger>
            <TabsTrigger value='pipes'>Патрубки</TabsTrigger>
          </TabsList>

          <TabsContent value='coolingAndHeating'>
            <LabeledBox label='Помпа и термостат'>
              <FormInput name='waterPump' label='Водяная помпа' />
              <FormInput name='thermostat' label='Термостат' />
            </LabeledBox>
          </TabsContent>

          <TabsContent value='radiator'>
            <LabeledBox label='Радиаторы'>
              <FormInput name='radiator' label='Радиатор' />
              <FormInput name='heaterRadiator' label='Радиатор отопителя' />
              <FormInput name='airConditionerRadiator' label='Радиатор кондиционера' />
            </LabeledBox>

            <LabeledBox label='Крышка радиатора и бачка'>
              <FormInput name='radiatorCap' label='Крышка радиатора' />
              <FormInput name='expansionTankCap' label='Крышка расширительного бачка' />
            </LabeledBox>
          </TabsContent>

          <TabsContent value='pipes'>
            <LabeledBox label='Патрубки'>
              <FormInput name='upperPipe' label='Патрубок верхний' />
              <FormInput name='lowerPipe' label='Патрубок нижний' />
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
