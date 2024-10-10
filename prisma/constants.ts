export const carBrand = [
  {
    name: 'NISSAN',
    imageUrl: 'https://mayak.parts/files/uploads/Nissan.jpg',
  },
  {
    name: 'TOYOTA',
    imageUrl: 'https://mayak.parts/files/uploads/toyota.jpg',
  },
  {
    name: 'MAZDA',
    imageUrl: 'https://mayak.parts/files/uploads/Mazda.png',
  },
  {
    name: 'HONDA',
    imageUrl: 'https://mayak.parts/files/uploads/honda.jpg',
  },
  {
    name: 'MITSUBISHI',
    imageUrl: 'https://mayak.parts/files/uploads/Mitsubishi.jpg',
  },
  {
    name: 'SUBARU',
    imageUrl: 'https://mayak.parts/files/uploads/subaru.jpg',
  },
  {
    name: 'LEXUS',
    imageUrl: 'https://mayak.parts/files/uploads/lexus.png',
  },
  {
    name: 'INFINITI',
    imageUrl: 'https://mayak.parts/files/uploads/Infiniti.jpg',
  },
]

export const car = [
  {
    imageUrl: 'https://mayak.parts/files/car/model/lexus_es-v_acv40.png',
    models: 'ES V',
    carBody: 'ACV40',
    modelYear: '2006--',
    engine: '2AZFE',
    volume: '2400I 16V',
    carBrandId: 7,
  },
  {
    imageUrl: 'https://mayak.parts/files/car/model/toyota_avensis-ii_zzt250.jpg',
    models: 'AVENSIS II',
    carBody: 'ZZT250',
    modelYear: '2003--',
    engine: '3ZZFE',
    volume: '1600I 16V',
    carBrandId: 2,
  },
  {
    imageUrl: 'https://mayak.parts/files/car/model/nissan_almera-ii_n16e.jpg',
    models: 'ALMERA II',
    carBody: 'N16E',
    modelYear: '2000--',
    engine: 'QG18DE',
    volume: '1800i 16V',
    carBrandId: 1,
  },
  {
    imageUrl: 'https://mayak.parts/files/car/model/mazda_cx-7_er.png',
    models: 'CX-7',
    carBody: 'ER',
    modelYear: '2006--',
    engine: 'L5',
    volume: '2500I 16V',
    carBrandId: 3,
  },
  {
    imageUrl: 'https://mayak.parts/files/car/model/honda_accord-vii_cl7.jpg',
    models: 'ACCORD VII',
    carBody: 'CL9',
    modelYear: '2003--',
    engine: 'K24A3',
    volume: '2400I 16V',
    carBrandId: 4,
  },
  {
    imageUrl: 'https://mayak.parts/files/car/model/mitsubishi_lancer-viii_cj1a.jpg',
    models: 'LANCER VIII',
    carBody: 'CK6A',
    modelYear: '1995--',
    engine: '6A11',
    volume: '1800 16V',
    carBrandId: 5,
  },
  {
    imageUrl: 'https://mayak.parts/files/car/model/subaru_legacy-b13-universal_bp.jpg',
    models: 'LEGACY',
    carBody: 'B13',
    modelYear: '2003--',
    engine: 'EJ20',
    volume: '2000',
    carBrandId: 6,
  },
]

export const name = [{ name: 'MARUCHI' }, { name: 'PASCAL' }, { name: 'LOBRO' }, { name: 'RBI' }]

export const form = [{ form: 'Круглый' }, { form: 'Тришип' }]

export const type = [
  { type: 'Резиновый' },
  { type: 'Пластиковый' },
  { type: 'Силиконовый' },
  { type: 'Универсальный' },
]

export const bootDustCover = [
  {
    nameId: 1,
    formId: 1,
    typeId: 1,
    dIn: 80,
    dOut: 24,
    height: 95,
    partNumber: '25-413',
    imageUrl: 'https://autoyamato.com.ua/image/43134_25-413_1.jpg',
  },
  {
    nameId: 2,
    formId: 2,
    typeId: 2,
    dIn: 85,
    dOut: 22,
    height: 100,
    partNumber: 'G61018',
    imageUrl: 'https://autoyamato.com.ua/image/71948_G61018_1_small.jpg',
  },
  {
    nameId: 3,
    formId: 2,
    typeId: 3,
    dIn: 60,
    dOut: 22,
    height: 75,
    partNumber: 'D8215',
    imageUrl: 'https://autoyamato.com.ua/image/90504_D8215_0_small.jpg',
  },
  {
    nameId: 4,
    formId: 1,
    typeId: 4,
    dIn: 99,
    dOut: 24,
    height: 100,
    partNumber: 'M1709IZ',
    imageUrl: 'https://autoyamato.com.ua/image/0728fb2396541d0eb915f20c314654ae.jpg',
  },
]

export const mainButtonsData = [
  {
    name: 'BootKit',
    link: '/boot-kit/',
    imageUrl: '/boot-logo.png',
  },
  {
    name: 'oil',
    link: '/oil/',
    imageUrl: '/oil.png',
  },
  {
    name: 'clients',
    link: '/clients/',
    imageUrl: '/clients.png',
  },
  {
    name: 'cars',
    link: '/clients/',
    imageUrl: '/cars.png',
  },
]

export const clientCarToSeed = {
  engineOil: '5W-30',
  engineOilVolume: '4.5 liters',
  engineOilPartNumber: '123456789',

  automaticTransmissionOil: 'ATF Dexron VI',
  automaticTransmissionOilVolume: '8 liters',
  automaticTransmissionOilPartNumber: '987654321',

  mechanicTransmissionOil: '75W-90',
  mechanicTransmissionOilVolume: '3 liters',
  mechanicTransmissionOilPartNumber: '456789123',

  transferCaseOil: '80W-90',
  transferCaseOilVolume: '2 liters',
  transferCaseOilPartNumber: '321654987',

  frontAxleGearboxOil: '85W-140',
  frontAxleGearboxOilVolume: '2.5 liters',
  frontAxleGearboxOilPartNumber: '654987321',

  rearAxleGearboxOil: '85W-140',
  rearAxleGearboxOilVolume: '2.5 liters',
  rearAxleGearboxOilPartNumber: '789123456',

  antifreeze: 'G12',
  antifreezeVolume: '5 liters',
  antifreezePartNumber: '159753852',

  steeringFluid: 'ATF Dexron III',
  steeringFluidVolume: '1 liter',
  steeringFluidPartNumber: '357951258',

  clientToId: 1,
  createdAt: new Date(),
  updateAt: new Date(),
}

export const clientCarSeed = {
  gosNumber: 'A123BC',
  brandName: 'Toyota',
  models: 'Camry',
  carBody: 'Sedan',
  modelYear: '2018',
  engine: '2.5L',
  volume: '2487 cc',

  timingChainLong: '123456',
  timingChainShort: '654321',
  chainTensioner1: '111111',
  chainTensioner2: '222222',
  chainTensioner3: '333333',
  chainKit: '444444',

  timingBelt: '555555',
  timingBeltTensioner: '666666',
  timingBeltRoller: '777777',

  pistons: '888888',
  pistonsRings: '999999',
  hydrocompensators: '000000',
  valveIn: '121212',
  valveEx: '212121',
  valveGuidesIn: '343434',
  valveGuidesEx: '434343',
  bearingConnectingRod: '565656',
  crankshaftCamberRings: '656565',

  generatorBelt: '787878',
  powerSteeringBelt: '878787',
  airConditionerBelt: '909090',
  tensionToller: '010101',
  bypassRoller1: '101010',
  bypassRoller2: '010101',
  generatorOverrunningClutch: '202020',

  engineGasketKit: '303030',
  headGasket: '404040',
  valveCoverGasketLeft: '505050',
  valveCoverGasketRight: '606060',
  valveCoverGasket: '707070',
  intakeManifoldGasket: '808080',
  exhaustManifoldGasket: '909090',
  exhaustPipeGasket1: '010101',
  exhaustPipeGasket2: '121212',
  exhaustPipeGasket3: '212121',

  frontLeftEngineCushion: '323232',
  frontRightEngineCushion: '434343',
  engineCushionLeft: '545454',
  engineCushionRear: '656565',

  frontCrankshaftOilSeal: '767676',
  rearCrankshaftOilSeal: '878787',
  camshaftOilSeal: '989898',
  oilPumpPacking: '090909',
  intakeOilCaps: '101010',
  exhaustOilCaps: '010101',

  airDuctCorrugation: '212121',

  oilFilter: '323232',
  airFilter: '434343',
  fuelFilter: '545454',
  cabinFilter: '656565',

  frontLeftShockAbsorber: '767676',
  frontRightShockAbsorber: '878787',
  rearLeftShockAbsorber: '989898',
  rearRightShockAbsorber: '090909',

  wheelStud: '101010',
  wheelNut: '010101',

  leftFrontStrutSupport: '212121',
  rightFrontStrutSupport: '323232',
  leftRearStrutSupport: '434343',
  rightRearStrutSupport: '545454',
  frontSupportBearing: '656565',
  frontLeftStrutDuster: '767676',
  frontRightStrutDuster: '878787',
  rearLeftStrutDuster: '989898',
  rearRightStrutDuster: '090909',
  frontStrutBumper: '101010',
  rearStrutBumper: '010101',

  frontLeftHubBearing: '212121',
  frontRightHubBearing: '323232',
  rearLeftHubBearing: '434343',
  rearRightHubBearing: '545454',

  hydraulicPowerSteeringKit: '656565',
  railSealsAndGaskets: '767676',
  steeringRackDustCoverLeft: '878787',
  steeringRackDustCoverRight: '989898',

  frontLowerLeftArm: '090909',
  frontLowerRightArm: '101010',
  frontUpperLeftArm: '010101',
  frontUpperRightArm: '212121',
  rearLeftLongitudinalArm: '323232',
  rearRightLongitudinalArm: '434343',
  rearLeftTransverseArm1: '545454',
  rearRightTransverseArm1: '656565',
  rearLeftTransverseArm2: '767676',
  rearRightTransverseArm2: '878787',
  rearCrescentArm: '989898',
  rearUpperShortArm: '090909',

  frontLowerControlArmFrontSilentBlock: '101010',
  frontLowerControlArmRearSilentBlock: '010101',
  frontUpperControlArmFrontSilentBlock: '212121',
  frontUpperControlArmRearSilentBlock: '323232',
  longitudinalArmSilentBlockLeft: '434343',
  longitudinalArmSilentBlockRight: '545454',
  longitudinalHubArmSilentBlockLeft: '656565',
  bodyLeftCrossArmSilentBlock: '767676',
  hubLeftCrossArmSilentBlock: '878787',
  bodyRightCrossArmSilentBlock: '989898',
  hubRightCrossArmSilentBlock: '090909',
  camberArmSilentBlock1: '101010',
  camberArmSilentBlock2: '010101',
  frontSubframeSilentBlock: '212121',
  rearSubframeSilentBlock: '323232',
  frontStabilizerSushings: '434343',
  frontStabilizerSushingsLeft: '545454',
  frontStabilizerSushingsRight: '656565',
  rearStabilizerSushings: '767676',
  frontLeftStabilizerBar: '878787',
  frontRightStabilizerBar: '989898',
  rearLeftStabilizerBar: '090909',
  rearRightStabilizerBar: '101010',

  steeringLinkLeft: '010101',
  steeringLinkRight: '212121',
  outerLeftSteeringKnuckle: '323232',
  outerRightSteeringKnuckle: '434343',
  leftInnerSteeringKnuckle: '545454',
  leftRightSteeringKnuckle: '656565',

  lowerLeftBallJoint: '767676',
  lowerRightBallJoint: '878787',
  upperLeftBallJoint: '989898',
  upperRightBallJoint: '090909',

  frontHandbrakeCable: '101010',
  rearLeftCable: '010101',
  reaRightCable: '212121',

  frontBrakeDiskLeft: '323232',
  frontBrakeDiskRight: '434343',
  rearBrakeDisk: '545454',

  frontBrake: '656565',
  rearBrake: '767676',
  handbrakeBrakePads: '878787',

  brakeMasterCylinder: '989898',
  slaveBrakeCylinder: '090909',
  drumBrakeCylinder: '101010',

  setOfFrontGuideRailsWithDustCovers: '010101',
  setOfRearGuideRailsWithDustCovers: '212121',
  InstallationKitForFrontPads: '323232',
  InstallationKitForRearPads: '434343',
  InstallationKitForHandbrakeBrakePads: '545454',
  frontCaliperRepairKit: '656565',
  frontCaliperRepairKitWithPiston: '767676',
  rearCaliperRepairKit: '878787',
  rearCaliperRepairKitWithPiston: '989898',

  frontLeftBrakeHose: '090909',
  frontRightBrakeHose: '101010',
  rearLeftBrakeHose: '010101',
  rearRightBrakeHose: '212121',

  frontLeftOuterBallJoint: '323232',
  frontRightOuterBallJoint: '434343',
  frontLeftInnerBallJoint: '545454',
  frontRightInnerBallJoint: '656565',
  frontLeftHandDrive: '767676',
  frontRightHandDrive: '878787',
  driveShaft: '989898',

  rearLeftOuterBallJoint: '090909',
  rearRightOuterBallJoint: '101010',
  rearLeftInnerBallJoint: '010101',
  rearRightInnerBallJoint: '212121',

  automaticTransmissionOilPanGasket: '323232',
  automaticTransmissionFilter: '434343',
  automaticTransmissionFillerGasket: '545454',
  transmissionDrainPlug: '656565',
  transmissionDrainPlugGasket: '767676',

  suspensionBearing: '878787',

  frontPistonRodDusterOuter: '989898',
  frontPistonRodDusterInnerLeft: '090909',
  frontPistonRodDusterInnerRight: '101010',

  rearPistonRodDusterOuter: '010101',
  rearPistonRodDusterInnerLeft: '212121',
  rearPistonRodDusterInnerRight: '323232',

  automaticTransmissionTorqueConverterOilSeal: '434343',
  gearboxPrimaryShaftOilSeal: '545454',
  gearboxRockerGland: '656565',
  leftDriveOilSeal: '767676',
  rightDriveOilSeal: '878787',

  clutchDisk: '989898',
  clutchBasket: '090909',
  releaseBearing: '101010',
  clutchKit: '010101',

  clutchMasterCylinder: '212121',
  clutchSlaveCylinder: '323232',

  clutchMasterCylinderKit: '434343',
  clutchSlaveCylinderRepairKit: '545454',

  waterPump: '656565',
  thermostat: '767676',
  radiator: '878787',
  heaterRadiator: '989898',
  airConditionerRadiator: '090909',
  upperPipe: '101010',
  lowerPipe: '010101',
  radiatorCap: '212121',
  expansionTankCap: '323232',

  oilSensor: '434343',
  ventilatorSensor: '545454',
  dashboardTemperatureSensor: '656565',
  airConditionerSensor: '767676',
  reverseSensor: '878787',
  washerMotor: '989898',
  handwheelCable: '090909',

  brakeLightBulbs: '101010',
  parkingLightBulbsFront: '010101',
  parkingLightBulbsRear: '212121',
  sideSignalBulbs: '323232',
  reverseLightBulbs: '434343',
  mainHeadlightBulbs: '545454',
  fogLightBulbs: '656565',

  sparkPlug: '767676',
  ignitionCoil: '878787',

  lambdaProbe1: '989898',
  lambdaProbe2: '090909',

  frontAbsSensorLeft: '101010',
  frontAbsSensorRight: '010101',
  rearAbsSensorLeft: '212121',
  rearAbsSensorRight: '323232',

  driversWiper: '434343',
  passengerWiper: '545454',
  hoodShockAbsorbers: '656565',

  clientId: 1,
  createdAt: new Date(),
  updateAt: new Date(),
}
