import { prisma } from '@/prisma/prisma-client'
import { notFound } from 'next/navigation'
import { BrakeSystemForm } from './brake-system-form'

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

    waterPump: clientCar.waterPump ?? '',
    thermostat: clientCar.thermostat ?? '',
    radiator: clientCar.radiator ?? '',
    heaterRadiator: clientCar.heaterRadiator ?? '',
    airConditionerRadiator: clientCar.airConditionerRadiator ?? '',
    upperPipe: clientCar.upperPipe ?? '',
    lowerPipe: clientCar.lowerPipe ?? '',
    radiatorCap: clientCar.radiatorCap ?? '',
    expansionTankCap: clientCar.expansionTankCap ?? '',
  }

  return <BrakeSystemForm clientCar={engineFormData} />
}
