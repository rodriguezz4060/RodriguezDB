import { useIntl } from 'react-intl'

export const EngineTimingBelt = (clientCar: any) => {
  const { formatMessage } = useIntl()

  const engineTimingBelt = [
    { label: formatMessage({ id: 'clientTab.timingChainLong' }), value: clientCar.timingChainLong },
    {
      label: formatMessage({ id: 'clientTab.timingChainShort' }),
      value: clientCar.timingChainShort,
    },
    { label: formatMessage({ id: 'clientTab.chainTensioner1' }), value: clientCar.chainTensioner1 },
    { label: formatMessage({ id: 'clientTab.chainTensioner2' }), value: clientCar.chainTensioner2 },
    { label: formatMessage({ id: 'clientTab.chainTensioner3' }), value: clientCar.chainTensioner3 },
    { label: formatMessage({ id: 'clientTab.chainKit' }), value: clientCar.chainKit },

    { label: formatMessage({ id: 'clientTab.timingBelt' }), value: clientCar.timingBelt },
    {
      label: formatMessage({ id: 'clientTab.timingBeltTensioner' }),
      value: clientCar.timingBeltTensioner,
    },
    {
      label: formatMessage({ id: 'clientTab.timingBeltRoller' }),
      value: clientCar.timingBeltRoller,
    },
  ]

  return engineTimingBelt
}

export const EngineAndPiston = (clientCar: any) => {
  const { formatMessage } = useIntl()

  const enginePiston = [
    { label: formatMessage({ id: 'clientTab.pistons' }), value: clientCar.pistons },
    { label: formatMessage({ id: 'clientTab.pistonsRings' }), value: clientCar.pistonsRings },
  ]

  const engineValves = [
    {
      label: formatMessage({ id: 'clientTab.hydrocompensators' }),
      value: clientCar.hydrocompensators,
    },
    { label: formatMessage({ id: 'clientTab.valveIn' }), value: clientCar.valveIn },
    { label: formatMessage({ id: 'clientTab.valveEx' }), value: clientCar.valveEx },
    { label: formatMessage({ id: 'clientTab.valveGuidesIn' }), value: clientCar.valveGuidesIn },
    { label: formatMessage({ id: 'clientTab.valveGuidesEx' }), value: clientCar.valveGuidesEx },
  ]

  const engineLiner = [
    {
      label: formatMessage({ id: 'clientTab.bearingConnectingRod' }),
      value: clientCar.bearingConnectingRod,
    },
    { label: formatMessage({ id: 'clientTab.bearingCamshaft' }), value: clientCar.bearingCamshaft },
    {
      label: formatMessage({ id: 'clientTab.crankshaftCamberRings' }),
      value: clientCar.crankshaftCamberRings,
    },
  ]

  return { enginePiston, engineValves, engineLiner }
}

export const BeltAndTensioner = (clientCar: any) => {
  const { formatMessage } = useIntl()

  const driveBelt = [
    { label: formatMessage({ id: 'clientTab.generatorBelt' }), value: clientCar.generatorBelt },
    {
      label: formatMessage({ id: 'clientTab.powerSteeringBelt' }),
      value: clientCar.powerSteeringBelt,
    },
    {
      label: formatMessage({ id: 'clientTab.airConditionerBelt' }),
      value: clientCar.airConditionerBelt,
    },
  ]

  const tensionerBelt = [
    { label: formatMessage({ id: 'clientTab.tensionToller' }), value: clientCar.tensionToller },
    { label: formatMessage({ id: 'clientTab.bypassRoller1' }), value: clientCar.bypassRoller1 },
    { label: formatMessage({ id: 'clientTab.bypassRoller2' }), value: clientCar.bypassRoller2 },
    {
      label: formatMessage({ id: 'clientTab.generatorOverrunningClutch' }),
      value: clientCar.generatorOverrunningClutch,
    },
  ]

  return { driveBelt, tensionerBelt }
}

export const EngineGasket = (clientCar: any) => {
  const { formatMessage } = useIntl()

  const enginePgb = [
    { label: formatMessage({ id: 'clientTab.engineGasketKit' }), value: clientCar.engineGasketKit },
    { label: formatMessage({ id: 'clientTab.headGasket' }), value: clientCar.headGasket },
  ]

  const engineGasket = [
    {
      label: formatMessage({ id: 'clientTab.valveCoverGasketLeft' }),
      value: clientCar.valveCoverGasketLeft,
    },
    {
      label: formatMessage({ id: 'clientTab.valveCoverGasketRight' }),
      value: clientCar.valveCoverGasketRight,
    },
    {
      label: formatMessage({ id: 'clientTab.valveCoverGasket' }),
      value: clientCar.valveCoverGasket,
    },
    {
      label: formatMessage({ id: 'clientTab.intakeManifoldGasket' }),
      value: clientCar.intakeManifoldGasket,
    },
    {
      label: formatMessage({ id: 'clientTab.exhaustManifoldGasket' }),
      value: clientCar.exhaustManifoldGasket,
    },
    {
      label: formatMessage({ id: 'clientTab.exhaustPipeGasket1' }),
      value: clientCar.exhaustPipeGasket1,
    },
    {
      label: formatMessage({ id: 'clientTab.exhaustPipeGasket2' }),
      value: clientCar.exhaustPipeGasket2,
    },
    {
      label: formatMessage({ id: 'clientTab.exhaustPipeGasket3' }),
      value: clientCar.exhaustPipeGasket3,
    },
  ]

  return { enginePgb, engineGasket }
}

export const EngineCushion = (clientCar: any) => {
  const { formatMessage } = useIntl()

  const engineCushion = [
    {
      label: formatMessage({ id: 'clientTab.frontLeftEngineCushion' }),
      value: clientCar.frontLeftEngineCushion,
    },
    {
      label: formatMessage({ id: 'clientTab.frontRightEngineCushion' }),
      value: clientCar.frontRightEngineCushion,
    },
    {
      label: formatMessage({ id: 'clientTab.engineCushionLeft' }),
      value: clientCar.engineCushionLeft,
    },
    {
      label: formatMessage({ id: 'clientTab.engineCushionRear' }),
      value: clientCar.engineCushionRear,
    },
  ]

  return engineCushion
}

export const EngineOilSeals = (clientCar: any) => {
  const { formatMessage } = useIntl()

  const engineOilSeals = [
    {
      label: formatMessage({ id: 'clientTab.frontCrankshaftOilSeal' }),
      value: clientCar.frontCrankshaftOilSeal,
    },
    {
      label: formatMessage({ id: 'clientTab.rearCrankshaftOilSeal' }),
      value: clientCar.rearCrankshaftOilSeal,
    },
    { label: formatMessage({ id: 'clientTab.camshaftOilSeal' }), value: clientCar.camshaftOilSeal },
    { label: formatMessage({ id: 'clientTab.oilPumpPacking' }), value: clientCar.oilPumpPacking },
    { label: formatMessage({ id: 'clientTab.intakeOilCaps' }), value: clientCar.intakeOilCaps },
    { label: formatMessage({ id: 'clientTab.exhaustOilCaps' }), value: clientCar.exhaustOilCaps },
  ]
  return engineOilSeals
}

export const AirSupplySystem = (clientCar: any) => {
  const { formatMessage } = useIntl()

  const airSupplySystem = [
    {
      label: formatMessage({ id: 'clientTab.airDuctCorrugation' }),
      value: clientCar.airDuctCorrugation,
    },
  ]

  return airSupplySystem
}

export const Filters = (clientCar: any) => {
  const { formatMessage } = useIntl()

  const filters = [
    { label: formatMessage({ id: 'clientTab.oilFilter' }), value: clientCar.oilFilter },
    { label: formatMessage({ id: 'clientTab.airFilter' }), value: clientCar.airFilter },
    { label: formatMessage({ id: 'clientTab.fuelFilter' }), value: clientCar.fuelFilter },
    { label: formatMessage({ id: 'clientTab.cabinFilter' }), value: clientCar.cabinFilter },
  ]
  return filters
}

export const ShockAbsorbers = (clientCar: any) => {
  const { formatMessage } = useIntl()

  const shockAbsorbersFront = [
    {
      label: formatMessage({ id: 'clientTab.frontLeftShockAbsorber' }),
      value: clientCar.frontLeftShockAbsorber,
    },
    {
      label: formatMessage({ id: 'clientTab.frontRightShockAbsorber' }),
      value: clientCar.frontRightShockAbsorber,
    },
  ]

  const shockAbsorbersRear = [
    {
      label: formatMessage({ id: 'clientTab.rearLeftShockAbsorber' }),
      value: clientCar.rearLeftShockAbsorber,
    },
    {
      label: formatMessage({ id: 'clientTab.rearRightShockAbsorber' }),
      value: clientCar.rearRightShockAbsorber,
    },
  ]

  return { shockAbsorbersFront, shockAbsorbersRear }
}

export const NutsWheelStuds = (clientCar: any) => {
  const { formatMessage } = useIntl()

  const nutsWheelStuds = [
    { label: formatMessage({ id: 'clientTab.wheelStud' }), value: clientCar.wheelStud },
    { label: formatMessage({ id: 'clientTab.wheelNut' }), value: clientCar.wheelNut },
  ]
  return nutsWheelStuds
}

export const StrutMountsDustCoversBumpers = (clientCar: any) => {
  const { formatMessage } = useIntl()

  const strutMounts = [
    {
      label: formatMessage({ id: 'clientTab.leftFrontStrutSupport' }),
      value: clientCar.leftFrontStrutSupport,
    },
    {
      label: formatMessage({ id: 'clientTab.rightFrontStrutSupport' }),
      value: clientCar.rightFrontStrutSupport,
    },
    {
      label: formatMessage({ id: 'clientTab.leftRearStrutSupport' }),
      value: clientCar.leftRearStrutSupport,
    },
    {
      label: formatMessage({ id: 'clientTab.rightRearStrutSupport' }),
      value: clientCar.rightRearStrutSupport,
    },
    {
      label: formatMessage({ id: 'clientTab.frontSupportBearing' }),
      value: clientCar.frontSupportBearing,
    },
  ]

  const dustCoversBumpers = [
    {
      label: formatMessage({ id: 'clientTab.frontLeftStrutDuster' }),
      value: clientCar.frontLeftStrutDuster,
    },
    {
      label: formatMessage({ id: 'clientTab.frontRightStrutDuster' }),
      value: clientCar.frontRightStrutDuster,
    },
    {
      label: formatMessage({ id: 'clientTab.rearLeftStrutDuster' }),
      value: clientCar.rearLeftStrutDuster,
    },
    {
      label: formatMessage({ id: 'clientTab.rearRightStrutDuster' }),
      value: clientCar.rearRightStrutDuster,
    },
    {
      label: formatMessage({ id: 'clientTab.frontStrutBumper' }),
      value: clientCar.frontStrutBumper,
    },
    { label: formatMessage({ id: 'clientTab.rearStrutBumper' }), value: clientCar.rearStrutBumper },
  ]

  return { strutMounts, dustCoversBumpers }
}

export const HubBearings = (clientCar: any) => {
  const { formatMessage } = useIntl()

  const hubBearingsFront = [
    {
      label: formatMessage({ id: 'clientTab.frontLeftHubBearing' }),
      value: clientCar.frontLeftHubBearing,
    },
    {
      label: formatMessage({ id: 'clientTab.frontRightHubBearing' }),
      value: clientCar.frontRightHubBearing,
    },
  ]

  const hubBearingsRear = [
    {
      label: formatMessage({ id: 'clientTab.rearLeftHubBearing' }),
      value: clientCar.rearLeftHubBearing,
    },
    {
      label: formatMessage({ id: 'clientTab.rearRightHubBearing' }),
      value: clientCar.rearRightHubBearing,
    },
  ]
  return { hubBearingsFront, hubBearingsRear }
}

export const SteeringRackAndPowerSteering = (clientCar: any) => {
  const { formatMessage } = useIntl()

  const steeringRackAndPowerSteering = [
    {
      label: formatMessage({ id: 'clientTab.hydraulicPowerSteeringKit' }),
      value: clientCar.hydraulicPowerSteeringKit,
    },
    {
      label: formatMessage({ id: 'clientTab.railSealsAndGaskets' }),
      value: clientCar.railSealsAndGaskets,
    },
  ]

  const powerSteeringBoot = [
    {
      label: formatMessage({ id: 'clientTab.steeringRackDustCoverLeft' }),
      value: clientCar.steeringRackDustCoverLeft,
    },
    {
      label: formatMessage({ id: 'clientTab.steeringRackDustCoverRight' }),
      value: clientCar.steeringRackDustCoverRight,
    },
  ]

  return { steeringRackAndPowerSteering, powerSteeringBoot }
}

export const Arms = (clientCar: any) => {
  const { formatMessage } = useIntl()

  const armsFront = [
    {
      label: formatMessage({ id: 'clientTab.frontLowerLeftArm' }),
      value: clientCar.frontLowerLeftArm,
    },
    {
      label: formatMessage({ id: 'clientTab.frontLowerRightArm' }),
      value: clientCar.frontLowerRightArm,
    },
    {
      label: formatMessage({ id: 'clientTab.frontUpperLeftArm' }),
      value: clientCar.frontUpperLeftArm,
    },
    {
      label: formatMessage({ id: 'clientTab.frontUpperRightArm' }),
      value: clientCar.frontUpperRightArm,
    },
  ]

  const armsRear = [
    {
      label: formatMessage({ id: 'clientTab.rearLeftLongitudinalArm' }),
      value: clientCar.rearLeftLongitudinalArm,
    },
    {
      label: formatMessage({ id: 'clientTab.rearRightLongitudinalArm' }),
      value: clientCar.rearRightLongitudinalArm,
    },
    {
      label: formatMessage({ id: 'clientTab.rearLeftTransverseArm1' }),
      value: clientCar.rearLeftTransverseArm1,
    },
    {
      label: formatMessage({ id: 'clientTab.rearRightTransverseArm1' }),
      value: clientCar.rearRightTransverseArm1,
    },
    {
      label: formatMessage({ id: 'clientTab.rearLeftTransverseArm2' }),
      value: clientCar.rearLeftTransverseArm2,
    },
    {
      label: formatMessage({ id: 'clientTab.rearRightTransverseArm2' }),
      value: clientCar.rearRightTransverseArm2,
    },
    { label: formatMessage({ id: 'clientTab.rearCrescentArm' }), value: clientCar.rearCrescentArm },
    {
      label: formatMessage({ id: 'clientTab.rearUpperShortArm' }),
      value: clientCar.rearUpperShortArm,
    },
  ]

  return { armsFront, armsRear }
}

export const SilentBlocks = (clientCar: any) => {
  const { formatMessage } = useIntl()

  const silentBlocksFront = [
    {
      label: formatMessage({ id: 'clientTab.frontLowerControlArmFrontSilentBlock' }),
      value: clientCar.frontLowerControlArmFrontSilentBlock,
    },
    {
      label: formatMessage({ id: 'clientTab.frontLowerControlArmRearSilentBlock' }),
      value: clientCar.frontLowerControlArmRearSilentBlock,
    },
    {
      label: formatMessage({ id: 'clientTab.frontUpperControlArmFrontSilentBlock' }),
      value: clientCar.frontUpperControlArmFrontSilentBlock,
    },
    {
      label: formatMessage({ id: 'clientTab.frontUpperControlArmRearSilentBlock' }),
      value: clientCar.frontUpperControlArmRearSilentBlock,
    },
  ]

  const silentBlocksRear = [
    {
      label: formatMessage({ id: 'clientTab.longitudinalArmSilentBlockLeft' }),
      value: clientCar.longitudinalArmSilentBlockLeft,
    },
    {
      label: formatMessage({ id: 'clientTab.longitudinalArmSilentBlockRight' }),
      value: clientCar.longitudinalArmSilentBlockRight,
    },
    {
      label: formatMessage({ id: 'clientTab.longitudinalHubArmSilentBlockLeft' }),
      value: clientCar.longitudinalHubArmSilentBlockLeft,
    },
    {
      label: formatMessage({ id: 'clientTab.bodyLeftCrossArmSilentBlock' }),
      value: clientCar.bodyLeftCrossArmSilentBlock,
    },
    {
      label: formatMessage({ id: 'clientTab.hubLeftCrossArmSilentBlock' }),
      value: clientCar.hubLeftCrossArmSilentBlock,
    },
    {
      label: formatMessage({ id: 'clientTab.bodyRightCrossArmSilentBlock' }),
      value: clientCar.bodyRightCrossArmSilentBlock,
    },
    {
      label: formatMessage({ id: 'clientTab.hubRightCrossArmSilentBlock' }),
      value: clientCar.hubRightCrossArmSilentBlock,
    },
    {
      label: formatMessage({ id: 'clientTab.camberArmSilentBlock1' }),
      value: clientCar.camberArmSilentBlock1,
    },
    {
      label: formatMessage({ id: 'clientTab.camberArmSilentBlock2' }),
      value: clientCar.camberArmSilentBlock2,
    },
    {
      label: formatMessage({ id: 'clientTab.frontSubframeSilentBlock' }),
      value: clientCar.frontSubframeSilentBlock,
    },
    {
      label: formatMessage({ id: 'clientTab.rearSubframeSilentBlock' }),
      value: clientCar.rearSubframeSilentBlock,
    },
  ]

  return { silentBlocksFront, silentBlocksRear }
}

export const Stabilizer = (clientCar: any) => {
  const { formatMessage } = useIntl()

  const stabilizerBushings = [
    {
      label: formatMessage({ id: 'clientTab.frontStabilizerSushings' }),
      value: clientCar.frontStabilizerSushings,
    },
    {
      label: formatMessage({ id: 'clientTab.frontStabilizerSushingsLeft' }),
      value: clientCar.frontStabilizerSushingsLeft,
    },
    {
      label: formatMessage({ id: 'clientTab.frontStabilizerSushingsRight' }),
      value: clientCar.frontStabilizerSushingsRight,
    },
    {
      label: formatMessage({ id: 'clientTab.rearStabilizerSushings' }),
      value: clientCar.rearStabilizerSushings,
    },
  ]

  const stabilizerRods = [
    {
      label: formatMessage({ id: 'clientTab.frontLeftStabilizerBar' }),
      value: clientCar.frontLeftStabilizerBar,
    },
    {
      label: formatMessage({ id: 'clientTab.frontRightStabilizerBar' }),
      value: clientCar.frontRightStabilizerBar,
    },
    {
      label: formatMessage({ id: 'clientTab.rearLeftStabilizerBar' }),
      value: clientCar.rearLeftStabilizerBar,
    },
    {
      label: formatMessage({ id: 'clientTab.rearRightStabilizerBar' }),
      value: clientCar.rearRightStabilizerBar,
    },
  ]

  return { stabilizerBushings, stabilizerRods }
}

export const PullRodsAndLugs = (clientCar: any) => {
  const { formatMessage } = useIntl()

  const pullRods = [
    {
      label: formatMessage({ id: 'clientTab.steeringLinkLeft' }),
      value: clientCar.steeringLinkLeft,
    },
    {
      label: formatMessage({ id: 'clientTab.steeringLinkRight' }),
      value: clientCar.steeringLinkRight,
    },
  ]

  const rodsLugs = [
    {
      label: formatMessage({ id: 'clientTab.outerLeftSteeringKnuckle' }),
      value: clientCar.outerLeftSteeringKnuckle,
    },
    {
      label: formatMessage({ id: 'clientTab.outerRightSteeringKnuckle' }),
      value: clientCar.outerRightSteeringKnuckle,
    },
    {
      label: formatMessage({ id: 'clientTab.leftInnerSteeringKnuckle' }),
      value: clientCar.leftInnerSteeringKnuckle,
    },
    {
      label: formatMessage({ id: 'clientTab.leftRightSteeringKnuckle' }),
      value: clientCar.leftRightSteeringKnuckle,
    },
  ]

  return { pullRods, rodsLugs }
}

export const BallBearings = (clientCar: any) => {
  const { formatMessage } = useIntl()

  const ballBearings = [
    {
      label: formatMessage({ id: 'clientTab.lowerLeftBallJoint' }),
      value: clientCar.lowerLeftBallJoint,
    },
    {
      label: formatMessage({ id: 'clientTab.lowerRightBallJoint' }),
      value: clientCar.lowerRightBallJoint,
    },
    {
      label: formatMessage({ id: 'clientTab.upperLeftBallJoint' }),
      value: clientCar.upperLeftBallJoint,
    },
    {
      label: formatMessage({ id: 'clientTab.upperRightBallJoint' }),
      value: clientCar.upperRightBallJoint,
    },
  ]
  return ballBearings
}

export const BrakeCable = (clientCar: any) => {
  const { formatMessage } = useIntl()

  const brakeCable = [
    {
      label: formatMessage({ id: 'clientTab.frontHandbrakeCable' }),
      value: clientCar.frontHandbrakeCable,
    },
    { label: formatMessage({ id: 'clientTab.rearLeftCable' }), value: clientCar.rearLeftCable },
    { label: formatMessage({ id: 'clientTab.reaRightCable' }), value: clientCar.reaRightCable },
  ]

  return brakeCable
}

export const BrakeDisksAndDrums = (clientCar: any) => {
  const { formatMessage } = useIntl()

  const brakeDisksAndDrums = [
    {
      label: formatMessage({ id: 'clientTab.frontBrakeDiskLeft' }),
      value: clientCar.frontBrakeDiskLeft,
    },
    {
      label: formatMessage({ id: 'clientTab.frontBrakeDiskRight' }),
      value: clientCar.frontBrakeDiskRight,
    },
    { label: formatMessage({ id: 'clientTab.rearBrakeDisk' }), value: clientCar.rearBrakeDisk },
  ]
  return brakeDisksAndDrums
}

export const BrakePads = (clientCar: any) => {
  const { formatMessage } = useIntl()

  const brakePads = [
    { label: formatMessage({ id: 'clientTab.frontBrake' }), value: clientCar.frontBrake },
    { label: formatMessage({ id: 'clientTab.rearBrake' }), value: clientCar.rearBrake },
    {
      label: formatMessage({ id: 'clientTab.handbrakeBrakePads' }),
      value: clientCar.handbrakeBrakePads,
    },
  ]
  return brakePads
}

export const BrakeCylinder = (clientCar: any) => {
  const { formatMessage } = useIntl()

  const brakeCylinder = [
    {
      label: formatMessage({ id: 'clientTab.brakeMasterCylinder' }),
      value: clientCar.brakeMasterCylinder,
    },
    {
      label: formatMessage({ id: 'clientTab.slaveBrakeCylinder' }),
      value: clientCar.slaveBrakeCylinder,
    },
    {
      label: formatMessage({ id: 'clientTab.drumBrakeCylinderLeft' }),
      value: clientCar.drumBrakeCylinderLeft,
    },
    {
      label: formatMessage({ id: 'clientTab.drumBrakeCylinderRight' }),
      value: clientCar.drumBrakeCylinderRight,
    },
  ]
  return brakeCylinder
}

export const FrontWheelBrakeMechanism = (clientCar: any) => {
  const { formatMessage } = useIntl()

  const frontWheelBrakeMechanism = [
    {
      label: formatMessage({ id: 'clientTab.setOfFrontGuideRailsWithDustCovers' }),
      value: clientCar.setOfFrontGuideRailsWithDustCovers,
    },
    {
      label: formatMessage({ id: 'clientTab.installationKitForFrontPads' }),
      value: clientCar.installationKitForFrontPads,
    },
    {
      label: formatMessage({ id: 'clientTab.frontCaliperRepairKit' }),
      value: clientCar.frontCaliperRepairKit,
    },
    {
      label: formatMessage({ id: 'clientTab.frontCaliperRepairKitWithPiston' }),
      value: clientCar.frontCaliperRepairKitWithPiston,
    },
  ]

  return frontWheelBrakeMechanism
}

export const RearWheelBrakeMechanism = (clientCar: any) => {
  const { formatMessage } = useIntl()

  const rearWheelBrakeMechanism = [
    {
      label: formatMessage({ id: 'clientTab.setOfRearGuideRailsWithDustCovers' }),
      value: clientCar.setOfRearGuideRailsWithDustCovers,
    },
    {
      label: formatMessage({ id: 'clientTab.installationKitForHandbrakeBrakePads' }),
      value: clientCar.installationKitForHandbrakeBrakePads,
    },
    {
      label: formatMessage({ id: 'clientTab.rearCaliperRepairKit' }),
      value: clientCar.rearCaliperRepairKit,
    },
    {
      label: formatMessage({ id: 'clientTab.rearCaliperRepairKitWithPiston' }),
      value: clientCar.rearCaliperRepairKitWithPiston,
    },
  ]

  return rearWheelBrakeMechanism
}

export const BrakeHoses = (clientCar: any) => {
  const { formatMessage } = useIntl()

  const brakeHosesFront = [
    {
      label: formatMessage({ id: 'clientTab.frontLeftBrakeHose' }),
      value: clientCar.frontLeftBrakeHose,
    },
    {
      label: formatMessage({ id: 'clientTab.frontRightBrakeHose' }),
      value: clientCar.frontRightBrakeHose,
    },
  ]

  const brakeHosesRear = [
    {
      label: formatMessage({ id: 'clientTab.rearLeftBrakeHose' }),
      value: clientCar.rearLeftBrakeHose,
    },
    {
      label: formatMessage({ id: 'clientTab.rearRightBrakeHose' }),
      value: clientCar.rearRightBrakeHose,
    },
  ]
  return { brakeHosesFront, brakeHosesRear }
}

export const GrenadesAndDrives = (clientCar: any) => {
  const { formatMessage } = useIntl()

  const grenadesFront = [
    {
      label: formatMessage({ id: 'clientTab.frontLeftOuterBallJoint' }),
      value: clientCar.frontLeftOuterBallJoint,
    },
    {
      label: formatMessage({ id: 'clientTab.frontRightOuterBallJoint' }),
      value: clientCar.frontRightOuterBallJoint,
    },
    {
      label: formatMessage({ id: 'clientTab.frontLeftInnerBallJoint' }),
      value: clientCar.frontLeftInnerBallJoint,
    },
    {
      label: formatMessage({ id: 'clientTab.frontRightInnerBallJoint' }),
      value: clientCar.frontRightInnerBallJoint,
    },
  ]

  const driveShafts = [
    {
      label: formatMessage({ id: 'clientTab.frontRightInnerBallJoint' }),
      value: clientCar.frontLeftHandDrive,
    },
    {
      label: formatMessage({ id: 'clientTab.frontRightHandDrive' }),
      value: clientCar.frontRightHandDrive,
    },
  ]

  const grenadesRear = [
    {
      label: formatMessage({ id: 'clientTab.rearLeftOuterBallJoint' }),
      value: clientCar.rearLeftOuterBallJoint,
    },
    {
      label: formatMessage({ id: 'clientTab.rearRightOuterBallJoint' }),
      value: clientCar.rearRightOuterBallJoint,
    },
    {
      label: formatMessage({ id: 'clientTab.rearLeftInnerBallJoint' }),
      value: clientCar.rearLeftInnerBallJoint,
    },
    {
      label: formatMessage({ id: 'clientTab.rearRightInnerBallJoint' }),
      value: clientCar.rearRightInnerBallJoint,
    },
  ]
  return { grenadesFront, driveShafts, grenadesRear }
}

export const Gearbox = (clientCar: any) => {
  const { formatMessage } = useIntl()

  const gearboxFilter = [
    {
      label: formatMessage({ id: 'clientTab.automaticTransmissionFilter' }),
      value: clientCar.automaticTransmissionFilter,
    },
    {
      label: formatMessage({ id: 'clientTab.automaticTransmissionOilPanGasket' }),
      value: clientCar.automaticTransmissionOilPanGasket,
    },
    {
      label: formatMessage({ id: 'clientTab.automaticTransmissionFillerGasket' }),
      value: clientCar.automaticTransmissionFillerGasket,
    },
  ]
  const gearboxSmall = [
    {
      label: formatMessage({ id: 'clientTab.automaticTransmissionFilter2' }),
      value: clientCar.automaticTransmissionFilter2,
    },
    {
      label: formatMessage({ id: 'clientTab.automaticTransmissionOilPanGasket2' }),
      value: clientCar.automaticTransmissionOilPanGasket2,
    },
  ]
  const drainPlug = [
    {
      label: formatMessage({ id: 'clientTab.transmissionDrainPlug' }),
      value: clientCar.transmissionDrainPlug,
    },
    {
      label: formatMessage({ id: 'clientTab.transmissionDrainPlugGasket' }),
      value: clientCar.transmissionDrainPlugGasket,
    },
  ]
  return { gearboxFilter, gearboxSmall, drainPlug }
}

export const SuspensionBearing = (clientCar: any) => {
  const { formatMessage } = useIntl()

  const suspensionBearing = [
    {
      label: formatMessage({ id: 'clientTab.suspensionBearing' }),
      value: clientCar.suspensionBearing,
    },
  ]

  return suspensionBearing
}

export const BootDustCovers = (clientCar: any) => {
  const { formatMessage } = useIntl()

  const bootDustCoversFront = [
    {
      label: formatMessage({ id: 'clientTab.frontPistonRodDusterOuter' }),
      value: clientCar.frontPistonRodDusterOuter,
    },
    {
      label: formatMessage({ id: 'clientTab.frontPistonRodDusterInnerLeft' }),
      value: clientCar.frontPistonRodDusterInnerLeft,
    },
    {
      label: formatMessage({ id: 'clientTab.frontPistonRodDusterInnerRight' }),
      value: clientCar.frontPistonRodDusterInnerRight,
    },
  ]

  const bootDustCoversRear = [
    {
      label: formatMessage({ id: 'clientTab.rearPistonRodDusterOuter' }),
      value: clientCar.rearPistonRodDusterOuter,
    },
    {
      label: formatMessage({ id: 'clientTab.rearPistonRodDusterInnerLeft' }),
      value: clientCar.rearPistonRodDusterInnerLeft,
    },
    {
      label: formatMessage({ id: 'clientTab.rearPistonRodDusterInnerRight' }),
      value: clientCar.rearPistonRodDusterInnerRight,
    },
  ]
  return { bootDustCoversFront, bootDustCoversRear }
}

export const TransmissionOilSeals = (clientCar: any) => {
  const { formatMessage } = useIntl()

  const transmissionOilSeals = [
    {
      label: formatMessage({ id: 'clientTab.automaticTransmissionTorqueConverterOilSeal' }),
      value: clientCar.automaticTransmissionTorqueConverterOilSeal,
    },
    {
      label: formatMessage({ id: 'clientTab.gearboxPrimaryShaftOilSeal' }),
      value: clientCar.gearboxPrimaryShaftOilSeal,
    },
    {
      label: formatMessage({ id: 'clientTab.gearboxRockerGland' }),
      value: clientCar.gearboxRockerGland,
    },
    {
      label: formatMessage({ id: 'clientTab.leftDriveOilSeal' }),
      value: clientCar.leftDriveOilSeal,
    },
    {
      label: formatMessage({ id: 'clientTab.rightDriveOilSeal' }),
      value: clientCar.rightDriveOilSeal,
    },
  ]
  return transmissionOilSeals
}

export const Clutch = (clientCar: any) => {
  const { formatMessage } = useIntl()

  const clutch = [
    { label: formatMessage({ id: 'clientTab.clutchDisk' }), value: clientCar.clutchDisk },
    { label: formatMessage({ id: 'clientTab.clutchBasket' }), value: clientCar.clutchBasket },
    { label: formatMessage({ id: 'clientTab.releaseBearing' }), value: clientCar.releaseBearing },
    { label: formatMessage({ id: 'clientTab.clutchKit' }), value: clientCar.clutchKit },
  ]
  return clutch
}

export const ClutchCylinders = (clientCar: any) => {
  const { formatMessage } = useIntl()

  const clutchCylinders = [
    {
      label: formatMessage({ id: 'clientTab.clutchMasterCylinder' }),
      value: clientCar.clutchMasterCylinder,
    },
    {
      label: formatMessage({ id: 'clientTab.clutchSlaveCylinder' }),
      value: clientCar.clutchSlaveCylinder,
    },
  ]

  const clutchCylindersRepair = [
    {
      label: formatMessage({ id: 'clientTab.clutchMasterCylinderKit' }),
      value: clientCar.clutchMasterCylinderKit,
    },
    {
      label: formatMessage({ id: 'clientTab.clutchSlaveCylinderRepairKit' }),
      value: clientCar.clutchSlaveCylinderRepairKit,
    },
  ]
  return { clutchCylinders, clutchCylindersRepair }
}

export const CoolingSystem = (clientCar: any) => {
  const { formatMessage } = useIntl()

  const coolingSystem = [
    { label: formatMessage({ id: 'clientTab.waterPump' }), value: clientCar.waterPump },
    { label: formatMessage({ id: 'clientTab.thermostat' }), value: clientCar.thermostat },
  ]
  return coolingSystem
}

export const Radiator = (clientCar: any) => {
  const { formatMessage } = useIntl()

  const radiator = [
    { label: formatMessage({ id: 'clientTab.radiator' }), value: clientCar.radiator },
    { label: formatMessage({ id: 'clientTab.heaterRadiator' }), value: clientCar.heaterRadiator },
    {
      label: formatMessage({ id: 'clientTab.airConditionerRadiator' }),
      value: clientCar.airConditionerRadiator,
    },
  ]
  const radiatorCap = [
    { label: formatMessage({ id: 'clientTab.radiatorCap' }), value: clientCar.radiatorCap },
    {
      label: formatMessage({ id: 'clientTab.expansionTankCap' }),
      value: clientCar.expansionTankCap,
    },
  ]
  return { radiator, radiatorCap }
}

export const RadiatorPipe = (clientCar: any) => {
  const { formatMessage } = useIntl()

  const radiatorPipe = [
    { label: formatMessage({ id: 'clientTab.upperPipe' }), value: clientCar.upperPipe },
    { label: formatMessage({ id: 'clientTab.lowerPipe' }), value: clientCar.lowerPipe },
  ]
  return radiatorPipe
}
export const Sensors = (clientCar: any) => {
  const { formatMessage } = useIntl()

  const sensors = [
    { label: formatMessage({ id: 'clientTab.oilSensor' }), value: clientCar.oilSensor },
    {
      label: formatMessage({ id: 'clientTab.ventilatorSensor' }),
      value: clientCar.ventilatorSensor,
    },
    {
      label: formatMessage({ id: 'clientTab.dashboardTemperatureSensor' }),
      value: clientCar.dashboardTemperatureSensor,
    },
    {
      label: formatMessage({ id: 'clientTab.airConditionerSensor' }),
      value: clientCar.airConditionerSensor,
    },
    { label: formatMessage({ id: 'clientTab.reverseSensor' }), value: clientCar.reverseSensor },
  ]
  return sensors
}

export const WasherMotor = (clientCar: any) => {
  const { formatMessage } = useIntl()

  const washerMotor = [
    { label: formatMessage({ id: 'clientTab.washerMotor' }), value: clientCar.washerMotor },
  ]
  return washerMotor
}

export const HandwheelCable = (clientCar: any) => {
  const { formatMessage } = useIntl()

  const handwheelCable = [
    { label: formatMessage({ id: 'clientTab.handwheelCable' }), value: clientCar.handwheelCable },
  ]
  return handwheelCable
}

export const Lambda = (clientCar: any) => {
  const { formatMessage } = useIntl()

  const lambda = [
    { label: formatMessage({ id: 'clientTab.lambdaProbe1' }), value: clientCar.lambdaProbe1 },
    { label: formatMessage({ id: 'clientTab.lambdaProbe2' }), value: clientCar.lambdaProbe2 },
  ]
  return lambda
}

export const SparkPlugsAndIgnitionCoil = (clientCar: any) => {
  const { formatMessage } = useIntl()

  const sparkPlugs = [
    { label: formatMessage({ id: 'clientTab.sparkPlug' }), value: clientCar.sparkPlug },
  ]
  const IgnitionCoil = [
    { label: formatMessage({ id: 'clientTab.ignitionCoil' }), value: clientCar.ignitionCoil },
  ]
  const ignitionWires = [
    { label: formatMessage({ id: 'clientTab.ignitionWires' }), value: clientCar.ignitionWires },
  ]
  const trampler = [
    { label: formatMessage({ id: 'clientTab.timingCover' }), value: clientCar.timingCover },
    { label: formatMessage({ id: 'clientTab.slider' }), value: clientCar.slider },
  ]
  return { sparkPlugs, IgnitionCoil, ignitionWires, trampler }
}

export const AbsSensor = (clientCar: any) => {
  const { formatMessage } = useIntl()

  const absFront = [
    {
      label: formatMessage({ id: 'clientTab.frontAbsSensorLeft' }),
      value: clientCar.frontAbsSensorLeft,
    },
    {
      label: formatMessage({ id: 'clientTab.frontAbsSensorRight' }),
      value: clientCar.frontAbsSensorRight,
    },
  ]

  const absRear = [
    {
      label: formatMessage({ id: 'clientTab.rearAbsSensorLeft' }),
      value: clientCar.rearAbsSensorLeft,
    },
    {
      label: formatMessage({ id: 'clientTab.rearAbsSensorRight' }),
      value: clientCar.rearAbsSensorRight,
    },
  ]
  return { absFront, absRear }
}

export const LightBulbs = (clientCar: any) => {
  const { formatMessage } = useIntl()

  const lightBulbs = [
    { label: formatMessage({ id: 'clientTab.brakeLightBulbs' }), value: clientCar.brakeLightBulbs },
    {
      label: formatMessage({ id: 'clientTab.parkingLightBulbsFront' }),
      value: clientCar.parkingLightBulbsFront,
    },
    {
      label: formatMessage({ id: 'clientTab.parkingLightBulbsRear' }),
      value: clientCar.parkingLightBulbsRear,
    },
    { label: formatMessage({ id: 'clientTab.sideSignalBulbs' }), value: clientCar.sideSignalBulbs },
    {
      label: formatMessage({ id: 'clientTab.reverseLightBulbs' }),
      value: clientCar.reverseLightBulbs,
    },
    {
      label: formatMessage({ id: 'clientTab.mainHeadlightBulbs' }),
      value: clientCar.mainHeadlightBulbs,
    },
    { label: formatMessage({ id: 'clientTab.fogLightBulbs' }), value: clientCar.fogLightBulbs },
  ]
  return lightBulbs
}

export const Wipers = (clientCar: any) => {
  const { formatMessage } = useIntl()

  const wipers = [
    { label: formatMessage({ id: 'clientTab.driversWiper' }), value: clientCar.driversWiper },
    { label: formatMessage({ id: 'clientTab.passengerWiper' }), value: clientCar.passengerWiper },
  ]
  return wipers
}

export const HoodShockAbsorbers = (clientCar: any) => {
  const { formatMessage } = useIntl()

  const hoodShockAbsorbers = [
    {
      label: formatMessage({ id: 'clientTab.hoodShockAbsorbers' }),
      value: clientCar.hoodShockAbsorbers,
    },
  ]
  return hoodShockAbsorbers
}
