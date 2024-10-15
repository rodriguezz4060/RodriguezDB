import { prisma } from '@/prisma/prisma-client'

import { notFound } from 'next/navigation'
import { SuspensionForm } from './suspension-form'

export default async function ClientPage({ params: { id } }: { params: { id: string } }) {
  const client = await prisma.clients.findFirst({
    where: { id: Number(id) },
    select: {
      clientCar: {
        select: {
          id: true,
          frontLeftShockAbsorber: true,
          frontRightShockAbsorber: true,
          rearLeftShockAbsorber: true,
          rearRightShockAbsorber: true,
          wheelStud: true,
          wheelNut: true,
          leftFrontStrutSupport: true,
          rightFrontStrutSupport: true,
          leftRearStrutSupport: true,
          rightRearStrutSupport: true,
          frontSupportBearing: true,
          frontLeftStrutDuster: true,
          frontRightStrutDuster: true,
          rearLeftStrutDuster: true,
          rearRightStrutDuster: true,
          frontStrutBumper: true,
          rearStrutBumper: true,
          frontLeftHubBearing: true,
          frontRightHubBearing: true,
          rearLeftHubBearing: true,
          rearRightHubBearing: true,
          hydraulicPowerSteeringKit: true,
          railSealsAndGaskets: true,
          steeringRackDustCoverLeft: true,
          steeringRackDustCoverRight: true,
          frontLowerLeftArm: true,
          frontLowerRightArm: true,
          frontUpperLeftArm: true,
          frontUpperRightArm: true,
          rearLeftLongitudinalArm: true,
          rearRightLongitudinalArm: true,
          rearLeftTransverseArm1: true,
          rearRightTransverseArm1: true,
          rearLeftTransverseArm2: true,
          rearRightTransverseArm2: true,
          rearCrescentArm: true,
          rearUpperShortArm: true,
          frontLowerControlArmFrontSilentBlock: true,
          frontLowerControlArmRearSilentBlock: true,
          frontUpperControlArmFrontSilentBlock: true,
          frontUpperControlArmRearSilentBlock: true,
          longitudinalArmSilentBlockLeft: true,
          longitudinalArmSilentBlockRight: true,
          longitudinalHubArmSilentBlockLeft: true,
          bodyLeftCrossArmSilentBlock: true,
          hubLeftCrossArmSilentBlock: true,
          bodyRightCrossArmSilentBlock: true,
          hubRightCrossArmSilentBlock: true,
          camberArmSilentBlock1: true,
          camberArmSilentBlock2: true,
          frontSubframeSilentBlock: true,
          rearSubframeSilentBlock: true,
          frontStabilizerSushings: true,
          frontStabilizerSushingsLeft: true,
          frontStabilizerSushingsRight: true,
          rearStabilizerSushings: true,
          frontLeftStabilizerBar: true,
          frontRightStabilizerBar: true,
          rearLeftStabilizerBar: true,
          rearRightStabilizerBar: true,
          steeringLinkLeft: true,
          steeringLinkRight: true,
          outerLeftSteeringKnuckle: true,
          outerRightSteeringKnuckle: true,
          leftInnerSteeringKnuckle: true,
          leftRightSteeringKnuckle: true,
          lowerLeftBallJoint: true,
          lowerRightBallJoint: true,
          upperLeftBallJoint: true,
          upperRightBallJoint: true,
        },
      },
    },
  })

  if (!client || !client.clientCar) {
    return notFound()
  }

  return <SuspensionForm clientCar={client.clientCar} />
}
