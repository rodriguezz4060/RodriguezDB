'use client'

import { Settings } from 'lucide-react'
import React from 'react'
import { useIntl } from 'react-intl'
import Link from 'next/link'
import { Button } from '../../ui'
import { useSession } from 'next-auth/react'

interface Props {
  id: number
  className?: string
}

export const EditClientButton: React.FC<Props> = ({ id, className }) => {
  const { data: session } = useSession()

  const userRole = session?.user?.role

  return (
    <>
      {userRole === 'ADMIN' && (
        <Link href={`/clients/${id}/edit/client`}>
          <Button size='icon' variant='ghost' className='ml-2'>
            <Settings size={20} />
          </Button>
        </Link>
      )}
    </>
  )
}
