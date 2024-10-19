import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Добавление клиента | RodriguezDB',
  description: 'База данных Родригеза',
}

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <main>{children}</main>
}
