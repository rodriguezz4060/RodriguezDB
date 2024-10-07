'use client'

import { Pencil } from 'lucide-react'
import React from 'react'
import { useIntl } from 'react-intl'
import Link from 'next/link'
import { Button } from '../../ui'
import { useSession } from 'next-auth/react'

interface Props {
  className?: string
}

export const EditBootButton: React.FC<Props> = ({ className }) => {
  const { formatMessage } = useIntl()
  const { data: session } = useSession()

  const userRole = session?.user?.role

  return (
    <>
      {userRole === 'ADMIN' && (
        <Link href={`/boot-kit/edit`}>
          <Button className='text-base font-bold bg-[#4CAF50] hover:bg-[#388E3C]'>
            <Pencil size={20} className='mr-1' />
            {formatMessage({ id: 'bootCoverInfo.editButton' })}
          </Button>
        </Link>
      )}
    </>
  )
}
