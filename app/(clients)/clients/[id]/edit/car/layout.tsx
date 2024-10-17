import { Metadata } from 'next'
import { Separator } from '@/shared/components/ui'
import {
  BackButton,
  ClientProfileHeader,
  ClientEditCarSidebarNav,
} from '@/shared/components/shared'

export const metadata: Metadata = {
  title: 'Редактирование машины клиента | RodriguezDB',
  description: 'Форма редактирования машины клиента',
}

interface SettingsLayoutProps {
  children: React.ReactNode
  params: { id: number }
}

export default function CarEditLayout({ children, params: { id } }: SettingsLayoutProps) {
  return (
    <>
      <div className='hidden space-y-6 p-5 pb-16 md:block'>
        <div className='flex items-center justify-between'>
          <ClientProfileHeader />
          <BackButton route='/clients/' id={id} />
        </div>
        <Separator className='my-6' />
        <div className='flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0'>
          <ClientEditCarSidebarNav id={id} />

          <Separator orientation='vertical' className='h-auto mx-6' />
          <div className='flex-1 lg:max-w-2xl'>{children}</div>
        </div>
        <Separator className='my-6' />
      </div>
    </>
  )
}
