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

interface Props {
  clientCarTo: OilFormData
}

export function OilForm({ clientCarTo }: Props) {
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
            <TabsTrigger value='engine'>Двигатель</TabsTrigger>
            <TabsTrigger value='gearbox'>Коробка передач</TabsTrigger>
            <TabsTrigger value='transferCase'>Раздаточная коробка</TabsTrigger>
            <TabsTrigger value='axleGearbox'>Редуктор</TabsTrigger>
            <TabsTrigger value='antifreeze'>Антифриз</TabsTrigger>
            <TabsTrigger value='steering'>ГУР</TabsTrigger>
            <TabsTrigger value='antifreeze'>Антифриз</TabsTrigger>
          </TabsList>

          <TabsContent value='engine'>
            <LabeledBox label='Двигатель'>
              <FormInput name='engineOil' label='Масло ДВС' />
              <FormInput name='engineOilVolume' label='Объем масла' />
              <FormInput name='engineOilPartNumber' label='Оригинальный номер масла' />
            </LabeledBox>
          </TabsContent>

          <TabsContent value='gearbox'>
            <div className='flex justify-end'>
              <Select value={gearboxType} onValueChange={handleGearboxTypeChange}>
                <SelectTrigger className='w-[180px] mb-1 '>
                  <SelectValue placeholder='Выберите тип' />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value='automat'>Автомат</SelectItem>
                  <SelectItem value='mechanical'>Механика</SelectItem>
                </SelectContent>
              </Select>
            </div>
            {gearboxType === 'automat' && (
              <LabeledBox label='АКПП'>
                <FormInput name='automaticTransmissionOil' label='Масло АКПП' />
                <FormInput name='automaticTransmissionOilVolume1' label='Объем масла частичный' />
                <FormInput
                  name='automaticTransmissionOilPartNumber'
                  label='Оригинальный номер масла'
                />
              </LabeledBox>
            )}

            {gearboxType === 'mechanical' && (
              <LabeledBox label='МКП'>
                <FormInput name='mechanicTransmissionOil' label='Масло МКП' />
                <FormInput name='mechanicTransmissionOilVolume' label='Объем масла' />
                <FormInput
                  name='mechanicTransmissionOilPartNumber'
                  label='Оригинальный номер масла'
                />
              </LabeledBox>
            )}
          </TabsContent>

          <TabsContent value='transferCase'>
            <LabeledBox label='Раздаточная коробка'>
              <FormInput name='transferCaseOil' label='Масло раздаточной коробки' />
              <FormInput name='transferCaseOilVolume' label='Объем масла' />
              <FormInput name='transferCaseOilPartNumber' label='Оригинальный номер масла' />
            </LabeledBox>
          </TabsContent>

          <TabsContent value='axleGearbox'>
            <LabeledBox label='Редуктор переднего моста'>
              <FormInput name='frontAxleGearboxOil' label='Масло редуктора переднего моста' />
              <FormInput name='frontAxleGearboxOilVolume' label='Объем масла' />
              <FormInput name='frontAxleGearboxOilPartNumber' label='Оригинальный номер масла' />
            </LabeledBox>

            <LabeledBox label='Редуктор заднего моста'>
              <FormInput name='rearAxleGearboxOil' label='Масло редуктора заднего моста' />
              <FormInput name='rearAxleGearboxOilVolume' label='Объем масла' />
              <FormInput name='rearAxleGearboxOilPartNumber' label='Оригинальный номер масла' />
            </LabeledBox>
          </TabsContent>

          <TabsContent value='antifreeze'>
            <LabeledBox label='Антифриза'>
              <FormInput name='antifreeze' label='Цвет антифриза' />
              <FormInput name='antifreezeVolume' label='Объем антифриза' />
              <FormInput name='antifreezePartNumber' label='Оригинальный номер антифриза' />
            </LabeledBox>
          </TabsContent>

          <TabsContent value='steering'>
            <LabeledBox label='ГУР'>
              <FormInput name='steeringFluid' label='Жидкость ГУР' />
              <FormInput name='steeringFluidVolume' label='Объем жидкости ГУР' />
              <FormInput name='steeringFluidPartNumber' label='Оригинальный номер жидкости ГУР' />
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
