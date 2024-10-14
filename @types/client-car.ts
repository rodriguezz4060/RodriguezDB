export interface EngineFormData {
  id: number
  timingChainLong: string
  timingChainShort: string
  chainTensioner1: string
  chainTensioner2: string
  chainTensioner3: string
  chainKit: string
  timingBelt: string
  timingBeltTensioner: string
  timingBeltRoller: string
  pistons: string
  pistonsRings: string
  hydrocompensators: string
  valveIn: string
  valveEx: string
  valveGuidesIn: string
  valveGuidesEx: string
  bearingConnectingRod: string
  bearingCamshaft: string
  crankshaftCamberRings: string
  generatorBelt: string
  powerSteeringBelt: string
  airConditionerBelt: string
  tensionToller: string
  bypassRoller1: string
  bypassRoller2: string
  generatorOverrunningClutch: string
  engineGasketKit: string
  headGasket: string
  valveCoverGasketLeft: string
  valveCoverGasketRight: string
  valveCoverGasket: string
  intakeManifoldGasket: string
  exhaustManifoldGasket: string
  exhaustPipeGasket1: string
  exhaustPipeGasket2: string
  exhaustPipeGasket3: string
  frontLeftEngineCushion: string
  frontRightEngineCushion: string
  engineCushionLeft: string
  engineCushionRear: string
  frontCrankshaftOilSeal: string
  rearCrankshaftOilSeal: string
  camshaftOilSeal: string
  oilPumpPacking: string
  intakeOilCaps: string
  exhaustOilCaps: string
  airDuctCorrugation: string
  oilFilter: string
  airFilter: string
  fuelFilter: string
  cabinFilter: string
}

export interface SuspensionFormData {
  id: number
  frontLeftShockAbsorber: string
  frontRightShockAbsorber: string
  rearLeftShockAbsorber: string
  rearRightShockAbsorber: string

  wheelStud: string
  wheelNut: string

  leftFrontStrutSupport: string
  rightFrontStrutSupport: string
  leftRearStrutSupport: string
  rightRearStrutSupport: string
  frontSupportBearing: string
  frontLeftStrutDuster: string
  frontRightStrutDuster: string
  rearLeftStrutDuster: string
  rearRightStrutDuster: string
  frontStrutBumper: string
  rearStrutBumper: string

  frontLeftHubBearing: string
  frontRightHubBearing: string
  rearLeftHubBearing: string
  rearRightHubBearing: string

  hydraulicPowerSteeringKit: string
  railSealsAndGaskets: string
  steeringRackDustCoverLeft: string
  steeringRackDustCoverRight: string

  frontLowerLeftArm: string
  frontLowerRightArm: string
  frontUpperLeftArm: string
  frontUpperRightArm: string
  rearLeftLongitudinalArm: string
  rearRightLongitudinalArm: string
  rearLeftTransverseArm1: string
  rearRightTransverseArm1: string
  rearLeftTransverseArm2: string
  rearRightTransverseArm2: string
  rearCrescentArm: string
  rearUpperShortArm: string

  frontLowerControlArmFrontSilentBlock: string
  frontLowerControlArmRearSilentBlock: string
  frontUpperControlArmFrontSilentBlock: string
  frontUpperControlArmRearSilentBlock: string
  longitudinalArmSilentBlockLeft: string
  longitudinalArmSilentBlockRight: string
  longitudinalHubArmSilentBlockLeft: string
  bodyLeftCrossArmSilentBlock: string
  hubLeftCrossArmSilentBlock: string
  bodyRightCrossArmSilentBlock: string
  hubRightCrossArmSilentBlock: string
  camberArmSilentBlock1: string
  camberArmSilentBlock2: string
  frontSubframeSilentBlock: string
  rearSubframeSilentBlock: string
  frontStabilizerSushings: string
  frontStabilizerSushingsLeft: string
  frontStabilizerSushingsRight: string
  rearStabilizerSushings: string
  frontLeftStabilizerBar: string
  frontRightStabilizerBar: string
  rearLeftStabilizerBar: string
  rearRightStabilizerBar: string

  steeringLinkLeft: string
  steeringLinkRight: string
  outerLeftSteeringKnuckle: string
  outerRightSteeringKnuckle: string
  leftInnerSteeringKnuckle: string
  leftRightSteeringKnuckle: string

  lowerLeftBallJoint: string
  lowerRightBallJoint: string
  upperLeftBallJoint: string
  upperRightBallJoint: string
}

export interface BrakeSystemFormData {
  id: number
  frontHandbrakeCable: string
  rearLeftCable: string
  reaRightCable: string

  frontBrakeDiskLeft: string
  frontBrakeDiskRight: string
  rearBrakeDisk: string

  frontBrake: string
  rearBrake: string
  handbrakeBrakePads: string

  brakeMasterCylinder: string
  slaveBrakeCylinder: string
  drumBrakeCylinderLeft: string
  drumBrakeCylinderRight: string

  setOfFrontGuideRailsWithDustCovers: string
  setOfRearGuideRailsWithDustCovers: string
  installationKitForFrontPads: string
  installationKitForRearPads: string
  installationKitForHandbrakeBrakePads: string
  frontCaliperRepairKit: string
  frontCaliperRepairKitWithPiston: string
  rearCaliperRepairKit: string
  rearCaliperRepairKitWithPiston: string

  frontLeftBrakeHose: string
  frontRightBrakeHose: string
  rearLeftBrakeHose: string
  rearRightBrakeHose: string

  frontLeftOuterBallJoint: string
  frontRightOuterBallJoint: string
  frontLeftInnerBallJoint: string
  frontRightInnerBallJoint: string
  frontLeftHandDrive: string
  frontRightHandDrive: string
  driveShaft: string

  rearLeftOuterBallJoint: string
  rearRightOuterBallJoint: string
  rearLeftInnerBallJoint: string
  rearRightInnerBallJoint: string

  automaticTransmissionOilPanGasket: string
  automaticTransmissionFilter: string
  automaticTransmissionFillerGasket: string
  automaticTransmissionOilPanGasket2: string
  automaticTransmissionFilter2: string
  transmissionDrainPlug: string
  transmissionDrainPlugGasket: string

  suspensionBearing: string

  frontPistonRodDusterOuter: string
  frontPistonRodDusterInnerLeft: string
  frontPistonRodDusterInnerRight: string

  rearPistonRodDusterOuter: string
  rearPistonRodDusterInnerLeft: string
  rearPistonRodDusterInnerRight: string

  automaticTransmissionTorqueConverterOilSeal: string
  gearboxPrimaryShaftOilSeal: string
  gearboxRockerGland: string
  leftDriveOilSeal: string
  rightDriveOilSeal: string

  clutchDisk: string
  clutchBasket: string
  releaseBearing: string
  clutchKit: string

  clutchMasterCylinder: string
  clutchSlaveCylinder: string

  clutchMasterCylinderKit: string
  clutchSlaveCylinderRepairKit: string

  waterPump: string
  thermostat: string
  radiator: string
  heaterRadiator: string
  airConditionerRadiator: string
  upperPipe: string
  lowerPipe: string
  radiatorCap: string
  expansionTankCap: string
}

export interface TransmissionFormData {
  id: number
  frontLeftOuterBallJoint: string
  frontRightOuterBallJoint: string
  frontLeftInnerBallJoint: string
  frontRightInnerBallJoint: string
  frontLeftHandDrive: string
  frontRightHandDrive: string
  driveShaft: string

  rearLeftOuterBallJoint: string
  rearRightOuterBallJoint: string
  rearLeftInnerBallJoint: string
  rearRightInnerBallJoint: string

  automaticTransmissionOilPanGasket: string
  automaticTransmissionFilter: string
  automaticTransmissionFillerGasket: string
  automaticTransmissionOilPanGasket2: string
  automaticTransmissionFilter2: string
  transmissionDrainPlug: string
  transmissionDrainPlugGasket: string

  suspensionBearing: string

  frontPistonRodDusterOuter: string
  frontPistonRodDusterInnerLeft: string
  frontPistonRodDusterInnerRight: string

  rearPistonRodDusterOuter: string
  rearPistonRodDusterInnerLeft: string
  rearPistonRodDusterInnerRight: string

  automaticTransmissionTorqueConverterOilSeal: string
  gearboxPrimaryShaftOilSeal: string
  gearboxRockerGland: string
  leftDriveOilSeal: string
  rightDriveOilSeal: string

  clutchDisk: string
  clutchBasket: string
  releaseBearing: string
  clutchKit: string

  clutchMasterCylinder: string
  clutchSlaveCylinder: string

  clutchMasterCylinderKit: string
  clutchSlaveCylinderRepairKit: string
}

export interface CoolingFormData {
  id: number

  waterPump: string
  thermostat: string
  radiator: string
  heaterRadiator: string
  airConditionerRadiator: string
  upperPipe: string
  lowerPipe: string
  radiatorCap: string
  expansionTankCap: string
}

export interface ElectricalFormData {
  id: number

  oilSensor: string
  ventilatorSensor: string
  dashboardTemperatureSensor: string
  airConditionerSensor: string
  reverseSensor: string
  washerMotor: string
  handwheelCable: string

  brakeLightBulbs: string
  parkingLightBulbsFront: string
  parkingLightBulbsRear: string
  sideSignalBulbs: string
  reverseLightBulbs: string
  mainHeadlightBulbs: string
  fogLightBulbs: string

  sparkPlug: string
  ignitionCoil: string
  ignitionWires: string

  timingCover: string
  slider: string

  lambdaProbe1: string
  lambdaProbe2: string

  frontAbsSensorLeft: string
  frontAbsSensorRight: string
  rearAbsSensorLeft: string
  rearAbsSensorRight: string
}

export interface CarBodyFormData {
  id: number
  driversWiper: string
  passengerWiper: string
  hoodShockAbsorbers: string
}
