import { useIntl } from 'react-intl'

export const EngineTimingBelt = (client: any) => {
  const { formatMessage } = useIntl()

  const engineTimingBelt = [
    { label: 'Цепь ГРМ', value: client.clientCar?.timingChainLong },
    { label: 'Короткая цепь', value: client.clientCar?.timingChainShort },
    { label: 'Гидронатяжитель цепи 1', value: client.clientCar?.chainTensioner1 },
    { label: 'Гидронатяжитель цепи 2', value: client.clientCar?.chainTensioner2 },
    { label: 'Башмак', value: client.clientCar?.chainTensioner3 },
    { label: 'Набор цепей', value: client.clientCar?.chainKit },

    { label: 'Ремень грм', value: client.clientCar?.timingBelt },
    { label: 'Натяжитель ремня ГРМ', value: client.clientCar?.timingBeltRoller },
    { label: 'Паразитный ролик ремня ГРМ', value: client.clientCar?.timingBeltRoller },
  ]

  return engineTimingBelt
}

export const EngineAndPiston = (client: any) => {
  const { formatMessage } = useIntl()
  const engineAndPiston = [
    { label: 'Поршня', value: client.clientCar?.pistons },
    { label: 'Поршневые кольца', value: client.clientCar?.pistonsRings },
    { label: 'Гидрокомпенсатор', value: client.clientCar?.hydrocompensators },
    { label: 'Клапана впуск', value: client.clientCar?.valveIn },
    { label: 'Клапана выпуск', value: client.clientCar?.valveEx },
    { label: 'Направляющие впуск', value: client.clientCar?.valveGuidesIn },
    { label: 'Направляющие выпуск', value: client.clientCar?.valveGuidesEx },
    { label: 'Вкладыш коренной', value: client.clientCar?.bearingConnectingRod },
    { label: 'Вкладыш шатуна', value: client.clientCar?.bearingCamshaft },
    { label: 'Полукольца разбега', value: client.clientCar?.crankshaftCamberRings },
  ]

  return engineAndPiston
}

export const BeltAndTensioner = (client: any) => {
  const { formatMessage } = useIntl()

  const beltAndTensioner = [
    { label: 'Ремень генератора', value: client.clientCar?.generatorBelt },
    { label: 'Ремень гидроусилителя', value: client.clientCar?.powerSteeringBelt },
    { label: 'Ремень кондиционера', value: client.clientCar?.airConditionerBelt },
    { label: 'Натяжитель ремня', value: client.clientCar?.tensionToller },
    { label: 'Обводной ролик ремня', value: client.clientCar?.bypassRoller1 },
    { label: 'Обводной ролик ремня', value: client.clientCar?.bypassRoller2 },
    { label: 'Направляющие выпуск', value: client.clientCar?.generatorOverrunningClutch },
    { label: 'Обгонная муфта', value: client.clientCar?.bearingConnectingRod },
  ]

  return beltAndTensioner
}

export const EngineGasket = (client: any) => {
  const { formatMessage } = useIntl()

  const engineGasket = [
    { label: 'Набор прокладок', value: client.clientCar?.engineGasketKit },
    { label: 'Прокладка головки блока', value: client.clientCar?.headGasket },
    { label: 'Клапанной крышки левая', value: client.clientCar?.valveCoverGasketLeft },
    { label: 'Клапанной крышки правая', value: client.clientCar?.valveCoverGasketRight },
    { label: 'Влапанной крышки', value: client.clientCar?.valveCoverGasket },
    { label: 'Впускного коллектора', value: client.clientCar?.intakeManifoldGasket },
    { label: 'Выпускного коллектора', value: client.clientCar?.exhaustManifoldGasket },
    { label: 'Выпускной трубы', value: client.clientCar?.exhaustPipeGasket1 },
    { label: 'До катализатора', value: client.clientCar?.exhaustPipeGasket2 },
    { label: 'После катализатора', value: client.clientCar?.exhaustPipeGasket3 },
  ]

  return engineGasket
}

export const EngineCushion = (client: any) => {
  const { formatMessage } = useIntl()

  const engineCushion = [
    { label: 'Подушка передняя левая', value: client.clientCar?.frontLeftEngineCushion },
    { label: 'Подушка передняя правая', value: client.clientCar?.frontRightEngineCushion },
    { label: 'Подушка левая', value: client.clientCar?.engineCushionLeft },
    { label: 'Подушка задняя', value: client.clientCar?.engineCushionRear },
  ]

  return engineCushion
}

export const EngineOilSeals = (client: any) => {
  const { formatMessage } = useIntl()

  const engineOilSeals = [
    { label: 'Передний коленвала', value: client.clientCar?.frontLeftEngineCushion },
    { label: 'Задний коленвала', value: client.clientCar?.rearCrankshaftOilSeal },
    { label: 'Распредвала', value: client.clientCar?.camshaftOilSeal },
    { label: 'Маслонасоса', value: client.clientCar?.oilPumpPacking },
    { label: 'Маслосъемные впускные', value: client.clientCar?.intakeOilCaps },
    { label: 'Маслосъемные выпускные', value: client.clientCar?.exhaustOilCaps },
  ]
  return engineOilSeals
}

export const AirSupplySystem = (client: any) => {
  const { formatMessage } = useIntl()

  const airSupplySystem = [
    { label: 'Гофра воздуховода', value: client.clientCar?.airDuctCorrugation },
  ]

  return airSupplySystem
}

export const Filters = (client: any) => {
  const { formatMessage } = useIntl()

  const filters = [
    { label: 'Масляный фильтр', value: client.clientCar?.oilFilter },
    { label: 'Воздушный фильтр', value: client.clientCar?.airFilter },
    { label: 'Топливный фильтр', value: client.clientCar?.fuelFilter },
    { label: 'Фильтр салона', value: client.clientCar?.cabinFilter },
  ]
  return filters
}

export const ShockAbsorbers = (client: any) => {
  const { formatMessage } = useIntl()

  const shockAbsorbers = [
    { label: 'Передний левый', value: client.clientCar?.frontLeftShockAbsorber },
    { label: 'Передний правый', value: client.clientCar?.frontRightShockAbsorber },
    { label: 'Задний левый', value: client.clientCar?.rearLeftShockAbsorber },
    { label: 'Задний правый', value: client.clientCar?.rearRightShockAbsorber },
  ]

  return shockAbsorbers
}

export const NutsWheelStuds = (client: any) => {
  const { formatMessage } = useIntl()

  const nutsWheelStuds = [
    { label: 'Шпилька', value: client.clientCar?.wheelStud },
    { label: 'Гайка', value: client.clientCar?.wheelNut },
  ]
  return nutsWheelStuds
}

export const StrutMountsDustCoversBumpers = (client: any) => {
  const { formatMessage } = useIntl()

  const strutMountsDustCoversBumpers = [
    { label: 'Передняя опора левая', value: client.clientCar?.leftFrontStrutSupport },
    { label: 'Передняя опора правая', value: client.clientCar?.rightFrontStrutSupport },
    { label: 'Задняя опора левая', value: client.clientCar?.leftRearStrutSupport },
    { label: 'Задняя опора правая', value: client.clientCar?.rightRearStrutSupport },
    { label: 'Опорный подшипник', value: client.clientCar?.frontSupportBearing },
    { label: 'Пыльник передний левый', value: client.clientCar?.frontLeftStrutDuster },
    { label: 'Пыльник передний правый', value: client.clientCar?.frontRightStrutDuster },
    { label: 'Пыльник задний левый', value: client.clientCar?.rearLeftStrutDuster },
    { label: 'Пыльник задний правый', value: client.clientCar?.rearRightStrutDuster },
    { label: 'Отбойник передний', value: client.clientCar?.frontStrutBumper },
    { label: 'Отбойник задний', value: client.clientCar?.rearStrutBumper },
  ]
  return strutMountsDustCoversBumpers
}

export const HubBearings = (client: any) => {
  const { formatMessage } = useIntl()

  const hubBearings = [
    { label: 'Передней левый', value: client.clientCar?.frontLeftHubBearing },
    { label: 'Передней правый', value: client.clientCar?.frontRightHubBearing },
    { label: 'Задней левый', value: client.clientCar?.rearLeftHubBearing },
    { label: 'Задней правый', value: client.clientCar?.rearRightHubBearing },
  ]
  return hubBearings
}

export const SteeringRackAndPowerSteering = (client: any) => {
  const { formatMessage } = useIntl()

  const steeringRackAndPowerSteering = [
    { label: 'Ремкомплект ГУР', value: client.clientCar?.hydraulicPowerSteeringKit },
    { label: 'Сальники и прокладки рейки', value: client.clientCar?.railSealsAndGaskets },
    { label: 'Пыльник рейки левый', value: client.clientCar?.steeringRackDustCoverLeft },
    { label: 'Пыльник рейки правый', value: client.clientCar?.steeringRackDustCoverRight },
  ]

  return steeringRackAndPowerSteering
}

export const Arms = (client: any) => {
  const { formatMessage } = useIntl()

  const arms = [
    { label: 'Передний нижний левый', value: client.clientCar?.frontLowerLeftArm },
    { label: 'Передний нижний правый', value: client.clientCar?.frontLowerRightArm },
    { label: 'Передний верхний левый', value: client.clientCar?.frontUpperLeftArm },
    { label: 'Передний верхний правый', value: client.clientCar?.frontUpperRightArm },
    { label: 'Задний левый продольный', value: client.clientCar?.rearLeftLongitudinalArm },
    { label: 'Задний правый продольный', value: client.clientCar?.rearRightLongitudinalArm },
    { label: 'Задний левый поперечный 1', value: client.clientCar?.rearLeftTransverseArm1 },
    { label: 'Задний правый поперечный 1', value: client.clientCar?.rearRightTransverseArm1 },
    { label: 'Задний левый поперечный 2', value: client.clientCar?.rearLeftTransverseArm2 },
    { label: 'Задний правый поперечный 2', value: client.clientCar?.rearRightTransverseArm2 },
    { label: 'Задний левый полумесяц', value: client.clientCar?.rearCrescentArm },
    { label: 'Задний верхний короткий', value: client.clientCar?.rearUpperShortArm },
  ]

  return arms
}

export const SilentBlocks = (client: any) => {
  const { formatMessage } = useIntl()

  const silentBlocks = [
    {
      label: 'Переднего нижнего передний',
      value: client.clientCar?.frontLowerControlArmFrontSilentBlock,
    },
    {
      label: 'Переднего нижнего задний',
      value: client.clientCar?.frontLowerControlArmRearSilentBlock,
    },
    {
      label: 'Переднего верхнего передний',
      value: client.clientCar?.frontUpperControlArmFrontSilentBlock,
    },
    {
      label: 'Переднего верхнего задний',
      value: client.clientCar?.frontUpperControlArmRearSilentBlock,
    },
    { label: 'Продольных рычагов левый', value: client.clientCar?.longitudinalArmSilentBlockLeft },
    {
      label: 'Продольных рычагов правый',
      value: client.clientCar?.longitudinalArmSilentBlockRight,
    },
    {
      label: 'Продольных рычагов ступичный',
      value: client.clientCar?.longitudinalHubArmSilentBlockLeft,
    },
    {
      label: 'Поперечного левого рычага кузовной',
      value: client.clientCar?.bodyLeftCrossArmSilentBlock,
    },
    {
      label: 'Поперечного левого рычага ступичный',
      value: client.clientCar?.hubLeftCrossArmSilentBlock,
    },
    {
      label: 'Поперечного правого рычага кузовной',
      value: client.clientCar?.bodyRightCrossArmSilentBlock,
    },
    {
      label: 'Поперечного правого рычага ступичный',
      value: client.clientCar?.hubRightCrossArmSilentBlock,
    },
    { label: 'Развального рычага (Развальный)', value: client.clientCar?.camberArmSilentBlock1 },
    { label: 'Развального рычага', value: client.clientCar?.camberArmSilentBlock2 },
    { label: 'Подрамника передний', value: client.clientCar?.frontSubframeSilentBlock },
    { label: 'Подрамника задний', value: client.clientCar?.rearSubframeSilentBlock },
  ]

  return silentBlocks
}

export const Stabilizer = (client: any) => {
  const { formatMessage } = useIntl()

  const stabilizer = [
    { label: 'Втулки передние', value: client.clientCar?.frontStabilizerSushings },
    { label: 'Втулка передняя левая', value: client.clientCar?.frontStabilizerSushingsLeft },
    { label: 'Втулка передняя правая', value: client.clientCar?.frontStabilizerSushingsRight },
    { label: 'Втулки стабилизатора задняя', value: client.clientCar?.rearStabilizerSushings },
    { label: 'Стойка передняя левая', value: client.clientCar?.frontLeftStabilizerBar },
    { label: 'Стойка передняя правая', value: client.clientCar?.frontRightStabilizerBar },
    { label: 'Стойка задняя левая', value: client.clientCar?.rearLeftStabilizerBar },
    { label: 'Стойка задняя правая', value: client.clientCar?.rearRightStabilizerBar },
  ]

  return stabilizer
}

export const PullRodsAndLugs = (client: any) => {
  const { formatMessage } = useIntl()

  const pullRodsAndLugs = [
    { label: 'Рулевая тяга левая', value: client.clientCar?.steeringLinkLeft },
    { label: 'Тяга правая ', value: client.clientCar?.steeringLinkRight },
    { label: 'Наконечник наружный левый ', value: client.clientCar?.outerLeftSteeringKnuckle },
    { label: 'Наконечник наружный правый ', value: client.clientCar?.outerRightSteeringKnuckle },
    { label: 'Наконечник внутренний левый ', value: client.clientCar?.leftInnerSteeringKnuckle },
    { label: 'Наконечник внутренний правый ', value: client.clientCar?.leftRightSteeringKnuckle },
  ]

  return pullRodsAndLugs
}

export const BallBearings = (client: any) => {
  const { formatMessage } = useIntl()

  const ballBearings = [
    { label: 'Шаровая нижняя левая', value: client.clientCar?.lowerLeftBallJoint },
    { label: 'Шаровая нижняя правая', value: client.clientCar?.lowerRightBallJoint },
    { label: 'Шаровая верхняя левая', value: client.clientCar?.upperLeftBallJoint },
    { label: 'Шаровая верхняя правая', value: client.clientCar?.upperRightBallJoint },
  ]
  return ballBearings
}

export const BrakeCable = (client: any) => {
  const { formatMessage } = useIntl()

  const brakeCable = [
    { label: 'Трос ручника передний', value: client.clientCar?.frontHandbrakeCable },
    { label: 'Трос задний левый', value: client.clientCar?.rearLeftCable },
    { label: 'Трос задний правый', value: client.clientCar?.reaRightCable },
  ]

  return brakeCable
}

export const BrakeDisksAndDrums = (client: any) => {
  const { formatMessage } = useIntl()

  const brakeDisksAndDrums = [
    { label: 'Передний диск левый ', value: client.clientCar?.frontBrakeDiskLeft },
    { label: 'Передний диск правый', value: client.clientCar?.frontBrakeDiskRight },
    { label: 'Задний диск', value: client.clientCar?.rearBrakeDisk },
  ]
  return brakeDisksAndDrums
}

export const BrakePads = (client: any) => {
  const { formatMessage } = useIntl()

  const brakePads = [
    { label: 'Передние', value: client.clientCar?.frontBrake },
    { label: 'Задние', value: client.clientCar?.rearBrake },
    { label: 'Ручника', value: client.clientCar?.handbrakeBrakePads },
  ]
  return brakePads
}

export const BrakeCylinder = (client: any) => {
  const { formatMessage } = useIntl()

  const brakeCylinder = [
    { label: 'Цилиндр главный', value: client.clientCar?.brakeMasterCylinder },
    { label: 'Цилиндр рабочий', value: client.clientCar?.slaveBrakeCylinder },
    { label: 'Цилиндр барабанов левый', value: client.clientCar?.drumBrakeCylinderLeft },
    { label: 'Цилиндр барабанов правый', value: client.clientCar?.drumBrakeCylinderRight },
  ]
  return brakeCylinder
}

export const FrontWheelBrakeMechanism = (client: any) => {
  const { formatMessage } = useIntl()

  const frontWheelBrakeMechanism = [
    {
      label: 'Передние направляющие с пыльниками',
      value: client.clientCar?.setOfFrontGuideRailsWithDustCovers,
    },
    { label: 'Установочный комплект', value: client.clientCar?.installationKitForFrontPads },
    { label: 'Ремкомплект суппорта ', value: client.clientCar?.frontCaliperRepairKit },
    {
      label: 'Ремкомплект суппорта с поршнями',
      value: client.clientCar?.frontCaliperRepairKitWithPiston,
    },
  ]

  return frontWheelBrakeMechanism
}

export const RearWheelBrakeMechanism = (client: any) => {
  const { formatMessage } = useIntl()

  const rearWheelBrakeMechanism = [
    {
      label: 'Задние направляющие с пыльниками',
      value: client.clientCar?.setOfRearGuideRailsWithDustCovers,
    },
    {
      label: 'Установочный комплект на барабаны',
      value: client.clientCar?.installationKitForHandbrakeBrakePads,
    },
    { label: 'Ремкомплект суппорта ', value: client.clientCar?.rearCaliperRepairKit },
    {
      label: 'Ремкомплект суппорта  с поршнями',
      value: client.clientCar?.rearCaliperRepairKitWithPiston,
    },
  ]

  return rearWheelBrakeMechanism
}

export const BrakeHoses = (client: any) => {
  const { formatMessage } = useIntl()

  const brakeHoses = [
    { label: 'Передний левый', value: client.clientCar?.frontLeftBrakeHose },
    { label: 'Передний правый', value: client.clientCar?.frontRightBrakeHose },
    { label: 'Задний левый', value: client.clientCar?.rearLeftBrakeHose },
    { label: 'Задний правый', value: client.clientCar?.rearRightBrakeHose },
  ]
  return brakeHoses
}

export const GrenadesAndDrives = (client: any) => {
  const { formatMessage } = useIntl()

  const grenadesAndDrives = [
    { label: 'ШРУС передний наружный левый', value: client.clientCar?.frontLeftOuterBallJoint },
    { label: 'ШРУС передний наружный правый', value: client.clientCar?.frontRightOuterBallJoint },
    { label: 'ШРУС передний внутренний левый', value: client.clientCar?.frontLeftInnerBallJoint },
    { label: 'ШРУС передний внутренний правый', value: client.clientCar?.frontRightInnerBallJoint },
    { label: 'Приводной вал левый', value: client.clientCar?.frontLeftHandDrive },
    { label: 'Приводной вал правый', value: client.clientCar?.frontRightHandDrive },
    { label: 'ШРУС задний наружный левый', value: client.clientCar?.rearLeftOuterBallJoint },
    { label: 'ШРУС задний наружный правый', value: client.clientCar?.rearRightOuterBallJoint },
    { label: 'ШРУС задний внутренний левый', value: client.clientCar?.rearLeftInnerBallJoint },
    { label: 'ШРУС задний внутренний правый', value: client.clientCar?.rearRightInnerBallJoint },
  ]
  return grenadesAndDrives
}

export const Gearbox = (client: any) => {
  const { formatMessage } = useIntl()

  const gearbox = [
    { label: 'Прокладка поддона АКПП', value: client.clientCar?.automaticTransmissionOilPanGasket },
    { label: 'Фильтр АКПП', value: client.clientCar?.automaticTransmissionFilter },
    { label: 'Прокладка фильтра АКПП', value: client.clientCar?.automaticTransmissionFillerGasket },
    {
      label: 'Прокладка фильтра АКПП',
      value: client.clientCar?.automaticTransmissionOilPanGasket2,
    },
    { label: 'Фильтр маленький АКПП', value: client.clientCar?.automaticTransmissionFilter2 },
    { label: 'Сливная пробка АКПП', value: client.clientCar?.transmissionDrainPlug },
    {
      label: 'Прокладка сливной пробки АКПП',
      value: client.clientCar?.transmissionDrainPlugGasket,
    },
  ]
  return gearbox
}

export const SuspensionBearing = (client: any) => {
  const { formatMessage } = useIntl()

  const suspensionBearing = [
    { label: 'Подвесной подшипник', value: client.clientCar?.suspensionBearing },
  ]

  return suspensionBearing
}

export const BootDustCovers = (client: any) => {
  const { formatMessage } = useIntl()

  const bootDustCovers = [
    { label: 'Передний наружный', value: client.clientCar?.frontPistonRodDusterOuter },
    { label: 'Передний внутренний левый', value: client.clientCar?.frontPistonRodDusterInnerLeft },
    {
      label: 'Передний внутренний правый',
      value: client.clientCar?.frontPistonRodDusterInnerRight,
    },
    { label: 'Задний наружный', value: client.clientCar?.rearPistonRodDusterOuter },
    { label: 'Задний внутренний левый', value: client.clientCar?.rearPistonRodDusterInnerLeft },
    { label: 'Задний внутренний правый', value: client.clientCar?.rearPistonRodDusterInnerRight },
  ]
  return bootDustCovers
}

export const TransmissionOilSeals = (client: any) => {
  const { formatMessage } = useIntl()

  const transmissionOilSeals = [
    {
      label: 'Гидротрансформатора АКПП',
      value: client.clientCar?.automaticTransmissionTorqueConverterOilSeal,
    },
    { label: 'Первичного вала КПП', value: client.clientCar?.gearboxPrimaryShaftOilSeal },
    { label: 'Кулисы КПП', value: client.clientCar?.gearboxRockerGland },
    { label: 'Левого привода', value: client.clientCar?.leftDriveOilSeal },
    { label: 'Правого привода', value: client.clientCar?.rightDriveOilSeal },
  ]
  return transmissionOilSeals
}

export const Clutch = (client: any) => {
  const { formatMessage } = useIntl()

  const clutch = [
    { label: 'Диск', value: client.clientCar?.clutchDisk },
    { label: 'Корзина', value: client.clientCar?.clutchBasket },
    { label: 'Выжимной подшипник', value: client.clientCar?.releaseBearing },
    { label: 'Комплект сцепления', value: client.clientCar?.clutchKit },
  ]
  return clutch
}

export const ClutchCylinders = (client: any) => {
  const { formatMessage } = useIntl()

  const clutchCylinders = [
    { label: 'Главный', value: client.clientCar?.clutchMasterCylinder },
    { label: 'Рабочий', value: client.clientCar?.clutchSlaveCylinder },
  ]
  return clutchCylinders
}

export const CoolingSystem = (client: any) => {
  const { formatMessage } = useIntl()

  const coolingSystem = [
    { label: 'Водяная помпа', value: client.clientCar?.waterPump },
    { label: 'Термостат', value: client.clientCar?.thermostat },
    { label: 'Радиатор', value: client.clientCar?.radiator },
    { label: 'Радиатор отопителя', value: client.clientCar?.heaterRadiator },
    { label: 'Радиатор кондиционера', value: client.clientCar?.airConditionerRadiator },
    { label: 'Патрубок верхний', value: client.clientCar?.upperPipe },
    { label: 'Патрубок нижний', value: client.clientCar?.lowerPipe },
    { label: 'Крышка радиатора', value: client.clientCar?.radiatorCap },
    { label: 'Крышка расширительного бачка', value: client.clientCar?.expansionTankCap },
  ]
  return coolingSystem
}

export const Sensors = (client: any) => {
  const { formatMessage } = useIntl()

  const sensors = [
    { label: 'Масляный датчик', value: client.clientCar?.oilSensor },
    { label: 'Масляный вентилятора', value: client.clientCar?.ventilatorSensor },
    {
      label: 'Датчик температуры приборной панели',
      value: client.clientCar?.dashboardTemperatureSensor,
    },
    { label: 'Датчик кондиционера', value: client.clientCar?.airConditionerSensor },
    { label: 'Датчик заднего хода', value: client.clientCar?.reverseSensor },
    { label: 'Моторчик омывателя', value: client.clientCar?.washerMotor },
    { label: 'Подрулевой шлейф', value: client.clientCar?.handwheelCable },
  ]
  return sensors
}

export const SparkPlugsAndIgnitionCoil = (client: any) => {
  const { formatMessage } = useIntl()

  const sparkPlugsAndIgnitionCoil = [
    { label: 'Свеча зажигания', value: client.clientCar?.sparkPlug },
    { label: 'Катушка зажигания', value: client.clientCar?.ignitionCoil },
    { label: 'Провода зажигания', value: client.clientCar?.ignitionWires },
  ]
  return sparkPlugsAndIgnitionCoil
}

export const Trampler = (client: any) => {
  const { formatMessage } = useIntl()

  const trampler = [
    { label: 'Крышка трамблера', value: client.clientCar?.timingCover },
    { label: 'Бегунок', value: client.clientCar?.slider },
  ]
  return trampler
}

export const LambdaAndAbs = (client: any) => {
  const { formatMessage } = useIntl()

  const lambdaAndAbs = [
    { label: 'Первый лямбдазонд', value: client.clientCar?.lambdaProbe1 },
    { label: 'Второй лямбдазонд', value: client.clientCar?.lambdaProbe2 },
    { label: 'Датчик АБС передний левый', value: client.clientCar?.frontAbsSensorLeft },
    { label: 'Датчик АБС передний правый', value: client.clientCar?.frontAbsSensorRight },
    { label: 'Датчик АБС задний левый', value: client.clientCar?.rearAbsSensorLeft },
    { label: 'Датчик АБС задний правый', value: client.clientCar?.rearAbsSensorRight },
  ]
  return lambdaAndAbs
}

export const LightBulbs = (client: any) => {
  const { formatMessage } = useIntl()

  const lightBulbs = [
    { label: 'Стопов', value: client.clientCar?.brakeLightBulbs },
    { label: 'Габариты передние', value: client.clientCar?.parkingLightBulbsFront },
    { label: 'Габариты задние', value: client.clientCar?.parkingLightBulbsRear },
    { label: 'Поворотов', value: client.clientCar?.sideSignalBulbs },
    { label: 'Заднего хода', value: client.clientCar?.reverseLightBulbs },
    { label: 'Основной фары', value: client.clientCar?.mainHeadlightBulbs },
    { label: 'Противотуманных фар', value: client.clientCar?.fogLightBulbs },
  ]
  return lightBulbs
}

export const Wipers = (client: any) => {
  const { formatMessage } = useIntl()

  const wipers = [
    { label: 'Дворник водителя', value: client.clientCar?.driversWiper },
    { label: 'Дворник пасажира', value: client.clientCar?.passengerWiper },
  ]
  return wipers
}

export const HoodShockAbsorbers = (client: any) => {
  const { formatMessage } = useIntl()

  const hoodShockAbsorbers = [
    { label: 'Амортизаторы капота', value: client.clientCar?.hoodShockAbsorbers },
  ]
  return hoodShockAbsorbers
}
