import { prisma } from '@/prisma/prisma-client'
import { notFound } from 'next/navigation'
import { CoolingForm } from './cooling-form'

export default async function ClientPage({ params: { id } }: { params: { id: string } }) {
  const client = await prisma.clients.findFirst({
    where: { id: Number(id) },
    select: {
      clientCar: {
        select: {
          id: true,
          waterPump: true,
          thermostat: true,
          radiator: true,
          heaterRadiator: true,
          airConditionerRadiator: true,
          upperPipe: true,
          lowerPipe: true,
          radiatorCap: true,
          expansionTankCap: true,
        },
      },
    },
  })

  if (!client || !client.clientCar) {
    return notFound()
  }

  return <CoolingForm clientCar={client.clientCar} />
}
