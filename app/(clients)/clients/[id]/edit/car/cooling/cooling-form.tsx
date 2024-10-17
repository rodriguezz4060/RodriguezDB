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
import { useIntl } from 'react-intl'

interface Props {
  clientCar: CoolingFormData
}

export function CoolingForm({ clientCar }: Props) {
  const { formatMessage } = useIntl()

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
            <TabsTrigger value='coolingAndHeating'>
              {formatMessage({ id: 'clients.coolingSystem' })}
            </TabsTrigger>
            <TabsTrigger value='radiator'>{formatMessage({ id: 'clients.radiator' })}</TabsTrigger>
            <TabsTrigger value='pipes'>{formatMessage({ id: 'clients.radiatorPipe' })}</TabsTrigger>
          </TabsList>

          <TabsContent value='coolingAndHeating'>
            <LabeledBox label={formatMessage({ id: 'clients.coolingSystem' })}>
              <FormInput name='waterPump' label={formatMessage({ id: 'clientTab.waterPump' })} />
              <FormInput name='thermostat' label={formatMessage({ id: 'clientTab.thermostat' })} />
            </LabeledBox>
          </TabsContent>

          <TabsContent value='radiator'>
            <LabeledBox label={formatMessage({ id: 'clients.radiator' })}>
              <FormInput name='radiator' label={formatMessage({ id: 'clientTab.radiator' })} />
              <FormInput
                name='heaterRadiator'
                label={formatMessage({ id: 'clientTab.heaterRadiator' })}
              />
              <FormInput
                name='airConditionerRadiator'
                label={formatMessage({ id: 'clientTab.airConditionerRadiator' })}
              />
            </LabeledBox>

            <LabeledBox label={formatMessage({ id: 'clients.radiatorCap' })}>
              <FormInput
                name='radiatorCap'
                label={formatMessage({ id: 'clientTab.radiatorCap' })}
              />
              <FormInput
                name='expansionTankCap'
                label={formatMessage({ id: 'clientTab.expansionTankCap' })}
              />
            </LabeledBox>
          </TabsContent>

          <TabsContent value='pipes'>
            <LabeledBox label={formatMessage({ id: 'clients.radiatorPipe' })}>
              <FormInput name='upperPipe' label={formatMessage({ id: 'clientTab.upperPipe' })} />
              <FormInput name='lowerPipe' label={formatMessage({ id: 'clientTab.lowerPipe' })} />
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
