import { prisma } from '@/prisma/prisma-client'
import { notFound } from 'next/navigation'
import { CoolingForm } from './cooling-form'

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

    waterPump: clientCar.waterPump ?? '',
    thermostat: clientCar.thermostat ?? '',
    radiator: clientCar.radiator ?? '',
    heaterRadiator: clientCar.heaterRadiator ?? '',
    airConditionerRadiator: clientCar.airConditionerRadiator ?? '',
    upperPipe: clientCar.upperPipe ?? '',
    lowerPipe: clientCar.lowerPipe ?? '',
    radiatorCap: clientCar.radiatorCap ?? '',
    expansionTankCap: clientCar.expansionTankCap ?? '',
  }

  return <CoolingForm clientCar={engineFormData} />
}
