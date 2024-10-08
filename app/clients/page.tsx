import { prisma } from '@/prisma/prisma-client'
import { ClientsPage, Container } from '@/shared/components/shared'
import { notFound } from 'next/navigation'

export default async function ClientsHome() {
  const clients = await prisma.clients.findMany({
    include: {
      clientCar: true,
    },
  })

  if (!clients) {
    return notFound()
  }
  return (
    <>
      <Container className='secondary dark:bg-zinc-900 px-4 pb-10'>
        <ClientsPage clients={clients} />
      </Container>
    </>
  )
}
