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
import { useIntl } from 'react-intl'

interface Props {
  clientCar: BrakeSystemFormData
}

export function BrakeSystemForm({ clientCar }: Props) {
  const { formatMessage } = useIntl()

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

      setOfFrontGuideRailsWithDustCovers: clientCar.setOfFrontGuideRailsWithDustCovers ?? '',
      setOfRearGuideRailsWithDustCovers: clientCar.setOfRearGuideRailsWithDustCovers ?? '',
      installationKitForFrontPads: clientCar.installationKitForFrontPads ?? '',
      installationKitForRearPads: clientCar.installationKitForRearPads ?? '',
      installationKitForHandbrakeBrakePads: clientCar.installationKitForHandbrakeBrakePads ?? '',
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
        <Tabs defaultValue='brakeCable'>
          <TabsList>
            <TabsTrigger value='brakeCable'>
              {formatMessage({ id: 'clients.handbrakeCable' })}
            </TabsTrigger>
            <TabsTrigger value='disc'>{formatMessage({ id: 'clients.DisksAndDrums' })}</TabsTrigger>
            <TabsTrigger value='brakePad'>{formatMessage({ id: 'clients.brake' })}</TabsTrigger>
            <TabsTrigger value='frontWheelBrakeMechanism'>
              {formatMessage({ id: 'clients.frontWheelBrakeMechanism' })}
            </TabsTrigger>
            <TabsTrigger value='rearWheelBrakeMechanism'>
              {formatMessage({ id: 'clients.rearWheelBrakeMechanism' })}
            </TabsTrigger>
            <TabsTrigger value='brakeCylinders'>
              {formatMessage({ id: 'clients.brakeCylinder' })}
            </TabsTrigger>
            <TabsTrigger value='brakeHoses'>
              {formatMessage({ id: 'clients.brakeHoses' })}
            </TabsTrigger>
          </TabsList>

          <TabsContent value='brakeCable'>
            <LabeledBox label={formatMessage({ id: 'clients.handbrakeCable' })}>
              <FormInput
                name='frontHandbrakeCable'
                label={formatMessage({ id: 'clientTab.frontHandbrakeCable' })}
              />
              <FormInput
                name='rearLeftCable'
                label={formatMessage({ id: 'clientTab.rearLeftCable' })}
              />
              <FormInput
                name='reaRightCable'
                label={formatMessage({ id: 'clientTab.reaRightCable' })}
              />
            </LabeledBox>
          </TabsContent>

          <TabsContent value='disc'>
            <LabeledBox label={formatMessage({ id: 'clients.brakeDisksAndDrums' })}>
              <FormInput
                name='frontBrakeDiskLeft'
                label={formatMessage({ id: 'clientTab.frontBrakeDiskLeft' })}
              />
              <FormInput
                name='frontBrakeDiskRight'
                label={formatMessage({ id: 'clientTab.frontBrakeDiskRight' })}
              />
              <FormInput
                name='rearBrakeDisk'
                label={formatMessage({ id: 'clientTab.rearBrakeDisk' })}
              />
            </LabeledBox>
          </TabsContent>

          <TabsContent value='brakePad'>
            <LabeledBox label={formatMessage({ id: 'clients.brake' })}>
              <FormInput name='frontBrake' label={formatMessage({ id: 'clientTab.frontBrake' })} />
              <FormInput name='rearBrake' label={formatMessage({ id: 'clientTab.rearBrake' })} />
              <FormInput
                name='handbrakeBrakePads'
                label={formatMessage({ id: 'clientTab.handbrakeBrakePads' })}
              />
            </LabeledBox>
          </TabsContent>

          <TabsContent value='frontWheelBrakeMechanism'>
            <LabeledBox label={formatMessage({ id: 'clients.frontWheelBrakeMechanism' })}>
              <FormInput
                name='setOfFrontGuideRailsWithDustCovers'
                label={formatMessage({ id: 'clientTab.setOfFrontGuideRailsWithDustCovers' })}
              />
              <FormInput
                name='frontCaliperRepairKit'
                label={formatMessage({ id: 'clientTab.frontCaliperRepairKit' })}
              />
              <FormInput
                name='frontCaliperRepairKitWithPiston'
                label={formatMessage({ id: 'clientTab.frontCaliperRepairKitWithPiston' })}
              />
              <FormInput
                name='installationKitForFrontPads'
                label={formatMessage({ id: 'clientTab.installationKitForFrontPads' })}
              />
            </LabeledBox>
          </TabsContent>

          <TabsContent value='rearWheelBrakeMechanism'>
            <LabeledBox label={formatMessage({ id: 'clients.rearWheelBrakeMechanism' })}>
              <FormInput
                name='setOfRearGuideRailsWithDustCovers'
                label={formatMessage({ id: 'clientTab.setOfRearGuideRailsWithDustCovers' })}
              />
              <FormInput
                name='installationKitForRearPads'
                label={formatMessage({ id: 'clientTab.installationKitForRearPads' })}
              />
              <FormInput
                name='installationKitForHandbrakeBrakePads'
                label={formatMessage({ id: 'clientTab.installationKitForHandbrakeBrakePads' })}
              />
              <FormInput
                name='rearCaliperRepairKit'
                label={formatMessage({ id: 'clientTab.rearCaliperRepairKit' })}
              />
              <FormInput
                name='rearCaliperRepairKitWithPiston'
                label={formatMessage({ id: 'clientTab.rearCaliperRepairKitWithPiston' })}
              />
            </LabeledBox>
          </TabsContent>

          <TabsContent value='brakeCylinders'>
            <LabeledBox label={formatMessage({ id: 'clients.brakeCylinder' })}>
              <FormInput
                name='brakeMasterCylinder'
                label={formatMessage({ id: 'clientTab.brakeMasterCylinder' })}
              />
              <FormInput
                name='slaveBrakeCylinder'
                label={formatMessage({ id: 'clientTab.slaveBrakeCylinder' })}
              />
            </LabeledBox>

            <LabeledBox label={formatMessage({ id: 'clientTab.drumBrakeCylinder' })}>
              <FormInput
                name='drumBrakeCylinderLeft'
                label={formatMessage({ id: 'clientTab.drumBrakeCylinderLeft' })}
              />
              <FormInput
                name='drumBrakeCylinderRight'
                label={formatMessage({ id: 'clientTab.drumBrakeCylinderRight' })}
              />
            </LabeledBox>
          </TabsContent>

          <TabsContent value='brakeHoses'>
            <LabeledBox label={formatMessage({ id: 'clients.frontBrakeHose' })}>
              <FormInput
                name='frontLeftBrakeHose'
                label={formatMessage({ id: 'clientTab.frontLeftBrakeHose' })}
              />
              <FormInput
                name='frontRightBrakeHose'
                label={formatMessage({ id: 'clientTab.frontRightBrakeHose' })}
              />
            </LabeledBox>

            <LabeledBox label={formatMessage({ id: 'clients.rearBrakeHose' })}>
              <FormInput
                name='rearLeftBrakeHose'
                label={formatMessage({ id: 'clientTab.rearLeftBrakeHose' })}
              />
              <FormInput
                name='rearRightBrakeHose'
                label={formatMessage({ id: 'clientTab.rearRightBrakeHose' })}
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
