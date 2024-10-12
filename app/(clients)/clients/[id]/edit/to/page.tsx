import { prisma } from '@/prisma/prisma-client'
import { EditClientToPage } from '@/shared/components/shared/clients/edit-client-to-page'

import { notFound } from 'next/navigation'

export default async function ClientPage({ params: { id } }: { params: { id: string } }) {
  const client = await prisma.clients.findFirst({
    where: { id: Number(id) },
    include: {
      clientCarTo: true,
      clientCar: true,
    },
  })

  if (!client) {
    return notFound()
  }

  return <EditClientToPage client={client} />
}
