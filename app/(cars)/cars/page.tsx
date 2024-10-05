import { prisma } from '@/prisma/prisma-client'
import { CarsPage, Container } from '@/shared/components/shared'
import { notFound } from 'next/navigation'

export default async function CarsHome() {
  const cars = await prisma.car.findMany({
    include: {
      carBrand: true,
    },
  })

  if (!cars) {
    return notFound()
  }
  return (
    <>
      <Container className='secondary dark:bg-zinc-900 px-4 pb-10'>
        <CarsPage cars={cars} />
      </Container>
    </>
  )
}
