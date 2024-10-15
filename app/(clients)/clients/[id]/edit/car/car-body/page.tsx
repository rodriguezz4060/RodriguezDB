import { prisma } from '@/prisma/prisma-client'
import { notFound } from 'next/navigation'
import { CarBodyForm } from './car-body-form'

export default async function ClientPage({ params: { id } }: { params: { id: string } }) {
  const client = await prisma.clients.findFirst({
    where: { id: Number(id) },
    include: {
      clientCar: {
        select: {
          id: true,
          driversWiper: true,
          passengerWiper: true,
          hoodShockAbsorbers: true,
        },
      },
    },
  })

  if (!client || !client.clientCar) {
    return notFound()
  }

  return <CarBodyForm clientCar={client.clientCar} />
}
