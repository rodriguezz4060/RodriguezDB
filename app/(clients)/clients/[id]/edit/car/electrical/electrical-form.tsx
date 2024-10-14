'use client'

import { ElectricalFormData } from '@/@types/client-car'
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
  clientCar: ElectricalFormData
}

export function ElectricalForm({ clientCar }: Props) {
  const form = useForm<TFormEditClientCarSchema>({
    resolver: zodResolver(formEditClientCarSchema),
    defaultValues: {
      id: clientCar.id,

      oilSensor: clientCar.oilSensor ?? '',
      ventilatorSensor: clientCar.ventilatorSensor ?? '',
      dashboardTemperatureSensor: clientCar.dashboardTemperatureSensor ?? '',
      airConditionerSensor: clientCar.airConditionerSensor ?? '',
      reverseSensor: clientCar.reverseSensor ?? '',
      washerMotor: clientCar.washerMotor ?? '',
      handwheelCable: clientCar.handwheelCable ?? '',

      brakeLightBulbs: clientCar.brakeLightBulbs ?? '',
      parkingLightBulbsFront: clientCar.parkingLightBulbsFront ?? '',
      parkingLightBulbsRear: clientCar.parkingLightBulbsRear ?? '',
      sideSignalBulbs: clientCar.sideSignalBulbs ?? '',
      reverseLightBulbs: clientCar.reverseLightBulbs ?? '',
      mainHeadlightBulbs: clientCar.mainHeadlightBulbs ?? '',
      fogLightBulbs: clientCar.fogLightBulbs ?? '',

      sparkPlug: clientCar.sparkPlug ?? '',
      ignitionCoil: clientCar.ignitionCoil ?? '',
      ignitionWires: clientCar.ignitionWires ?? '',

      timingCover: clientCar.timingCover ?? '',
      slider: clientCar.slider ?? '',

      lambdaProbe1: clientCar.lambdaProbe1 ?? '',
      lambdaProbe2: clientCar.lambdaProbe2 ?? '',

      frontAbsSensorLeft: clientCar.frontAbsSensorLeft ?? '',
      frontAbsSensorRight: clientCar.frontAbsSensorRight ?? '',
      rearAbsSensorLeft: clientCar.rearAbsSensorLeft ?? '',
      rearAbsSensorRight: clientCar.rearAbsSensorRight ?? '',
    },
  })

  const { onSubmit, isSubmitting } = useClientCarForm()

  return (
    <FormProvider {...form}>
      <form className='gap-5' onSubmit={form.handleSubmit(onSubmit)}>
        <Tabs defaultValue='sensors'>
          <TabsList>
            <TabsTrigger value='sensors'>Датчики</TabsTrigger>
            <TabsTrigger value='washerMotor'>Моторчик омывателя</TabsTrigger>
            <TabsTrigger value='handwheelCable'>Подрулевой шлейф</TabsTrigger>
            <TabsTrigger value='lambdaProbe'>Лямбда зонды</TabsTrigger>
            <TabsTrigger value='sparkPlugs'>Свечи, Катушки и Провода</TabsTrigger>
            <TabsTrigger value='lightBulbs'>Лампочки</TabsTrigger>
          </TabsList>

          <TabsContent value='sensors'>
            <LabeledBox label='Датчики'>
              <FormInput name='oilSensor' label='Масляный' />
              <FormInput name='ventilatorSensor' label='Вентилятора' />
              <FormInput name='dashboardTemperatureSensor' label='Температуры приборной панели' />
              <FormInput name='airConditionerSensor' label='Датчик кондиционера' />
              <FormInput name='reverseSensor' label='Датчик заднего хода' />
            </LabeledBox>
          </TabsContent>

          <TabsContent value='washerMotor'>
            <LabeledBox label='Моторчик омывателя'>
              <FormInput name='washerMotor' label='Моторчик омывателя' />
            </LabeledBox>
          </TabsContent>

          <TabsContent value='handwheelCable'>
            <LabeledBox label='Подрулевой шлейф'>
              <FormInput name='handwheelCable' label='Подрулевой шлейф' />
            </LabeledBox>
          </TabsContent>

          <TabsContent value='lambdaProbe'>
            <LabeledBox label='Лямбда зонды'>
              <FormInput name='lambdaProbe1' label='Лямбда зонд 1' />
              <FormInput name='lambdaProbe2' label='Лямбда зонд 2' />
            </LabeledBox>
          </TabsContent>

          <TabsContent value='absSensor'>
            <LabeledBox label='Датчики АБС'>
              <FormInput name='frontAbsSensorLeft' label='Передний левый' />
              <FormInput name='frontAbsSensorRight' label='Передний правый' />
              <FormInput name='rearAbsSensorLeft' label='Задний левый' />
              <FormInput name='rearAbsSensorRight' label='Задний правый' />
            </LabeledBox>
          </TabsContent>

          <TabsContent value='sparkPlugs'>
            <LabeledBox label='Свечи'>
              <FormInput name='sparkPlug' label='Свеча зажигания' />
            </LabeledBox>

            <LabeledBox label='Катушка'>
              <FormInput name='ignitionCoil' label='Катушка зажигания' />
            </LabeledBox>

            <LabeledBox label='Провода'>
              <FormInput name='ignitionWires' label='Провода зажигания' />
            </LabeledBox>

            <LabeledBox label='Трамблер'>
              <FormInput name='timingCover' label='Крышка трамблера' />
              <FormInput name='slider' label='Бегунок' />
            </LabeledBox>
          </TabsContent>

          <TabsContent value='lightBulbs'>
            <LabeledBox label='Лампочки'>
              <FormInput name='mainHeadlightBulbs' label='Основной фары' />
              <FormInput name='fogLightBulbs' label='Противотуманных фар' />
              <FormInput name='parkingLightBulbsRear' label='Габарит задние' />
              <FormInput name='sideSignalBulbs' label='Поворотов' />
              <FormInput name='reverseLightBulbs' label='Заднего хода' />
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
