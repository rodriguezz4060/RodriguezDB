'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'
import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { useIntl } from 'react-intl'
import { Container } from '../container'
import { FormInput } from '../form'
import { Accordion, Button, Select, Separator } from '../../ui'
import { useRouter } from 'next/navigation'
import { Title } from '../title'
import { ClientsWithCar } from '@/@types/prisma'
import {
  formEditClientCarSchema,
  TFormEditClientCarSchema,
} from './schemas/edit-client-car-schemas'
import { updateClientCar } from '@/app/actions'
import { SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../ui/select'
import { BackButton } from '../buttons'
import { EngineTimingBelt } from '@/shared/constants/client-car'
import { AccordionContent, AccordionItem, AccordionTrigger } from '../../ui/accordion'

interface Props {
  client: ClientsWithCar
}

export const EditClientCarPage: React.FC<Props> = ({ client }) => {
  const { formatMessage } = useIntl()
  const router = useRouter()

  const [engineType, setEngineType] = useState('belt')

  const handleEngineTypeChange = (value: string) => {
    setEngineType(value)
  }

  const form = useForm<TFormEditClientCarSchema>({
    resolver: zodResolver(formEditClientCarSchema),
    defaultValues: {
      id: client.clientCar!.id,

      // Двигатель и Система выхлопа
      timingChainLong: client.clientCar?.timingChainLong ?? '',
      timingChainShort: client.clientCar?.timingChainShort ?? '',
      chainTensioner1: client.clientCar?.chainTensioner1 ?? '',
      chainTensioner2: client.clientCar?.chainTensioner2 ?? '',
      chainTensioner3: client.clientCar?.chainTensioner3 ?? '',
      chainKit: client.clientCar?.chainKit ?? '',

      timingBelt: client.clientCar?.timingBelt ?? '',
      timingBeltTensioner: client.clientCar?.timingBeltTensioner ?? '',
      timingBeltRoller: client.clientCar?.timingBeltRoller ?? '',

      pistons: client.clientCar?.pistons ?? '',
      pistonsRings: client.clientCar?.pistonsRings ?? '',
      hydrocompensators: client.clientCar?.hydrocompensators ?? '',
      valveIn: client.clientCar?.valveIn ?? '',
      valveEx: client.clientCar?.valveEx ?? '',
      valveGuidesIn: client.clientCar?.valveGuidesIn ?? '',
      valveGuidesEx: client.clientCar?.valveGuidesEx ?? '',
      bearingConnectingRod: client.clientCar?.bearingConnectingRod ?? '',
      bearingCamshaft: client.clientCar?.bearingCamshaft ?? '',
      crankshaftCamberRings: client.clientCar?.crankshaftCamberRings ?? '',

      generatorBelt: client.clientCar?.generatorBelt ?? '',
      powerSteeringBelt: client.clientCar?.powerSteeringBelt ?? '',
      airConditionerBelt: client.clientCar?.airConditionerBelt ?? '',
      tensionToller: client.clientCar?.tensionToller ?? '',
      bypassRoller1: client.clientCar?.bypassRoller1 ?? '',
      bypassRoller2: client.clientCar?.bypassRoller2 ?? '',
      generatorOverrunningClutch: client.clientCar?.generatorOverrunningClutch ?? '',

      engineGasketKit: client.clientCar?.engineGasketKit ?? '',
      headGasket: client.clientCar?.headGasket ?? '',
      valveCoverGasketLeft: client.clientCar?.valveCoverGasketLeft ?? '',
      valveCoverGasketRight: client.clientCar?.valveCoverGasketRight ?? '',
      valveCoverGasket: client.clientCar?.valveCoverGasket ?? '',
      intakeManifoldGasket: client.clientCar?.intakeManifoldGasket ?? '',
      exhaustManifoldGasket: client.clientCar?.exhaustManifoldGasket ?? '',
      exhaustPipeGasket1: client.clientCar?.exhaustPipeGasket1 ?? '',
      exhaustPipeGasket2: client.clientCar?.exhaustPipeGasket2 ?? '',
      exhaustPipeGasket3: client.clientCar?.exhaustPipeGasket3 ?? '',

      frontLeftEngineCushion: client.clientCar?.frontLeftEngineCushion ?? '',
      frontRightEngineCushion: client.clientCar?.frontRightEngineCushion ?? '',
      engineCushionLeft: client.clientCar?.engineCushionLeft ?? '',
      engineCushionRear: client.clientCar?.engineCushionRear ?? '',

      frontCrankshaftOilSeal: client.clientCar?.frontCrankshaftOilSeal ?? '',
      rearCrankshaftOilSeal: client.clientCar?.rearCrankshaftOilSeal ?? '',
      camshaftOilSeal: client.clientCar?.camshaftOilSeal ?? '',
      oilPumpPacking: client.clientCar?.oilPumpPacking ?? '',
      intakeOilCaps: client.clientCar?.intakeOilCaps ?? '',
      exhaustOilCaps: client.clientCar?.exhaustOilCaps ?? '',

      airDuctCorrugation: client.clientCar?.airDuctCorrugation ?? '',

      oilFilter: client.clientCar?.oilFilter ?? '',
      airFilter: client.clientCar?.airFilter ?? '',
      fuelFilter: client.clientCar?.fuelFilter ?? '',
      cabinFilter: client.clientCar?.cabinFilter ?? '',

      // Подвеска и рулевое управление
      frontLeftShockAbsorber: client.clientCar?.frontLeftShockAbsorber ?? '',
      frontRightShockAbsorber: client.clientCar?.frontRightShockAbsorber ?? '',
      rearLeftShockAbsorber: client.clientCar?.rearLeftShockAbsorber ?? '',
      rearRightShockAbsorber: client.clientCar?.rearRightShockAbsorber ?? '',

      wheelStud: client.clientCar?.wheelStud ?? '',
      wheelNut: client.clientCar?.wheelNut ?? '',

      leftFrontStrutSupport: client.clientCar?.leftFrontStrutSupport ?? '',
      rightFrontStrutSupport: client.clientCar?.rightFrontStrutSupport ?? '',
      leftRearStrutSupport: client.clientCar?.leftRearStrutSupport ?? '',
      rightRearStrutSupport: client.clientCar?.rightRearStrutSupport ?? '',
      frontSupportBearing: client.clientCar?.frontSupportBearing ?? '',
      frontLeftStrutDuster: client.clientCar?.frontLeftStrutDuster ?? '',
      frontRightStrutDuster: client.clientCar?.frontRightStrutDuster ?? '',
      rearLeftStrutDuster: client.clientCar?.rearLeftStrutDuster ?? '',
      rearRightStrutDuster: client.clientCar?.rearRightStrutDuster ?? '',
      frontStrutBumper: client.clientCar?.frontStrutBumper ?? '',
      rearStrutBumper: client.clientCar?.rearStrutBumper ?? '',

      frontLeftHubBearing: client.clientCar?.frontLeftHubBearing ?? '',
      frontRightHubBearing: client.clientCar?.frontRightHubBearing ?? '',
      rearLeftHubBearing: client.clientCar?.rearLeftHubBearing ?? '',
      rearRightHubBearing: client.clientCar?.rearRightHubBearing ?? '',

      hydraulicPowerSteeringKit: client.clientCar?.hydraulicPowerSteeringKit ?? '',
      railSealsAndGaskets: client.clientCar?.railSealsAndGaskets ?? '',
      steeringRackDustCoverLeft: client.clientCar?.steeringRackDustCoverLeft ?? '',
      steeringRackDustCoverRight: client.clientCar?.steeringRackDustCoverRight ?? '',

      frontLowerLeftArm: client.clientCar?.frontLowerLeftArm ?? '',
      frontLowerRightArm: client.clientCar?.frontLowerRightArm ?? '',
      frontUpperLeftArm: client.clientCar?.frontUpperLeftArm ?? '',
      frontUpperRightArm: client.clientCar?.frontUpperRightArm ?? '',
      rearLeftLongitudinalArm: client.clientCar?.rearLeftLongitudinalArm ?? '',
      rearRightLongitudinalArm: client.clientCar?.rearRightLongitudinalArm ?? '',
      rearLeftTransverseArm1: client.clientCar?.rearLeftTransverseArm1 ?? '',
      rearRightTransverseArm1: client.clientCar?.rearRightTransverseArm1 ?? '',
      rearLeftTransverseArm2: client.clientCar?.rearLeftTransverseArm2 ?? '',
      rearRightTransverseArm2: client.clientCar?.rearRightTransverseArm2 ?? '',
      rearCrescentArm: client.clientCar?.rearCrescentArm ?? '',
      rearUpperShortArm: client.clientCar?.rearUpperShortArm ?? '',

      frontLowerControlArmFrontSilentBlock:
        client.clientCar?.frontLowerControlArmFrontSilentBlock ?? '',
      frontLowerControlArmRearSilentBlock:
        client.clientCar?.frontLowerControlArmRearSilentBlock ?? '',
      frontUpperControlArmFrontSilentBlock:
        client.clientCar?.frontUpperControlArmFrontSilentBlock ?? '',
      frontUpperControlArmRearSilentBlock:
        client.clientCar?.frontUpperControlArmRearSilentBlock ?? '',
      longitudinalArmSilentBlockLeft: client.clientCar?.longitudinalArmSilentBlockLeft ?? '',
      longitudinalArmSilentBlockRight: client.clientCar?.longitudinalArmSilentBlockRight ?? '',
      longitudinalHubArmSilentBlockLeft: client.clientCar?.longitudinalHubArmSilentBlockLeft ?? '',
      bodyLeftCrossArmSilentBlock: client.clientCar?.bodyLeftCrossArmSilentBlock ?? '',
      hubLeftCrossArmSilentBlock: client.clientCar?.hubLeftCrossArmSilentBlock ?? '',
      bodyRightCrossArmSilentBlock: client.clientCar?.bodyRightCrossArmSilentBlock ?? '',
      hubRightCrossArmSilentBlock: client.clientCar?.hubRightCrossArmSilentBlock ?? '',
      camberArmSilentBlock1: client.clientCar?.camberArmSilentBlock1 ?? '',
      camberArmSilentBlock2: client.clientCar?.camberArmSilentBlock2 ?? '',
      frontSubframeSilentBlock: client.clientCar?.frontSubframeSilentBlock ?? '',
      rearSubframeSilentBlock: client.clientCar?.rearSubframeSilentBlock ?? '',
      frontStabilizerSushings: client.clientCar?.frontStabilizerSushings ?? '',
      frontStabilizerSushingsLeft: client.clientCar?.frontStabilizerSushingsLeft ?? '',
      frontStabilizerSushingsRight: client.clientCar?.frontStabilizerSushingsRight ?? '',
      rearStabilizerSushings: client.clientCar?.rearStabilizerSushings ?? '',
      frontLeftStabilizerBar: client.clientCar?.frontLeftStabilizerBar ?? '',
      frontRightStabilizerBar: client.clientCar?.frontRightStabilizerBar ?? '',
      rearLeftStabilizerBar: client.clientCar?.rearLeftStabilizerBar ?? '',
      rearRightStabilizerBar: client.clientCar?.rearRightStabilizerBar ?? '',

      steeringLinkLeft: client.clientCar?.steeringLinkLeft ?? '',
      steeringLinkRight: client.clientCar?.steeringLinkRight ?? '',
      outerLeftSteeringKnuckle: client.clientCar?.outerLeftSteeringKnuckle ?? '',
      outerRightSteeringKnuckle: client.clientCar?.outerRightSteeringKnuckle ?? '',
      leftInnerSteeringKnuckle: client.clientCar?.leftInnerSteeringKnuckle ?? '',
      leftRightSteeringKnuckle: client.clientCar?.leftRightSteeringKnuckle ?? '',

      lowerLeftBallJoint: client.clientCar?.lowerLeftBallJoint ?? '',
      lowerRightBallJoint: client.clientCar?.lowerRightBallJoint ?? '',
      upperLeftBallJoint: client.clientCar?.upperLeftBallJoint ?? '',
      upperRightBallJoint: client.clientCar?.upperRightBallJoint ?? '',

      // Тормозная система
      frontHandbrakeCable: client.clientCar?.frontHandbrakeCable ?? '',
      rearLeftCable: client.clientCar?.rearLeftCable ?? '',
      reaRightCable: client.clientCar?.reaRightCable ?? '',

      frontBrakeDiskLeft: client.clientCar?.frontBrakeDiskLeft ?? '',
      frontBrakeDiskRight: client.clientCar?.frontBrakeDiskRight ?? '',
      rearBrakeDisk: client.clientCar?.rearBrakeDisk ?? '',

      frontBrake: client.clientCar?.frontBrake ?? '',
      rearBrake: client.clientCar?.rearBrake ?? '',
      handbrakeBrakePads: client.clientCar?.handbrakeBrakePads ?? '',

      brakeMasterCylinder: client.clientCar?.brakeMasterCylinder ?? '',
      slaveBrakeCylinder: client.clientCar?.slaveBrakeCylinder ?? '',
      drumBrakeCylinderLeft: client.clientCar?.drumBrakeCylinderLeft ?? '',
      drumBrakeCylinderRight: client.clientCar?.drumBrakeCylinderRight ?? '',

      setOfFrontGuideRailsWithDustCovers:
        client.clientCar?.setOfFrontGuideRailsWithDustCovers ?? '',
      setOfRearGuideRailsWithDustCovers: client.clientCar?.setOfRearGuideRailsWithDustCovers ?? '',
      installationKitForFrontPads: client.clientCar?.installationKitForFrontPads ?? '',
      installationKitForRearPads: client.clientCar?.installationKitForRearPads ?? '',
      installationKitForHandbrakeBrakePads:
        client.clientCar?.installationKitForHandbrakeBrakePads ?? '',
      frontCaliperRepairKit: client.clientCar?.frontCaliperRepairKit ?? '',
      frontCaliperRepairKitWithPiston: client.clientCar?.frontCaliperRepairKitWithPiston ?? '',
      rearCaliperRepairKit: client.clientCar?.rearCaliperRepairKit ?? '',
      rearCaliperRepairKitWithPiston: client.clientCar?.rearCaliperRepairKitWithPiston ?? '',

      frontLeftBrakeHose: client.clientCar?.frontLeftBrakeHose ?? '',
      frontRightBrakeHose: client.clientCar?.frontRightBrakeHose ?? '',
      rearLeftBrakeHose: client.clientCar?.rearLeftBrakeHose ?? '',
      rearRightBrakeHose: client.clientCar?.rearRightBrakeHose ?? '',

      frontLeftOuterBallJoint: client.clientCar?.frontLeftOuterBallJoint ?? '',
      frontRightOuterBallJoint: client.clientCar?.frontRightOuterBallJoint ?? '',
      frontLeftInnerBallJoint: client.clientCar?.frontLeftInnerBallJoint ?? '',
      frontRightInnerBallJoint: client.clientCar?.frontRightInnerBallJoint ?? '',
      frontLeftHandDrive: client.clientCar?.frontLeftHandDrive ?? '',
      frontRightHandDrive: client.clientCar?.frontRightHandDrive ?? '',
      driveShaft: client.clientCar?.driveShaft ?? '',

      rearLeftOuterBallJoint: client.clientCar?.rearLeftOuterBallJoint ?? '',
      rearRightOuterBallJoint: client.clientCar?.rearRightOuterBallJoint ?? '',
      rearLeftInnerBallJoint: client.clientCar?.rearLeftInnerBallJoint ?? '',
      rearRightInnerBallJoint: client.clientCar?.rearRightInnerBallJoint ?? '',

      automaticTransmissionOilPanGasket: client.clientCar?.automaticTransmissionOilPanGasket ?? '',
      automaticTransmissionFilter: client.clientCar?.automaticTransmissionFilter ?? '',
      automaticTransmissionFillerGasket: client.clientCar?.automaticTransmissionFillerGasket ?? '',
      automaticTransmissionOilPanGasket2:
        client.clientCar?.automaticTransmissionOilPanGasket2 ?? '',
      automaticTransmissionFilter2: client.clientCar?.automaticTransmissionFilter2 ?? '',
      transmissionDrainPlug: client.clientCar?.transmissionDrainPlug ?? '',
      transmissionDrainPlugGasket: client.clientCar?.transmissionDrainPlugGasket ?? '',

      suspensionBearing: client.clientCar?.suspensionBearing ?? '',

      frontPistonRodDusterOuter: client.clientCar?.frontPistonRodDusterOuter ?? '',
      frontPistonRodDusterInnerLeft: client.clientCar?.frontPistonRodDusterInnerLeft ?? '',
      frontPistonRodDusterInnerRight: client.clientCar?.frontPistonRodDusterInnerRight ?? '',

      rearPistonRodDusterOuter: client.clientCar?.rearPistonRodDusterOuter ?? '',
      rearPistonRodDusterInnerLeft: client.clientCar?.rearPistonRodDusterInnerLeft ?? '',
      rearPistonRodDusterInnerRight: client.clientCar?.rearPistonRodDusterInnerRight ?? '',

      automaticTransmissionTorqueConverterOilSeal:
        client.clientCar?.automaticTransmissionTorqueConverterOilSeal ?? '',
      gearboxPrimaryShaftOilSeal: client.clientCar?.gearboxPrimaryShaftOilSeal ?? '',
      gearboxRockerGland: client.clientCar?.gearboxRockerGland ?? '',
      leftDriveOilSeal: client.clientCar?.leftDriveOilSeal ?? '',
      rightDriveOilSeal: client.clientCar?.rightDriveOilSeal ?? '',

      clutchDisk: client.clientCar?.clutchDisk ?? '',
      clutchBasket: client.clientCar?.clutchBasket ?? '',
      releaseBearing: client.clientCar?.releaseBearing ?? '',
      clutchKit: client.clientCar?.clutchKit ?? '',

      clutchMasterCylinder: client.clientCar?.clutchMasterCylinder ?? '',
      clutchSlaveCylinder: client.clientCar?.clutchSlaveCylinder ?? '',

      clutchMasterCylinderKit: client.clientCar?.clutchMasterCylinderKit ?? '',
      clutchSlaveCylinderRepairKit: client.clientCar?.clutchSlaveCylinderRepairKit ?? '',

      waterPump: client.clientCar?.waterPump ?? '',
      thermostat: client.clientCar?.thermostat ?? '',
      radiator: client.clientCar?.radiator ?? '',
      heaterRadiator: client.clientCar?.heaterRadiator ?? '',
      airConditionerRadiator: client.clientCar?.airConditionerRadiator ?? '',
      upperPipe: client.clientCar?.upperPipe ?? '',
      lowerPipe: client.clientCar?.lowerPipe ?? '',
      radiatorCap: client.clientCar?.radiatorCap ?? '',
      expansionTankCap: client.clientCar?.expansionTankCap ?? '',

      // Электрика и Освещение
      oilSensor: client.clientCar?.oilSensor ?? '',
      ventilatorSensor: client.clientCar?.ventilatorSensor ?? '',
      dashboardTemperatureSensor: client.clientCar?.dashboardTemperatureSensor ?? '',
      airConditionerSensor: client.clientCar?.airConditionerSensor ?? '',
      reverseSensor: client.clientCar?.reverseSensor ?? '',
      washerMotor: client.clientCar?.washerMotor ?? '',
      handwheelCable: client.clientCar?.handwheelCable ?? '',

      brakeLightBulbs: client.clientCar?.brakeLightBulbs ?? '',
      parkingLightBulbsFront: client.clientCar?.parkingLightBulbsFront ?? '',
      parkingLightBulbsRear: client.clientCar?.parkingLightBulbsRear ?? '',
      sideSignalBulbs: client.clientCar?.sideSignalBulbs ?? '',
      reverseLightBulbs: client.clientCar?.reverseLightBulbs ?? '',
      mainHeadlightBulbs: client.clientCar?.mainHeadlightBulbs ?? '',
      fogLightBulbs: client.clientCar?.fogLightBulbs ?? '',

      sparkPlug: client.clientCar?.sparkPlug ?? '',
      ignitionCoil: client.clientCar?.ignitionCoil ?? '',
      ignitionWires: client.clientCar?.ignitionWires ?? '',

      timingCover: client.clientCar?.timingCover ?? '',
      slider: client.clientCar?.slider ?? '',

      lambdaProbe1: client.clientCar?.lambdaProbe1 ?? '',
      lambdaProbe2: client.clientCar?.lambdaProbe2 ?? '',

      frontAbsSensorLeft: client.clientCar?.frontAbsSensorLeft ?? '',
      frontAbsSensorRight: client.clientCar?.frontAbsSensorRight ?? '',
      rearAbsSensorLeft: client.clientCar?.rearAbsSensorLeft ?? '',
      rearAbsSensorRight: client.clientCar?.rearAbsSensorRight ?? '',

      // Кузов
      driversWiper: client.clientCar?.driversWiper ?? '',
      passengerWiper: client.clientCar?.passengerWiper ?? '',
      hoodShockAbsorbers: client.clientCar?.hoodShockAbsorbers ?? '',
    },
  })

  const onSubmit = async (data: TFormEditClientCarSchema) => {
    try {
      await updateClientCar(data)

      toast.success('Данные клиента обновлены 🚗', {
        icon: '✅',
      })

      //   router.push('/clients')
    } catch (error) {
      return toast.error('Ошибка при обновлении данных клиента', {
        icon: '❌',
      })
    }
  }

  return (
    <Container className='mt-5'>
      <div className='flex items-center justify-between mt-4'>
        <Title
          text={`Редактирование данных клиента | ${client.name}`}
          size='md'
          className='font-bold'
        />
        <BackButton route='/clients/' id={client.id} />
      </div>
      <FormProvider {...form}>
        <form className='grid gap-5 mt-10' onSubmit={form.handleSubmit(onSubmit)}>
          <Accordion type='single' collapsible className='w-full'>
            <AccordionItem value='main'>
              <AccordionTrigger className='text-lg font-extrabold'>
                Двигатель и Система выхлопа
              </AccordionTrigger>
              <AccordionContent>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                  <Accordion type='single' collapsible className='w-full'>
                    <AccordionItem value='engine'>
                      <AccordionTrigger>ГРМ</AccordionTrigger>
                      <AccordionContent>
                        <div className='border p-1 rounded-sm '>
                          <div className='flex justify-end'>
                            <Select value={engineType} onValueChange={handleEngineTypeChange}>
                              <SelectTrigger className='w-[180px] mb-1 right-0'>
                                <SelectValue placeholder='Выберите тип' />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value='belt'>Ремень</SelectItem>
                                <SelectItem value='chain'>Цепь</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          {engineType === 'belt' && (
                            <div className='border p-4 rounded-sm'>
                              <FormInput name='timingBelt' label='Ремень ГРМ' />
                              <FormInput name='timingBeltTensioner' label='Натяжитель ремня ГРМ' />
                              <FormInput
                                name='timingBeltRoller'
                                label='Паразитный ролик ремня ГРМ'
                              />
                            </div>
                          )}

                          {engineType === 'chain' && (
                            <div className='border p-4 rounded-sm'>
                              <FormInput name='timingChainLong' label='Цепь ГРМ' />
                              <FormInput name='timingChainShort' label='Короткая цепь' />
                              <FormInput name='chainTensioner1' label='Гидронатяжитель цепи 1' />
                              <FormInput name='chainTensioner2' label='Гидронатяжитель цепи 2' />
                              <FormInput name='chainTensioner3' label='Башмак' />
                              <FormInput name='chainKit' label='Набор цепей' />
                            </div>
                          )}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>

                  <Accordion type='single' collapsible className='w-full'>
                    <AccordionItem value='piston'>
                      <AccordionTrigger>Двигатель и поршневая</AccordionTrigger>
                      <AccordionContent>
                        <div className='border p-4 rounded-sm'>
                          <h2 className='text-lg font-semibold mb-2'>Поршни и Клапана</h2>
                          <FormInput name='pistons' label='Поршня' />
                          <FormInput name='pistonsRings' label='Поршневые кольца' />
                          <FormInput name='hydrocompensators' label='Гидрокомпенсаторы' />
                          <FormInput name='valveIn' label='Клапана впуск' />
                          <FormInput name='valveEx' label='Клапана выпуск' />
                          <FormInput name='valveGuidesIn' label='Направляющие клапана впуск' />
                          <FormInput name='valveGuidesEx' label='Направляющие клапана выпуск' />
                          <FormInput name='bearingConnectingRod' label='Вкладыш коренной' />
                          <FormInput name='bearingCamshaft' label='Вкладыш шатуна' />
                          <FormInput
                            name='crankshaftCamberRings'
                            label='Полукольца разбега коленвала'
                          />
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>

                  <Accordion type='single' collapsible className='w-full'>
                    <AccordionItem value='beltGenerator'>
                      <AccordionTrigger> Ремни приводные, ролики</AccordionTrigger>
                      <AccordionContent>
                        <div className='border p-4 rounded-sm'>
                          <FormInput name='generatorBelt' label='Ремень генератора' />
                          <FormInput name='powerSteeringBelt' label='Ремень гидроусилителя' />
                          <FormInput name='airConditionerBelt' label='Ремень кондиционера' />
                          <FormInput name='tensionToller' label='Натяжитель ремня клинового' />
                          <FormInput
                            name='bypassRoller1'
                            label='Обводной ролик ремня клинового 1'
                          />
                          <FormInput
                            name='bypassRoller2'
                            label='Обводной ролик ремня клинового 2'
                          />
                          <FormInput
                            name='generatorOverrunningClutch'
                            label='Обгонная муфта генератора'
                          />
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>

                  <Accordion type='single' collapsible className='w-full'>
                    <AccordionItem value='pgb'>
                      <AccordionTrigger>ПГБ и прокладки</AccordionTrigger>
                      <AccordionContent>
                        <div className='border p-4 rounded-sm'>
                          <FormInput name='engineGasketKit' label='Набор прокладок двигателя' />
                          <FormInput name='headGasket' label='Прокладка головки блока' />
                          <FormInput
                            name='valveCoverGasketLeft'
                            label='Прокладка клапанной крышки левая'
                          />
                          <FormInput
                            name='valveCoverGasketRight'
                            label='Прокладка клапанной крышки правая'
                          />
                          <FormInput name='valveCoverGasket' label='Прокладка клапанной крышки' />
                          <FormInput
                            name='intakeManifoldGasket'
                            label='Прокладка впускного коллектора'
                          />
                          <FormInput
                            name='exhaustManifoldGasket'
                            label='Прокладка выпускного коллектора'
                          />
                          <FormInput name='exhaustPipeGasket1' label='Прокладка выпускной трубы' />
                          <FormInput
                            name='exhaustPipeGasket2'
                            label='Прокладка выпускной трубы до катализатора'
                          />
                          <FormInput
                            name='exhaustPipeGasket3'
                            label='Прокладка выпускной трубы после катализатора'
                          />
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>

                  <Accordion type='single' collapsible className='w-full'>
                    <AccordionItem value='engineCushion'>
                      <AccordionTrigger>Подушки двигателя</AccordionTrigger>
                      <AccordionContent>
                        <div className='border p-4 rounded-sm'>
                          <FormInput
                            name='frontLeftEngineCushion'
                            label='Подушка двигателя передняя левая'
                          />
                          <FormInput
                            name='frontRightEngineCushion'
                            label='Подушка двигателя передняя правая'
                          />
                          <FormInput name='engineCushionLeft' label='Подушка двигателя левая' />
                          <FormInput name='engineCushionRear' label='Подушка двигателя задняя' />
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>

                  <Accordion type='single' collapsible className='w-full'>
                    <AccordionItem value='engineOilSeals'>
                      <AccordionTrigger>Сальники двигателя</AccordionTrigger>
                      <AccordionContent>
                        <div className='border p-4 rounded-sm'>
                          <FormInput
                            name='frontCrankshaftOilSeal'
                            label='Сальник передний коленвала'
                          />
                          <FormInput
                            name='rearCrankshaftOilSeal'
                            label='Сальник задний коленвала'
                          />
                          <FormInput name='camshaftOilSeal' label='Сальник распредвала' />
                          <FormInput name='oilPumpPacking' label='Сальник маслонасоса' />
                          <FormInput name='intakeOilCaps' label='Маслосъемные впускные' />
                          <FormInput name='exhaustOilCaps' label='Маслосъемные выпускные' />
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>

                  <Accordion type='single' collapsible className='w-full'>
                    <AccordionItem value='supplySystem'>
                      <AccordionTrigger>Система подачи воздуха</AccordionTrigger>
                      <AccordionContent>
                        <div className='border p-4 rounded-sm'>
                          <FormInput name='airDuctCorrugation' label='Гофра воздуховода' />
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>

                  <Accordion type='single' collapsible className='w-full'>
                    <AccordionItem value='filters'>
                      <AccordionTrigger>Фильтра</AccordionTrigger>
                      <AccordionContent>
                        <div className='border p-4 rounded-sm'>
                          <FormInput name='oilFilter' label='Масляный фильтр' />
                          <FormInput name='airFilter' label='Воздушный фильтр' />
                          <FormInput name='fuelFilter' label='Топливный фильтр' />
                          <FormInput name='cabinFilter' label='Фильтр салона' />
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type='single' collapsible className='w-full'>
            <AccordionItem value='suspensionSteering'>
              <AccordionTrigger className='text-lg font-extrabold'>
                Подвеска и Рулевое
              </AccordionTrigger>
              <AccordionContent>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                  <Accordion type='single' collapsible className='w-full'>
                    <AccordionItem value='absorbers'>
                      <AccordionTrigger>Амортизаторы</AccordionTrigger>
                      <AccordionContent>
                        <div className='border p-4 rounded-sm'>
                          <FormInput
                            name='frontLeftShockAbsorber'
                            label='Амортизатор передний левый'
                          />
                          <FormInput
                            name='frontRightShockAbsorber'
                            label='Амортизатор передний правый'
                          />
                          <FormInput
                            name='rearLeftShockAbsorber'
                            label='Амортизатор задний левый'
                          />
                          <FormInput
                            name='rearRightShockAbsorber'
                            label='Амортизатор задний правый'
                          />
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>

                  <Accordion type='single' collapsible className='w-full'>
                    <AccordionItem value='wheelStuds'>
                      <AccordionTrigger>Гайки, шпильки колесные</AccordionTrigger>
                      <AccordionContent>
                        <div className='border p-4 rounded-sm'>
                          <FormInput name='wheelStud' label='Шпилька колесная' />
                          <FormInput name='wheelNut' label='Гайка колесная' />
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>

                  <Accordion type='single' collapsible className='w-full'>
                    <AccordionItem value='bumpers'>
                      <AccordionTrigger>Опоры стойки, пыльники, отбойники</AccordionTrigger>
                      <AccordionContent>
                        <div className='border p-4 rounded-sm'>
                          <FormInput
                            name='leftFrontStrutSupport'
                            label='Передняя опора стойки левая'
                          />
                          <FormInput
                            name='rightFrontStrutSupport'
                            label='Передняя опора стойки правая'
                          />
                          <FormInput
                            name='leftRearStrutSupport'
                            label='Задняя опора стойки левая'
                          />
                          <FormInput
                            name='rightRearStrutSupport'
                            label='Задняя опора стойки правая'
                          />
                          <FormInput name='frontSupportBearing' label='Опорный подшипник' />
                          <FormInput
                            name='frontLeftStrutDuster'
                            label='Пыльник стойки передней левой'
                          />
                          <FormInput
                            name='frontRightStrutDuster'
                            label='Пыльник стойки передней правой'
                          />
                          <FormInput
                            name='rearLeftStrutDuster'
                            label='Пыльник стойки задней левой'
                          />
                          <FormInput
                            name='rearRightStrutDuster'
                            label='Пыльник стойки задней правой'
                          />
                          <FormInput name='frontStrutBumper' label='Отбойник передней стойки' />
                          <FormInput name='rearStrutBumper' label='Отбойник задней стойки' />
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>

                  <Accordion type='single' collapsible className='w-full'>
                    <AccordionItem value='hub'>
                      <AccordionTrigger>Подшипники ступиц</AccordionTrigger>
                      <AccordionContent>
                        <div className='border p-4 rounded-sm'>
                          <FormInput
                            name='frontLeftHubBearing'
                            label='Подшипник передней левой ступицы'
                          />
                          <FormInput
                            name='frontRightHubBearing'
                            label='Подшипник передней правой ступицы'
                          />
                          <FormInput
                            name='rearLeftHubBearing'
                            label='Подшипник задней левой ступицы'
                          />
                          <FormInput
                            name='rearRightHubBearing'
                            label='Подшипник задней правой ступицы'
                          />
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>

                  <Accordion type='single' collapsible className='w-full'>
                    <AccordionItem value='powerSteering'>
                      <AccordionTrigger>Рулевая рейка и ГУР</AccordionTrigger>
                      <AccordionContent>
                        <div className='border p-4 rounded-sm'>
                          <FormInput name='hydraulicPowerSteeringKit' label='Ремкомплект ГУР' />
                          <FormInput
                            name='railSealsAndGaskets'
                            label='Сальники и прокладки рейки'
                          />
                          <FormInput
                            name='steeringRackDustCoverLeft'
                            label='Пыльник рулевой рейки левый'
                          />
                          <FormInput
                            name='steeringRackDustCoverRight'
                            label='Пыльник рулевой рейки правый'
                          />
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>

                  <Accordion type='single' collapsible className='w-full'>
                    <AccordionItem value='arm'>
                      <AccordionTrigger>Рычаги</AccordionTrigger>
                      <AccordionContent>
                        <div className='border p-4 rounded-sm'>
                          <FormInput name='frontLowerLeftArm' label='Передний нижний левый рычаг' />
                          <FormInput
                            name='frontLowerRightArm'
                            label='Передний нижний правый рычаг'
                          />
                          <FormInput
                            name='frontUpperLeftArm'
                            label='Передний верхний левый рычаг'
                          />
                          <FormInput
                            name='frontUpperRightArm'
                            label='Передний верхний правый рычаг'
                          />
                          <FormInput
                            name='rearLeftLongitudinalArm'
                            label='Задний левый продольный рычаг'
                          />
                          <FormInput
                            name='rearRightLongitudinalArm'
                            label='Задний правый продольный рычаг'
                          />
                          <FormInput
                            name='rearLeftTransverseArm1'
                            label='Задний левый поперечный рычаг 1'
                          />
                          <FormInput
                            name='rearRightTransverseArm1'
                            label='Задний правый поперечный рычаг 1'
                          />
                          <FormInput
                            name='rearLeftTransverseArm2'
                            label='Задний левый поперечный рычаг 2'
                          />
                          <FormInput
                            name='rearRightTransverseArm2'
                            label='Задний правый поперечный рычаг 2'
                          />
                          <FormInput name='rearCrescentArm' label='Задний левый полумесяц рычаг' />
                          <FormInput
                            name='rearUpperShortArm'
                            label='Задний верхний короткий рычаг'
                          />
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>

                  <Accordion type='single' collapsible className='w-full'>
                    <AccordionItem value='sanent'>
                      <AccordionTrigger>Сайленблоки</AccordionTrigger>
                      <AccordionContent>
                        <div className='border p-4 rounded-sm'>
                          <FormInput
                            name='frontLowerControlArmFrontSilentBlock'
                            label='Сайлентблок переднего нижнего рычага передний'
                          />
                          <FormInput
                            name='frontLowerControlArmRearSilentBlock'
                            label='Сайлентблок переднего нижнего рычага задний'
                          />
                          <FormInput
                            name='frontUpperControlArmFrontSilentBlock'
                            label='Сайлентблок переднего верхнего рычага передний'
                          />
                          <FormInput
                            name='frontUpperControlArmRearSilentBlock'
                            label='Сайлентблок переднего верхнего рычага задний'
                          />
                          <FormInput
                            name='longitudinalArmSilentBlockLeft'
                            label='Cайлентблок продольных рычагов левый'
                          />
                          <FormInput
                            name='longitudinalArmSilentBlockRight'
                            label='Cайлентблок продольных рычагов правый'
                          />
                          <FormInput
                            name='longitudinalHubArmSilentBlockLeft'
                            label='Cайлентблок продольных рычагов ступичный'
                          />
                          <FormInput
                            name='bodyLeftCrossArmSilentBlock'
                            label='Cайлентблок поперечного левого рычага кузовной'
                          />
                          <FormInput
                            name='hubLeftCrossArmSilentBlock'
                            label='Cайлентблок поперечного левого рычага ступичный'
                          />
                          <FormInput
                            name='bodyRightCrossArmSilentBlock'
                            label='Cайлентблок поперечного правого рычага кузовной'
                          />
                          <FormInput
                            name='hubRightCrossArmSilentBlock'
                            label='Cайлентблок поперечного правого рычага ступичный'
                          />
                          <FormInput
                            name='camberArmSilentBlock1'
                            label='Cайлентблок развального рычага Развальный'
                          />
                          <FormInput
                            name='camberArmSilentBlock2'
                            label='Cайлентблок развального рычага'
                          />
                          <FormInput
                            name='frontSubframeSilentBlock'
                            label='Cайлентблок подрамника передний'
                          />
                          <FormInput
                            name='rearSubframeSilentBlock'
                            label='Cайлентблок подрамника задний'
                          />
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>

                  <Accordion type='single' collapsible className='w-full'>
                    <AccordionItem value='stabilizer'>
                      <AccordionTrigger>Стабилизатор</AccordionTrigger>
                      <AccordionContent>
                        <div className='border p-4 rounded-sm'>
                          <FormInput
                            name='frontStabilizerSushingsLeft'
                            label='Втулки стабилизатора передняя левая'
                          />
                          <FormInput
                            name='frontStabilizerSushingsRight'
                            label='Втулки стабилизатора передняя правая'
                          />
                          <FormInput
                            name='rearStabilizerSushings'
                            label='Втулки стабилизатора задняя'
                          />
                          <FormInput
                            name='frontLeftStabilizerBar'
                            label='Стойка стабилизатора передняя левая'
                          />
                          <FormInput
                            name='frontRightStabilizerBar'
                            label='Стойка стабилизатора передняя правая'
                          />
                          <FormInput
                            name='rearLeftStabilizerBar'
                            label='Стойка стабилизатора задняя левая'
                          />
                          <FormInput
                            name='rearRightStabilizerBar'
                            label='Стойка стабилизатора задняя правая'
                          />
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>

                  <Accordion type='single' collapsible className='w-full'>
                    <AccordionItem value='link'>
                      <AccordionTrigger>Тяги и наконечники</AccordionTrigger>
                      <AccordionContent>
                        <div className='border p-4 rounded-sm'>
                          <FormInput name='steeringLinkLeft' label='Рулевая тяга левая' />
                          <FormInput name='steeringLinkRight' label='Рулевая тяга правая' />
                          <FormInput
                            name='outerLeftSteeringKnuckle'
                            label='Рулевой наконечник наружный левый'
                          />
                          <FormInput
                            name='outerRightSteeringKnuckle'
                            label='Рулевой наконечник наружный правый'
                          />
                          <FormInput
                            name='leftInnerSteeringKnuckle'
                            label='Рулевой наконечник внутренний левый'
                          />
                          <FormInput
                            name='leftRightSteeringKnuckle'
                            label='Рулевой наконечник внутренний правый'
                          />
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>

                  <Accordion type='single' collapsible className='w-full'>
                    <AccordionItem value='ball'>
                      <AccordionTrigger>Шаровые опоры</AccordionTrigger>
                      <AccordionContent>
                        <div className='border p-4 rounded-sm'>
                          <FormInput name='lowerLeftBallJoint' label='Шаровая нижняя левая' />
                          <FormInput name='lowerRightBallJoint' label='Шаровая нижняя правая' />
                          <FormInput name='upperLeftBallJoint' label='Шаровая верхняя левая' />
                          <FormInput name='upperRightBallJoint' label='Шаровая верхняя правая' />
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type='single' collapsible className='w-full'>
            <AccordionItem value='suspensionSteering'>
              <AccordionTrigger className='text-lg font-extrabold'>
                Тормозная система
              </AccordionTrigger>
              <AccordionContent>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                  <Accordion type='single' collapsible className='w-full'>
                    <AccordionItem value='cable'>
                      <AccordionTrigger>Тормозной трос</AccordionTrigger>
                      <AccordionContent>
                        <div className='border p-4 rounded-sm'>
                          <FormInput name='frontHandbrakeCable' label='Трос ручника передний' />
                          <FormInput name='rearLeftCable' label='Трос задний левый' />
                          <FormInput name='reaRightCable' label='Трос задний правый' />
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>

                  <Accordion type='single' collapsible className='w-full'>
                    <AccordionItem value='disc'>
                      <AccordionTrigger>Тормозные диски и барабаны</AccordionTrigger>
                      <AccordionContent>
                        <div className='border p-4 rounded-sm'>
                          <FormInput
                            name='frontBrakeDiskLeft'
                            label='Передний тормозной диск левый'
                          />
                          <FormInput
                            name='frontBrakeDiskRight'
                            label='Передний тормозной диск правый'
                          />
                          <FormInput name='rearBrakeDisk' label='Задний тормозной диск' />
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>

                  <Accordion type='single' collapsible className='w-full'>
                    <AccordionItem value='brake'>
                      <AccordionTrigger>Тормозные колодки</AccordionTrigger>
                      <AccordionContent>
                        <div className='border p-4 rounded-sm'>
                          <FormInput name='frontBrake' label='Передние колодки' />
                          <FormInput name='rearBrake' label='Задние колодки' />
                          <FormInput name='handbrakeBrakePads' label='Колодки ручника' />
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>

                  <Accordion type='single' collapsible className='w-full'>
                    <AccordionItem value='discSup'>
                      <AccordionTrigger>Тормозной механизм переднего колеса</AccordionTrigger>
                      <AccordionContent>
                        <div className='border p-4 rounded-sm'>
                          <FormInput
                            name='setOfFrontGuideRailsWithDustCovers'
                            label='Комплект передних направляющих с пыльниками'
                          />
                          <FormInput
                            name='frontCaliperRepairKit'
                            label='Ремкомплект переднего суппорта'
                          />
                          <FormInput
                            name='frontCaliperRepairKitWithPiston'
                            label='Ремкомплект переднего суппорта с поршнями'
                          />
                          <FormInput
                            name='installationKitForFrontPads'
                            label='Установочный комплект на передние колодки'
                          />
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>

                  <Accordion type='single' collapsible className='w-full'>
                    <AccordionItem value='discSupR'>
                      <AccordionTrigger>Тормозной механизм заднего колеса</AccordionTrigger>
                      <AccordionContent>
                        <div className='border p-4 rounded-sm'>
                          <FormInput
                            name='setOfRearGuideRailsWithDustCovers'
                            label='Комплект задних направляющих с пыльниками'
                          />

                          <FormInput
                            name='installationKitForRearPads'
                            label='Установочный комплект на задние колодки'
                          />
                          <FormInput
                            name='installationKitForHandbrakeBrakePads'
                            label='Установочный комплект на барабаны'
                          />

                          <FormInput
                            name='rearCaliperRepairKit'
                            label='Ремкомплект заднего суппорта'
                          />
                          <FormInput
                            name='rearCaliperRepairKitWithPiston'
                            label='Ремкомплект заднего суппорта с поршнями'
                          />
                          <FormInput
                            name='drumBrakeCylinderLeft'
                            label='Тормозной цилиндр барабанов левый'
                          />
                          <FormInput
                            name='drumBrakeCylinderRight'
                            label='Тормозной цилиндр барабанов правый'
                          />
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>

                  <Accordion type='single' collapsible className='w-full'>
                    <AccordionItem value='cylinder'>
                      <AccordionTrigger>Тормозные цилиндры</AccordionTrigger>
                      <AccordionContent>
                        <div className='border p-4 rounded-sm'>
                          <FormInput name='brakeMasterCylinder' label='Тормозной цилиндр главный' />
                          <FormInput name='slaveBrakeCylinder' label='Тормозной цилиндр рабочий' />
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>

                  <Accordion type='single' collapsible className='w-full'>
                    <AccordionItem value='brakeTube'>
                      <AccordionTrigger>Тормозные шланги</AccordionTrigger>
                      <AccordionContent>
                        <div className='border p-4 rounded-sm'>
                          <FormInput
                            name='frontLeftBrakeHose'
                            label='Передний левый тормозной шланг'
                          />
                          <FormInput
                            name='frontRightBrakeHose'
                            label='Передний правый тормозной шланг'
                          />
                          <FormInput
                            name='rearLeftBrakeHose'
                            label='Задний левый тормозной шланг'
                          />
                          <FormInput
                            name='rearRightBrakeHose'
                            label='Задний правый тормозной шланг'
                          />
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type='single' collapsible className='w-full'>
            <AccordionItem value='suspensionSteering'>
              <AccordionTrigger className='text-lg font-extrabold'>
                Коробка передач и Привод
              </AccordionTrigger>
              <AccordionContent>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                  <Accordion type='single' collapsible className='w-full'>
                    <AccordionItem value='drives'>
                      <AccordionTrigger>ШРУСЫ и привода</AccordionTrigger>
                      <AccordionContent>
                        <div className='border p-4 rounded-sm'>
                          <FormInput
                            name='frontLeftOuterBallJoint'
                            label='ШРУС передний наружный левый'
                          />
                          <FormInput
                            name='frontRightOuterBallJoint'
                            label='ШРУС передний наружный правый'
                          />
                          <FormInput
                            name='frontLeftInnerBallJoint'
                            label='ШРУС передний внутренний левый'
                          />
                          <FormInput
                            name='frontRightInnerBallJoint'
                            label='ШРУС передний внутренний правый'
                          />
                          <FormInput name='frontLeftHandDrive' label='Приводной вал левый' />
                          <FormInput name='frontRightHandDrive' label='Приводной вал правый' />
                          <FormInput name='driveShaft' label='Вал привода' />
                          <FormInput
                            name='rearLeftOuterBallJoint'
                            label='ШРУС задний наружный левый'
                          />
                          <FormInput
                            name='rearRightOuterBallJoint'
                            label='ШРУС задний наружный правый'
                          />
                          <FormInput
                            name='rearLeftInnerBallJoint'
                            label='ШРУС задний внутренний левый'
                          />
                          <FormInput
                            name='rearRightInnerBallJoint'
                            label='ШРУС задний внутренний правый'
                          />
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                  <Accordion type='single' collapsible className='w-full'>
                    <AccordionItem value='gearbox'>
                      <AccordionTrigger>Коробка передач</AccordionTrigger>
                      <AccordionContent>
                        <div className='border p-4 rounded-sm'>
                          <FormInput
                            name='automaticTransmissionOilPanGasket'
                            label='Прокладка поддона АКПП'
                          />
                          <FormInput name='automaticTransmissionFilter' label='Фильтр АКПП' />
                          <FormInput
                            name='automaticTransmissionFillerGasket'
                            label='Прокладка фильтра АКПП'
                          />
                          <FormInput
                            name='automaticTransmissionOilPanGasket2'
                            label='Прокладка маленького фильтра АКПП'
                          />
                          <FormInput
                            name='automaticTransmissionFilter2'
                            label='Фильтр маленький АКПП'
                          />
                          <FormInput name='transmissionDrainPlug' label='Сливная пробка АКПП' />
                          <FormInput
                            name='transmissionDrainPlugGasket'
                            label='Прокладка сливной пробки АКПП'
                          />
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                  <Accordion type='single' collapsible className='w-full'>
                    <AccordionItem value='hubs'>
                      <AccordionTrigger>Подвесной подшипник</AccordionTrigger>
                      <AccordionContent>
                        <div className='border p-4 rounded-sm'>
                          <FormInput name='suspensionBearing' label='Подвесной подшипник' />
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                  <Accordion type='single' collapsible className='w-full'>
                    <AccordionItem value='boot'>
                      <AccordionTrigger>Пыльники ШРУСов</AccordionTrigger>
                      <AccordionContent>
                        <div className='border p-4 rounded-sm'>
                          <FormInput
                            name='frontPistonRodDusterOuter'
                            label='Передний пыльник ШРУСа наружный'
                          />
                          <FormInput
                            name='frontPistonRodDusterInnerLeft'
                            label='Передний пыльник ШРУСа внутренний левый'
                          />
                          <FormInput
                            name='frontPistonRodDusterInnerRight'
                            label='Передний пыльник ШРУСа внутренний правый'
                          />
                          <FormInput
                            name='rearPistonRodDusterOuter'
                            label='Задний пыльник ШРУСа наружный'
                          />
                          <FormInput
                            name='rearPistonRodDusterInnerLeft'
                            label='Задний пыльник ШРУСа внутренний левый'
                          />
                          <FormInput
                            name='rearPistonRodDusterInnerRight'
                            label='Задний пыльник ШРУСа внутренний правый'
                          />
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                  <Accordion type='single' collapsible className='w-full'>
                    <AccordionItem value='brakeTube'>
                      <AccordionTrigger>gearSeal</AccordionTrigger>
                      <AccordionContent>
                        <div className='border p-4 rounded-sm'>
                          <FormInput
                            name='automaticTransmissionTorqueConverterOilSeal'
                            label='Сальник гидротрансформатора АКПП'
                          />
                          <FormInput
                            name='gearboxPrimaryShaftOilSeal'
                            label='Сальник первичного вала КПП'
                          />
                          <FormInput name='gearboxRockerGland' label='Сальник кулисы КПП' />
                          <FormInput name='leftDriveOilSeal' label='Сальник левого привода' />
                          <FormInput name='rightDriveOilSeal' label='Сальник правого привода' />
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>

                  <Accordion type='single' collapsible className='w-full'>
                    <AccordionItem value='clutch'>
                      <AccordionTrigger>Сцепление</AccordionTrigger>
                      <AccordionContent>
                        <div className='border p-4 rounded-sm'>
                          <FormInput name='clutchDisk' label='Диск сцепления' />
                          <FormInput name='clutchBasket' label='Корзина сцепления' />
                          <FormInput name='releaseBearing' label='Выжимной подшипник' />
                          <FormInput name='clutchKit' label='Комплект сцепления' />
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>

                  <Accordion type='single' collapsible className='w-full'>
                    <AccordionItem value='clutchCylinders'>
                      <AccordionTrigger>Цилиндры сцепления</AccordionTrigger>
                      <AccordionContent>
                        <FormInput name='clutchMasterCylinder' label='Главный цилиндр сцепления' />
                        <FormInput name='clutchSlaveCylinder' label='Рабочий цилиндр сцепления' />
                        <FormInput
                          name='clutchMasterCylinderKit'
                          label='Ремкомплект главного цилиндра сцепления'
                        />
                        <FormInput
                          name='clutchSlaveCylinderRepairKit'
                          label='Ремкомплект рабочего цилиндра сцепления'
                        />
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <Accordion type='single' collapsible className='w-full'>
            <AccordionItem value='suspensionSteering'>
              <AccordionTrigger className='text-lg font-extrabold'>
                Охлаждение и Отопление
              </AccordionTrigger>
              <AccordionContent>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                  <Accordion type='single' collapsible className='w-full'>
                    <AccordionItem value='cooling'>
                      <AccordionTrigger>Система охлаждения</AccordionTrigger>
                      <AccordionContent>
                        <div className='border p-4 rounded-sm'>
                          <FormInput name='waterPump' label='Водяная помпа' />
                          <FormInput name='thermostat' label='Термостат' />
                          <FormInput name='radiator' label='Радиатор' />
                          <FormInput name='heaterRadiator' label='Радиатор отопителя' />
                          <FormInput name='airConditionerRadiator' label='Радиатор кондиционера' />
                          <FormInput name='upperPipe' label='Патрубок верхний' />
                          <FormInput name='lowerPipe' label='Патрубок нижний' />
                          <FormInput name='radiatorCap' label='Крышка радиатора' />
                          <FormInput name='expansionTankCap' label='Крышка расширительного бачка' />
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <Accordion type='single' collapsible className='w-full'>
            <AccordionItem value='suspensionSteering'>
              <AccordionTrigger className='text-lg font-extrabold'>
                Электрика и Освещение
              </AccordionTrigger>
              <AccordionContent>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                  <Accordion type='single' collapsible className='w-full'>
                    <AccordionItem value='brakeTube'>
                      <AccordionTrigger>Датчики</AccordionTrigger>
                      <AccordionContent>
                        <div className='border p-4 rounded-sm'>
                          <FormInput name='oilSensor' label='Масляный датчик' />
                          <FormInput name='ventilatorSensor' label='Масляный вентилятора' />
                          <FormInput
                            name='dashboardTemperatureSensor'
                            label='Датчик температуры приборной панели'
                          />
                          <FormInput name='airConditionerSensor' label='Датчик кондиционера' />
                          <FormInput name='reverseSensor' label='Датчик заднего хода' />
                          <FormInput name='washerMotor' label='Моторчик омывателя' />
                          <FormInput name='handwheelCable' label='Подрулевой шлейф' />
                          <FormInput name='brakeLightBulbs' label='Лампочки стопов' />
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>

                  <Accordion type='single' collapsible className='w-full'>
                    <AccordionItem value='brakeTube'>
                      <AccordionTrigger>Лямбда и АБС</AccordionTrigger>
                      <AccordionContent>
                        <div className='border p-4 rounded-sm'>
                          <FormInput name='lambdaProbe1' label='лямбда зонд1' />
                          <FormInput name='lambdaProbe2' label='лямбда зонд2' />
                          <FormInput name='frontAbsSensorLeft' label='Датчик АБС передний левый' />
                          <FormInput
                            name='frontAbsSensorRight'
                            label='Датчик АБС передний правый'
                          />
                          <FormInput name='rearAbsSensorLeft' label='Датчик АБС задний левый' />
                          <FormInput name='rearAbsSensorRight' label='Датчик АБС задний правый' />
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>

                  <Accordion type='single' collapsible className='w-full'>
                    <AccordionItem value='brakeTube'>
                      <AccordionTrigger>Свечи, Катушки и Провода</AccordionTrigger>
                      <AccordionContent>
                        <div className='border p-4 rounded-sm'>
                          <FormInput name='sparkPlug' label='Свеча зажигания' />
                          <FormInput name='ignitionCoil' label='Катушка зажигания' />
                          <FormInput name='ignitionWires' label='Провода зажигания' />
                          <FormInput name='timingCover' label='Крышка трамблера' />
                          <FormInput name='slider' label='Бегунок' />
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>

                  <Accordion type='single' collapsible className='w-full'>
                    <AccordionItem value='brakeTube'>
                      <AccordionTrigger>Лампочки</AccordionTrigger>
                      <AccordionContent>
                        <div className='border p-4 rounded-sm'>
                          <FormInput
                            name='parkingLightBulbsFront'
                            label='Лампочки габарит передние'
                          />
                          <FormInput name='parkingLightBulbsRear' label='Лампочки габарит задние' />
                          <FormInput name='sideSignalBulbs' label='Лампочки поворотов' />
                          <FormInput name='reverseLightBulbs' label='Лампочки заднего хода' />
                          <FormInput name='mainHeadlightBulbs' label='Лампочки основной фары' />
                          <FormInput name='fogLightBulbs' label='Лампочки противотуманных фар' />
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                  <Accordion type='single' collapsible className='w-full'>
                    <AccordionItem value='brakeTube'>
                      <AccordionTrigger>Кузов</AccordionTrigger>
                      <AccordionContent>
                        <div className='border p-4 rounded-sm'>
                          <FormInput name='driversWiper' label='Дворник водителя' />
                          <FormInput name='passengerWiper' label='Дворник пассажира' />
                          <FormInput name='hoodShockAbsorbers' label='Амортизаторы капота' />
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <Button
            disabled={form.formState.isSubmitting}
            className='text-base mt-10 mb-10 col-span-full'
            type='submit'
          >
            Сохранить
          </Button>
        </form>
      </FormProvider>
    </Container>
  )
}
