import { prisma } from '@/prisma/prisma-client'
import { notFound } from 'next/navigation'
import { ElectricalForm } from './electrical-form'

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

    oilSensor: clientCar.oilSensor ?? '',
    ventilatorSensor: clientCar.ventilatorSensor ?? '',
    dashboardTemperatureSensor: clientCar.dashboardTemperatureSensor ?? '',
    airConditionerSensor: clientCar.airConditionerSensor ?? '',
    reverseSensor: clientCar.reverseSensor ?? '',
    washerMotor: clientCar.washerMotor ?? '',
    handwheelCable: clientCar.handwheelCable ?? '',

    brakeLightBulbs: clientCar.brakeLightBulbs ?? '',
    parkingLightBulbsFront: clientCar.parkingLightBulbsFront ?? '',
    parkingLightBulbsRear: clientCar.parkingLightBulbsRear ?? '',
    sideSignalBulbs: clientCar.sideSignalBulbs ?? '',
    reverseLightBulbs: clientCar.reverseLightBulbs ?? '',
    mainHeadlightBulbs: clientCar.mainHeadlightBulbs ?? '',
    fogLightBulbs: clientCar.fogLightBulbs ?? '',

    sparkPlug: clientCar.sparkPlug ?? '',
    ignitionCoil: clientCar.ignitionCoil ?? '',
    ignitionWires: clientCar.ignitionWires ?? '',

    timingCover: clientCar.timingCover ?? '',
    slider: clientCar.slider ?? '',

    lambdaProbe1: clientCar.lambdaProbe1 ?? '',
    lambdaProbe2: clientCar.lambdaProbe2 ?? '',

    frontAbsSensorLeft: clientCar.frontAbsSensorLeft ?? '',
    frontAbsSensorRight: clientCar.frontAbsSensorRight ?? '',
    rearAbsSensorLeft: clientCar.rearAbsSensorLeft ?? '',
    rearAbsSensorRight: clientCar.rearAbsSensorRight ?? '',
  }

  return <ElectricalForm clientCar={engineFormData} />
}
