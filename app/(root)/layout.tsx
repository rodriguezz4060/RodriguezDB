import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'RodriguezDB | Главная',
  description: 'База данных Родригеза',
}

export default function HomeLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode
  modal: React.ReactNode
}>) {
  return (
    <main className='min-h-screen'>
      {children}
      {modal}
    </main>
  )
}
