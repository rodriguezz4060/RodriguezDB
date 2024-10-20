'use client'

import { Nunito } from 'next/font/google'
import React, { useEffect, useState } from 'react'
import './globals.css'
import { Providers } from '@/shared/components/shared/provider'
import { BreadcrumbProvider, Header } from '@/shared/components/shared'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Analytics } from '@vercel/analytics/react'

const nunito = Nunito({
  subsets: ['cyrillic'],
  variable: '--font-nunito',
  weight: ['400', '500', '600', '700', '800', '900'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const [locale, setLocale] = useState<string>('en')

  useEffect(() => {
    const userLang = navigator.language.split('-')[0] || 'en'
    setLocale(userLang)
  }, [])

  return (
    <html lang={locale}>
      <head>
        <link data-rh='true' rel='icon' href='/logo.png' />
      </head>
      <body className={nunito.className}>
        <Providers>
          <Header />
          <BreadcrumbProvider>{children}</BreadcrumbProvider>
          <SpeedInsights />
          <Analytics />
        </Providers>
      </body>
    </html>
  )
}
