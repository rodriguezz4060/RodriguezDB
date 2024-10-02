'use client'

import React from 'react'
import dynamic from 'next/dynamic'
import { IntlProvider } from 'react-intl'
import { LocaleProvider, useLocale } from './locale-provider'
import { messages } from './flatten-messages'
import { Toaster } from 'react-hot-toast'
import { SessionProvider } from 'next-auth/react'
import NextTopLoader from 'nextjs-toploader'

const ThemeProvider = dynamic(() => import('./theme-provider').then(mod => mod.ThemeProvider), {
  ssr: false,
})

export const Providers: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <LocaleProvider>
      <IntlProviderWrapper>
        <ThemeProvider attribute='class' defaultTheme='dark' enableSystem>
          <NextTopLoader />
          <SessionProvider>{children}</SessionProvider>
          <Toaster />
        </ThemeProvider>
      </IntlProviderWrapper>
    </LocaleProvider>
  )
}

const IntlProviderWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { locale } = useLocale()

  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      {children}
    </IntlProvider>
  )
}
