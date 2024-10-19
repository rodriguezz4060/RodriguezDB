import { prisma } from '@/prisma/prisma-client'
import { Container } from '@/shared/components/shared'
import { notFound } from 'next/navigation'

export default async function CarsHome() {
  const carTo = await prisma.carBrand.findMany({})

  if (!carTo) {
    return notFound()
  }
  return (
    <>
      <Container className='secondary dark:bg-zinc-900 px-4 pb-10'>sdsds</Container>
    </>
  )
}
