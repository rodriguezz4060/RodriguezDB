import { prisma } from '@/prisma/prisma-client'
import { notFound } from 'next/navigation'
import { TransmissionForm } from './transmission-form'

export default async function ClientPage({ params: { id } }: { params: { id: string } }) {
  const client = await prisma.clients.findFirst({
    where: { id: Number(id) },
    select: {
      clientCar: {
        select: {
          id: true,
          frontLeftOuterBallJoint: true,
          frontRightOuterBallJoint: true,
          frontLeftInnerBallJoint: true,
          frontRightInnerBallJoint: true,
          frontLeftHandDrive: true,
          frontRightHandDrive: true,
          driveShaft: true,
          rearLeftOuterBallJoint: true,
          rearRightOuterBallJoint: true,
          rearLeftInnerBallJoint: true,
          rearRightInnerBallJoint: true,
          automaticTransmissionOilPanGasket: true,
          automaticTransmissionFilter: true,
          automaticTransmissionFillerGasket: true,
          automaticTransmissionOilPanGasket2: true,
          automaticTransmissionFilter2: true,
          transmissionDrainPlug: true,
          transmissionDrainPlugGasket: true,
          suspensionBearing: true,
          frontPistonRodDusterOuter: true,
          frontPistonRodDusterInnerLeft: true,
          frontPistonRodDusterInnerRight: true,
          rearPistonRodDusterOuter: true,
          rearPistonRodDusterInnerLeft: true,
          rearPistonRodDusterInnerRight: true,
          automaticTransmissionTorqueConverterOilSeal: true,
          gearboxPrimaryShaftOilSeal: true,
          gearboxRockerGland: true,
          leftDriveOilSeal: true,
          rightDriveOilSeal: true,
          clutchDisk: true,
          clutchBasket: true,
          releaseBearing: true,
          clutchKit: true,
          clutchMasterCylinder: true,
          clutchSlaveCylinder: true,
          clutchMasterCylinderKit: true,
          clutchSlaveCylinderRepairKit: true,
        },
      },
    },
  })

  if (!client || !client.clientCar) {
    return notFound()
  }

  return <TransmissionForm clientCar={client.clientCar} />
}
