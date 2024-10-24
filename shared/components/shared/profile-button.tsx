'use client'

import React from 'react'
import { cn } from '@/shared/lib/utils'
import { useSession, signIn } from 'next-auth/react'
import { Button } from '../ui'
import { CircleUser, LogIn } from 'lucide-react'
import Link from 'next/link'
import { useIntl } from 'react-intl'
interface Props {
  onClickSingIn: () => void
  className?: string
}

export const ProfileButton: React.FC<Props> = ({ onClickSingIn, className }) => {
  const { formatMessage } = useIntl()
  const { data: session } = useSession()

  return (
    <div className={cn('flex justify-center flex-1 w-full', className)}>
      {!session ? (
        <Button onClick={onClickSingIn}>
          <LogIn size={16} className='mr-2' />
          {formatMessage({ id: 'header.signIn' })}
        </Button>
      ) : (
        <Link href='/profile'>
          <Button>
            <CircleUser size={18} className='mr-2' />
            {formatMessage({ id: 'header.profile' })}
          </Button>
        </Link>
      )}
    </div>
  )
}
