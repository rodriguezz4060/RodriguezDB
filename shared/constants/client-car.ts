import { useIntl } from 'react-intl'

export const EngineTimingBelt = (clientCar: any) => {
  const { formatMessage } = useIntl()

  const engineTimingBelt = [
    { label: 'Цепь ГРМ', value: clientCar.timingChainLong },
    { label: 'Короткая цепь', value: clientCar.timingChainShort },
    { label: 'Гидронатяжитель цепи 1', value: clientCar.chainTensioner1 },
    { label: 'Гидронатяжитель цепи 2', value: clientCar.chainTensioner2 },
    { label: 'Башмак', value: clientCar.chainTensioner3 },
    { label: 'Набор цепей', value: clientCar.chainKit },

    { label: 'Ремень грм', value: clientCar.timingBelt },
    { label: 'Натяжитель ремня ГРМ', value: clientCar.timingBeltRoller },
    { label: 'Паразитный ролик ремня ГРМ', value: clientCar.timingBeltRoller },
  ]

  return engineTimingBelt
}

export const EngineAndPiston = (clientCar: any) => {
  const { formatMessage } = useIntl()

  const enginePiston = [
    { label: 'Поршня', value: clientCar.pistons },
    { label: 'Поршневые кольца', value: clientCar.pistonsRings },
  ]

  const engineValves = [
    { label: 'Гидрокомпенсатор', value: clientCar.hydrocompensators },
    { label: 'Клапана впуск', value: clientCar.valveIn },
    { label: 'Клапана выпуск', value: clientCar.valveEx },
    { label: 'Направляющие впуск', value: clientCar.valveGuidesIn },
    { label: 'Направляющие выпуск', value: clientCar.valveGuidesEx },
  ]

  const engineLiner = [
    { label: 'Вкладыш коренной', value: clientCar.bearingConnectingRod },
    { label: 'Вкладыш шатуна', value: clientCar.bearingCamshaft },
    { label: 'Полукольца разбега', value: clientCar.crankshaftCamberRings },
  ]

  return { enginePiston, engineValves, engineLiner }
}

export const BeltAndTensioner = (clientCar: any) => {
  const { formatMessage } = useIntl()

  const driveBelt = [
    { label: 'Ремень генератора', value: clientCar.generatorBelt },
    { label: 'Ремень гидроусилителя', value: clientCar.powerSteeringBelt },
    { label: 'Ремень кондиционера', value: clientCar.airConditionerBelt },
  ]

  const tensionerBelt = [
    { label: 'Натяжитель ремня', value: clientCar.tensionToller },
    { label: 'Обводной ролик ремня', value: clientCar.bypassRoller1 },
    { label: 'Обводной ролик ремня', value: clientCar.bypassRoller2 },
    { label: 'Направляющие выпуск', value: clientCar.generatorOverrunningClutch },
    { label: 'Обгонная муфта', value: clientCar.bearingConnectingRod },
  ]

  return { driveBelt, tensionerBelt }
}

export const EngineGasket = (clientCar: any) => {
  const { formatMessage } = useIntl()

  const enginePgb = [
    { label: 'Набор прокладок', value: clientCar.engineGasketKit },
    { label: 'Прокладка головки блока', value: clientCar.headGasket },
  ]

  const engineGasket = [
    { label: 'Клапанной крышки левая', value: clientCar.valveCoverGasketLeft },
    { label: 'Клапанной крышки правая', value: clientCar.valveCoverGasketRight },
    { label: 'Влапанной крышки', value: clientCar.valveCoverGasket },
    { label: 'Впускного коллектора', value: clientCar.intakeManifoldGasket },
    { label: 'Выпускного коллектора', value: clientCar.exhaustManifoldGasket },
    { label: 'Выпускной трубы', value: clientCar.exhaustPipeGasket1 },
    { label: 'До катализатора', value: clientCar.exhaustPipeGasket2 },
    { label: 'После катализатора', value: clientCar.exhaustPipeGasket3 },
  ]

  return { enginePgb, engineGasket }
}

export const EngineCushion = (clientCar: any) => {
  const { formatMessage } = useIntl()

  const engineCushion = [
    { label: 'Передняя левая', value: clientCar.frontLeftEngineCushion },
    { label: 'Передняя правая', value: clientCar.frontRightEngineCushion },
    { label: 'Левая', value: clientCar.engineCushionLeft },
    { label: 'Задняя', value: clientCar.engineCushionRear },
  ]

  return engineCushion
}

export const EngineOilSeals = (clientCar: any) => {
  const { formatMessage } = useIntl()

  const engineOilSeals = [
    { label: 'Передний коленвала', value: clientCar.frontLeftEngineCushion },
    { label: 'Задний коленвала', value: clientCar.rearCrankshaftOilSeal },
    { label: 'Распредвала', value: clientCar.camshaftOilSeal },
    { label: 'Маслонасоса', value: clientCar.oilPumpPacking },
    { label: 'Маслосъемные впускные', value: clientCar.intakeOilCaps },
    { label: 'Маслосъемные выпускные', value: clientCar.exhaustOilCaps },
  ]
  return engineOilSeals
}

export const AirSupplySystem = (clientCar: any) => {
  const { formatMessage } = useIntl()

  const airSupplySystem = [{ label: 'Гофра воздуховода', value: clientCar.airDuctCorrugation }]

  return airSupplySystem
}

export const Filters = (clientCar: any) => {
  const { formatMessage } = useIntl()

  const filters = [
    { label: 'Масляный', value: clientCar.oilFilter },
    { label: 'Воздушный ', value: clientCar.airFilter },
    { label: 'Топливный ', value: clientCar.fuelFilter },
    { label: 'Салона', value: clientCar.cabinFilter },
  ]
  return filters
}

export const ShockAbsorbers = (clientCar: any) => {
  const { formatMessage } = useIntl()

  const shockAbsorbersFront = [
    { label: 'Левый', value: clientCar.frontLeftShockAbsorber },
    { label: 'Правый', value: clientCar.frontRightShockAbsorber },
  ]

  const shockAbsorbersRear = [
    { label: 'Левый', value: clientCar.rearLeftShockAbsorber },
    { label: 'Правый', value: clientCar.rearRightShockAbsorber },
  ]

  return { shockAbsorbersFront, shockAbsorbersRear }
}

export const NutsWheelStuds = (clientCar: any) => {
  const { formatMessage } = useIntl()

  const nutsWheelStuds = [
    { label: 'Шпилька', value: clientCar.wheelStud },
    { label: 'Гайка', value: clientCar.wheelNut },
  ]
  return nutsWheelStuds
}

export const StrutMountsDustCoversBumpers = (clientCar: any) => {
  const { formatMessage } = useIntl()

  const strutMounts = [
    { label: 'Передняя опора левая', value: clientCar.leftFrontStrutSupport },
    { label: 'Передняя опора правая', value: clientCar.rightFrontStrutSupport },
    { label: 'Задняя опора левая', value: clientCar.leftRearStrutSupport },
    { label: 'Задняя опора правая', value: clientCar.rightRearStrutSupport },
    { label: 'Опорный подшипник', value: clientCar.frontSupportBearing },
  ]

  const dustCoversBumpers = [
    { label: 'Пыльник передний левый', value: clientCar.frontLeftStrutDuster },
    { label: 'Пыльник передний правый', value: clientCar.frontRightStrutDuster },
    { label: 'Пыльник задний левый', value: clientCar.rearLeftStrutDuster },
    { label: 'Пыльник задний правый', value: clientCar.rearRightStrutDuster },
    { label: 'Отбойник передний', value: clientCar.frontStrutBumper },
    { label: 'Отбойник задний', value: clientCar.rearStrutBumper },
  ]

  return { strutMounts, dustCoversBumpers }
}

export const HubBearings = (clientCar: any) => {
  const { formatMessage } = useIntl()

  const hubBearingsFront = [
    { label: 'Передней левый', value: clientCar.frontLeftHubBearing },
    { label: 'Передней правый', value: clientCar.frontRightHubBearing },
  ]

  const hubBearingsRear = [
    { label: 'Задней левый', value: clientCar.rearLeftHubBearing },
    { label: 'Задней правый', value: clientCar.rearRightHubBearing },
  ]
  return { hubBearingsFront, hubBearingsRear }
}

export const SteeringRackAndPowerSteering = (clientCar: any) => {
  const { formatMessage } = useIntl()

  const steeringRackAndPowerSteering = [
    { label: 'Ремкомплект ГУР', value: clientCar.hydraulicPowerSteeringKit },
    { label: 'Сальники и прокладки рейки', value: clientCar.railSealsAndGaskets },
  ]

  const powerSteeringBoot = [
    { label: 'Пыльник рейки левый', value: clientCar.steeringRackDustCoverLeft },
    { label: 'Пыльник рейки правый', value: clientCar.steeringRackDustCoverRight },
  ]

  return { steeringRackAndPowerSteering, powerSteeringBoot }
}

export const Arms = (clientCar: any) => {
  const { formatMessage } = useIntl()

  const armsFront = [
    { label: 'Нижний левый', value: clientCar.frontLowerLeftArm },
    { label: 'Нижний правый', value: clientCar.frontLowerRightArm },
    { label: 'Верхний левый', value: clientCar.frontUpperLeftArm },
    { label: 'Верхний правый', value: clientCar.frontUpperRightArm },
  ]

  const armsRear = [
    { label: 'Левый продольный', value: clientCar.rearLeftLongitudinalArm },
    { label: 'Правый продольный', value: clientCar.rearRightLongitudinalArm },
    { label: 'Левый поперечный 1', value: clientCar.rearLeftTransverseArm1 },
    { label: 'Правый поперечный 1', value: clientCar.rearRightTransverseArm1 },
    { label: 'Левый поперечный 2', value: clientCar.rearLeftTransverseArm2 },
    { label: 'Правый поперечный 2', value: clientCar.rearRightTransverseArm2 },
    { label: 'Левый полумесяц', value: clientCar.rearCrescentArm },
    { label: 'Верхний короткий', value: clientCar.rearUpperShortArm },
  ]

  return { armsFront, armsRear }
}

export const SilentBlocks = (clientCar: any) => {
  const { formatMessage } = useIntl()

  const silentBlocksFront = [
    {
      label: 'Переднего нижнего передний',
      value: clientCar.frontLowerControlArmFrontSilentBlock,
    },
    {
      label: 'Переднего нижнего задний',
      value: clientCar.frontLowerControlArmRearSilentBlock,
    },
    {
      label: 'Переднего верхнего передний',
      value: clientCar.frontUpperControlArmFrontSilentBlock,
    },
    {
      label: 'Переднего верхнего задний',
      value: clientCar.frontUpperControlArmRearSilentBlock,
    },
  ]

  const silentBlocksRear = [
    { label: 'Продольных рычагов левый', value: clientCar.longitudinalArmSilentBlockLeft },
    {
      label: 'Продольных рычагов правый',
      value: clientCar.longitudinalArmSilentBlockRight,
    },
    {
      label: 'Продольных рычагов ступичный',
      value: clientCar.longitudinalHubArmSilentBlockLeft,
    },
    {
      label: 'Поперечного левого рычага кузовной',
      value: clientCar.bodyLeftCrossArmSilentBlock,
    },
    {
      label: 'Поперечного левого рычага ступичный',
      value: clientCar.hubLeftCrossArmSilentBlock,
    },
    {
      label: 'Поперечного правого рычага кузовной',
      value: clientCar.bodyRightCrossArmSilentBlock,
    },
    {
      label: 'Поперечного правого рычага ступичный',
      value: clientCar.hubRightCrossArmSilentBlock,
    },
    { label: 'Развального рычага (Развальный)', value: clientCar.camberArmSilentBlock1 },
    { label: 'Развального рычага', value: clientCar.camberArmSilentBlock2 },
    { label: 'Подрамника передний', value: clientCar.frontSubframeSilentBlock },
    { label: 'Подрамника задний', value: clientCar.rearSubframeSilentBlock },
  ]

  return { silentBlocksFront, silentBlocksRear }
}

export const Stabilizer = (clientCar: any) => {
  const { formatMessage } = useIntl()

  const stabilizerBushings = [
    { label: 'Втулки передние', value: clientCar.frontStabilizerSushings },
    { label: 'Втулка передняя левая', value: clientCar.frontStabilizerSushingsLeft },
    { label: 'Втулка передняя правая', value: clientCar.frontStabilizerSushingsRight },
    { label: 'Втулка задняя', value: clientCar.rearStabilizerSushings },
  ]

  const stabilizerRods = [
    { label: 'Передняя левая', value: clientCar.frontLeftStabilizerBar },
    { label: 'Передняя правая', value: clientCar.frontRightStabilizerBar },
    { label: 'Задняя левая', value: clientCar.rearLeftStabilizerBar },
    { label: 'Задняя правая', value: clientCar.rearRightStabilizerBar },
  ]

  return { stabilizerBushings, stabilizerRods }
}

export const PullRodsAndLugs = (clientCar: any) => {
  const { formatMessage } = useIntl()

  const pullRods = [
    { label: 'Тяга левая', value: clientCar.steeringLinkLeft },
    { label: 'Тяга правая ', value: clientCar.steeringLinkRight },
  ]

  const rodsLugs = [
    { label: 'Наружный левый ', value: clientCar.outerLeftSteeringKnuckle },
    { label: 'Наружный правый ', value: clientCar.outerRightSteeringKnuckle },
    { label: 'Внутренний левый ', value: clientCar.leftInnerSteeringKnuckle },
    { label: 'Внутренний правый ', value: clientCar.leftRightSteeringKnuckle },
  ]

  return { pullRods, rodsLugs }
}

export const BallBearings = (clientCar: any) => {
  const { formatMessage } = useIntl()

  const ballBearings = [
    { label: 'Нижняя левая', value: clientCar.lowerLeftBallJoint },
    { label: 'Нижняя правая', value: clientCar.lowerRightBallJoint },
    { label: 'Верхняя левая', value: clientCar.upperLeftBallJoint },
    { label: 'Верхняя правая', value: clientCar.upperRightBallJoint },
  ]
  return ballBearings
}

export const BrakeCable = (clientCar: any) => {
  const { formatMessage } = useIntl()

  const brakeCable = [
    { label: 'Передний', value: clientCar.frontHandbrakeCable },
    { label: 'Левый', value: clientCar.rearLeftCable },
    { label: 'Правый', value: clientCar.reaRightCable },
  ]

  return brakeCable
}

export const BrakeDisksAndDrums = (clientCar: any) => {
  const { formatMessage } = useIntl()

  const brakeDisksAndDrums = [
    { label: 'Передний  левый ', value: clientCar.frontBrakeDiskLeft },
    { label: 'Передний правый', value: clientCar.frontBrakeDiskRight },
    { label: 'Задний диск', value: clientCar.rearBrakeDisk },
  ]
  return brakeDisksAndDrums
}

export const BrakePads = (clientCar: any) => {
  const { formatMessage } = useIntl()

  const brakePads = [
    { label: 'Передние', value: clientCar.frontBrake },
    { label: 'Задние', value: clientCar.rearBrake },
    { label: 'Ручника', value: clientCar.handbrakeBrakePads },
  ]
  return brakePads
}

export const BrakeCylinder = (clientCar: any) => {
  const { formatMessage } = useIntl()

  const brakeCylinder = [
    { label: 'Цилиндр главный', value: clientCar.brakeMasterCylinder },
    { label: 'Цилиндр рабочий', value: clientCar.slaveBrakeCylinder },
    { label: 'Цилиндр барабанов левый', value: clientCar.drumBrakeCylinderLeft },
    { label: 'Цилиндр барабанов правый', value: clientCar.drumBrakeCylinderRight },
  ]
  return brakeCylinder
}

export const FrontWheelBrakeMechanism = (clientCar: any) => {
  const { formatMessage } = useIntl()

  const frontWheelBrakeMechanism = [
    {
      label: 'Передние направляющие с пыльниками',
      value: clientCar.setOfFrontGuideRailsWithDustCovers,
    },
    { label: 'Установочный комплект', value: clientCar.installationKitForFrontPads },
    { label: 'Ремкомплект суппорта ', value: clientCar.frontCaliperRepairKit },
    {
      label: 'Ремкомплект суппорта с поршнями',
      value: clientCar.frontCaliperRepairKitWithPiston,
    },
  ]

  return frontWheelBrakeMechanism
}

export const RearWheelBrakeMechanism = (clientCar: any) => {
  const { formatMessage } = useIntl()

  const rearWheelBrakeMechanism = [
    {
      label: 'Задние направляющие с пыльниками',
      value: clientCar.setOfRearGuideRailsWithDustCovers,
    },
    {
      label: 'Установочный комплект на барабаны',
      value: clientCar.installationKitForHandbrakeBrakePads,
    },
    { label: 'Ремкомплект суппорта ', value: clientCar.rearCaliperRepairKit },
    {
      label: 'Ремкомплект суппорта  с поршнями',
      value: clientCar.rearCaliperRepairKitWithPiston,
    },
  ]

  return rearWheelBrakeMechanism
}

export const BrakeHoses = (clientCar: any) => {
  const { formatMessage } = useIntl()

  const brakeHosesFront = [
    { label: 'Левый', value: clientCar.frontLeftBrakeHose },
    { label: 'Правый', value: clientCar.frontRightBrakeHose },
  ]

  const brakeHosesRear = [
    { label: 'Левый', value: clientCar.rearLeftBrakeHose },
    { label: 'Правый', value: clientCar.rearRightBrakeHose },
  ]
  return { brakeHosesFront, brakeHosesRear }
}

export const GrenadesAndDrives = (clientCar: any) => {
  const { formatMessage } = useIntl()

  const grenadesFront = [
    { label: 'Наружный левый', value: clientCar.frontLeftOuterBallJoint },
    { label: 'Наружный правый', value: clientCar.frontRightOuterBallJoint },
    { label: 'Внутренний левый', value: clientCar.frontLeftInnerBallJoint },
    { label: 'Внутренний правый', value: clientCar.frontRightInnerBallJoint },
  ]

  const driveShafts = [
    { label: 'Приводной вал левый', value: clientCar.frontLeftHandDrive },
    { label: 'Приводной вал правый', value: clientCar.frontRightHandDrive },
  ]

  const grenadesRear = [
    { label: 'Наружный левый', value: clientCar.frontLeftOuterBallJoint },
    { label: 'Наружный правый', value: clientCar.frontRightOuterBallJoint },
    { label: 'Внутренний левый', value: clientCar.frontLeftInnerBallJoint },
    { label: 'Внутренний правый', value: clientCar.frontRightInnerBallJoint },
  ]
  return { grenadesFront, driveShafts, grenadesRear }
}

export const Gearbox = (clientCar: any) => {
  const { formatMessage } = useIntl()

  const gearboxFilter = [
    { label: 'Фильтр АКПП', value: clientCar.automaticTransmissionFilter },
    { label: 'Прокладка поддона АКПП', value: clientCar.automaticTransmissionOilPanGasket },
    { label: 'Прокладка фильтра АКПП', value: clientCar.automaticTransmissionFillerGasket },
  ]
  const gearboxSmall = [
    { label: 'Фильтр', value: clientCar.automaticTransmissionFilter2 },
    {
      label: 'Прокладка фильтра',
      value: clientCar.automaticTransmissionOilPanGasket2,
    },
  ]
  const drainPlug = [
    { label: 'Сливная пробка АКПП', value: clientCar.transmissionDrainPlug },
    {
      label: 'Прокладка сливной пробки АКПП',
      value: clientCar.transmissionDrainPlugGasket,
    },
  ]
  return { gearboxFilter, gearboxSmall, drainPlug }
}

export const SuspensionBearing = (clientCar: any) => {
  const { formatMessage } = useIntl()

  const suspensionBearing = [{ label: 'Подвесной подшипник', value: clientCar.suspensionBearing }]

  return suspensionBearing
}

export const BootDustCovers = (clientCar: any) => {
  const { formatMessage } = useIntl()

  const bootDustCoversFront = [
    { label: 'Наружный', value: clientCar.frontPistonRodDusterOuter },
    { label: 'Внутренний левый', value: clientCar.frontPistonRodDusterInnerLeft },
    {
      label: 'Внутренний правый',
      value: clientCar.frontPistonRodDusterInnerRight,
    },
  ]

  const bootDustCoversRear = [
    { label: 'Наружный', value: clientCar.rearPistonRodDusterOuter },
    { label: 'Внутренний левый', value: clientCar.rearPistonRodDusterInnerLeft },
    { label: 'Внутренний правый', value: clientCar.rearPistonRodDusterInnerRight },
  ]
  return { bootDustCoversFront, bootDustCoversRear }
}

export const TransmissionOilSeals = (clientCar: any) => {
  const { formatMessage } = useIntl()

  const transmissionOilSeals = [
    {
      label: 'Гидротрансформатора АКПП',
      value: clientCar.automaticTransmissionTorqueConverterOilSeal,
    },
    { label: 'Первичного вала КПП', value: clientCar.gearboxPrimaryShaftOilSeal },
    { label: 'Кулисы КПП', value: clientCar.gearboxRockerGland },
    { label: 'Левого привода', value: clientCar.leftDriveOilSeal },
    { label: 'Правого привода', value: clientCar.rightDriveOilSeal },
  ]
  return transmissionOilSeals
}

export const Clutch = (clientCar: any) => {
  const { formatMessage } = useIntl()

  const clutch = [
    { label: 'Диск', value: clientCar.clutchDisk },
    { label: 'Корзина', value: clientCar.clutchBasket },
    { label: 'Выжимной подшипник', value: clientCar.releaseBearing },
    { label: 'Комплект сцепления', value: clientCar.clutchKit },
  ]
  return clutch
}

export const ClutchCylinders = (clientCar: any) => {
  const { formatMessage } = useIntl()

  const clutchCylinders = [
    { label: 'Главный', value: clientCar.clutchMasterCylinder },
    { label: 'Рабочий', value: clientCar.clutchSlaveCylinder },
  ]

  const clutchCylindersRepair = [
    { label: 'Главного цилиндра', value: clientCar.clutchMasterCylinderKit },
    { label: 'Рабочего цилиндра', value: clientCar.clutchSlaveCylinderRepairKit },
  ]
  return { clutchCylinders, clutchCylindersRepair }
}

export const CoolingSystem = (clientCar: any) => {
  const { formatMessage } = useIntl()

  const coolingSystem = [
    { label: 'Водяная помпа', value: clientCar.waterPump },
    { label: 'Термостат', value: clientCar.thermostat },
  ]
  return coolingSystem
}

export const Radiator = (clientCar: any) => {
  const { formatMessage } = useIntl()

  const radiator = [
    { label: 'Радиатор', value: clientCar.radiator },
    { label: 'Радиатор отопителя', value: clientCar.heaterRadiator },
    { label: 'Радиатор кондиционера', value: clientCar.airConditionerRadiator },
  ]
  const radiatorCap = [
    { label: 'Крышка радиатора', value: clientCar.radiatorCap },
    { label: 'Крышка расширительного бачка', value: clientCar.expansionTankCap },
  ]
  return { radiator, radiatorCap }
}

export const RadiatorPipe = (clientCar: any) => {
  const { formatMessage } = useIntl()

  const radiatorPipe = [
    { label: 'Патрубок верхний', value: clientCar.upperPipe },
    { label: 'Патрубок нижний', value: clientCar.lowerPipe },
  ]
  return radiatorPipe
}
export const Sensors = (clientCar: any) => {
  const { formatMessage } = useIntl()

  const sensors = [
    { label: 'Масляный датчик', value: clientCar.oilSensor },
    { label: 'Масляный вентилятора', value: clientCar.ventilatorSensor },
    {
      label: 'Датчик температуры приборной панели',
      value: clientCar.dashboardTemperatureSensor,
    },
    { label: 'Датчик кондиционера', value: clientCar.airConditionerSensor },
    { label: 'Датчик заднего хода', value: clientCar.reverseSensor },
  ]
  return sensors
}

export const WasherMotor = (clientCar: any) => {
  const { formatMessage } = useIntl()

  const washerMotor = [{ label: 'Моторчик омывателя', value: clientCar.washerMotor }]
  return washerMotor
}

export const HandwheelCable = (clientCar: any) => {
  const { formatMessage } = useIntl()

  const handwheelCable = [{ label: 'Подрулевой шлейф', value: clientCar.handwheelCable }]
  return handwheelCable
}

export const Lambda = (clientCar: any) => {
  const { formatMessage } = useIntl()

  const lambda = [
    { label: 'Первый лямбда зонд', value: clientCar.lambdaProbe1 },
    { label: 'Второй лямбда зонд', value: clientCar.lambdaProbe2 },
  ]
  return lambda
}

export const SparkPlugsAndIgnitionCoil = (clientCar: any) => {
  const { formatMessage } = useIntl()

  const sparkPlugs = [{ label: 'Свеча', value: clientCar.sparkPlug }]
  const IgnitionCoil = [{ label: 'Катушка', value: clientCar.ignitionCoil }]
  const ignitionWires = [{ label: 'Провода', value: clientCar.ignitionWires }]
  const trampler = [
    { label: 'Крышка трамблера', value: clientCar.timingCover },
    { label: 'Бегунок', value: clientCar.slider },
  ]
  return { sparkPlugs, IgnitionCoil, ignitionWires, trampler }
}

export const AbsSensor = (clientCar: any) => {
  const { formatMessage } = useIntl()

  const absFront = [
    { label: 'Передний левый', value: clientCar.frontAbsSensorLeft },
    { label: 'Передний правый', value: clientCar.frontAbsSensorRight },
  ]

  const absRear = [
    { label: 'Задний левый', value: clientCar.rearAbsSensorLeft },
    { label: 'Задний правый', value: clientCar.rearAbsSensorRight },
  ]
  return { absFront, absRear }
}

export const LightBulbs = (clientCar: any) => {
  const { formatMessage } = useIntl()

  const lightBulbs = [
    { label: 'Стопов', value: clientCar.brakeLightBulbs },
    { label: 'Габариты передние', value: clientCar.parkingLightBulbsFront },
    { label: 'Габариты задние', value: clientCar.parkingLightBulbsRear },
    { label: 'Поворотов', value: clientCar.sideSignalBulbs },
    { label: 'Заднего хода', value: clientCar.reverseLightBulbs },
    { label: 'Основной фары', value: clientCar.mainHeadlightBulbs },
    { label: 'Противотуманных фар', value: clientCar.fogLightBulbs },
  ]
  return lightBulbs
}

export const Wipers = (clientCar: any) => {
  const { formatMessage } = useIntl()

  const wipers = [
    { label: 'Водителя', value: clientCar.driversWiper },
    { label: 'Пасажира', value: clientCar.passengerWiper },
  ]
  return wipers
}

export const HoodShockAbsorbers = (clientCar: any) => {
  const { formatMessage } = useIntl()

  const hoodShockAbsorbers = [{ label: 'Амортизаторы капота', value: clientCar.hoodShockAbsorbers }]
  return hoodShockAbsorbers
}
