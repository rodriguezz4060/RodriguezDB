import { prisma } from '@/prisma/prisma-client'

import { notFound } from 'next/navigation'
import { SuspensionForm } from './suspension-form'

export default async function ClientPage({ params: { id } }: { params: { id: string } }) {
  const client = await prisma.clients.findFirst({
    where: { id: Number(id) },
    include: {
      clientCar: true,
    },
  })

  if (!client || !client.clientCar) {
    return notFound()
  }

  const { clientCar } = client

  const SuspensionFormData = {
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
  }

  return <SuspensionForm clientCar={SuspensionFormData} />
}
