import React from 'react'
import { EditBootDustCoverForm } from '@/shared/components/shared'
import { prisma } from '@/prisma/prisma-client'
import { notFound } from 'next/navigation'

export default async function EditBootDustCoverPage({
  params: { id },
}: {
  params: { id: string }
}) {
  const bootCover = await prisma.bootDustCover.findFirst({
    where: { id: Number(id) },
    include: {
      name: true,
      form: true,
      type: true,
      cars: {
        include: {
          carBrand: true,
        },
      },
    },
  })

  const names = await prisma.name.findMany({})
  const types = await prisma.type.findMany({})
  const forms = await prisma.form.findMany({})

  if (!bootCover) {
    return notFound()
  }

  if (!id) return notFound()

  return <EditBootDustCoverForm data={bootCover} names={names} types={types} forms={forms} />
}
