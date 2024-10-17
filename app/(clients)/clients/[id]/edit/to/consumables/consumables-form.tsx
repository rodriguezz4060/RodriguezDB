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
import { useIntl } from 'react-intl'

interface Props {
  clientCar: ConsumablesFormData
}

export function ConsumablesForm({ clientCar }: Props) {
  const { formatMessage } = useIntl()

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
            <TabsTrigger value='filter'>{formatMessage({ id: 'clientTo.filter' })}</TabsTrigger>
            <TabsTrigger value='gearbox'>{formatMessage({ id: 'clientTo.gearbox' })}</TabsTrigger>
            <TabsTrigger value='brake'>{formatMessage({ id: 'clientTo.brake' })}</TabsTrigger>
            <TabsTrigger value='cooling'>{formatMessage({ id: 'clientTo.cooling' })}</TabsTrigger>
            <TabsTrigger value='ignition'>{formatMessage({ id: 'clientTo.ignition' })}</TabsTrigger>
            <TabsTrigger value='driversWiper'>
              {formatMessage({ id: 'clientTo.driversWiper' })}
            </TabsTrigger>
          </TabsList>

          <TabsContent value='filter'>
            <LabeledBox label={formatMessage({ id: 'clientTo.filter' })}>
              <FormInput name='oilFilter' label={formatMessage({ id: 'clientTab.oilFilter' })} />
              <FormInput name='airFilter' label={formatMessage({ id: 'clientTab.airFilter' })} />
              <FormInput name='fuelFilter' label={formatMessage({ id: 'clientTab.fuelFilter' })} />
              <FormInput
                name='cabinFilter'
                label={formatMessage({ id: 'clientTab.cabinFilter' })}
              />
            </LabeledBox>
          </TabsContent>

          <TabsContent value='gearbox'>
            <LabeledBox label={formatMessage({ id: 'clientTo.gearboxFilters' })}>
              <FormInput
                name='automaticTransmissionFilter'
                label={formatMessage({ id: 'clientTab.automaticTransmissionFilter' })}
              />
              <FormInput
                name='automaticTransmissionOilPanGasket'
                label={formatMessage({ id: 'clientTab.automaticTransmissionOilPanGasket' })}
              />
              <FormInput
                name='automaticTransmissionFillerGasket'
                label={formatMessage({ id: 'clientTab.automaticTransmissionFillerGasket' })}
              />
            </LabeledBox>

            <LabeledBox label={formatMessage({ id: 'clientTo.gearboxFiltersSmall' })}>
              <FormInput
                name='automaticTransmissionFilter2'
                label={formatMessage({ id: 'clientTab.automaticTransmissionFilter2' })}
              />
              <FormInput
                name='automaticTransmissionOilPanGasket2'
                label={formatMessage({ id: 'clientTab.automaticTransmissionOilPanGasket2' })}
              />
            </LabeledBox>

            <LabeledBox label={formatMessage({ id: 'clientTab.transmissionDrainPlug' })}>
              <FormInput
                name='transmissionDrainPlug'
                label={formatMessage({ id: 'clientTab.transmissionDrainPlug' })}
              />
              <FormInput
                name='transmissionDrainPlugGasket'
                label={formatMessage({ id: 'clientTab.transmissionDrainPlugGasket' })}
              />
            </LabeledBox>
          </TabsContent>

          <TabsContent value='brake'>
            <LabeledBox label={formatMessage({ id: 'clientTo.brake' })}>
              <FormInput name='frontBrake' label={formatMessage({ id: 'clientTab.frontBrake' })} />
              <FormInput name='rearBrake' label={formatMessage({ id: 'clientTab.rearBrake' })} />
              <FormInput
                name='handbrakeBrakePads'
                label={formatMessage({ id: 'clientTab.handbrakeBrakePads' })}
              />
            </LabeledBox>
          </TabsContent>

          <TabsContent value='cooling'>
            <LabeledBox label={formatMessage({ id: 'clientTo.cooling' })}>
              <FormInput name='waterPump' label={formatMessage({ id: 'clientTab.waterPump' })} />
              <FormInput name='thermostat' label={formatMessage({ id: 'clientTab.thermostat' })} />
            </LabeledBox>
          </TabsContent>

          <TabsContent value='ignition'>
            <LabeledBox label={formatMessage({ id: 'clientTo.ignition' })}>
              <FormInput name='sparkPlug' label={formatMessage({ id: 'clientTab.sparkPlug' })} />
            </LabeledBox>

            <LabeledBox label={formatMessage({ id: 'clientTab.ignitionCoil' })}>
              <FormInput
                name='ignitionCoil'
                label={formatMessage({ id: 'clientTo.ignitionCoil' })}
              />
            </LabeledBox>
          </TabsContent>

          <TabsContent value='driversWiper'>
            <LabeledBox label={formatMessage({ id: 'clientTo.driversWiper' })}>
              <FormInput
                name='driversWiper'
                label={formatMessage({ id: 'clientTab.driversWiper' })}
              />
              <FormInput
                name='passengerWiper'
                label={formatMessage({ id: 'clientTab.passengerWiper' })}
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
