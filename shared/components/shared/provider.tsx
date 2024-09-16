'use client'

import React from 'react'
import dynamic from 'next/dynamic'
import { IntlProvider } from 'react-intl'
import { LocaleProvider, useLocale } from './locale-provider'
import { messages } from './flatten-messages'
import { Header } from './header'

const ThemeProvider = dynamic(() => import('./theme-provider').then(mod => mod.ThemeProvider), {
  ssr: false,
})

interface ProvidersProps {
  children: React.ReactNode
}

export const Providers: React.FC<ProvidersProps> = ({ children }) => {
  return (
    <LocaleProvider>
      <IntlProviderWrapper>
        <ThemeProvider attribute='class' defaultTheme='dark' enableSystem>
          <Header />
          {children}
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
