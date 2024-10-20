'use client'

import { Plus } from 'lucide-react'
import React from 'react'
import { useIntl } from 'react-intl'
import Link from 'next/link'
import { Button } from '../../ui'
import { useSession } from 'next-auth/react'
import { cn } from '@/shared/lib/utils'

interface Props {
  className?: string
}

export const AddCarToButton: React.FC<Props> = ({ className }) => {
  const { formatMessage } = useIntl()
  const { data: session } = useSession()

  const userRole = session?.user?.role

  return (
    <>
      {userRole === 'ADMIN' && (
        <Link href={`/car-to/add-car`}>
          <Button className={cn('text-base font-bold bg-[#4CAF50] hover:bg-[#388E3C]', className)}>
            <Plus size={20} className='mr-1' />
            {formatMessage({ id: 'content.addButton' })}
          </Button>
        </Link>
      )}
    </>
  )
}
