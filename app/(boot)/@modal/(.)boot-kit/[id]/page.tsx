import { prisma } from '@/prisma/prisma-client'
import { ChooseProductModal } from '@/shared/components/shared'
import { notFound } from 'next/navigation'

export default async function ProductModalPage({ params: { id } }: { params: { id: string } }) {
  const product = await prisma.bootDustCover.findFirst({
    where: {
      id: Number(id),
    },
    include: {
      cars: {
        include: {
          carBrand: true,
        },
      },
    },
  })

  if (!product) {
    return notFound()
  }

  return <ChooseProductModal product={product} />
}
