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
import { useIntl } from 'react-intl'

interface Props {
  clientCar: ElectricalFormData
}

export function ElectricalForm({ clientCar }: Props) {
  const { formatMessage } = useIntl()

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
            <TabsTrigger value='sensors'>{formatMessage({ id: 'clients.sensors' })}</TabsTrigger>
            <TabsTrigger value='washerMotor'>
              {formatMessage({ id: 'clients.washerMotor' })}
            </TabsTrigger>
            <TabsTrigger value='handwheelCable'>
              {formatMessage({ id: 'clients.handwheelCable' })}
            </TabsTrigger>
            <TabsTrigger value='lambdaProbe'>{formatMessage({ id: 'clients.lambda' })}</TabsTrigger>
            <TabsTrigger value='absSensor'>
              {formatMessage({ id: 'clients.absSensor' })}
            </TabsTrigger>
            <TabsTrigger value='sparkPlugs'>
              {formatMessage({ id: 'clients.sparkPlugsIgnitionCoil' })}
            </TabsTrigger>
            <TabsTrigger value='lightBulbs'>
              {formatMessage({ id: 'clients.lightBulbs' })}
            </TabsTrigger>
          </TabsList>

          <TabsContent value='sensors'>
            <LabeledBox label={formatMessage({ id: 'clients.sensors' })}>
              <FormInput name='oilSensor' label={formatMessage({ id: 'clientTab.oilSensor' })} />
              <FormInput
                name='ventilatorSensor'
                label={formatMessage({ id: 'clientTab.ventilatorSensor' })}
              />
              <FormInput
                name='dashboardTemperatureSensor'
                label={formatMessage({ id: 'clientTab.dashboardTemperatureSensor' })}
              />
              <FormInput
                name='airConditionerSensor'
                label={formatMessage({ id: 'clientTab.airConditionerSensor' })}
              />
              <FormInput
                name='reverseSensor'
                label={formatMessage({ id: 'clientTab.reverseSensor' })}
              />
            </LabeledBox>
          </TabsContent>

          <TabsContent value='washerMotor'>
            <LabeledBox label={formatMessage({ id: 'clients.washerMotor' })}>
              <FormInput
                name='washerMotor'
                label={formatMessage({ id: 'clientTab.washerMotor' })}
              />
            </LabeledBox>
          </TabsContent>

          <TabsContent value='handwheelCable'>
            <LabeledBox label={formatMessage({ id: 'clients.handwheelCable' })}>
              <FormInput
                name='handwheelCable'
                label={formatMessage({ id: 'clientTab.handwheelCable' })}
              />
            </LabeledBox>
          </TabsContent>

          <TabsContent value='lambdaProbe'>
            <LabeledBox label={formatMessage({ id: 'clients.lambda' })}>
              <FormInput
                name='lambdaProbe1'
                label={formatMessage({ id: 'clientTab.lambdaProbe1' })}
              />
              <FormInput
                name='lambdaProbe2'
                label={formatMessage({ id: 'clientTab.lambdaProbe2' })}
              />
            </LabeledBox>
          </TabsContent>

          <TabsContent value='absSensor'>
            <LabeledBox label={formatMessage({ id: 'clients.absSensor' })}>
              <FormInput
                name='frontAbsSensorLeft'
                label={formatMessage({ id: 'clientTab.frontAbsSensorLeft' })}
              />
              <FormInput
                name='frontAbsSensorRight'
                label={formatMessage({ id: 'clientTab.frontAbsSensorRight' })}
              />
              <FormInput
                name='rearAbsSensorLeft'
                label={formatMessage({ id: 'clientTab.rearAbsSensorLeft' })}
              />
              <FormInput
                name='rearAbsSensorRight'
                label={formatMessage({ id: 'clientTab.rearAbsSensorRight' })}
              />
            </LabeledBox>
          </TabsContent>

          <TabsContent value='sparkPlugs'>
            <LabeledBox label={formatMessage({ id: 'clients.sparkPlugs' })}>
              <FormInput name='sparkPlug' label={formatMessage({ id: 'clientTab.sparkPlug' })} />
            </LabeledBox>

            <LabeledBox label={formatMessage({ id: 'clientTab.ignitionCoil' })}>
              <FormInput
                name='ignitionCoil'
                label={formatMessage({ id: 'clientTab.ignitionCoil' })}
              />
            </LabeledBox>

            <LabeledBox label={formatMessage({ id: 'clients.ignitionWires' })}>
              <FormInput
                name='ignitionWires'
                label={formatMessage({ id: 'clientTab.ignitionWires' })}
              />
            </LabeledBox>

            <LabeledBox label={formatMessage({ id: 'clients.trampler' })}>
              <FormInput
                name='timingCover'
                label={formatMessage({ id: 'clientTab.timingCover' })}
              />
              <FormInput name='slider' label={formatMessage({ id: 'clientTab.slider' })} />
            </LabeledBox>
          </TabsContent>

          <TabsContent value='lightBulbs'>
            <LabeledBox label={formatMessage({ id: 'clients.lightBulbs' })}>
              <FormInput
                name='mainHeadlightBulbs'
                label={formatMessage({ id: 'clientTab.mainHeadlightBulbs' })}
              />
              <FormInput
                name='fogLightBulbs'
                label={formatMessage({ id: 'clientTab.fogLightBulbs' })}
              />
              <FormInput
                name='parkingLightBulbsRear'
                label={formatMessage({ id: 'clientTab.parkingLightBulbsRear' })}
              />
              <FormInput
                name='sideSignalBulbs'
                label={formatMessage({ id: 'clientTab.sideSignalBulbs' })}
              />
              <FormInput
                name='reverseLightBulbs'
                label={formatMessage({ id: 'clientTab.reverseLightBulbs' })}
              />
            </LabeledBox>
          </TabsContent>
        </Tabs>

        <Button disabled={isSubmitting} className='text-base mt-5 col-span-full' type='submit'>
          {formatMessage({ id: 'clients.saveButton' })}
        </Button>
      </form>
    </FormProvider>
  )
}
