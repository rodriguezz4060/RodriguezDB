import { Metadata } from 'next'
import { Separator } from '@/shared/components/ui'
import { BackButton, ClientProfileHeaderEdit } from '@/shared/components/shared'

export const metadata: Metadata = {
  title: 'Редактирование данных клиента | RodriguezDB',
  description: 'Форма редактирования данных клиента',
}

interface SettingsLayoutProps {
  children: React.ReactNode
  params: { id: number }
}

export default function CarToEditLayout({ children, params: { id } }: SettingsLayoutProps) {
  return (
    <>
      <div className='hidden space-y-6 p-5 pb-16 md:block'>
        <div className='flex items-center justify-between'>
          <ClientProfileHeaderEdit />
          <BackButton route='/clients/' id={id} />
        </div>

        <Separator className='my-6' />
        <div className='flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0'>
          <Separator orientation='vertical' className='h-auto mx-6' />
          <div className='flex-1 '>{children}</div>
          <Separator orientation='vertical' className='h-auto mx-6' />
        </div>
        <Separator className='my-6' />
      </div>
    </>
  )
}
