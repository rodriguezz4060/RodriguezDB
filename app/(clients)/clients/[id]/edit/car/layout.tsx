import { Metadata } from 'next'
import { Separator } from '@/shared/components/ui'
import { SidebarNav } from '@/shared/components/shared/clients/forms/sidebar-nav'

export const metadata: Metadata = {
  title: 'Forms',
  description: 'Advanced form example using react-hook-form and Zod.',
}

interface SettingsLayoutProps {
  children: React.ReactNode
  params: { id: number }
}

export default function CarEditLayout({ children, params: { id } }: SettingsLayoutProps) {
  const sidebarNavItems = [
    {
      title: 'Двигатель и Система выхлопа',
      href: `/clients/${id}/edit/car`,
    },
    {
      title: 'Подвеска и Рулевое',
      href: `/clients/${id}/edit/car/suspension`,
    },
    {
      title: 'Appearance',
      href: `/clients/${id}/appearance`,
    },
    {
      title: 'Notifications',
      href: `/clients/${id}/notifications`,
    },
    {
      title: 'Display',
      href: `/clients/${id}/display`,
    },
  ]

  return (
    <>
      <div className='hidden space-y-6 p-5 pb-16 md:block'>
        <div className='space-y-0.5'>
          <h2 className='text-2xl font-bold tracking-tight'>Редактирование</h2>
          <p className='text-muted-foreground'>
            Измените или заполните данные о запчастях для машины клиента.
          </p>
        </div>
        <Separator className='my-6' />
        <div className='flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0'>
          <aside className='-mx-4 lg:w-1/5'>
            <SidebarNav items={sidebarNavItems} />
          </aside>
          <Separator orientation='vertical' className='h-auto mx-6' />
          <div className='flex-1 lg:max-w-2xl'>{children}</div>
        </div>
      </div>
    </>
  )
}