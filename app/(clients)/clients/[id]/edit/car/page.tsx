import { prisma } from '@/prisma/prisma-client'
import { notFound } from 'next/navigation'
import { EngineForm } from './engine-form'

export default async function ClientPage({ params: { id } }: { params: { id: string } }) {
  const client = await prisma.clients.findFirst({
    where: { id: Number(id) },
    select: {
      clientCar: {
        select: {
          id: true,
          timingChainLong: true,
          timingChainShort: true,
          chainTensioner1: true,
          chainTensioner2: true,
          chainTensioner3: true,
          chainKit: true,
          timingBelt: true,
          timingBeltTensioner: true,
          timingBeltRoller: true,
          pistons: true,
          pistonsRings: true,
          hydrocompensators: true,
          valveIn: true,
          valveEx: true,
          valveGuidesIn: true,
          valveGuidesEx: true,
          bearingConnectingRod: true,
          bearingCamshaft: true,
          crankshaftCamberRings: true,
          generatorBelt: true,
          powerSteeringBelt: true,
          airConditionerBelt: true,
          tensionToller: true,
          bypassRoller1: true,
          bypassRoller2: true,
          generatorOverrunningClutch: true,
          engineGasketKit: true,
          headGasket: true,
          valveCoverGasketLeft: true,
          valveCoverGasketRight: true,
          valveCoverGasket: true,
          intakeManifoldGasket: true,
          exhaustManifoldGasket: true,
          exhaustPipeGasket1: true,
          exhaustPipeGasket2: true,
          exhaustPipeGasket3: true,
          frontLeftEngineCushion: true,
          frontRightEngineCushion: true,
          engineCushionLeft: true,
          engineCushionRear: true,
          frontCrankshaftOilSeal: true,
          rearCrankshaftOilSeal: true,
          camshaftOilSeal: true,
          oilPumpPacking: true,
          intakeOilCaps: true,
          exhaustOilCaps: true,
          airDuctCorrugation: true,
          oilFilter: true,
          airFilter: true,
          fuelFilter: true,
          cabinFilter: true,
        },
      },
    },
  })

  if (!client || !client.clientCar) {
    return notFound()
  }

  return <EngineForm clientCar={client.clientCar} />
}
