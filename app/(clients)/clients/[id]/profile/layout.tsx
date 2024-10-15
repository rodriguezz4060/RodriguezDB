import { Metadata } from 'next'
import { Separator } from '@/shared/components/ui'
import { SidebarNav } from '@/shared/components/shared/sidebar-nav'
import { BackButton, ClientInfoBlock } from '@/shared/components/shared'
import { prisma } from '@/prisma/prisma-client'
import { ClientsInfo } from '@/@types/prisma'

export const metadata: Metadata = {
  title: 'Страница клиента | RodriguezDB',
  description: 'Страница с информацией о клиенте',
}

interface SettingsLayoutProps {
  children: React.ReactNode
  params: { id: number }
}

export default async function CarEditLayout({ children, params: { id } }: SettingsLayoutProps) {
  const client = await prisma.clients.findFirst({
    where: { id: Number(id) },
    include: {
      clientCarTo: true,
      clientCar: {
        select: {
          id: true,
          gosNumber: true,
          models: true,
          frontBrake: true,
          rearBrake: true,
          handbrakeBrakePads: true,
          waterPump: true,
          thermostat: true,
          sparkPlug: true,
          driversWiper: true,
          passengerWiper: true,
          oilFilter: true,
          airFilter: true,
          fuelFilter: true,
          cabinFilter: true,
          automaticTransmissionOilPanGasket: true,
          automaticTransmissionFilter: true,
          automaticTransmissionFillerGasket: true,
          automaticTransmissionOilPanGasket2: true,
          automaticTransmissionFilter2: true,
          transmissionDrainPlug: true,
          transmissionDrainPlugGasket: true,
          ignitionCoil: true,
        },
      },
    },
  })

  const sidebarNavItems = [
    {
      title: 'Двигатель и Система выхлопа',
      href: `/clients/${id}/profile`,
    },
    {
      title: 'Подвеска и Рулевое',
      href: `/clients/${id}/profile/suspension`,
    },
    {
      title: 'Тормозная система',
      href: `/clients/${id}/profile/brake-system`,
    },
    {
      title: 'Коробка передач и Привод',
      href: `/clients/${id}/profile/transmission`,
    },
    {
      title: 'Охлаждение и Отопление',
      href: `/clients/${id}/profile/cooling`,
    },
    {
      title: 'Электрика и Освещение',
      href: `/clients/${id}/profile/electrical`,
    },
    {
      title: 'Кузов',
      href: `/clients/${id}/profile/car-body`,
    },
  ]

  if (!client) {
    throw new Error(`Client not found with id ${id}`)
  }

  return (
    <>
      <div className='hidden space-y-6 p-5 pb-16 md:block'>
        <div className='flex items-center justify-between'>
          <div className='space-y-0.5'>
            <h2 className='text-2xl font-bold tracking-tight'>Клиент</h2>
            <p className='text-muted-foreground'>Страница с информацией о клиенте</p>
          </div>
          <BackButton route='/clients/' id={id} />
        </div>
        <Separator className='my-6' />

        <div className='flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0'>
          <aside className='-mx-4 lg:w-1/5'>
            <SidebarNav items={sidebarNavItems} />
          </aside>

          <Separator orientation='vertical' className='h-auto mx-6' />
          <div className='flex-1 lg:max-w-2xl'>{children}</div>
          <Separator orientation='vertical' className='h-auto' />
          <ClientInfoBlock client={client as ClientsInfo} />
        </div>
        <Separator className='my-6' />
      </div>
    </>
  )
}
