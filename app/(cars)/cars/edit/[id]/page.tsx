import { prisma } from '@/prisma/prisma-client'
import { EditCarForm } from '@/shared/components/shared/cars-page/edit-car'

import { notFound } from 'next/navigation'

export default async function BootPage({ params: { id } }: { params: { id: string } }) {
  const car = await prisma.car.findFirst({
    where: { id: Number(id) },
    include: {
      carBrand: true,
      bootDustCover: {},
    },
  })

  if (!car) {
    return notFound()
  }
  const carBrands = await prisma.carBrand.findMany({})
  const bootDustCovers = await prisma.bootDustCover.findMany({})

  return (
    <>
      <EditCarForm car={car} carBrands={carBrands} bootDustCovers={bootDustCovers} />
    </>
  )
}
