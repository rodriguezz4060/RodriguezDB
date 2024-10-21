import { prisma } from '@/prisma/prisma-client'
import { notFound } from 'next/navigation'
import { CarForm } from './car-form'

interface CarFormProps {
  params: { id: number }
  searchParams: { oilToId: number }
}

export default async function CarPage({ params: { id } }: { params: { id: string } }) {
  const car = await prisma.oilCar.findFirst({
    where: { id: Number(id) },
  })

  const carBrands = await prisma.carBrand.findMany({})

  if (!car) {
    return notFound()
  }

  return <CarForm car={car} carBrands={carBrands} />
}
