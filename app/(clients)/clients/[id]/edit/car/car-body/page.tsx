import { prisma } from '@/prisma/prisma-client'
import { notFound } from 'next/navigation'
import { CarBodyForm } from './car-body-form'

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
    driversWiper: clientCar.driversWiper ?? '',
    passengerWiper: clientCar.passengerWiper ?? '',
    hoodShockAbsorbers: clientCar.hoodShockAbsorbers ?? '',
  }

  return <CarBodyForm clientCar={engineFormData} />
}
