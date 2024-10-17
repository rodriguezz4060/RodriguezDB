'use client'

import { OilFormData } from '@/@types/client-oil-car'
import { FormInput, LabeledBox } from '@/shared/components/shared'
import {
  formEditClientCarToSchema,
  TFormEditClientCarToSchema,
} from '@/shared/components/shared/clients/schemas/edit-client-to-schemas'
import { Button, Select } from '@/shared/components/ui'
import {
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/shared/components/ui/select'
import { Tabs, TabsContent, TabsTrigger } from '@/shared/components/ui/tabs'
import { useClientCarToForm } from '@/shared/hooks/'
import { zodResolver } from '@hookform/resolvers/zod'
import { TabsList } from '@radix-ui/react-tabs'
import { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { useIntl } from 'react-intl'

interface Props {
  clientCarTo: OilFormData
}

export function OilForm({ clientCarTo }: Props) {
  const { formatMessage } = useIntl()

  const [gearboxType, setGearboxType] = useState('automat')

  const form = useForm<TFormEditClientCarToSchema>({
    resolver: zodResolver(formEditClientCarToSchema),
    defaultValues: {
      id: clientCarTo.id,

      engineOil: clientCarTo.engineOil ?? '',
      engineOilVolume: clientCarTo.engineOilVolume ?? '',
      engineOilPartNumber: clientCarTo.engineOilPartNumber ?? '',

      automaticTransmissionOil: clientCarTo.automaticTransmissionOil ?? '',
      automaticTransmissionOilVolume1: clientCarTo.automaticTransmissionOilVolume1 ?? '',
      automaticTransmissionOilPartNumber: clientCarTo.automaticTransmissionOilPartNumber ?? '',

      mechanicTransmissionOil: clientCarTo.mechanicTransmissionOil ?? '',
      mechanicTransmissionOilVolume: clientCarTo.mechanicTransmissionOilVolume ?? '',
      mechanicTransmissionOilPartNumber: clientCarTo.mechanicTransmissionOilPartNumber ?? '',

      transferCaseOil: clientCarTo.transferCaseOil ?? '',
      transferCaseOilVolume: clientCarTo.transferCaseOilVolume ?? '',
      transferCaseOilPartNumber: clientCarTo.transferCaseOilPartNumber ?? '',

      frontAxleGearboxOil: clientCarTo.frontAxleGearboxOil ?? '',
      frontAxleGearboxOilVolume: clientCarTo.frontAxleGearboxOilVolume ?? '',
      frontAxleGearboxOilPartNumber: clientCarTo.frontAxleGearboxOilPartNumber ?? '',

      rearAxleGearboxOil: clientCarTo.rearAxleGearboxOil ?? '',
      rearAxleGearboxOilVolume: clientCarTo.rearAxleGearboxOilVolume ?? '',
      rearAxleGearboxOilPartNumber: clientCarTo.rearAxleGearboxOilPartNumber ?? '',

      antifreeze: clientCarTo.antifreeze ?? '',
      antifreezeVolume: clientCarTo.antifreezeVolume ?? '',
      antifreezePartNumber: clientCarTo.antifreezePartNumber ?? '',

      steeringFluid: clientCarTo.steeringFluid ?? '',
      steeringFluidVolume: clientCarTo.steeringFluidVolume ?? '',
      steeringFluidPartNumber: clientCarTo.steeringFluidPartNumber ?? '',
    },
  })

  const handleGearboxTypeChange = (value: string) => {
    setGearboxType(value)
  }

  const { onSubmit, isSubmitting } = useClientCarToForm()

  return (
    <FormProvider {...form}>
      <form className='gap-5' onSubmit={form.handleSubmit(onSubmit)}>
        <Tabs defaultValue='engine'>
          <TabsList>
            <TabsTrigger value='engine'>{formatMessage({ id: 'clientTo.engine' })}</TabsTrigger>
            <TabsTrigger value='gearbox'>{formatMessage({ id: 'clientTo.gearbox' })}</TabsTrigger>
            <TabsTrigger value='transferCase'>
              {formatMessage({ id: 'clientTo.transferCase' })}
            </TabsTrigger>
            <TabsTrigger value='axleGearbox'>
              {formatMessage({ id: 'clientTo.axleGearbox' })}
            </TabsTrigger>
            <TabsTrigger value='antifreeze'>
              {formatMessage({ id: 'clientTo.antifreeze' })}
            </TabsTrigger>
            <TabsTrigger value='steering'>{formatMessage({ id: 'clientTo.steering' })}</TabsTrigger>
          </TabsList>

          <TabsContent value='engine'>
            <LabeledBox label={formatMessage({ id: 'clientTo.engine' })}>
              <FormInput name='engineOil' label={formatMessage({ id: 'clientTo.engineOil' })} />
              <FormInput
                name='engineOilVolume'
                label={formatMessage({ id: 'clientTo.oilVolume' })}
              />
              <FormInput
                name='engineOilPartNumber'
                label={formatMessage({ id: 'clientTo.partNumber' })}
              />
            </LabeledBox>
          </TabsContent>

          <TabsContent value='gearbox'>
            <div className='flex justify-end'>
              <Select value={gearboxType} onValueChange={handleGearboxTypeChange}>
                <SelectTrigger className='w-[180px] mb-1 '>
                  <SelectValue placeholder='Выберите тип' />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value='automat'>
                    {formatMessage({ id: 'clientTo.selectAutomat' })}
                  </SelectItem>
                  <SelectItem value='mechanical'>
                    {formatMessage({ id: 'clientTo.selectMechanical' })}
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
            {gearboxType === 'automat' && (
              <LabeledBox label={formatMessage({ id: 'clientTo.labeledAutomat' })}>
                <FormInput
                  name='automaticTransmissionOil'
                  label={formatMessage({ id: 'clientTo.automaticTransmissionOil' })}
                />
                <FormInput
                  name='automaticTransmissionOilVolume1'
                  label={formatMessage({ id: 'clientTo.automaticTransmissionOilVolume1' })}
                />
                <FormInput
                  name='automaticTransmissionOilPartNumber'
                  label={formatMessage({ id: 'clientTo.partNumber' })}
                />
              </LabeledBox>
            )}

            {gearboxType === 'mechanical' && (
              <LabeledBox label={formatMessage({ id: 'clientTo.labeledMechanical' })}>
                <FormInput
                  name='mechanicTransmissionOil'
                  label={formatMessage({ id: 'clientTo.mechanicTransmissionOil' })}
                />
                <FormInput
                  name='mechanicTransmissionOilVolume'
                  label={formatMessage({ id: 'clientTo.oilVolume' })}
                />
                <FormInput
                  name='mechanicTransmissionOilPartNumber'
                  label={formatMessage({ id: 'clientTo.partNumber' })}
                />
              </LabeledBox>
            )}
          </TabsContent>

          <TabsContent value='transferCase'>
            <LabeledBox label={formatMessage({ id: 'clientTo.transferCase' })}>
              <FormInput name='transferCaseOil' label='Масло раздаточной коробки' />
              <FormInput
                name='transferCaseOilVolume'
                label={formatMessage({ id: 'clientTo.oilVolume' })}
              />
              <FormInput
                name='transferCaseOilPartNumber'
                label={formatMessage({ id: 'clientTo.partNumber' })}
              />
            </LabeledBox>
          </TabsContent>

          <TabsContent value='axleGearbox'>
            <LabeledBox label={formatMessage({ id: 'clientTo.axleGearboxFront' })}>
              <FormInput name='frontAxleGearboxOil' label='Масло редуктора переднего моста' />
              <FormInput
                name='frontAxleGearboxOilVolume'
                label={formatMessage({ id: 'clientTo.oilVolume' })}
              />
              <FormInput
                name='frontAxleGearboxOilPartNumber'
                label={formatMessage({ id: 'clientTo.partNumber' })}
              />
            </LabeledBox>

            <LabeledBox label={formatMessage({ id: 'clientTo.axleGearboxRear' })}>
              <FormInput
                name='rearAxleGearboxOil'
                label={formatMessage({ id: 'clientTo.rearAxleGearboxOil' })}
              />
              <FormInput
                name='rearAxleGearboxOilVolume'
                label={formatMessage({ id: 'clientTo.oilVolume' })}
              />
              <FormInput
                name='rearAxleGearboxOilPartNumber'
                label={formatMessage({ id: 'clientTo.partNumber' })}
              />
            </LabeledBox>
          </TabsContent>

          <TabsContent value='antifreeze'>
            <LabeledBox label={formatMessage({ id: 'clientTo.antifreeze' })}>
              <FormInput
                name='antifreeze'
                label={formatMessage({ id: 'clientTo.antifreezeColor' })}
              />
              <FormInput
                name='antifreezeVolume'
                label={formatMessage({ id: 'clientTo.antifreezeVolume' })}
              />
              <FormInput
                name='antifreezePartNumber'
                label={formatMessage({ id: 'clientTo.antifreezePartNumber' })}
              />
            </LabeledBox>
          </TabsContent>

          <TabsContent value='steering'>
            <LabeledBox label={formatMessage({ id: 'clientTo.steering' })}>
              <FormInput
                name='steeringFluid'
                label={formatMessage({ id: 'clientTo.steeringFluid' })}
              />
              <FormInput
                name='steeringFluidVolume'
                label={formatMessage({ id: 'clientTo.steeringFluidVolume' })}
              />
              <FormInput
                name='steeringFluidPartNumber'
                label={formatMessage({ id: 'clientTo.steeringFluidPartNumber' })}
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
