'use client'

import { Plus } from 'lucide-react'
import React from 'react'
import { useIntl } from 'react-intl'
import Link from 'next/link'
import { Button } from '../../ui'
import { useSession } from 'next-auth/react'

interface Props {
  className?: string
}

export const AddBootButton: React.FC<Props> = ({ className }) => {
  const { formatMessage } = useIntl()
  const { data: session } = useSession()

  const userRole = session?.user?.role

  return (
    <>
      {userRole === 'ADMIN' && (
        <Link href={`/add`}>
          <Button className='text-base font-bold bg-[#4CAF50] hover:bg-[#388E3C]'>
            <Plus size={20} className='mr-1' />
            {formatMessage({ id: 'content.addButton' })}
          </Button>
        </Link>
      )}
    </>
  )
}
