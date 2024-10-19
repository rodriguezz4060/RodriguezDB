import { prisma } from '@/prisma/prisma-client'
import { CarToMainPage, Container } from '@/shared/components/shared'
import { notFound } from 'next/navigation'

export default async function CarsHome() {
  const carToBrands = await prisma.carBrand.findMany({})

  if (!carToBrands) {
    return notFound()
  }
  return (
    <>
      <Container className='secondary dark:bg-zinc-900 px-4 pb-10'>
        <CarToMainPage brands={carToBrands} />
      </Container>
    </>
  )
}
