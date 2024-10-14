import { prisma } from '@/prisma/prisma-client'
import { notFound } from 'next/navigation'
import { EngineForm } from './engine-form'

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
    timingChainLong: clientCar.timingChainLong ?? '',
    timingChainShort: clientCar.timingChainShort ?? '',
    chainTensioner1: clientCar.chainTensioner1 ?? '',
    chainTensioner2: clientCar.chainTensioner2 ?? '',
    chainTensioner3: clientCar.chainTensioner3 ?? '',
    chainKit: clientCar.chainKit ?? '',
    timingBelt: clientCar.timingBelt ?? '',
    timingBeltTensioner: clientCar.timingBeltTensioner ?? '',
    timingBeltRoller: clientCar.timingBeltRoller ?? '',
    pistons: clientCar.pistons ?? '',
    pistonsRings: clientCar.pistonsRings ?? '',
    hydrocompensators: clientCar.hydrocompensators ?? '',
    valveIn: clientCar.valveIn ?? '',
    valveEx: clientCar.valveEx ?? '',
    valveGuidesIn: clientCar.valveGuidesIn ?? '',
    valveGuidesEx: clientCar.valveGuidesEx ?? '',
    bearingConnectingRod: clientCar.bearingConnectingRod ?? '',
    bearingCamshaft: clientCar.bearingCamshaft ?? '',
    crankshaftCamberRings: clientCar.crankshaftCamberRings ?? '',
    generatorBelt: clientCar.generatorBelt ?? '',
    powerSteeringBelt: clientCar.powerSteeringBelt ?? '',
    airConditionerBelt: clientCar.airConditionerBelt ?? '',
    tensionToller: clientCar.tensionToller ?? '',
    bypassRoller1: clientCar.bypassRoller1 ?? '',
    bypassRoller2: clientCar.bypassRoller2 ?? '',
    generatorOverrunningClutch: clientCar.generatorOverrunningClutch ?? '',
    engineGasketKit: clientCar.engineGasketKit ?? '',
    headGasket: clientCar.headGasket ?? '',
    valveCoverGasketLeft: clientCar.valveCoverGasketLeft ?? '',
    valveCoverGasketRight: clientCar.valveCoverGasketRight ?? '',
    valveCoverGasket: clientCar.valveCoverGasket ?? '',
    intakeManifoldGasket: clientCar.intakeManifoldGasket ?? '',
    exhaustManifoldGasket: clientCar.exhaustManifoldGasket ?? '',
    exhaustPipeGasket1: clientCar.exhaustPipeGasket1 ?? '',
    exhaustPipeGasket2: clientCar.exhaustPipeGasket2 ?? '',
    exhaustPipeGasket3: clientCar.exhaustPipeGasket3 ?? '',
    frontLeftEngineCushion: clientCar.frontLeftEngineCushion ?? '',
    frontRightEngineCushion: clientCar.frontRightEngineCushion ?? '',
    engineCushionLeft: clientCar.engineCushionLeft ?? '',
    engineCushionRear: clientCar.engineCushionRear ?? '',
    frontCrankshaftOilSeal: clientCar.frontCrankshaftOilSeal ?? '',
    rearCrankshaftOilSeal: clientCar.rearCrankshaftOilSeal ?? '',
    camshaftOilSeal: clientCar.camshaftOilSeal ?? '',
    oilPumpPacking: clientCar.oilPumpPacking ?? '',
    intakeOilCaps: clientCar.intakeOilCaps ?? '',
    exhaustOilCaps: clientCar.exhaustOilCaps ?? '',
    airDuctCorrugation: clientCar.airDuctCorrugation ?? '',
    oilFilter: clientCar.oilFilter ?? '',
    airFilter: clientCar.airFilter ?? '',
    fuelFilter: clientCar.fuelFilter ?? '',
    cabinFilter: clientCar.cabinFilter ?? '',
  }

  return <EngineForm clientCar={engineFormData} />
}
