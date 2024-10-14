import { prisma } from '@/prisma/prisma-client'
import { ClientInfoPage } from '@/shared/components/shared'

import { notFound } from 'next/navigation'

export default async function ClientPage({ params: { id } }: { params: { id: string } }) {
  const client = await prisma.clients.findFirst({
    where: { id: Number(id) },
    include: {
      clientCar: true,
      clientCarTo: true,
    },
  })

  if (!client) {
    return notFound()
  }

  return <ClientInfoPage client={client} />
}
