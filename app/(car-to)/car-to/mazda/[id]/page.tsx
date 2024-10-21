import { prisma } from '@/prisma/prisma-client'
import { CarToInfoPage } from '@/shared/components/shared'
import { notFound } from 'next/navigation'

export default async function OilMazdaPage({ params: { id } }: { params: { id: string } }) {
  const oilInfo = await prisma.oilCar.findFirst({
    where: { id: Number(id) },
    include: {
      oilToInfo: true,
      carBrand: true,
    },
  })

  if (!oilInfo) {
    return notFound()
  }

  return <CarToInfoPage oilInfo={oilInfo} />
}
