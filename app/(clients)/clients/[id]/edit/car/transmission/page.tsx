import { prisma } from '@/prisma/prisma-client'
import { notFound } from 'next/navigation'
import { TransmissionForm } from './transmission-form'

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

  const engineFormData = {
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
  }

  return <TransmissionForm clientCar={engineFormData} />
}
