import { prisma } from '@/prisma/prisma-client'
import { notFound } from 'next/navigation'
import { ElectricalForm } from './electrical-form'

export default async function ClientPage({ params: { id } }: { params: { id: string } }) {
  const client = await prisma.clients.findFirst({
    where: { id: Number(id) },
    select: {
      clientCar: {
        select: {
          id: true,
          oilSensor: true,
          ventilatorSensor: true,
          dashboardTemperatureSensor: true,
          airConditionerSensor: true,
          reverseSensor: true,
          washerMotor: true,
          handwheelCable: true,
          brakeLightBulbs: true,
          parkingLightBulbsFront: true,
          parkingLightBulbsRear: true,
          sideSignalBulbs: true,
          reverseLightBulbs: true,
          mainHeadlightBulbs: true,
          fogLightBulbs: true,
          sparkPlug: true,
          ignitionCoil: true,
          ignitionWires: true,
          timingCover: true,
          slider: true,
          lambdaProbe1: true,
          lambdaProbe2: true,
          frontAbsSensorLeft: true,
          frontAbsSensorRight: true,
          rearAbsSensorLeft: true,
          rearAbsSensorRight: true,
        },
      },
    },
  })

  if (!client || !client.clientCar) {
    return notFound()
  }

  return <ElectricalForm clientCar={client.clientCar} />
}
