'use client'

import { ConsumablesFormData } from '@/@types/client-oil-car'
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
  clientCar: ConsumablesFormData
}

export function ConsumablesForm({ clientCar }: Props) {
  const form = useForm<TFormEditClientCarSchema>({
    resolver: zodResolver(formEditClientCarSchema),
    defaultValues: {
      id: clientCar.id,

      frontBrake: clientCar.frontBrake ?? '',
      rearBrake: clientCar.rearBrake ?? '',
      handbrakeBrakePads: clientCar.handbrakeBrakePads ?? '',
      waterPump: clientCar.waterPump ?? '',
      thermostat: clientCar.thermostat ?? '',
      sparkPlug: clientCar.sparkPlug ?? '',
      driversWiper: clientCar.driversWiper ?? '',
      passengerWiper: clientCar.passengerWiper ?? '',
      oilFilter: clientCar.oilFilter ?? '',
      airFilter: clientCar.airFilter ?? '',
      fuelFilter: clientCar.fuelFilter ?? '',
      cabinFilter: clientCar.cabinFilter ?? '',
      automaticTransmissionOilPanGasket: clientCar.automaticTransmissionOilPanGasket ?? '',
      automaticTransmissionFilter: clientCar.automaticTransmissionFilter ?? '',
      automaticTransmissionFillerGasket: clientCar.automaticTransmissionFillerGasket ?? '',
      automaticTransmissionOilPanGasket2: clientCar.automaticTransmissionOilPanGasket2 ?? '',
      automaticTransmissionFilter2: clientCar.automaticTransmissionFilter2 ?? '',
      transmissionDrainPlug: clientCar.transmissionDrainPlug ?? '',
      transmissionDrainPlugGasket: clientCar.transmissionDrainPlugGasket ?? '',
      ignitionCoil: clientCar.ignitionCoil ?? '',
    },
  })

  const { onSubmit, isSubmitting } = useClientCarForm()

  return (
    <FormProvider {...form}>
      <form className='gap-5' onSubmit={form.handleSubmit(onSubmit)}>
        <Tabs defaultValue='filter'>
          <TabsList>
            <TabsTrigger value='filter'>Фильтра ДВС</TabsTrigger>
            <TabsTrigger value='gearbox'>Коробка передач</TabsTrigger>
            <TabsTrigger value='brake'>Тормоза</TabsTrigger>
            <TabsTrigger value='cooling'>Охлаждение</TabsTrigger>
            <TabsTrigger value='ignition'>Зажигание</TabsTrigger>
            <TabsTrigger value='driversWiper'>Дворники</TabsTrigger>
          </TabsList>

          <TabsContent value='filter'>
            <LabeledBox label='Фильтра ДВС'>
              <FormInput name='oilFilter' label='Масляный' />
              <FormInput name='airFilter' label='Воздушный' />
              <FormInput name='fuelFilter' label='Топливный' />
              <FormInput name='cabinFilter' label='Салона' />
            </LabeledBox>
          </TabsContent>

          <TabsContent value='gearbox'>
            <LabeledBox label='Фильтра АКПП'>
              <FormInput name='automaticTransmissionFilter' label='Фильтр' />
              <FormInput name='automaticTransmissionOilPanGasket' label='Прокладка поддона' />
              <FormInput name='automaticTransmissionFillerGasket' label='Прокладка фильтра' />
            </LabeledBox>

            <LabeledBox label='Фильтра тонкой очистки АКПП'>
              <FormInput name='automaticTransmissionFilter2' label='Фильтр' />
              <FormInput name='automaticTransmissionOilPanGasket2' label='Прокладка' />
            </LabeledBox>

            <LabeledBox label='Сливная пробка'>
              <FormInput name='transmissionDrainPlug' label='Сливная пробка АКПП' />
              <FormInput name='transmissionDrainPlugGasket' label='Прокладка сливной пробки АКПП' />
            </LabeledBox>
          </TabsContent>

          <TabsContent value='brake'>
            <LabeledBox label='Колодки'>
              <FormInput name='frontBrake' label='Передние' />
              <FormInput name='rearBrake' label='Задние' />
              <FormInput name='handbrakeBrakePads' label='Колодки ручника' />
            </LabeledBox>
          </TabsContent>

          <TabsContent value='cooling'>
            <LabeledBox label='Охлаждение'>
              <FormInput name='waterPump' label='Водяная помпа' />
              <FormInput name='thermostat' label='Термостат' />
            </LabeledBox>
          </TabsContent>

          <TabsContent value='ignition'>
            <LabeledBox label='Свечи'>
              <FormInput name='sparkPlug' label='Свеча зажигания' />
            </LabeledBox>

            <LabeledBox label='Катушка'>
              <FormInput name='ignitionCoil' label='Катушка зажигания' />
            </LabeledBox>
          </TabsContent>

          <TabsContent value='driversWiper'>
            <LabeledBox label='Дворники'>
              <FormInput name='driversWiper' label='Дворник водителя' />
              <FormInput name='passengerWiper' label='Дворник пассажира' />
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
