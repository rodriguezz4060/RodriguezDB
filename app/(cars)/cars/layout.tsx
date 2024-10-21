import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'База автомобилей | RodriguezDB',
  description: 'База данных Родригеза',
}

export default function CarsLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <main>{children}</main>
}
