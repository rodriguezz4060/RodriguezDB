'use client'

import { TransmissionFormData } from '@/@types/client-car'
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
  clientCar: TransmissionFormData
}

export function TransmissionForm({ clientCar }: Props) {
  const form = useForm<TFormEditClientCarSchema>({
    resolver: zodResolver(formEditClientCarSchema),
    defaultValues: {
      id: clientCar.id,

      frontLeftOuterBallJoint: clientCar.frontLeftOuterBallJoint ?? '',
      frontRightOuterBallJoint: clientCar.frontRightOuterBallJoint ?? '',
      frontLeftInnerBallJoint: clientCar.frontLeftInnerBallJoint ?? '',
      frontRightInnerBallJoint: clientCar.frontRightInnerBallJoint ?? '',
      frontLeftHandDrive: clientCar.frontLeftHandDrive ?? '',
      frontRightHandDrive: clientCar.frontRightHandDrive ?? '',
      driveShaft: clientCar.driveShaft ?? '',

      rearLeftOuterBallJoint: clientCar.rearLeftOuterBallJoint ?? '',
      rearRightOuterBallJoint: clientCar.rearRightOuterBallJoint ?? '',
      rearLeftInnerBallJoint: clientCar.rearLeftInnerBallJoint ?? '',
      rearRightInnerBallJoint: clientCar.rearRightInnerBallJoint ?? '',

      automaticTransmissionOilPanGasket: clientCar.automaticTransmissionOilPanGasket ?? '',
      automaticTransmissionFilter: clientCar.automaticTransmissionFilter ?? '',
      automaticTransmissionFillerGasket: clientCar.automaticTransmissionFillerGasket ?? '',
      automaticTransmissionOilPanGasket2: clientCar.automaticTransmissionOilPanGasket2 ?? '',
      automaticTransmissionFilter2: clientCar.automaticTransmissionFilter2 ?? '',
      transmissionDrainPlug: clientCar.transmissionDrainPlug ?? '',
      transmissionDrainPlugGasket: clientCar.transmissionDrainPlugGasket ?? '',

      suspensionBearing: clientCar.suspensionBearing ?? '',

      frontPistonRodDusterOuter: clientCar.frontPistonRodDusterOuter ?? '',
      frontPistonRodDusterInnerLeft: clientCar.frontPistonRodDusterInnerLeft ?? '',
      frontPistonRodDusterInnerRight: clientCar.frontPistonRodDusterInnerRight ?? '',

      rearPistonRodDusterOuter: clientCar.rearPistonRodDusterOuter ?? '',
      rearPistonRodDusterInnerLeft: clientCar.rearPistonRodDusterInnerLeft ?? '',
      rearPistonRodDusterInnerRight: clientCar.rearPistonRodDusterInnerRight ?? '',

      automaticTransmissionTorqueConverterOilSeal:
        clientCar.automaticTransmissionTorqueConverterOilSeal ?? '',
      gearboxPrimaryShaftOilSeal: clientCar.gearboxPrimaryShaftOilSeal ?? '',
      gearboxRockerGland: clientCar.gearboxRockerGland ?? '',
      leftDriveOilSeal: clientCar.leftDriveOilSeal ?? '',
      rightDriveOilSeal: clientCar.rightDriveOilSeal ?? '',

      clutchDisk: clientCar.clutchDisk ?? '',
      clutchBasket: clientCar.clutchBasket ?? '',
      releaseBearing: clientCar.releaseBearing ?? '',
      clutchKit: clientCar.clutchKit ?? '',

      clutchMasterCylinder: clientCar.clutchMasterCylinder ?? '',
      clutchSlaveCylinder: clientCar.clutchSlaveCylinder ?? '',

      clutchMasterCylinderKit: clientCar.clutchMasterCylinderKit ?? '',
      clutchSlaveCylinderRepairKit: clientCar.clutchSlaveCylinderRepairKit ?? '',
    },
  })

  const { onSubmit, isSubmitting } = useClientCarForm()

  return (
    <FormProvider {...form}>
      <form className='gap-5' onSubmit={form.handleSubmit(onSubmit)}>
        <Tabs defaultValue='drives'>
          <TabsList>
            <TabsTrigger value='drives'>ШРУСЫ и привода</TabsTrigger>
            <TabsTrigger value='gearbox'>Коробка передач</TabsTrigger>
            <TabsTrigger value='suspensionBearing'>Подвесной подшипник</TabsTrigger>
            <TabsTrigger value='bootKit'>Пыльники ШРУСов</TabsTrigger>
            <TabsTrigger value='gearSeal'>Сальники трансмиссии</TabsTrigger>
            <TabsTrigger value='clutch'>Сцепление</TabsTrigger>
            <TabsTrigger value='clutchCylinders'>Цилиндры сцепления</TabsTrigger>
          </TabsList>

          <TabsContent value='drives'>
            <LabeledBox label='ШРУСЫ передние'>
              <FormInput name='frontLeftOuterBallJoint' label='Передний наружный левый' />
              <FormInput name='frontRightOuterBallJoint' label='Передний наружный правый' />
              <FormInput name='frontLeftInnerBallJoint' label='Передний внутренний левый' />
              <FormInput name='frontRightInnerBallJoint' label='Передний внутренний правый' />
            </LabeledBox>

            <LabeledBox label='Привода'>
              <FormInput name='frontLeftHandDrive' label='Приводной вал левый' />
              <FormInput name='frontRightHandDrive' label='Приводной вал правый' />
              <FormInput name='driveShaft' label='Вал привода' />
            </LabeledBox>

            <LabeledBox label='ШРУСЫ задние'>
              <FormInput name='rearLeftOuterBallJoint' label='Задний наружный левый' />
              <FormInput name='rearRightOuterBallJoint' label='Задний наружный правый' />
              <FormInput name='rearLeftInnerBallJoint' label='Задний внутренний левый' />
              <FormInput name='rearRightInnerBallJoint' label='Задний внутренний правый' />
            </LabeledBox>
          </TabsContent>

          <TabsContent value='gearbox'>
            <LabeledBox label='Фильтр АКПП'>
              <FormInput name='automaticTransmissionFilter' label='Фильтр' />
              <FormInput name='automaticTransmissionOilPanGasket' label='Прокладка поддона' />
              <FormInput name='automaticTransmissionFillerGasket' label='Прокладка фильтра' />
            </LabeledBox>

            <LabeledBox label='Фильтра тонкой очистки'>
              <FormInput name='automaticTransmissionFilter2' label='Фильтр' />
              <FormInput name='automaticTransmissionOilPanGasket2' label='Прокладка фильтра ' />
            </LabeledBox>

            <LabeledBox label='Сливная пробка'>
              <FormInput name='transmissionDrainPlug' label='Сливная пробка' />
              <FormInput name='transmissionDrainPlugGasket' label='Прокладка сливной пробки' />
            </LabeledBox>
          </TabsContent>

          <TabsContent value='suspensionBearing'>
            <LabeledBox label='Подвесной подшипник'>
              <FormInput name='suspensionBearing' label='Подвесной подшипник' />
            </LabeledBox>
          </TabsContent>

          <TabsContent value='bootKit'>
            <LabeledBox label='Пыльники передних ШРУСов'>
              <FormInput name='frontPistonRodDusterOuter' label='Наружный' />
              <FormInput name='frontPistonRodDusterInnerLeft' label='Внутренний левый' />
              <FormInput name='frontPistonRodDusterInnerRight' label='Внутренний правый' />
            </LabeledBox>

            <LabeledBox label='Пыльники задних ШРУСов'>
              <FormInput name='rearPistonRodDusterOuter' label='Наружный' />
              <FormInput name='rearPistonRodDusterInnerLeft' label='Внутренний левый' />
              <FormInput name='rearPistonRodDusterInnerRight' label='Внутренний правый' />
            </LabeledBox>
          </TabsContent>

          <TabsContent value='gearSeal'>
            <LabeledBox label='Сальники трансмиссии'>
              <FormInput
                name='automaticTransmissionTorqueConverterOilSeal'
                label='Гидротрансформатора АКПП'
              />
              <FormInput name='gearboxPrimaryShaftOilSeal' label='Первичного вала КПП' />
              <FormInput name='gearboxRockerGland' label='Кулисы КПП' />
              <FormInput name='leftDriveOilSeal' label='Левого привода' />
              <FormInput name='rightDriveOilSeal' label='Правого привода' />
            </LabeledBox>
          </TabsContent>

          <TabsContent value='clutch'>
            <LabeledBox label='Сцепление'>
              <FormInput name='clutchDisk' label='Диск' />
              <FormInput name='clutchBasket' label='Корзина' />
              <FormInput name='releaseBearing' label='Выжимной подшипник' />
              <FormInput name='clutchKit' label='Комплект сцепления' />
            </LabeledBox>
          </TabsContent>

          <TabsContent value='clutchCylinders'>
            <LabeledBox label='Цилиндры сцепления'>
              <FormInput name='clutchMasterCylinder' label='Главный' />
              <FormInput name='clutchSlaveCylinder' label='Рабочий ' />
            </LabeledBox>

            <LabeledBox label='Ремкомплекты цилиндра сцепления'>
              <FormInput name='clutchMasterCylinderKit' label='Главного цилиндра сцепления' />
              <FormInput name='clutchSlaveCylinderRepairKit' label='Рабочего цилиндра сцепления' />
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
