'use client'

import {
  formEditClientCarSchema,
  TFormEditClientCarSchema,
} from '@/shared/components/shared/clients/schemas/edit-client-car-schemas'
import { useClientCarForm } from '@/shared/hooks'
import { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { SuspensionFormData } from '@/@types/client-car'
import { FormInput, LabeledBox } from '@/shared/components/shared'
import { Tabs, TabsContent, TabsTrigger } from '@/shared/components/ui/tabs'
import { TabsList } from '@radix-ui/react-tabs'
import { Button } from '@/shared/components/ui'
import { useIntl } from 'react-intl'

interface Props {
  clientCar: SuspensionFormData
}

export function SuspensionForm({ clientCar }: Props) {
  const { formatMessage } = useIntl()

  const form = useForm<TFormEditClientCarSchema>({
    resolver: zodResolver(formEditClientCarSchema),
    defaultValues: {
      id: clientCar.id,
      frontLeftShockAbsorber: clientCar.frontLeftShockAbsorber ?? '',
      frontRightShockAbsorber: clientCar.frontRightShockAbsorber ?? '',
      rearLeftShockAbsorber: clientCar.rearLeftShockAbsorber ?? '',
      rearRightShockAbsorber: clientCar.rearRightShockAbsorber ?? '',

      wheelStud: clientCar.wheelStud ?? '',
      wheelNut: clientCar.wheelNut ?? '',

      leftFrontStrutSupport: clientCar.leftFrontStrutSupport ?? '',
      rightFrontStrutSupport: clientCar.rightFrontStrutSupport ?? '',
      leftRearStrutSupport: clientCar.leftRearStrutSupport ?? '',
      rightRearStrutSupport: clientCar.rightRearStrutSupport ?? '',
      frontSupportBearing: clientCar.frontSupportBearing ?? '',
      frontLeftStrutDuster: clientCar.frontLeftStrutDuster ?? '',
      frontRightStrutDuster: clientCar.frontRightStrutDuster ?? '',
      rearLeftStrutDuster: clientCar.rearLeftStrutDuster ?? '',
      rearRightStrutDuster: clientCar.rearRightStrutDuster ?? '',
      frontStrutBumper: clientCar.frontStrutBumper ?? '',
      rearStrutBumper: clientCar.rearStrutBumper ?? '',

      frontLeftHubBearing: clientCar.frontLeftHubBearing ?? '',
      frontRightHubBearing: clientCar.frontRightHubBearing ?? '',
      rearLeftHubBearing: clientCar.rearLeftHubBearing ?? '',
      rearRightHubBearing: clientCar.rearRightHubBearing ?? '',

      hydraulicPowerSteeringKit: clientCar.hydraulicPowerSteeringKit ?? '',
      railSealsAndGaskets: clientCar.railSealsAndGaskets ?? '',
      steeringRackDustCoverLeft: clientCar.steeringRackDustCoverLeft ?? '',
      steeringRackDustCoverRight: clientCar.steeringRackDustCoverRight ?? '',

      frontLowerLeftArm: clientCar.frontLowerLeftArm ?? '',
      frontLowerRightArm: clientCar.frontLowerRightArm ?? '',
      frontUpperLeftArm: clientCar.frontUpperLeftArm ?? '',
      frontUpperRightArm: clientCar.frontUpperRightArm ?? '',
      rearLeftLongitudinalArm: clientCar.rearLeftLongitudinalArm ?? '',
      rearRightLongitudinalArm: clientCar.rearRightLongitudinalArm ?? '',
      rearLeftTransverseArm1: clientCar.rearLeftTransverseArm1 ?? '',
      rearRightTransverseArm1: clientCar.rearRightTransverseArm1 ?? '',
      rearLeftTransverseArm2: clientCar.rearLeftTransverseArm2 ?? '',
      rearRightTransverseArm2: clientCar.rearRightTransverseArm2 ?? '',
      rearCrescentArm: clientCar.rearCrescentArm ?? '',
      rearUpperShortArm: clientCar.rearUpperShortArm ?? '',

      frontLowerControlArmFrontSilentBlock: clientCar.frontLowerControlArmFrontSilentBlock ?? '',
      frontLowerControlArmRearSilentBlock: clientCar.frontLowerControlArmRearSilentBlock ?? '',
      frontUpperControlArmFrontSilentBlock: clientCar.frontUpperControlArmFrontSilentBlock ?? '',
      frontUpperControlArmRearSilentBlock: clientCar.frontUpperControlArmRearSilentBlock ?? '',
      longitudinalArmSilentBlockLeft: clientCar.longitudinalArmSilentBlockLeft ?? '',
      longitudinalArmSilentBlockRight: clientCar.longitudinalArmSilentBlockRight ?? '',
      longitudinalHubArmSilentBlockLeft: clientCar.longitudinalHubArmSilentBlockLeft ?? '',
      bodyLeftCrossArmSilentBlock: clientCar.bodyLeftCrossArmSilentBlock ?? '',
      hubLeftCrossArmSilentBlock: clientCar.hubLeftCrossArmSilentBlock ?? '',
      bodyRightCrossArmSilentBlock: clientCar.bodyRightCrossArmSilentBlock ?? '',
      hubRightCrossArmSilentBlock: clientCar.hubRightCrossArmSilentBlock ?? '',
      camberArmSilentBlock1: clientCar.camberArmSilentBlock1 ?? '',
      camberArmSilentBlock2: clientCar.camberArmSilentBlock2 ?? '',
      frontSubframeSilentBlock: clientCar.frontSubframeSilentBlock ?? '',
      rearSubframeSilentBlock: clientCar.rearSubframeSilentBlock ?? '',
      frontStabilizerSushings: clientCar.frontStabilizerSushings ?? '',
      frontStabilizerSushingsLeft: clientCar.frontStabilizerSushingsLeft ?? '',
      frontStabilizerSushingsRight: clientCar.frontStabilizerSushingsRight ?? '',
      rearStabilizerSushings: clientCar.rearStabilizerSushings ?? '',
      frontLeftStabilizerBar: clientCar.frontLeftStabilizerBar ?? '',
      frontRightStabilizerBar: clientCar.frontRightStabilizerBar ?? '',
      rearLeftStabilizerBar: clientCar.rearLeftStabilizerBar ?? '',
      rearRightStabilizerBar: clientCar.rearRightStabilizerBar ?? '',

      steeringLinkLeft: clientCar.steeringLinkLeft ?? '',
      steeringLinkRight: clientCar.steeringLinkRight ?? '',
      outerLeftSteeringKnuckle: clientCar.outerLeftSteeringKnuckle ?? '',
      outerRightSteeringKnuckle: clientCar.outerRightSteeringKnuckle ?? '',
      leftInnerSteeringKnuckle: clientCar.leftInnerSteeringKnuckle ?? '',
      leftRightSteeringKnuckle: clientCar.leftRightSteeringKnuckle ?? '',

      lowerLeftBallJoint: clientCar.lowerLeftBallJoint ?? '',
      lowerRightBallJoint: clientCar.lowerRightBallJoint ?? '',
      upperLeftBallJoint: clientCar.upperLeftBallJoint ?? '',
      upperRightBallJoint: clientCar.upperRightBallJoint ?? '',
    },
  })

  const { onSubmit, isSubmitting } = useClientCarForm()

  return (
    <FormProvider {...form}>
      <form className='gap-5' onSubmit={form.handleSubmit(onSubmit)}>
        <Tabs defaultValue='absorbers'>
          <TabsList>
            <TabsTrigger value='absorbers'>
              {formatMessage({ id: 'clients.absorbers' })}
            </TabsTrigger>
            <TabsTrigger value='wheelStuds'>
              {formatMessage({ id: 'clients.nutsWheelStuds' })}
            </TabsTrigger>
            <TabsTrigger value='bumpers'>
              {formatMessage({ id: 'clients.beltAndRollers' })}
            </TabsTrigger>
            <TabsTrigger value='hub'>{formatMessage({ id: 'clients.hubBearings' })}</TabsTrigger>
            <TabsTrigger value='powerSteering'>
              {formatMessage({ id: 'clients.steeringRack' })}
            </TabsTrigger>
            <TabsTrigger value='arm'>{formatMessage({ id: 'clients.arms' })}</TabsTrigger>
            <TabsTrigger value='salent'>
              {formatMessage({ id: 'clients.silentBlocks' })}
            </TabsTrigger>
            <TabsTrigger value='stabilizer'>
              {formatMessage({ id: 'clients.stabilizer' })}
            </TabsTrigger>
            <TabsTrigger value='linkRoad'>
              {formatMessage({ id: 'clients.pullRodsAndLugs' })}
            </TabsTrigger>
            <TabsTrigger value='ballJoints'>
              {formatMessage({ id: 'clients.ballBearings' })}
            </TabsTrigger>
          </TabsList>
          <TabsContent value='absorbers'>
            <LabeledBox label={formatMessage({ id: 'clients.shockAbsorbersFront' })}>
              <FormInput
                name='frontLeftShockAbsorber'
                label={formatMessage({ id: 'clientTab.frontLeftShockAbsorber' })}
              />
              <FormInput
                name='frontRightShockAbsorber'
                label={formatMessage({ id: 'clientTab.frontRightShockAbsorber' })}
              />
            </LabeledBox>

            <LabeledBox label={formatMessage({ id: 'clients.shockAbsorbersRear' })}>
              <FormInput
                name='rearLeftShockAbsorber'
                label={formatMessage({ id: 'clientTab.rearLeftShockAbsorber' })}
              />
              <FormInput
                name='rearRightShockAbsorber'
                label={formatMessage({ id: 'clientTab.rearRightShockAbsorber' })}
              />
            </LabeledBox>
          </TabsContent>

          <TabsContent value='wheelStuds'>
            <LabeledBox label={formatMessage({ id: 'clients.nutsWheelStuds' })}>
              <FormInput name='wheelStud' label={formatMessage({ id: 'clientTab.wheelStud' })} />
              <FormInput name='wheelNut' label={formatMessage({ id: 'clientTab.wheelNut' })} />
            </LabeledBox>
          </TabsContent>

          <TabsContent value='bumpers'>
            <LabeledBox label={formatMessage({ id: 'clients.strutMounts' })}>
              <FormInput
                name='leftFrontStrutSupport'
                label={formatMessage({ id: 'clientTab.leftFrontStrutSupport' })}
              />
              <FormInput
                name='rightFrontStrutSupport'
                label={formatMessage({ id: 'clientTab.rightFrontStrutSupport' })}
              />
              <FormInput
                name='leftRearStrutSupport'
                label={formatMessage({ id: 'clientTab.leftRearStrutSupport' })}
              />
              <FormInput
                name='rightRearStrutSupport'
                label={formatMessage({ id: 'clientTab.rightRearStrutSupport' })}
              />
              <FormInput
                name='frontSupportBearing'
                label={formatMessage({ id: 'clientTab.frontSupportBearing' })}
              />
            </LabeledBox>

            <LabeledBox label={formatMessage({ id: 'clients.dustCoversBumpers' })}>
              <FormInput
                name='frontLeftStrutDuster'
                label={formatMessage({ id: 'clientTab.frontLeftStrutDuster' })}
              />
              <FormInput
                name='frontRightStrutDuster'
                label={formatMessage({ id: 'clientTab.frontRightStrutDuster' })}
              />
              <FormInput
                name='rearLeftStrutDuster'
                label={formatMessage({ id: 'clientTab.rearLeftStrutDuster' })}
              />
              <FormInput
                name='rearRightStrutDuster'
                label={formatMessage({ id: 'clientTab.rearRightStrutDuster' })}
              />
              <FormInput
                name='frontStrutBumper'
                label={formatMessage({ id: 'clientTab.frontStrutBumper' })}
              />
              <FormInput
                name='rearStrutBumper'
                label={formatMessage({ id: 'clientTab.rearStrutBumper' })}
              />
            </LabeledBox>
          </TabsContent>

          <TabsContent value='hub'>
            <LabeledBox label={formatMessage({ id: 'clients.hubBearings' })}>
              <FormInput
                name='frontLeftHubBearing'
                label={formatMessage({ id: 'clientTab.frontLeftHubBearing' })}
              />
              <FormInput
                name='frontRightHubBearing'
                label={formatMessage({ id: 'clientTab.frontRightHubBearing' })}
              />
              <FormInput
                name='rearLeftHubBearing'
                label={formatMessage({ id: 'clientTab.rearLeftHubBearing' })}
              />
              <FormInput
                name='rearRightHubBearing'
                label={formatMessage({ id: 'clientTab.rearRightHubBearing' })}
              />
            </LabeledBox>
          </TabsContent>

          <TabsContent value='powerSteering'>
            <LabeledBox label={formatMessage({ id: 'clients.steeringRack' })}>
              <FormInput
                name='hydraulicPowerSteeringKit'
                label={formatMessage({ id: 'clientTab.hydraulicPowerSteeringKit' })}
              />
              <FormInput
                name='railSealsAndGaskets'
                label={formatMessage({ id: 'clientTab.railSealsAndGaskets' })}
              />
              <FormInput
                name='steeringRackDustCoverLeft'
                label={formatMessage({ id: 'clientTab.steeringRackDustCoverLeft' })}
              />
              <FormInput
                name='steeringRackDustCoverRight'
                label={formatMessage({ id: 'clientTab.steeringRackDustCoverRight' })}
              />
            </LabeledBox>
          </TabsContent>

          <TabsContent value='arm'>
            <LabeledBox label={formatMessage({ id: 'clients.armsFront' })}>
              <FormInput
                name='frontLowerLeftArm'
                label={formatMessage({ id: 'clientTab.frontLowerLeftArm' })}
              />
              <FormInput
                name='frontLowerRightArm'
                label={formatMessage({ id: 'clientTab.frontLowerRightArm' })}
              />
              <FormInput
                name='frontUpperLeftArm'
                label={formatMessage({ id: 'clientTab.frontUpperLeftArm' })}
              />
              <FormInput
                name='frontUpperRightArm'
                label={formatMessage({ id: 'clientTab.frontUpperRightArm' })}
              />
            </LabeledBox>

            <LabeledBox label={formatMessage({ id: 'clients.armsRear' })}>
              <FormInput
                name='rearLeftLongitudinalArm'
                label={formatMessage({ id: 'clientTab.rearLeftLongitudinalArm' })}
              />
              <FormInput
                name='rearRightLongitudinalArm'
                label={formatMessage({ id: 'clientTab.rearRightLongitudinalArm' })}
              />
              <FormInput
                name='rearLeftTransverseArm1'
                label={formatMessage({ id: 'clientTab.rearLeftTransverseArm1' })}
              />
              <FormInput
                name='rearRightTransverseArm1'
                label={formatMessage({ id: 'clientTab.rearRightTransverseArm1' })}
              />
              <FormInput
                name='rearLeftTransverseArm2'
                label={formatMessage({ id: 'clientTab.rearLeftTransverseArm2' })}
              />
              <FormInput
                name='rearRightTransverseArm2'
                label={formatMessage({ id: 'clientTab.rearRightTransverseArm2' })}
              />
              <FormInput
                name='rearCrescentArm'
                label={formatMessage({ id: 'clientTab.rearCrescentArm' })}
              />
              <FormInput
                name='rearUpperShortArm'
                label={formatMessage({ id: 'clientTab.rearUpperShortArm' })}
              />
            </LabeledBox>
          </TabsContent>

          <TabsContent value='salent'>
            <LabeledBox label={formatMessage({ id: 'clients.silentBlocksFront' })}>
              <FormInput
                name='frontLowerControlArmFrontSilentBlock'
                label={formatMessage({ id: 'clientTab.frontLowerControlArmFrontSilentBlock' })}
              />
              <FormInput
                name='frontLowerControlArmRearSilentBlock'
                label={formatMessage({ id: 'clientTab.frontLowerControlArmRearSilentBlock' })}
              />
              <FormInput
                name='frontUpperControlArmFrontSilentBlock'
                label={formatMessage({ id: 'clientTab.frontUpperControlArmFrontSilentBlock' })}
              />
              <FormInput
                name='frontUpperControlArmRearSilentBlock'
                label={formatMessage({ id: 'clientTab.frontUpperControlArmRearSilentBlock' })}
              />
            </LabeledBox>

            <LabeledBox label={formatMessage({ id: 'clients.silentBlocksRear' })}>
              <FormInput
                name='longitudinalArmSilentBlockLeft'
                label={formatMessage({ id: 'clientTab.longitudinalArmSilentBlockLeft' })}
              />
              <FormInput
                name='longitudinalArmSilentBlockRight'
                label={formatMessage({ id: 'clientTab.longitudinalArmSilentBlockRight' })}
              />
              <FormInput
                name='longitudinalHubArmSilentBlockLeft'
                label={formatMessage({ id: 'clientTab.longitudinalHubArmSilentBlockLeft' })}
              />
              <FormInput
                name='bodyLeftCrossArmSilentBlock'
                label={formatMessage({ id: 'clientTab.bodyLeftCrossArmSilentBlock' })}
              />
              <FormInput
                name='hubLeftCrossArmSilentBlock'
                label={formatMessage({ id: 'clientTab.hubLeftCrossArmSilentBlock' })}
              />
              <FormInput
                name='bodyRightCrossArmSilentBlock'
                label={formatMessage({ id: 'clientTab.bodyRightCrossArmSilentBlock' })}
              />
              <FormInput
                name='hubRightCrossArmSilentBlock'
                label={formatMessage({ id: 'clientTab.hubRightCrossArmSilentBlock' })}
              />
              <FormInput
                name='camberArmSilentBlock1'
                label={formatMessage({ id: 'clientTab.camberArmSilentBlock1' })}
              />
              <FormInput
                name='camberArmSilentBlock2'
                label={formatMessage({ id: 'clientTab.camberArmSilentBlock2' })}
              />
              <FormInput
                name='frontSubframeSilentBlock'
                label={formatMessage({ id: 'clientTab.frontSubframeSilentBlock' })}
              />
              <FormInput
                name='rearSubframeSilentBlock'
                label={formatMessage({ id: 'clientTab.rearSubframeSilentBlock' })}
              />
            </LabeledBox>
          </TabsContent>

          <TabsContent value='stabilizer'>
            <LabeledBox label={formatMessage({ id: 'clients.stabilizerBushings' })}>
              <FormInput
                name='frontStabilizerSushingsLeft'
                label={formatMessage({ id: 'clientTab.frontStabilizerSushingsLeft' })}
              />
              <FormInput
                name='frontStabilizerSushingsRight'
                label={formatMessage({ id: 'clientTab.frontStabilizerSushingsRight' })}
              />
              <FormInput
                name='rearStabilizerSushings'
                label={formatMessage({ id: 'clientTab.rearStabilizerSushings' })}
              />
            </LabeledBox>

            <LabeledBox label={formatMessage({ id: 'clients.stabilizerRods' })}>
              <FormInput
                name='frontLeftStabilizerBar'
                label={formatMessage({ id: 'clientTab.frontLeftStabilizerBar' })}
              />
              <FormInput
                name='frontRightStabilizerBar'
                label={formatMessage({ id: 'clientTab.frontRightStabilizerBar' })}
              />
              <FormInput
                name='rearLeftStabilizerBar'
                label={formatMessage({ id: 'clientTab.rearLeftStabilizerBar' })}
              />
              <FormInput
                name='rearRightStabilizerBar'
                label={formatMessage({ id: 'clientTab.rearRightStabilizerBar' })}
              />
            </LabeledBox>
          </TabsContent>

          <TabsContent value='linkRoad'>
            <LabeledBox label={formatMessage({ id: 'clients.pullRods' })}>
              <FormInput
                name='steeringLinkLeft'
                label={formatMessage({ id: 'clientTab.steeringLinkLeft' })}
              />
              <FormInput
                name='steeringLinkRight'
                label={formatMessage({ id: 'clientTab.steeringLinkRight' })}
              />
            </LabeledBox>

            <LabeledBox label={formatMessage({ id: 'clients.rodsLugs' })}>
              <FormInput
                name='outerLeftSteeringKnuckle'
                label={formatMessage({ id: 'clientTab.outerLeftSteeringKnuckle' })}
              />
              <FormInput
                name='outerRightSteeringKnuckle'
                label={formatMessage({ id: 'clientTab.outerRightSteeringKnuckle' })}
              />
              <FormInput
                name='leftInnerSteeringKnuckle'
                label={formatMessage({ id: 'clientTab.leftInnerSteeringKnuckle' })}
              />
              <FormInput
                name='leftRightSteeringKnuckle'
                label={formatMessage({ id: 'clientTab.leftRightSteeringKnuckle' })}
              />
            </LabeledBox>
          </TabsContent>

          <TabsContent value='ballJoints'>
            <LabeledBox label={formatMessage({ id: 'clients.ballBearings' })}>
              <FormInput
                name='lowerLeftBallJoint'
                label={formatMessage({ id: 'clientTab.lowerLeftBallJoint' })}
              />
              <FormInput
                name='lowerRightBallJoint'
                label={formatMessage({ id: 'clientTab.lowerRightBallJoint' })}
              />
              <FormInput
                name='upperLeftBallJoint'
                label={formatMessage({ id: 'clientTab.upperLeftBallJoint' })}
              />
              <FormInput
                name='upperRightBallJoint'
                label={formatMessage({ id: 'clientTab.upperRightBallJoint' })}
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
