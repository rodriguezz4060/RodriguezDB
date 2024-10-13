'use client'

import { ClientsWithCar } from '@/@types/prisma'
import { updateClientCar } from '@/app/actions'
import { FormInput } from '@/shared/components/shared'
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
import { zodResolver } from '@hookform/resolvers/zod'
import { TabsList } from '@radix-ui/react-tabs'
import { useState } from 'react'
import { Form, FormProvider, useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

interface Props {
  client: ClientsWithCar
}

export function EngineForm({ client }: Props) {
  const [engineType, setEngineType] = useState('belt')

  const form = useForm<TFormEditClientCarSchema>({
    resolver: zodResolver(formEditClientCarSchema),
    defaultValues: {
      id: client.clientCar!.id,

      // Двигатель и Система выхлопа
      timingChainLong: client.clientCar?.timingChainLong ?? '',
      timingChainShort: client.clientCar?.timingChainShort ?? '',
      chainTensioner1: client.clientCar?.chainTensioner1 ?? '',
      chainTensioner2: client.clientCar?.chainTensioner2 ?? '',
      chainTensioner3: client.clientCar?.chainTensioner3 ?? '',
      chainKit: client.clientCar?.chainKit ?? '',

      timingBelt: client.clientCar?.timingBelt ?? '',
      timingBeltTensioner: client.clientCar?.timingBeltTensioner ?? '',
      timingBeltRoller: client.clientCar?.timingBeltRoller ?? '',

      pistons: client.clientCar?.pistons ?? '',
      pistonsRings: client.clientCar?.pistonsRings ?? '',
      hydrocompensators: client.clientCar?.hydrocompensators ?? '',
      valveIn: client.clientCar?.valveIn ?? '',
      valveEx: client.clientCar?.valveEx ?? '',
      valveGuidesIn: client.clientCar?.valveGuidesIn ?? '',
      valveGuidesEx: client.clientCar?.valveGuidesEx ?? '',
      bearingConnectingRod: client.clientCar?.bearingConnectingRod ?? '',
      bearingCamshaft: client.clientCar?.bearingCamshaft ?? '',
      crankshaftCamberRings: client.clientCar?.crankshaftCamberRings ?? '',

      generatorBelt: client.clientCar?.generatorBelt ?? '',
      powerSteeringBelt: client.clientCar?.powerSteeringBelt ?? '',
      airConditionerBelt: client.clientCar?.airConditionerBelt ?? '',
      tensionToller: client.clientCar?.tensionToller ?? '',
      bypassRoller1: client.clientCar?.bypassRoller1 ?? '',
      bypassRoller2: client.clientCar?.bypassRoller2 ?? '',
      generatorOverrunningClutch: client.clientCar?.generatorOverrunningClutch ?? '',

      engineGasketKit: client.clientCar?.engineGasketKit ?? '',
      headGasket: client.clientCar?.headGasket ?? '',
      valveCoverGasketLeft: client.clientCar?.valveCoverGasketLeft ?? '',
      valveCoverGasketRight: client.clientCar?.valveCoverGasketRight ?? '',
      valveCoverGasket: client.clientCar?.valveCoverGasket ?? '',
      intakeManifoldGasket: client.clientCar?.intakeManifoldGasket ?? '',
      exhaustManifoldGasket: client.clientCar?.exhaustManifoldGasket ?? '',
      exhaustPipeGasket1: client.clientCar?.exhaustPipeGasket1 ?? '',
      exhaustPipeGasket2: client.clientCar?.exhaustPipeGasket2 ?? '',
      exhaustPipeGasket3: client.clientCar?.exhaustPipeGasket3 ?? '',

      frontLeftEngineCushion: client.clientCar?.frontLeftEngineCushion ?? '',
      frontRightEngineCushion: client.clientCar?.frontRightEngineCushion ?? '',
      engineCushionLeft: client.clientCar?.engineCushionLeft ?? '',
      engineCushionRear: client.clientCar?.engineCushionRear ?? '',

      frontCrankshaftOilSeal: client.clientCar?.frontCrankshaftOilSeal ?? '',
      rearCrankshaftOilSeal: client.clientCar?.rearCrankshaftOilSeal ?? '',
      camshaftOilSeal: client.clientCar?.camshaftOilSeal ?? '',
      oilPumpPacking: client.clientCar?.oilPumpPacking ?? '',
      intakeOilCaps: client.clientCar?.intakeOilCaps ?? '',
      exhaustOilCaps: client.clientCar?.exhaustOilCaps ?? '',

      airDuctCorrugation: client.clientCar?.airDuctCorrugation ?? '',

      oilFilter: client.clientCar?.oilFilter ?? '',
      airFilter: client.clientCar?.airFilter ?? '',
      fuelFilter: client.clientCar?.fuelFilter ?? '',
      cabinFilter: client.clientCar?.cabinFilter ?? '',
    },
  })

  const onSubmit = async (data: TFormEditClientCarSchema) => {
    try {
      await updateClientCar(data)

      toast.success('Данные клиента обновлены 🚗', {
        icon: '✅',
      })

      //   router.push('/clients')
    } catch (error) {
      return toast.error('Ошибка при обновлении данных клиента', {
        icon: '❌',
      })
    }
  }

  const handleEngineTypeChange = (value: string) => {
    setEngineType(value)
  }

  return (
    <FormProvider {...form}>
      <form className='gap-5' onSubmit={form.handleSubmit(onSubmit)}>
        <Tabs defaultValue='account' className=''>
          <TabsList>
            <TabsTrigger value='grm'>ГРМ</TabsTrigger>
            <TabsTrigger value='piston'>Двигатель и поршневая</TabsTrigger>
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
              <div>
                <FormInput name='timingBelt' label='Ремень ГРМ' />
                <FormInput name='timingBeltTensioner' label='Натяжитель ремня ГРМ' />
                <FormInput name='timingBeltRoller' label='Паразитный ролик ремня ГРМ' />
              </div>
            )}

            {engineType === 'chain' && (
              <div>
                <FormInput name='timingChainLong' label='Цепь ГРМ' />
                <FormInput name='timingChainShort' label='Короткая цепь' />
                <FormInput name='chainTensioner1' label='Гидронатяжитель цепи 1' />
                <FormInput name='chainTensioner2' label='Гидронатяжитель цепи 2' />
                <FormInput name='chainTensioner3' label='Башмак' />
                <FormInput name='chainKit' label='Набор цепей' />
              </div>
            )}
          </TabsContent>
          <TabsContent value='piston'>
            <FormInput name='pistons' label='Поршня' />
            <FormInput name='pistonsRings' label='Поршневые кольца' />
            <FormInput name='hydrocompensators' label='Гидрокомпенсаторы' />
            <FormInput name='valveIn' label='Клапана впуск' />
            <FormInput name='valveEx' label='Клапана выпуск' />
            <FormInput name='valveGuidesIn' label='Направляющие клапана впуск' />
            <FormInput name='valveGuidesEx' label='Направляющие клапана выпуск' />
            <FormInput name='bearingConnectingRod' label='Вкладыш коренной' />
            <FormInput name='bearingCamshaft' label='Вкладыш шатуна' />
            <FormInput name='crankshaftCamberRings' label='Полукольца разбега коленвала' />
          </TabsContent>
        </Tabs>

        <Button
          disabled={form.formState.isSubmitting}
          className='text-base mt-10 col-span-full'
          type='submit'
        >
          Сохранить
        </Button>
      </form>
    </FormProvider>
  )
}
