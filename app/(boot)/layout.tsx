import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'RodriguezDB | Подбор пыльников',
  description: 'База данных Родригеза',
}

export default function BootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <main className='min-h-screen'>{children}</main>
}
