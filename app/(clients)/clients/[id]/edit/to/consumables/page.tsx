import { prisma } from '@/prisma/prisma-client'
import { ConsumablesForm } from './consumables-form'

import { notFound } from 'next/navigation'

export default async function ClientPage({ params: { id } }: { params: { id: string } }) {
  const client = await prisma.clients.findFirst({
    where: { id: Number(id) },
    select: {
      id: true,
      clientCar: {
        select: {
          id: true,
          frontBrake: true,
          rearBrake: true,
          handbrakeBrakePads: true,
          waterPump: true,
          thermostat: true,
          sparkPlug: true,
          driversWiper: true,
          passengerWiper: true,
          oilFilter: true,
          airFilter: true,
          fuelFilter: true,
          cabinFilter: true,
          automaticTransmissionOilPanGasket: true,
          automaticTransmissionFilter: true,
          automaticTransmissionFillerGasket: true,
          automaticTransmissionOilPanGasket2: true,
          automaticTransmissionFilter2: true,
          transmissionDrainPlug: true,
          transmissionDrainPlugGasket: true,
          ignitionCoil: true,
        },
      },
    },
  })

  if (!client || !client.clientCar) {
    return notFound()
  }

  return <ConsumablesForm clientCar={client.clientCar} />
}
