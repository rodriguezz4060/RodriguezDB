'use client'

import React from 'react'
import { useIntl } from 'react-intl'

interface Props {
  className?: string
}

export const ClientProfileHeaderTo: React.FC<Props> = ({ className }) => {
  const { formatMessage } = useIntl()

  return (
    <>
      <div className='space-y-0.5'>
        <h2 className='text-2xl font-bold tracking-tight'>
          {formatMessage({ id: 'editToCar.editToCarTitle' })}
        </h2>
        <p className='text-muted-foreground'>
          {formatMessage({ id: 'editToCar.editToCarDescription' })}
        </p>
      </div>
    </>
  )
}
