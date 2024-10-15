export interface EngineFormData {
  id: number
  timingChainLong: string | null
  timingChainShort: string | null
  chainTensioner1: string | null
  chainTensioner2: string | null
  chainTensioner3: string | null
  chainKit: string | null
  timingBelt: string | null
  timingBeltTensioner: string | null
  timingBeltRoller: string | null
  pistons: string | null
  pistonsRings: string | null
  hydrocompensators: string | null
  valveIn: string | null
  valveEx: string | null
  valveGuidesIn: string | null
  valveGuidesEx: string | null
  bearingConnectingRod: string | null
  bearingCamshaft: string | null
  crankshaftCamberRings: string | null
  generatorBelt: string | null
  powerSteeringBelt: string | null
  airConditionerBelt: string | null
  tensionToller: string | null
  bypassRoller1: string | null
  bypassRoller2: string | null
  generatorOverrunningClutch: string | null
  engineGasketKit: string | null
  headGasket: string | null
  valveCoverGasketLeft: string | null
  valveCoverGasketRight: string | null
  valveCoverGasket: string | null
  intakeManifoldGasket: string | null
  exhaustManifoldGasket: string | null
  exhaustPipeGasket1: string | null
  exhaustPipeGasket2: string | null
  exhaustPipeGasket3: string | null
  frontLeftEngineCushion: string | null
  frontRightEngineCushion: string | null
  engineCushionLeft: string | null
  engineCushionRear: string | null
  frontCrankshaftOilSeal: string | null
  rearCrankshaftOilSeal: string | null
  camshaftOilSeal: string | null
  oilPumpPacking: string | null
  intakeOilCaps: string | null
  exhaustOilCaps: string | null
  airDuctCorrugation: string | null
  oilFilter: string | null
  airFilter: string | null
  fuelFilter: string | null
  cabinFilter: string | null
}

export interface SuspensionFormData {
  id: number
  frontLeftShockAbsorber: string | null
  frontRightShockAbsorber: string | null
  rearLeftShockAbsorber: string | null
  rearRightShockAbsorber: string | null

  wheelStud: string | null
  wheelNut: string | null

  leftFrontStrutSupport: string | null
  rightFrontStrutSupport: string | null
  leftRearStrutSupport: string | null
  rightRearStrutSupport: string | null
  frontSupportBearing: string | null
  frontLeftStrutDuster: string | null
  frontRightStrutDuster: string | null
  rearLeftStrutDuster: string | null
  rearRightStrutDuster: string | null
  frontStrutBumper: string | null
  rearStrutBumper: string | null

  frontLeftHubBearing: string | null
  frontRightHubBearing: string | null
  rearLeftHubBearing: string | null
  rearRightHubBearing: string | null

  hydraulicPowerSteeringKit: string | null
  railSealsAndGaskets: string | null
  steeringRackDustCoverLeft: string | null
  steeringRackDustCoverRight: string | null

  frontLowerLeftArm: string | null
  frontLowerRightArm: string | null
  frontUpperLeftArm: string | null
  frontUpperRightArm: string | null
  rearLeftLongitudinalArm: string | null
  rearRightLongitudinalArm: string | null
  rearLeftTransverseArm1: string | null
  rearRightTransverseArm1: string | null
  rearLeftTransverseArm2: string | null
  rearRightTransverseArm2: string | null
  rearCrescentArm: string | null
  rearUpperShortArm: string | null

  frontLowerControlArmFrontSilentBlock: string | null
  frontLowerControlArmRearSilentBlock: string | null
  frontUpperControlArmFrontSilentBlock: string | null
  frontUpperControlArmRearSilentBlock: string | null
  longitudinalArmSilentBlockLeft: string | null
  longitudinalArmSilentBlockRight: string | null
  longitudinalHubArmSilentBlockLeft: string | null
  bodyLeftCrossArmSilentBlock: string | null
  hubLeftCrossArmSilentBlock: string | null
  bodyRightCrossArmSilentBlock: string | null
  hubRightCrossArmSilentBlock: string | null
  camberArmSilentBlock1: string | null
  camberArmSilentBlock2: string | null
  frontSubframeSilentBlock: string | null
  rearSubframeSilentBlock: string | null
  frontStabilizerSushings: string | null
  frontStabilizerSushingsLeft: string | null
  frontStabilizerSushingsRight: string | null
  rearStabilizerSushings: string | null
  frontLeftStabilizerBar: string | null
  frontRightStabilizerBar: string | null
  rearLeftStabilizerBar: string | null
  rearRightStabilizerBar: string | null

  steeringLinkLeft: string | null
  steeringLinkRight: string | null
  outerLeftSteeringKnuckle: string | null
  outerRightSteeringKnuckle: string | null
  leftInnerSteeringKnuckle: string | null
  leftRightSteeringKnuckle: string | null

  lowerLeftBallJoint: string | null
  lowerRightBallJoint: string | null
  upperLeftBallJoint: string | null
  upperRightBallJoint: string | null
}

export interface BrakeSystemFormData {
  id: number
  frontHandbrakeCable: string | null
  rearLeftCable: string | null
  reaRightCable: string | null

  frontBrakeDiskLeft: string | null
  frontBrakeDiskRight: string | null
  rearBrakeDisk: string | null

  frontBrake: string | null
  rearBrake: string | null
  handbrakeBrakePads: string | null

  brakeMasterCylinder: string | null
  slaveBrakeCylinder: string | null
  drumBrakeCylinderLeft: string | null
  drumBrakeCylinderRight: string | null

  setOfFrontGuideRailsWithDustCovers: string | null
  setOfRearGuideRailsWithDustCovers: string | null
  installationKitForFrontPads: string | null
  installationKitForRearPads: string | null
  installationKitForHandbrakeBrakePads: string | null
  frontCaliperRepairKit: string | null
  frontCaliperRepairKitWithPiston: string | null
  rearCaliperRepairKit: string | null
  rearCaliperRepairKitWithPiston: string | null

  frontLeftBrakeHose: string | null
  frontRightBrakeHose: string | null
  rearLeftBrakeHose: string | null
  rearRightBrakeHose: string | null

  frontLeftOuterBallJoint: string | null
  frontRightOuterBallJoint: string | null
  frontLeftInnerBallJoint: string | null
  frontRightInnerBallJoint: string | null
  frontLeftHandDrive: string | null
  frontRightHandDrive: string | null
  driveShaft: string | null

  rearLeftOuterBallJoint: string | null
  rearRightOuterBallJoint: string | null
  rearLeftInnerBallJoint: string | null
  rearRightInnerBallJoint: string | null

  automaticTransmissionOilPanGasket: string | null
  automaticTransmissionFilter: string | null
  automaticTransmissionFillerGasket: string | null
  automaticTransmissionOilPanGasket2: string | null
  automaticTransmissionFilter2: string | null
  transmissionDrainPlug: string | null
  transmissionDrainPlugGasket: string | null

  suspensionBearing: string | null

  frontPistonRodDusterOuter: string | null
  frontPistonRodDusterInnerLeft: string | null
  frontPistonRodDusterInnerRight: string | null

  rearPistonRodDusterOuter: string | null
  rearPistonRodDusterInnerLeft: string | null
  rearPistonRodDusterInnerRight: string | null

  automaticTransmissionTorqueConverterOilSeal: string | null
  gearboxPrimaryShaftOilSeal: string | null
  gearboxRockerGland: string | null
  leftDriveOilSeal: string | null
  rightDriveOilSeal: string | null

  clutchDisk: string | null
  clutchBasket: string | null
  releaseBearing: string | null
  clutchKit: string | null

  clutchMasterCylinder: string | null
  clutchSlaveCylinder: string | null

  clutchMasterCylinderKit: string | null
  clutchSlaveCylinderRepairKit: string | null

  waterPump: string | null
  thermostat: string | null
  radiator: string | null
  heaterRadiator: string | null
  airConditionerRadiator: string | null
  upperPipe: string | null
  lowerPipe: string | null
  radiatorCap: string | null
  expansionTankCap: string | null
}

export interface TransmissionFormData {
  id: number
  frontLeftOuterBallJoint: string | null
  frontRightOuterBallJoint: string | null
  frontLeftInnerBallJoint: string | null
  frontRightInnerBallJoint: string | null
  frontLeftHandDrive: string | null
  frontRightHandDrive: string | null
  driveShaft: string | null

  rearLeftOuterBallJoint: string | null
  rearRightOuterBallJoint: string | null
  rearLeftInnerBallJoint: string | null
  rearRightInnerBallJoint: string | null

  automaticTransmissionOilPanGasket: string | null
  automaticTransmissionFilter: string | null
  automaticTransmissionFillerGasket: string | null
  automaticTransmissionOilPanGasket2: string | null
  automaticTransmissionFilter2: string | null
  transmissionDrainPlug: string | null
  transmissionDrainPlugGasket: string | null

  suspensionBearing: string | null

  frontPistonRodDusterOuter: string | null
  frontPistonRodDusterInnerLeft: string | null
  frontPistonRodDusterInnerRight: string | null

  rearPistonRodDusterOuter: string | null
  rearPistonRodDusterInnerLeft: string | null
  rearPistonRodDusterInnerRight: string | null

  automaticTransmissionTorqueConverterOilSeal: string | null
  gearboxPrimaryShaftOilSeal: string | null
  gearboxRockerGland: string | null
  leftDriveOilSeal: string | null
  rightDriveOilSeal: string | null

  clutchDisk: string | null
  clutchBasket: string | null
  releaseBearing: string | null
  clutchKit: string | null

  clutchMasterCylinder: string | null
  clutchSlaveCylinder: string | null

  clutchMasterCylinderKit: string | null
  clutchSlaveCylinderRepairKit: string | null
}

export interface CoolingFormData {
  id: number

  waterPump: string | null
  thermostat: string | null
  radiator: string | null
  heaterRadiator: string | null
  airConditionerRadiator: string | null
  upperPipe: string | null
  lowerPipe: string | null
  radiatorCap: string | null
  expansionTankCap: string | null
}

export interface ElectricalFormData {
  id: number

  oilSensor: string | null
  ventilatorSensor: string | null
  dashboardTemperatureSensor: string | null
  airConditionerSensor: string | null
  reverseSensor: string | null
  washerMotor: string | null
  handwheelCable: string | null

  brakeLightBulbs: string | null
  parkingLightBulbsFront: string | null
  parkingLightBulbsRear: string | null
  sideSignalBulbs: string | null
  reverseLightBulbs: string | null
  mainHeadlightBulbs: string | null
  fogLightBulbs: string | null

  sparkPlug: string | null
  ignitionCoil: string | null
  ignitionWires: string | null

  timingCover: string | null
  slider: string | null

  lambdaProbe1: string | null
  lambdaProbe2: string | null

  frontAbsSensorLeft: string | null
  frontAbsSensorRight: string | null
  rearAbsSensorLeft: string | null
  rearAbsSensorRight: string | null
}

export interface CarBodyFormData {
  id: number
  driversWiper: string | null
  passengerWiper: string | null
  hoodShockAbsorbers: string | null
}
