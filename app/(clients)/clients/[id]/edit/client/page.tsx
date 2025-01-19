import { prisma } from '@/prisma/prisma-client'

import { notFound } from 'next/navigation'
import { Client } from './client'

export default async function ClientPage({ params: { id } }: { params: { id: string } }) {
  const client = await prisma.clients.findFirst({
    where: { id: Number(id) },
    select: {
      id: true,
      name: true,
      lastName: true,
      VIN: true,
      tel: true,
      clientCar: {
        select: {
          gosNumber: true,
          models: true,
        },
      },
    },
  })

  if (!client || !client.clientCar) {
    return notFound()
  }

  return <Client clientProfile={client} />
}
