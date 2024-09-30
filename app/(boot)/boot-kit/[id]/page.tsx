import { prisma } from '@/prisma/prisma-client'
import { BootCoverDetails } from '@/shared/components/shared'
import { notFound } from 'next/navigation'

export default async function BootPage({ params: { id } }: { params: { id: string } }) {
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

  if (!bootCover) {
    return notFound()
  }

  return <BootCoverDetails bootCover={bootCover} />
}
