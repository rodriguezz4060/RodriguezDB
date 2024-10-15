'use client'

import { EngineFormData } from '@/@types/client-car'
import { FormInput, LabeledBox } from '@/shared/components/shared'
import {
  formEditClientCarSchema,
  TFormEditClientCarSchema,
} from '@/shared/components/shared/clients/schemas/edit-client-car-schemas'
import { Button, Select } from '@/shared/components/ui'
import {
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/shared/components/ui/select'
import { Tabs, TabsContent, TabsTrigger } from '@/shared/components/ui/tabs'
import { useClientCarForm } from '@/shared/hooks/'
import { zodResolver } from '@hookform/resolvers/zod'
import { TabsList } from '@radix-ui/react-tabs'
import { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'

interface Props {
  clientCar: EngineFormData
}

export function EngineForm({ clientCar }: Props) {
  const [engineType, setEngineType] = useState('belt')

  const form = useForm<TFormEditClientCarSchema>({
    resolver: zodResolver(formEditClientCarSchema),
    defaultValues: {
      id: clientCar.id,
      timingChainLong: clientCar.timingChainLong ?? '',
      timingChainShort: clientCar.timingChainShort ?? '',
      chainTensioner1: clientCar.chainTensioner1 ?? '',
      chainTensioner2: clientCar.chainTensioner2 ?? '',
      chainTensioner3: clientCar.chainTensioner3 ?? '',
      chainKit: clientCar.chainKit ?? '',
      timingBelt: clientCar.timingBelt ?? '',
      timingBeltTensioner: clientCar.timingBeltTensioner ?? '',
      timingBeltRoller: clientCar.timingBeltRoller ?? '',
      pistons: clientCar.pistons ?? '',
      pistonsRings: clientCar.pistonsRings ?? '',
      hydrocompensators: clientCar.hydrocompensators ?? '',
      valveIn: clientCar.valveIn ?? '',
      valveEx: clientCar.valveEx ?? '',
      valveGuidesIn: clientCar.valveGuidesIn ?? '',
      valveGuidesEx: clientCar.valveGuidesEx ?? '',
      bearingConnectingRod: clientCar.bearingConnectingRod ?? '',
      bearingCamshaft: clientCar.bearingCamshaft ?? '',
      crankshaftCamberRings: clientCar.crankshaftCamberRings ?? '',
      generatorBelt: clientCar.generatorBelt ?? '',
      powerSteeringBelt: clientCar.powerSteeringBelt ?? '',
      airConditionerBelt: clientCar.airConditionerBelt ?? '',
      tensionToller: clientCar.tensionToller ?? '',
      bypassRoller1: clientCar.bypassRoller1 ?? '',
      bypassRoller2: clientCar.bypassRoller2 ?? '',
      generatorOverrunningClutch: clientCar.generatorOverrunningClutch ?? '',
      engineGasketKit: clientCar.engineGasketKit ?? '',
      headGasket: clientCar.headGasket ?? '',
      valveCoverGasketLeft: clientCar.valveCoverGasketLeft ?? '',
      valveCoverGasketRight: clientCar.valveCoverGasketRight ?? '',
      valveCoverGasket: clientCar.valveCoverGasket ?? '',
      intakeManifoldGasket: clientCar.intakeManifoldGasket ?? '',
      exhaustManifoldGasket: clientCar.exhaustManifoldGasket ?? '',
      exhaustPipeGasket1: clientCar.exhaustPipeGasket1 ?? '',
      exhaustPipeGasket2: clientCar.exhaustPipeGasket2 ?? '',
      exhaustPipeGasket3: clientCar.exhaustPipeGasket3 ?? '',
      frontLeftEngineCushion: clientCar.frontLeftEngineCushion ?? '',
      frontRightEngineCushion: clientCar.frontRightEngineCushion ?? '',
      engineCushionLeft: clientCar.engineCushionLeft ?? '',
      engineCushionRear: clientCar.engineCushionRear ?? '',
      frontCrankshaftOilSeal: clientCar.frontCrankshaftOilSeal ?? '',
      rearCrankshaftOilSeal: clientCar.rearCrankshaftOilSeal ?? '',
      camshaftOilSeal: clientCar.camshaftOilSeal ?? '',
      oilPumpPacking: clientCar.oilPumpPacking ?? '',
      intakeOilCaps: clientCar.intakeOilCaps ?? '',
      exhaustOilCaps: clientCar.exhaustOilCaps ?? '',
      airDuctCorrugation: clientCar.airDuctCorrugation ?? '',
      oilFilter: clientCar.oilFilter ?? '',
      airFilter: clientCar.airFilter ?? '',
      fuelFilter: clientCar.fuelFilter ?? '',
      cabinFilter: clientCar.cabinFilter ?? '',
    },
  })

  const handleEngineTypeChange = (value: string) => {
    setEngineType(value)
  }

  const { onSubmit, isSubmitting } = useClientCarForm()

  return (
    <FormProvider {...form}>
      <form className='gap-5' onSubmit={form.handleSubmit(onSubmit)}>
        <Tabs defaultValue='grm'>
          <TabsList>
            <TabsTrigger value='grm'>ГРМ</TabsTrigger>
            <TabsTrigger value='piston'>Двигатель и поршневая</TabsTrigger>
            <TabsTrigger value='beltAndRollers'>Приводные ремни и ролики</TabsTrigger>
            <TabsTrigger value='gaskets'>ПГБ и прокладки</TabsTrigger>
            <TabsTrigger value='engineCushion'>Подушки двигателя</TabsTrigger>
            <TabsTrigger value='engineOilSeals'>Сальники двигателя</TabsTrigger>
            <TabsTrigger value='supplySystem'>Система подачи воздуха</TabsTrigger>
            <TabsTrigger value='filters'>Фильтра</TabsTrigger>
          </TabsList>
          <TabsContent value='grm'>
            <div className='flex justify-end'>
              <Select value={engineType} onValueChange={handleEngineTypeChange}>
                <SelectTrigger className='w-[180px] mb-1 '>
                  <SelectValue placeholder='Выберите тип' />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value='belt'>Ремень</SelectItem>
                  <SelectItem value='chain'>Цепь</SelectItem>
                </SelectContent>
              </Select>
            </div>
            {engineType === 'belt' && (
              <LabeledBox label='Ременной'>
                <FormInput name='timingBelt' label='Ремень ГРМ' />
                <FormInput name='timingBeltTensioner' label='Натяжитель ремня ГРМ' />
                <FormInput name='timingBeltRoller' label='Паразитный ролик ремня ГРМ' />
              </LabeledBox>
            )}

            {engineType === 'chain' && (
              <LabeledBox label='Цепной'>
                <FormInput name='timingChainLong' label='Цепь ГРМ' />
                <FormInput name='timingChainShort' label='Короткая цепь' />
                <FormInput name='chainTensioner1' label='Гидронатяжитель цепи 1' />
                <FormInput name='chainTensioner2' label='Гидронатяжитель цепи 2' />
                <FormInput name='chainTensioner3' label='Башмак' />
                <FormInput name='chainKit' label='Набор цепей' />
              </LabeledBox>
            )}
          </TabsContent>
          <TabsContent value='piston'>
            <LabeledBox label='Поршня'>
              <FormInput name='pistons' label='Поршня' className='mb-2' />
              <FormInput name='pistonsRings' label='Поршневые кольца' className='mb-2' />
              <FormInput name='hydrocompensators' label='Гидрокомпенсаторы' className='mb-2' />
            </LabeledBox>

            <LabeledBox label='Клапана'>
              <FormInput name='valveIn' label='Впускные' className='mb-2' />
              <FormInput name='valveEx' label='Выпускные' className='mb-2' />
              <FormInput
                name='valveGuidesIn'
                label='Направляющие клапана впускные'
                className='mb-2'
              />
              <FormInput
                name='valveGuidesEx'
                label='Направляющие клапана выпускные'
                className='mb-2'
              />
            </LabeledBox>

            <LabeledBox label='Вкладыши'>
              <FormInput name='bearingConnectingRod' label='Коренной' className='mb-2' />
              <FormInput name='bearingCamshaft' label='Шатуна' className='mb-2' />
              <FormInput
                name='crankshaftCamberRings'
                label='Полукольца разбега коленвала'
                className='mb-2'
              />
            </LabeledBox>
          </TabsContent>

          <TabsContent value='beltAndRollers'>
            <LabeledBox label='Приводные ремни'>
              <FormInput name='generatorBelt' label='Ремень генератора' />
              <FormInput name='powerSteeringBelt' label='Ремень гидроусилителя' />
              <FormInput name='airConditionerBelt' label='Ремень кондиционера' />
            </LabeledBox>
            <LabeledBox label='Ролики и натяжитель'>
              <FormInput name='tensionToller' label='Натяжитель ремня клинового' />
              <FormInput name='bypassRoller1' label='Обводной ролик ремня клинового 1' />
              <FormInput name='bypassRoller2' label='Обводной ролик ремня клинового 2' />
              <FormInput name='generatorOverrunningClutch' label='Обгонная муфта генератора' />
            </LabeledBox>
          </TabsContent>

          <TabsContent value='gaskets'>
            <LabeledBox label='ПГБ'>
              <FormInput name='engineGasketKit' label='Набор прокладок двигателя' />
              <FormInput name='headGasket' label='Прокладка головки блока' />
            </LabeledBox>
            <LabeledBox label='Прокладки'>
              <FormInput name='valveCoverGasket' label='Прокладка клапанной крышки' />
              <FormInput name='valveCoverGasketLeft' label='Прокладка клапанной крышки левая' />
              <FormInput name='valveCoverGasketRight' label='Прокладка клапанной крышки правая' />
              <FormInput name='intakeManifoldGasket' label='Прокладка впускного коллектора' />
              <FormInput name='exhaustManifoldGasket' label='Прокладка выпускного коллектора' />
              <FormInput name='exhaustPipeGasket1' label='Прокладка выпускной трубы' />
              <FormInput
                name='exhaustPipeGasket2'
                label='Прокладка выпускной трубы до катализатора'
              />
              <FormInput
                name='exhaustPipeGasket3'
                label='Прокладка выпускной трубы после катализатора'
              />
            </LabeledBox>
          </TabsContent>

          <TabsContent value='engineCushion'>
            <LabeledBox label='Подушки двигателя'>
              <FormInput name='frontLeftEngineCushion' label='Подушка двигателя передняя левая' />
              <FormInput name='frontRightEngineCushion' label='Подушка двигателя передняя правая' />
              <FormInput name='engineCushionLeft' label='Подушка двигателя левая' />
              <FormInput name='engineCushionRear' label='Подушка двигателя задняя' />
            </LabeledBox>
          </TabsContent>

          <TabsContent value='engineOilSeals'>
            <LabeledBox label='Сальники двигателя'>
              <FormInput name='frontCrankshaftOilSeal' label='Сальник передний коленвала' />
              <FormInput name='rearCrankshaftOilSeal' label='Сальник задний коленвала' />
              <FormInput name='camshaftOilSeal' label='Сальник распредвала' />
              <FormInput name='oilPumpPacking' label='Сальник маслонасоса' />
              <FormInput name='intakeOilCaps' label='Маслосъемные впускные' />
              <FormInput name='exhaustOilCaps' label='Маслосъемные выпускные' />
            </LabeledBox>
          </TabsContent>

          <TabsContent value='supplySystem'>
            <LabeledBox label='Система подачи воздуха'>
              <FormInput name='airDuctCorrugation' label='Гофра воздуховода' />
            </LabeledBox>
          </TabsContent>

          <TabsContent value='filters'>
            <LabeledBox label='Фильтра'>
              <FormInput name='oilFilter' label='Масляный фильтр' />
              <FormInput name='airFilter' label='Воздушный фильтр' />
              <FormInput name='fuelFilter' label='Топливный фильтр' />
              <FormInput name='cabinFilter' label='Фильтр салона' />
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
