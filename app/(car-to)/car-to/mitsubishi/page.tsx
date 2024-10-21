import { prisma } from '@/prisma/prisma-client'
import { Container, CarCard } from '@/shared/components/shared'

export default async function CarsMitsubishiHome() {
  const carBrandId = 5

  const carsWithOilTo = await prisma.oilCar.findMany({
    where: {
      carBrandId: carBrandId,
    },
  })

  return (
    <>
      <Container className='secondary dark:bg-zinc-900 px-4 pb-10 '>
        <CarCard carTo={carsWithOilTo} rout='mitsubishi' />
      </Container>
    </>
  )
}
