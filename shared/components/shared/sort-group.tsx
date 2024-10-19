'use client'

import { cn } from '@/shared/lib/utils'
import { List, Table } from 'lucide-react'
import React, { useState } from 'react'
import { Button } from '../ui'
import { useIntl } from 'react-intl'
import { Title } from './title'
import { AddBootButton } from './buttons'

interface Props {
  className?: string
}

export const SortGroup: React.FC<Props> = ({ className }) => {
  const [activeButton, setActiveButton] = useState('table')
  const { formatMessage } = useIntl()

  const onClick = (buttonType: 'table' | 'list') => {
    setActiveButton(buttonType)
  }

  return (
    <div className={cn('flex items-center justify-between mb-3', className)}>
      <div className='flex-grow flex items-center justify-start'>
        <Title
          text={formatMessage({ id: 'content.bootKitSelection' })}
          size='lg'
          className='font-extrabold pt-6'
        ></Title>
      </div>

      <AddBootButton />
    </div>
  )
}
