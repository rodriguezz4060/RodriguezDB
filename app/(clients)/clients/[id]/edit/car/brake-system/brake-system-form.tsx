'use client'

import { BrakeSystemFormData } from '@/@types/client-car'
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
  clientCar: BrakeSystemFormData
}

export function BrakeSystemForm({ clientCar }: Props) {
  const form = useForm<TFormEditClientCarSchema>({
    resolver: zodResolver(formEditClientCarSchema),
    defaultValues: {
      id: clientCar.id,

      frontHandbrakeCable: clientCar.frontHandbrakeCable ?? '',
      rearLeftCable: clientCar.rearLeftCable ?? '',
      reaRightCable: clientCar.reaRightCable ?? '',

      frontBrakeDiskLeft: clientCar.frontBrakeDiskLeft ?? '',
      frontBrakeDiskRight: clientCar.frontBrakeDiskRight ?? '',
      rearBrakeDisk: clientCar.rearBrakeDisk ?? '',

      frontBrake: clientCar.frontBrake ?? '',
      rearBrake: clientCar.rearBrake ?? '',
      handbrakeBrakePads: clientCar.handbrakeBrakePads ?? '',

      brakeMasterCylinder: clientCar.brakeMasterCylinder ?? '',
      slaveBrakeCylinder: clientCar.slaveBrakeCylinder ?? '',
      drumBrakeCylinderLeft: clientCar.drumBrakeCylinderLeft ?? '',
      drumBrakeCylinderRight: clientCar.drumBrakeCylinderRight ?? '',

      setOfFrontGuideRailsWithDustCovers:
        clientCar.setOfFrontGuideRailsWithDustCovers ?? '',
      setOfRearGuideRailsWithDustCovers: clientCar.setOfRearGuideRailsWithDustCovers ?? '',
      installationKitForFrontPads: clientCar.installationKitForFrontPads ?? '',
      installationKitForRearPads: clientCar.installationKitForRearPads ?? '',
      installationKitForHandbrakeBrakePads:
        clientCar.installationKitForHandbrakeBrakePads ?? '',
      frontCaliperRepairKit: clientCar.frontCaliperRepairKit ?? '',
      frontCaliperRepairKitWithPiston: clientCar.frontCaliperRepairKitWithPiston ?? '',
      rearCaliperRepairKit: clientCar.rearCaliperRepairKit ?? '',
      rearCaliperRepairKitWithPiston: clientCar.rearCaliperRepairKitWithPiston ?? '',

      frontLeftBrakeHose: clientCar.frontLeftBrakeHose ?? '',
      frontRightBrakeHose: clientCar.frontRightBrakeHose ?? '',
      rearLeftBrakeHose: clientCar.rearLeftBrakeHose ?? '',
      rearRightBrakeHose: clientCar.rearRightBrakeHose ?? '',

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
      automaticTransmissionOilPanGasket2:
        clientCar.automaticTransmissionOilPanGasket2 ?? '',
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
        <Tabs defaultValue='brakeCable'>
          <TabsList>
            <TabsTrigger value='brakeCable'>Тормозной трос</TabsTrigger>
            <TabsTrigger value='disc'>Тормозные диски</TabsTrigger>
            <TabsTrigger value='brakePad'>Тормозные колодки</TabsTrigger>
            <TabsTrigger value='frontWheelBrakeMechanism'>
              Тормозной механизм переднего колеса
            </TabsTrigger>
            <TabsTrigger value='RearWheelBrakeMechanism'>
              Тормозной механизм заднего колеса
            </TabsTrigger>
            <TabsTrigger value='brakeCylinders'>Тормозные цилиндры</TabsTrigger>
            <TabsTrigger value='brakeHoses'>Тормозные шланги</TabsTrigger>
          </TabsList>
          <TabsContent value='brakeCable'>
            <LabeledBox label='Тормозной трос'>
              <FormInput name='frontHandbrakeCable' label='Ручника передний' />
              <FormInput name='rearLeftCable' label='Задний левый' />
              <FormInput name='reaRightCable' label='Задний правый' />
            </LabeledBox>
          </TabsContent>

          <TabsContent value='disc'>
            <LabeledBox label='Тормозные диски'>
              <FormInput name='frontBrakeDiskLeft' label='Передний левый' />
              <FormInput name='frontBrakeDiskRight' label='Передний правый' />
              <FormInput name='rearBrakeDisk' label='Задний' />
            </LabeledBox>
          </TabsContent>

          <TabsContent value='brakePad'>
            <LabeledBox label='Тормозные колодки'>
              <FormInput name='frontBrake' label='Передние' />
              <FormInput name='rearBrake' label='Задние' />
              <FormInput name='handbrakeBrakePads' label='Ручника' />
            </LabeledBox>
          </TabsContent>

          <TabsContent value='frontWheelBrakeMechanism'>
            <LabeledBox label='Тормозной механизм переднего колеса'>
              <FormInput
                name='setOfFrontGuideRailsWithDustCovers'
                label='Комплект передних направляющих с пыльниками'
              />
              <FormInput name='frontCaliperRepairKit' label='Ремкомплект переднего суппорта' />
              <FormInput
                name='frontCaliperRepairKitWithPiston'
                label='Ремкомплект переднего суппорта с поршнями'
              />
              <FormInput
                name='installationKitForFrontPads'
                label='Установочный комплект на передние колодки'
              />
            </LabeledBox>
          </TabsContent>

          <TabsContent value='RearWheelBrakeMechanism'>
            <LabeledBox label='Тормозной механизм заднего колеса'>
              <FormInput
                name='setOfRearGuideRailsWithDustCovers'
                label='Комплект задних направляющих с пыльниками'
              />
              <FormInput
                name='installationKitForRearPads'
                label='Установочный комплект на задние колодки'
              />
              <FormInput
                name='installationKitForHandbrakeBrakePads'
                label='Установочный комплект на барабаны'
              />
              <FormInput name='rearCaliperRepairKit' label='Ремкомплект заднего суппорта' />
              <FormInput
                name='rearCaliperRepairKitWithPiston'
                label='Ремкомплект заднего суппорта с поршнями'
              />
            </LabeledBox>
          </TabsContent>

          <TabsContent value='brakeCylinders'>
            <LabeledBox label='Тормозные цилиндры'>
              <FormInput name='brakeMasterCylinder' label='Главный' />
              <FormInput name='slaveBrakeCylinder' label='Рабочий' />
            </LabeledBox>

            <LabeledBox label='Тормозной цилиндр барабанов'>
              <FormInput name='drumBrakeCylinderLeft' label='Левый' />
              <FormInput name='drumBrakeCylinderRight' label='Правый' />
            </LabeledBox>
          </TabsContent>

          <TabsContent value='brakeHoses'>
            <LabeledBox label='Тормозные шланги передние'>
              <FormInput name='frontLeftBrakeHose' label='Левый' />
              <FormInput name='frontRightBrakeHose' label='Правый' />
            </LabeledBox>

            <LabeledBox label='Тормозные шланги задние'>
              <FormInput name='rearLeftBrakeHose' label='Левый' />
              <FormInput name='rearRightBrakeHose' label='Правый' />
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
