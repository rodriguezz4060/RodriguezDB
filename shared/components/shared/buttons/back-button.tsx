'use client'

import { ArrowLeft } from 'lucide-react'
import React from 'react'
import { useIntl } from 'react-intl'
import Link from 'next/link'
import { Button } from '../../ui'

interface Props {
  id?: number
  route: string
  className?: string
}

export const BackButton: React.FC<Props> = ({ id, route, className }) => {
  const { formatMessage } = useIntl()
  const link = id ? `${route}${id}/profile` : route

  return (
    <>
      <Link href={link}>
        <Button className='font-bold px-4 py-2'>
          <ArrowLeft size={20} className='mr-2' />
          {formatMessage({ id: 'addBootForm.backButton' })}
        </Button>
      </Link>
    </>
  )
}
