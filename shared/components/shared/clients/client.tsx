'use client'

import React from 'react'
import { Container } from '../container'
import { ClientsWithCar } from '@/@types/prisma'
import { IdCard, PhoneIcon, TagIcon, TruckIcon } from 'lucide-react'
import { AccordionForm, FormTableClientTo } from '../form'
import { FormProvider, useForm } from 'react-hook-form'
import { MaintenanceDataTable, TableColumns } from '@/shared/constants/table-client-to'
import { Title } from '../title'
import { Button, Separator } from '../../ui'
import { ClientModal } from '../modals'

interface Props {
  client: ClientsWithCar
  className?: string
}

export const ClientInfoPage: React.FC<Props> = ({ client, className }) => {
  const methods = useForm()

  const [openModal, setOpenModal] = React.useState(false)

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

  const engineCushion = [
    { label: 'Подушка передняя левая', value: client.clientCar?.frontLeftEngineCushion },
    { label: 'Подушка передняя правая', value: client.clientCar?.frontRightEngineCushion },
    { label: 'Подушка левая', value: client.clientCar?.engineCushionLeft },
    { label: 'Подушка задняя', value: client.clientCar?.engineCushionRear },
  ]

  const engineOilSeals = [
    { label: 'Передний коленвала', value: client.clientCar?.frontLeftEngineCushion },
    { label: 'Задний коленвала', value: client.clientCar?.rearCrankshaftOilSeal },
    { label: 'Распредвала', value: client.clientCar?.camshaftOilSeal },
    { label: 'Маслонасоса', value: client.clientCar?.oilPumpPacking },
    { label: 'Маслосъемные впускные', value: client.clientCar?.intakeOilCaps },
    { label: 'Маслосъемные выпускные', value: client.clientCar?.exhaustOilCaps },
  ]

  const airSupplySystem = [
    { label: 'Гофра воздуховода', value: client.clientCar?.airDuctCorrugation },
  ]

  const filters = [
    { label: 'Масляный фильтр', value: client.clientCar?.oilFilter },
    { label: 'Воздушный фильтр', value: client.clientCar?.airFilter },
    { label: 'Топливный фильтр', value: client.clientCar?.fuelFilter },
    { label: 'Фильтр салона', value: client.clientCar?.cabinFilter },
  ]

  const shockAbsorbers = [
    { label: 'Передний левый', value: client.clientCar?.frontLeftShockAbsorber },
    { label: 'Передний правый', value: client.clientCar?.frontRightShockAbsorber },
    { label: 'Задний левый', value: client.clientCar?.rearLeftShockAbsorber },
    { label: 'Задний правый', value: client.clientCar?.rearRightShockAbsorber },
  ]

  const nutsWheelStuds = [
    { label: 'Шпилька', value: client.clientCar?.wheelStud },
    { label: 'Гайка', value: client.clientCar?.wheelNut },
  ]

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

  const hubBearings = [
    { label: 'Передней левый', value: client.clientCar?.frontLeftHubBearing },
    { label: 'Передней правый', value: client.clientCar?.frontRightHubBearing },
    { label: 'Задней левый', value: client.clientCar?.rearLeftHubBearing },
    { label: 'Задней правый', value: client.clientCar?.rearRightHubBearing },
  ]

  const steeringRackAndPowerSteering = [
    { label: 'Ремкомплект ГУР', value: client.clientCar?.hydraulicPowerSteeringKit },
    { label: 'Сальники и прокладки рейки', value: client.clientCar?.railSealsAndGaskets },
    { label: 'Пыльник рейки левый', value: client.clientCar?.steeringRackDustCoverLeft },
    { label: 'Пыльник рейки правый', value: client.clientCar?.steeringRackDustCoverRight },
  ]

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

  const pullRodsAndLugs = [
    { label: 'Рулевая тяга левая', value: client.clientCar?.steeringLinkLeft },
    { label: 'Тяга правая ', value: client.clientCar?.steeringLinkRight },
    { label: 'Наконечник наружный левый ', value: client.clientCar?.outerLeftSteeringKnuckle },
    { label: 'Наконечник наружный правый ', value: client.clientCar?.outerRightSteeringKnuckle },
    { label: 'Наконечник внутренний левый ', value: client.clientCar?.leftInnerSteeringKnuckle },
    { label: 'Наконечник внутренний правый ', value: client.clientCar?.leftRightSteeringKnuckle },
  ]

  const ballBearings = [
    { label: 'Шаровая нижняя левая', value: client.clientCar?.lowerLeftBallJoint },
    { label: 'Шаровая нижняя правая', value: client.clientCar?.lowerRightBallJoint },
    { label: 'Шаровая верхняя левая', value: client.clientCar?.upperLeftBallJoint },
    { label: 'Шаровая верхняя правая', value: client.clientCar?.upperRightBallJoint },
  ]

  const brakeCable = [
    { label: 'Трос ручника передний', value: client.clientCar?.frontHandbrakeCable },
    { label: 'Трос задний левый', value: client.clientCar?.rearLeftCable },
    { label: 'Трос задний правый', value: client.clientCar?.reaRightCable },
  ]

  const brakeDisksAndDrums = [
    { label: 'Передний диск левый ', value: client.clientCar?.frontBrakeDiskLeft },
    { label: 'Передний диск правый', value: client.clientCar?.frontBrakeDiskRight },
    { label: 'Задний диск', value: client.clientCar?.rearBrakeDisk },
  ]

  const brakePads = [
    { label: 'Передние', value: client.clientCar?.frontBrake },
    { label: 'Задние', value: client.clientCar?.rearBrake },
    { label: 'Ручника', value: client.clientCar?.handbrakeBrakePads },
  ]

  const brakeCylinder = [
    { label: 'Цилиндр главный', value: client.clientCar?.brakeMasterCylinder },
    { label: 'Цилиндр рабочий', value: client.clientCar?.slaveBrakeCylinder },
    { label: 'Цилиндр барабанов левый', value: client.clientCar?.drumBrakeCylinderLeft },
    { label: 'Цилиндр барабанов правый', value: client.clientCar?.drumBrakeCylinderRight },
  ]

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

  const brakeHoses = [
    { label: 'Передний левый', value: client.clientCar?.frontLeftBrakeHose },
    { label: 'Передний правый', value: client.clientCar?.frontRightBrakeHose },
    { label: 'Задний левый', value: client.clientCar?.rearLeftBrakeHose },
    { label: 'Задний правый', value: client.clientCar?.rearRightBrakeHose },
  ]

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

  const suspensionBearing = [
    { label: 'Подвесной подшипник', value: client.clientCar?.suspensionBearing },
  ]

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

  const clutch = [
    { label: 'Диск', value: client.clientCar?.clutchDisk },
    { label: 'Корзина', value: client.clientCar?.clutchBasket },
    { label: 'Выжимной подшипник', value: client.clientCar?.releaseBearing },
    { label: 'Комплект сцепления', value: client.clientCar?.clutchKit },
  ]

  const clutchCylinders = [
    { label: 'Главный', value: client.clientCar?.clutchMasterCylinder },
    { label: 'Рабочий', value: client.clientCar?.clutchSlaveCylinder },
  ]

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

  const sparkPlugsAndIgnitionCoil = [
    { label: 'Свеча зажигания', value: client.clientCar?.sparkPlug },
    { label: 'Катушка зажигания', value: client.clientCar?.ignitionCoil },
    { label: 'Провода зажигания', value: client.clientCar?.ignitionWires },
  ]

  const trampler = [
    { label: 'Крышка трамблера', value: client.clientCar?.timingCover },
    { label: 'Бегунок', value: client.clientCar?.slider },
  ]

  const lambdaAndAbs = [
    { label: 'Первый лямбдазонд', value: client.clientCar?.lambdaProbe1 },
    { label: 'Второй лямбдазонд', value: client.clientCar?.lambdaProbe2 },
    { label: 'Датчик АБС передний левый', value: client.clientCar?.frontAbsSensorLeft },
    { label: 'Датчик АБС передний правый', value: client.clientCar?.frontAbsSensorRight },
    { label: 'Датчик АБС задний левый', value: client.clientCar?.rearAbsSensorLeft },
    { label: 'Датчик АБС задний правый', value: client.clientCar?.rearAbsSensorRight },
  ]

  const lightBulbs = [
    { label: 'Стопов', value: client.clientCar?.brakeLightBulbs },
    { label: 'Габариты передние', value: client.clientCar?.parkingLightBulbsFront },
    { label: 'Габариты задние', value: client.clientCar?.parkingLightBulbsRear },
    { label: 'Поворотов', value: client.clientCar?.sideSignalBulbs },
    { label: 'Заднего хода', value: client.clientCar?.reverseLightBulbs },
    { label: 'Основной фары', value: client.clientCar?.mainHeadlightBulbs },
    { label: 'Противотуманных фар', value: client.clientCar?.fogLightBulbs },
  ]

  const wipers = [
    { label: 'Дворник водителя', value: client.clientCar?.driversWiper },
    { label: 'Дворник пасажира', value: client.clientCar?.passengerWiper },
  ]

  const hoodShockAbsorbers = [
    { label: 'Амортизаторы капота', value: client.clientCar?.hoodShockAbsorbers },
  ]

  console.log(client.clientCarTo)
  return (
    <Container className='min-h-screen dark:bg-zinc-900 px-4 flex flex-col'>
      <div className='mb-4 text-2xl font-bold'>База клиентов</div>
      <div className='flex-1 flex gap-[20px]'>
        <Container>
          <div className='w-[300px] p-5 mr-2 bg-white dark:bg-gray-800 rounded-sm shadow-lg'>
            <span className='text-xl font-bold text-gray-900 dark:text-white'>Клиент</span>
            <div className='mt-4 space-y-4'>
              <div className='flex items-center flex-1'>
                <IdCard className='w-5 h-5 mr-2 text-gray-500' />
                <span className='font-semibold text-gray-700 dark:text-gray-300'>Имя:</span>{' '}
                <div className='flex-1 border-b border-dashed border-b-neutral-200 relative top-1 mx-2' />
                {client.name} {client.lastName}
              </div>
              <div className='flex items-center'>
                <PhoneIcon className='w-5 h-5 mr-2 text-gray-500' />
                <span className='font-semibold text-gray-700 dark:text-gray-300'>Телефон:</span>
                <div className='flex-1 border-b border-dashed border-b-neutral-200 relative top-1 mx-2' />
                {client.tel}
              </div>
              <div className='flex items-center'>
                <TagIcon className='w-5 h-5 mr-2 text-gray-500' />
                <span className='font-semibold text-gray-700 dark:text-gray-300'>VIN:</span>
                <div className='flex-1 border-b border-dashed border-b-neutral-200 relative top-1 mx-2' />
                {client.VIN}
              </div>
              <div className='flex items-center'>
                <TruckIcon className='w-5 h-5 mr-2 text-gray-500' />
                <span className='font-semibold text-gray-700 dark:text-gray-300'>Гос. номер:</span>
                <div className='flex-1 border-b border-dashed border-b-neutral-200 relative top-1 mx-2' />
                {client.clientCar?.gosNumber || 'Не указан'}
              </div>
              <div className='flex items-center'>
                <TruckIcon className='w-5 h-5 mr-2 text-gray-500' />
                <span className='font-semibold text-gray-700 dark:text-gray-300'>Модель:</span>
                <div className='flex-1 border-b border-dashed border-b-neutral-200 relative top-1 mx-2' />
                {client.clientCar?.models || 'Не указана'}
              </div>
            </div>
          </div>

          <ClientModal open={openModal} onClose={() => setOpenModal(false)} client={client} />
          <Button
            onClick={() => setOpenModal(true)}
            className='text-base font-bold bg-[#4CAF50] hover:bg-[#388E3C] w-[300px] mt-5'
          >
            Запчасти ТО
          </Button>
        </Container>

        <div className='flex-1 mb-10'>
          <Container>
            <Title text='Двигатель и Система выхлопа' size='md' className='font-extrabold ' />
            <Separator />

            <div className=' grid grid-cols-3 gap-4'>
              <AccordionForm label='ГРМ' parts={engineTimingBelt} />
              <AccordionForm label='Двигатель и поршневая' parts={engineAndPiston} />
              <AccordionForm label='Приводные ремни и ролики' parts={beltAndTensioner} />
              <AccordionForm label='ПГБ, наборы' parts={engineGasket} />
              <AccordionForm label='Подушки двигателя' parts={engineCushion} />
              <AccordionForm label='Сальники двигателя' parts={engineOilSeals} />
              <AccordionForm label='Система подачи воздуха' parts={airSupplySystem} />
              <AccordionForm label='Фильтры' parts={filters} />
            </div>
            <Separator className='my-4' />
            <Title text='Подвеска и Рулевое' size='md' className='font-extrabold ' />
            <Separator />

            <div className=' grid grid-cols-3 gap-4'>
              <AccordionForm label='Амортизаторы' parts={shockAbsorbers} />
              <AccordionForm label='Гайки, шпильки колесные' parts={nutsWheelStuds} />
              <AccordionForm
                label='Опоры стойки, пыльники, отбойники'
                parts={strutMountsDustCoversBumpers}
              />
              <AccordionForm label='Подшипники ступиц' parts={hubBearings} />
              <AccordionForm label='Рулевая рейка и ГУР' parts={steeringRackAndPowerSteering} />
              <AccordionForm label='Рычаги' parts={arms} />
              <AccordionForm label='Сайлентблоки' parts={silentBlocks} />
              <AccordionForm label='Стабилизатор' parts={stabilizer} />
              <AccordionForm label='Тяги и наконечники' parts={pullRodsAndLugs} />
              <AccordionForm label='Шаровые опоры' parts={ballBearings} />
            </div>
            <Separator className='my-4' />
            <Title text='Тормозная система' size='md' className='font-extrabold ' />
            <Separator />

            <div className=' grid grid-cols-3 gap-4'>
              <AccordionForm label='Тормозной трос' parts={brakeCable} />
              <AccordionForm label='Тормозные диски и барабаны' parts={brakeDisksAndDrums} />
              <AccordionForm label='Тормозные колодки' parts={brakePads} />
              <AccordionForm label='Тормозной цилиндр' parts={brakeCylinder} />
              <AccordionForm label='Тормозной механизм передний' parts={frontWheelBrakeMechanism} />
              <AccordionForm label='Тормозной механизм задний' parts={rearWheelBrakeMechanism} />
              <AccordionForm label='Тормозные шланги' parts={brakeHoses} />
            </div>

            <Separator className='my-4' />
            <Title text='Тормозная система' size='md' className='font-extrabold ' />
            <Separator />

            <div className=' grid grid-cols-3 gap-4'>
              <AccordionForm label='Тормозной трос' parts={brakeCable} />
              <AccordionForm label='Тормозные диски и барабаны' parts={brakeDisksAndDrums} />
              <AccordionForm label='Тормозные шланги' parts={brakeHoses} />
            </div>
            <Separator className='my-4' />
            <Title text='Коробка передач и Привод' size='md' className='font-extrabold ' />
            <Separator />

            <div className=' grid grid-cols-3 gap-4'>
              <AccordionForm label='Гранаты и привода' parts={grenadesAndDrives} />
              <AccordionForm label='Коробка передач' parts={gearbox} />
              <AccordionForm label='Подшипник подвесной' parts={suspensionBearing} />
              <AccordionForm label='Пыльники ШРУС' parts={bootDustCovers} />
              <AccordionForm label='Сальники трансмиссии' parts={transmissionOilSeals} />
              <AccordionForm label='Сцепление' parts={clutch} />
              <AccordionForm label='Цилиндры сцепления' parts={clutchCylinders} />
            </div>
            <Separator className='my-4' />
            <Title text='Охлаждение и Отопление' size='md' className='font-extrabold ' />
            <Separator />

            <div className=' grid grid-cols-3 gap-4'>
              <AccordionForm label='Система охлаждения' parts={coolingSystem} />
            </div>

            <Separator className='my-4' />
            <Title text='Электрика и Освещение' size='md' className='font-extrabold ' />
            <Separator />

            <div className=' grid grid-cols-3 gap-4'>
              <AccordionForm label='Датчики' parts={sensors} />
              <AccordionForm label='Свечи и катушка зажигания' parts={sparkPlugsAndIgnitionCoil} />
              <AccordionForm label='Трамблер' parts={trampler} />
              <AccordionForm label='Лямбда и АБС' parts={lambdaAndAbs} />
              <AccordionForm label='Лампочки' parts={lightBulbs} />
            </div>

            <Separator className='my-4' />
            <Title text='Кузов' size='md' className='font-extrabold ' />
            <Separator />

            <div className=' grid grid-cols-3 gap-4'>
              <AccordionForm label='Дворники' parts={wipers} />
              <AccordionForm label='Амортизаторы капота' parts={hoodShockAbsorbers} />
            </div>
            <Separator className='my-4' />
          </Container>
        </div>
      </div>
    </Container>
  )
}
