import { prisma } from '@/prisma/prisma-client'
import { EditForm } from './edit-form'

import { notFound } from 'next/navigation'

export default async function EditCarPage({ params: { id } }: { params: { id: string } }) {
  const carTo = await prisma.oilToInfo.findFirst({
    where: { id: Number(id) },
  })

  if (!carTo) {
    return notFound()
  }

  return <EditForm carTo={carTo} />
}
