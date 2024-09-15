import { cn } from '@/shared/lib/utils'
import React from 'react'
import { Container } from './container'
import Image from 'next/image'
import { Button } from '../ui'
import { User } from 'lucide-react'

interface Props {
  className?: string
}

export const Header: React.FC<Props> = ({ className }) => {
  return (
    <header className={cn('border border-b ', className)}>
      <div>
        <Container className='flex items-center justify-between py-5'>
          {/* Левая часть */}
          <div className='flex items-center gap-4'>
            <Image src='/logo.png' alt='Logo' width={35} height={35} />
            <div>
              <h1 className='text-2xl uppercase font-black'>Rodriguez DB</h1>
              <p className='text-sm text-gray-400 leading-3'>База данных Родригеза</p>
            </div>
          </div>

          {/*Правая часть */}

          <div className='flex items-center gap 3'>
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
