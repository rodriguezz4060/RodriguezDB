import { prisma } from '@/prisma/prisma-client'
import { AddCarToButton, CarToMainPage, Container } from '@/shared/components/shared'
import { cn } from '@/shared/lib/utils'
import { notFound } from 'next/navigation'

export default async function CarsHome() {
  const carToBrands = await prisma.carBrand.findMany({})

  if (!carToBrands) {
    return notFound()
  }
  return (
    <>
      <Container className='secondary dark:bg-zinc-900 px-4 pb-10'>
        <div className='flex items-center justify-end  mt-3'>
          <AddCarToButton />
        </div>
        <CarToMainPage brands={carToBrands} />
      </Container>
    </>
  )
}
