import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'RodriguezDB | Главная',
  description: 'База данных Родригеза',
}

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <main className='min-h-screen'>{children}</main>
}
