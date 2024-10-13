import { prisma } from '@/prisma/prisma-client'
import { EditClientCarPage } from '@/shared/components/shared'
import CarEditLayout from './layout'

import { notFound } from 'next/navigation'
import { EngineForm } from './engine-form'

export default async function ClientPage({ params: { id } }: { params: { id: string } }) {
  const client = await prisma.clients.findFirst({
    where: { id: Number(id) },
    include: {
      clientCar: true,
    },
  })

  if (!client) {
    return notFound()
  }

  return <EngineForm client={client} />
}
