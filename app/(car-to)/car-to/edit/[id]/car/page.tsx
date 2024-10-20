import { prisma } from '@/prisma/prisma-client'

import { notFound } from 'next/navigation'
import { CarForm } from './car-form'

interface CarFormProps {
  params: { id: number }
  searchParams: { oilToId: number }
}

export default async function CarPage({ params: { id }, searchParams: { oilToId } }: CarFormProps) {
  const car = await prisma.car.findFirst({
    where: { id: oilToId },
  })

  const carBrands = await prisma.carBrand.findMany({})

  if (!car) {
    return notFound()
  }

  return <CarForm car={car} carBrands={carBrands} />
}
