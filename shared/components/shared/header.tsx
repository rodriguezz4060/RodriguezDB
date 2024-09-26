'use client'

import { cn } from '@/shared/lib/utils'
import React from 'react'
import { Container } from './container'
import Image from 'next/image'
import { Button } from '../ui'
import { User } from 'lucide-react'
import { DarkModeToggle } from './dark-mode-toggle'
import { LocaleToggle } from './locale-toggle'
import { useIntl } from 'react-intl'
import { SearchInput } from './search-input'
import Link from 'next/link'

interface Props {
  className?: string
}

export const Header: React.FC<Props> = ({ className }) => {
  const { formatMessage } = useIntl()
  return (
    <header className={cn('border border-b', className)}>
      <div>
        <Container className='flex items-center justify-between py-5'>
          {/* Левая часть */}
          <Link href={`/`}>
            <div className='flex items-center gap-4'>
              <Image src='/logo.png' alt='Logo' width={35} height={35} />

              <div>
                <h1 className='text-2xl uppercase font-black'>
                  {formatMessage({ id: 'header.headerTextUp' })}
                </h1>
                <p className='text-sm text-gray-400 leading-3'>
                  {formatMessage({ id: 'header.headerTextDown' })}
                </p>
              </div>
            </div>
          </Link>
          {/*Центральная часть*/}

          <div className='mx-10 flex-1'>
            <SearchInput />
          </div>

          {/*Правая часть */}

          <div className='flex items-center gap-3'>
            <LocaleToggle />
            <DarkModeToggle />

            <Button className='flex items-start gap-3'>
              <User size={16} />
              Войти
            </Button>
          </div>
        </Container>
      </div>
    </header>
  )
}
