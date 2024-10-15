import { Metadata } from 'next'
import { Separator } from '@/shared/components/ui'
import { SidebarNav } from '@/shared/components/shared/sidebar-nav'
import { BackButton } from '@/shared/components/shared'

export const metadata: Metadata = {
  title: 'Редактирование машины клиента | RodriguezDB',
  description: 'Форма редактирования машины клиента',
}

interface SettingsLayoutProps {
  children: React.ReactNode
  params: { id: number }
}

export default function CarToEditLayout({ children, params: { id } }: SettingsLayoutProps) {
  const sidebarNavItems = [
    {
      title: 'Масла',
      href: `/clients/${id}/edit/to`,
    },
    {
      title: 'Расходники',
      href: `/clients/${id}/edit/to/consumables`,
    },
  ]

  return (
    <>
      <div className='hidden space-y-6 p-5 pb-16 md:block'>
        <div className='flex items-center justify-between'>
          <div className='space-y-0.5'>
            <h2 className='text-2xl font-bold tracking-tight'>Редактирование</h2>
            <p className='text-muted-foreground'>
              Измените или заполните данные о ТО для машины клиента.
            </p>
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
        </div>
        <Separator className='my-6' />
      </div>
    </>
  )
}
