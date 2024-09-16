import { cn } from '@/shared/lib/utils'
import { List, Table } from 'lucide-react'
import React, { useState } from 'react'
import { Button } from '../ui'
import { useIntl } from 'react-intl'

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
    <div className={cn('inline-flex items-center cursor-pointer gap-1 px-5 h-[52px]', className)}>
      <b> {formatMessage({ id: 'content.sortText' })}:</b>
      <Button
        variant={activeButton === 'table' ? 'default' : 'outline'}
        size='sort'
        title='Сортировать таблицей'
        onClick={() => onClick('table')}
      >
        <Table className='h-[1.2rem] w-[1.2rem] scale-100 rounded-' />
      </Button>
      <Button
        variant={activeButton === 'list' ? 'default' : 'outline'}
        size='sort'
        title='Сортировать списком'
        onClick={() => onClick('list')}
      >
        <List className='h-[1.2rem] w-[1.2rem] scale-100' />
      </Button>
    </div>
  )
}
