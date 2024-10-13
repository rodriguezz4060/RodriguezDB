import { prisma } from '@/prisma/prisma-client'

import { notFound } from 'next/navigation'
import { SuspensionForm } from './suspension-form'

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

  return <SuspensionForm />
}