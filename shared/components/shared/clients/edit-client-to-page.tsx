'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'
import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { useIntl } from 'react-intl'
import { Container } from '../container'
import { FormInput } from '../form'
import { Button, Select } from '../../ui'
import { useRouter } from 'next/navigation'
import { Title } from '../title'
import { ClientsWithCar } from '@/@types/prisma'
import {
  formEditClientCarToSchema,
  TFormEditClientCarToSchema,
} from './schemas/edit-client-to-schemas'
import { updateClientCarTo } from '@/app/actions'
import { SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../ui/select'
import { BackButton } from '../buttons'

interface Props {
  client: ClientsWithCar
}

export const EditClientToPage: React.FC<Props> = ({ client }) => {
  const { formatMessage } = useIntl()
  const router = useRouter()

  const [transmissionType, setTransmissionType] = useState('automatic')

  const handleTransmissionTypeChange = (value: string) => {
    setTransmissionType(value)
  }

  const form = useForm<TFormEditClientCarToSchema>({
    resolver: zodResolver(formEditClientCarToSchema),
    defaultValues: {
      id: client.clientCarTo!.id,
      engineOil: client.clientCarTo?.engineOil ?? '',
      engineOilVolume: client.clientCarTo?.engineOilVolume ?? '',
      engineOilPartNumber: client.clientCarTo?.engineOilPartNumber ?? '',

      automaticTransmissionOil: client.clientCarTo?.automaticTransmissionOil ?? '',
      automaticTransmissionOilVolume1: client.clientCarTo?.automaticTransmissionOilVolume1 ?? '',
      automaticTransmissionOilPartNumber:
        client.clientCarTo?.automaticTransmissionOilPartNumber ?? '',

      mechanicTransmissionOil: client.clientCarTo?.mechanicTransmissionOil ?? '',
      mechanicTransmissionOilVolume: client.clientCarTo?.mechanicTransmissionOilVolume ?? '',
      mechanicTransmissionOilPartNumber:
        client.clientCarTo?.mechanicTransmissionOilPartNumber ?? '',

      transferCaseOil: client.clientCarTo?.transferCaseOil ?? '',
      transferCaseOilVolume: client.clientCarTo?.transferCaseOilVolume ?? '',
      transferCaseOilPartNumber: client.clientCarTo?.transferCaseOilPartNumber ?? '',

      frontAxleGearboxOil: client.clientCarTo?.frontAxleGearboxOil ?? '',
      frontAxleGearboxOilVolume: client.clientCarTo?.frontAxleGearboxOilVolume ?? '',
      frontAxleGearboxOilPartNumber: client.clientCarTo?.frontAxleGearboxOilPartNumber ?? '',

      rearAxleGearboxOil: client.clientCarTo?.rearAxleGearboxOil ?? '',
      rearAxleGearboxOilVolume: client.clientCarTo?.rearAxleGearboxOilVolume ?? '',
      rearAxleGearboxOilPartNumber: client.clientCarTo?.rearAxleGearboxOilPartNumber ?? '',

      antifreeze: client.clientCarTo?.antifreeze ?? '',
      antifreezeVolume: client.clientCarTo?.antifreezeVolume ?? '',
      antifreezePartNumber: client.clientCarTo?.antifreezePartNumber ?? '',

      steeringFluid: client.clientCarTo?.steeringFluid ?? '',
      steeringFluidVolume: client.clientCarTo?.steeringFluidVolume ?? '',
      steeringFluidPartNumber: client.clientCarTo?.steeringFluidPartNumber ?? '',

      // Новые поля

      frontBrake: client.clientCar?.frontBrake ?? '',
      rearBrake: client.clientCar?.rearBrake ?? '',
      handbrakeBrakePads: client.clientCar?.handbrakeBrakePads ?? '',
      waterPump: client.clientCar?.waterPump ?? '',
      thermostat: client.clientCar?.thermostat ?? '',
      sparkPlug: client.clientCar?.sparkPlug ?? '',
      driversWiper: client.clientCar?.driversWiper ?? '',
      passengerWiper: client.clientCar?.passengerWiper ?? '',
      oilFilter: client.clientCar?.oilFilter ?? '',
      airFilter: client.clientCar?.airFilter ?? '',
      fuelFilter: client.clientCar?.fuelFilter ?? '',
      cabinFilter: client.clientCar?.cabinFilter ?? '',
      automaticTransmissionOilPanGasket: client.clientCar?.automaticTransmissionOilPanGasket ?? '',
      automaticTransmissionFilter: client.clientCar?.automaticTransmissionFilter ?? '',
      automaticTransmissionFillerGasket: client.clientCar?.automaticTransmissionFillerGasket ?? '',
      automaticTransmissionOilPanGasket2:
        client.clientCar?.automaticTransmissionOilPanGasket2 ?? '',
      automaticTransmissionFilter2: client.clientCar?.automaticTransmissionFilter2 ?? '',
      transmissionDrainPlug: client.clientCar?.transmissionDrainPlug ?? '',
      transmissionDrainPlugGasket: client.clientCar?.transmissionDrainPlugGasket ?? '',
    },
  })

  const onSubmit = async (data: TFormEditClientCarToSchema) => {
    try {
      await updateClientCarTo(data)

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

  return (
    <Container className='mt-5'>
      <div className='flex items-center justify-between mt-4'>
        <Title
          text={`Редактирование данных клиента | ${client.name}`}
          size='md'
          className='font-bold'
        />
        <BackButton route='/clients/' id={client.id} />
      </div>
      <FormProvider {...form}>
        <form
          className='grid grid-cols-1 md:grid-cols-3 gap-5 mt-10'
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <div className='border p-4 rounded-md'>
            <h2 className='text-lg font-semibold mb-2'>Двигатель</h2>

            <FormInput name='engineOil' label='Масло ДВС' />
            <FormInput name='engineOilVolume' label='Объем масла' />
            <FormInput name='engineOilPartNumber' label='Оригинальный номер масла' />
          </div>

          <div className='border p-4 rounded-md'>
            <div className='mb-4'>
              <label className='block text-sm font-medium'>Тип коробки передач</label>
              <Select value={transmissionType} onValueChange={handleTransmissionTypeChange}>
                <SelectTrigger className='w-[180px]'>
                  <SelectValue placeholder='Выберите тип' />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value='automatic'>АКПП</SelectItem>
                  <SelectItem value='mechanic'>МКП</SelectItem>
                </SelectContent>
              </Select>
            </div>
            {transmissionType === 'automatic' && (
              <div className='border p-4 rounded-md'>
                <FormInput name='automaticTransmissionOil' label='Масло АКПП' />
                <FormInput name='automaticTransmissionOilVolume1' label='Объем масла частичный' />
                <FormInput
                  name='automaticTransmissionOilPartNumber'
                  label='Оригинальный номер масла'
                />
              </div>
            )}

            {transmissionType === 'mechanic' && (
              <div className='border p-4 rounded-md'>
                <FormInput name='mechanicTransmissionOil' label='Масло МКП' />
                <FormInput name='mechanicTransmissionOilVolume' label='Объем масла' />
                <FormInput
                  name='mechanicTransmissionOilPartNumber'
                  label='Оригинальный номер масла'
                />
              </div>
            )}
          </div>

          <div className='border p-4 rounded-md'>
            <h2 className='text-lg font-semibold mb-2'>Раздаточная коробка</h2>
            <FormInput name='transferCaseOil' label='Масло раздаточной коробки' />
            <FormInput name='transferCaseOilVolume' label='Объем масла' />
            <FormInput name='transferCaseOilPartNumber' label='Оригинальный номер масла' />
          </div>

          <div className='border p-4 rounded-md'>
            <h2 className='text-lg font-semibold mb-2'>Редуктор переднего моста</h2>
            <FormInput name='frontAxleGearboxOil' label='Масло редуктора переднего моста' />
            <FormInput name='frontAxleGearboxOilVolume' label='Объем масла' />
            <FormInput name='frontAxleGearboxOilPartNumber' label='Оригинальный номер масла' />
          </div>

          <div className='border p-4 rounded-md'>
            <h2 className='text-lg font-semibold mb-2'>Редуктор заднего моста</h2>
            <FormInput name='rearAxleGearboxOil' label='Масло редуктора заднего моста' />
            <FormInput name='rearAxleGearboxOilVolume' label='Объем масла' />
            <FormInput name='rearAxleGearboxOilPartNumber' label='Оригинальный номер масла' />
          </div>

          <div className='border p-4 rounded-md'>
            <h2 className='text-lg font-semibold mb-2'>Антифриз</h2>
            <FormInput name='antifreeze' label='Цвет антифриза' />
            <FormInput name='antifreezeVolume' label='Объем антифриза' />
            <FormInput name='antifreezePartNumber' label='Оригинальный номер антифриза' />
          </div>

          <div className='border p-4 rounded-md'>
            <h2 className='text-lg font-semibold mb-2'>ГУР</h2>
            <FormInput name='steeringFluid' label='Жидкость ГУР' />
            <FormInput name='steeringFluidVolume' label='Объем жидкости ГУР' />
            <FormInput name='steeringFluidPartNumber' label='Оригинальный номер жидкости ГУР' />
          </div>

          <div className='border p-4 rounded-md'>
            <h2 className='text-lg font-semibold mb-2'>Фильтра ДВС</h2>
            <FormInput name='oilFilter' label='Масляный фильтр' />
            <FormInput name='airFilter' label='Воздушный фильтр' />
            <FormInput name='fuelFilter' label='Топливный фильтр' />
            <FormInput name='cabinFilter' label='Фильтр салона' />
          </div>

          <div className='border p-4 rounded-md'>
            <h2 className='text-lg font-semibold mb-2'>Фильтра АКПП</h2>
            <FormInput name='automaticTransmissionFilter' label='Фильтр АКПП' />
            <FormInput name='automaticTransmissionOilPanGasket' label='Прокладка поддона АКПП' />
            <FormInput name='automaticTransmissionFillerGasket' label='Прокладка фильтра АКПП' />

            <FormInput name='automaticTransmissionFilter2' label='Фильтр тонкой очистки АКПП' />
            <FormInput
              name='automaticTransmissionOilPanGasket2'
              label='Прокладка фильтра тонкой очистки'
            />
            <FormInput name='transmissionDrainPlug' label='Сливная пробка АКПП' />
            <FormInput name='transmissionDrainPlugGasket' label='Прокладка сливной пробки АКПП' />
          </div>

          <div className='border p-4 rounded-md'>
            <h2 className='text-lg font-semibold mb-2'>Тормоза</h2>
            <FormInput name='frontBrake' label='Передние колодки' />
            <FormInput name='rearBrake' label='Задние колодки' />
            <FormInput name='handbrakeBrakePads' label='Колодки ручника' />
          </div>

          <div className='border p-4 rounded-md'>
            <h2 className='text-lg font-semibold mb-2'>Охлаждение</h2>
            <FormInput name='waterPump' label='Водяная помпа' />
            <FormInput name='thermostat' label='Термостат' />
          </div>

          <div className='border p-4 rounded-md'>
            <h2 className='text-lg font-semibold mb-2'>Свечи</h2>
            <FormInput name='sparkPlug' label='Свеча зажигания' />
          </div>

          <div className='border p-4 rounded-md'>
            <h2 className='text-lg font-semibold mb-2'>Дворники</h2>
            <FormInput name='driversWiper' label='Дворник водителя' />
            <FormInput name='passengerWiper' label='Дворник пассажира' />
          </div>

          <Button
            disabled={form.formState.isSubmitting}
            className='text-base mt-10 mb-10 col-span-full'
            type='submit'
          >
            Сохранить
          </Button>
        </form>
      </FormProvider>
    </Container>
  )
}
