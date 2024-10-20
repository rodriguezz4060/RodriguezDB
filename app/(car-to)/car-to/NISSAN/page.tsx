import { prisma } from '@/prisma/prisma-client'
import { CarModelPage, Container } from '@/shared/components/shared'
import { notFound } from 'next/navigation'

export default async function CarsNissanHome() {
  const carTo = await prisma.oilTo.findMany({
    include: {
      cars: true,
    },
  })

  if (!carTo) {
    return notFound()
  }

  // Фильтруем только те машины, которые связаны с oilTo
  const carsWithOilTo = carTo.flatMap(oil => oil.cars)

  if (!carsWithOilTo) {
  }

  return (
    <>
      <Container className='secondary dark:bg-zinc-900 px-4 pb-10 '>
        <CarModelPage carTo={carsWithOilTo} />
      </Container>
    </>
  )
}
