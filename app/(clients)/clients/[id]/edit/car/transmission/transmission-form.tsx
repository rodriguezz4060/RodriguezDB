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
import { useIntl } from 'react-intl'

interface Props {
  clientCar: TransmissionFormData
}

export function TransmissionForm({ clientCar }: Props) {
  const { formatMessage } = useIntl()

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
            <TabsTrigger value='drives'>
              {formatMessage({ id: 'clients.driveShaftsAndGrenades' })}
            </TabsTrigger>
            <TabsTrigger value='gearbox'>{formatMessage({ id: 'clients.gearbox' })}</TabsTrigger>
            <TabsTrigger value='suspensionBearing'>
              {formatMessage({ id: 'clients.suspensionBearing' })}
            </TabsTrigger>
            <TabsTrigger value='bootKit'>
              {formatMessage({ id: 'clients.bootDustCovers' })}
            </TabsTrigger>
            <TabsTrigger value='gearSeal'>
              {formatMessage({ id: 'clients.transmissionOilSeals' })}
            </TabsTrigger>
            <TabsTrigger value='clutch'>{formatMessage({ id: 'clients.clutch' })}</TabsTrigger>
            <TabsTrigger value='clutchCylinders'>
              {formatMessage({ id: 'clients.clutchCylinders' })}
            </TabsTrigger>
          </TabsList>

          <TabsContent value='drives'>
            <LabeledBox label={formatMessage({ id: 'clients.grenadesFront' })}>
              <FormInput
                name='frontLeftOuterBallJoint'
                label={formatMessage({ id: 'clientTab.frontLeftOuterBallJoint' })}
              />
              <FormInput
                name='frontRightOuterBallJoint'
                label={formatMessage({ id: 'clientTab.frontRightOuterBallJoint' })}
              />
              <FormInput
                name='frontLeftInnerBallJoint'
                label={formatMessage({ id: 'clientTab.frontLeftInnerBallJoint' })}
              />
              <FormInput
                name='frontRightInnerBallJoint'
                label={formatMessage({ id: 'clientTab.frontRightInnerBallJoint' })}
              />
            </LabeledBox>

            <LabeledBox label={formatMessage({ id: 'clients.driveShafts' })}>
              <FormInput
                name='frontLeftHandDrive'
                label={formatMessage({ id: 'clientTab.frontLeftHandDrive' })}
              />
              <FormInput
                name='frontRightHandDrive'
                label={formatMessage({ id: 'clientTab.frontRightHandDrive' })}
              />
              <FormInput name='driveShaft' label={formatMessage({ id: 'clientTab.driveShaft' })} />
            </LabeledBox>

            <LabeledBox label={formatMessage({ id: 'clients.grenadesRear' })}>
              <FormInput
                name='rearLeftOuterBallJoint'
                label={formatMessage({ id: 'clientTab.rearLeftOuterBallJoint' })}
              />
              <FormInput
                name='rearRightOuterBallJoint'
                label={formatMessage({ id: 'clientTab.rearRightOuterBallJoint' })}
              />
              <FormInput
                name='rearLeftInnerBallJoint'
                label={formatMessage({ id: 'clientTab.rearLeftInnerBallJoint' })}
              />
              <FormInput
                name='rearRightInnerBallJoint'
                label={formatMessage({ id: 'clientTab.rearRightInnerBallJoint' })}
              />
            </LabeledBox>
          </TabsContent>

          <TabsContent value='gearbox'>
            <LabeledBox label={formatMessage({ id: 'clients.gearbox' })}>
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

            <LabeledBox label={formatMessage({ id: 'clients.gearboxSmall' })}>
              <FormInput
                name='automaticTransmissionFilter2'
                label={formatMessage({ id: 'clientTab.automaticTransmissionFilter2' })}
              />
              <FormInput
                name='automaticTransmissionOilPanGasket2'
                label={formatMessage({ id: 'clientTab.automaticTransmissionOilPanGasket2' })}
              />
            </LabeledBox>

            <LabeledBox label={formatMessage({ id: 'clients.drainPlug' })}>
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

          <TabsContent value='suspensionBearing'>
            <LabeledBox label={formatMessage({ id: 'clients.suspensionBearing' })}>
              <FormInput
                name='suspensionBearing'
                label={formatMessage({ id: 'clientTab.suspensionBearing' })}
              />
            </LabeledBox>
          </TabsContent>

          <TabsContent value='bootKit'>
            <LabeledBox label={formatMessage({ id: 'clients.bootDustCoversFront' })}>
              <FormInput
                name='frontPistonRodDusterOuter'
                label={formatMessage({ id: 'clientTab.frontPistonRodDusterOuter' })}
              />
              <FormInput
                name='frontPistonRodDusterInnerLeft'
                label={formatMessage({ id: 'clientTab.frontPistonRodDusterInnerLeft' })}
              />
              <FormInput
                name='frontPistonRodDusterInnerRight'
                label={formatMessage({ id: 'clientTab.frontPistonRodDusterInnerRight' })}
              />
            </LabeledBox>

            <LabeledBox label={formatMessage({ id: 'clients.bootDustCoversRear' })}>
              <FormInput
                name='rearPistonRodDusterOuter'
                label={formatMessage({ id: 'clientTab.rearPistonRodDusterOuter' })}
              />
              <FormInput
                name='rearPistonRodDusterInnerLeft'
                label={formatMessage({ id: 'clientTab.rearPistonRodDusterInnerLeft' })}
              />
              <FormInput
                name='rearPistonRodDusterInnerRight'
                label={formatMessage({ id: 'clientTab.rearPistonRodDusterInnerRight' })}
              />
            </LabeledBox>
          </TabsContent>

          <TabsContent value='gearSeal'>
            <LabeledBox label={formatMessage({ id: 'clients.transmissionOilSeals' })}>
              <FormInput
                name='automaticTransmissionTorqueConverterOilSeal'
                label={formatMessage({ id: 'clientTab.rearPistonRodDusterInnerRight' })}
              />
              <FormInput
                name='gearboxPrimaryShaftOilSeal'
                label={formatMessage({ id: 'clientTab.gearboxPrimaryShaftOilSeal' })}
              />
              <FormInput
                name='gearboxRockerGland'
                label={formatMessage({ id: 'clientTab.gearboxRockerGland' })}
              />
              <FormInput
                name='leftDriveOilSeal'
                label={formatMessage({ id: 'clientTab.leftDriveOilSeal' })}
              />
              <FormInput
                name='rightDriveOilSeal'
                label={formatMessage({ id: 'clientTab.rightDriveOilSeal' })}
              />
            </LabeledBox>
          </TabsContent>

          <TabsContent value='clutch'>
            <LabeledBox label={formatMessage({ id: 'clients.clutch' })}>
              <FormInput name='clutchDisk' label={formatMessage({ id: 'clientTab.clutchDisk' })} />
              <FormInput
                name='clutchBasket'
                label={formatMessage({ id: 'clientTab.clutchBasket' })}
              />
              <FormInput
                name='releaseBearing'
                label={formatMessage({ id: 'clientTab.releaseBearing' })}
              />
              <FormInput name='clutchKit' label={formatMessage({ id: 'clientTab.clutchKit' })} />
            </LabeledBox>
          </TabsContent>

          <TabsContent value='clutchCylinders'>
            <LabeledBox label={formatMessage({ id: 'clients.clutchCylinders' })}>
              <FormInput
                name='clutchMasterCylinder'
                label={formatMessage({ id: 'clientTab.clutchMasterCylinder' })}
              />
              <FormInput
                name='clutchSlaveCylinder'
                label={formatMessage({ id: 'clientTab.clutchSlaveCylinder' })}
              />
            </LabeledBox>

            <LabeledBox label={formatMessage({ id: 'clients.clutchCylindersRepair' })}>
              <FormInput
                name='clutchMasterCylinderKit'
                label={formatMessage({ id: 'clientTab.clutchMasterCylinderKit' })}
              />
              <FormInput
                name='clutchSlaveCylinderRepairKit'
                label={formatMessage({ id: 'clientTab.clutchSlaveCylinderRepairKit' })}
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
