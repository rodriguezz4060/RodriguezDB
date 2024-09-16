import React from 'react'
import { Title } from './title'
import { useIntl } from 'react-intl'

interface Props {
  className?: string
}

export const Filters: React.FC<Props> = ({ className }) => {
  const { formatMessage } = useIntl()

  return (
    <div className={className}>
      <Title text={formatMessage({ id: 'filters.title' })} size='sm' className='mb-5 font-bold' />

      <div className='flex flex-col gap-4'>
        {/* <FilterCheckbox text='Круглый' value='1' />
        <FilterCheckbox text='Тришип' value='2' />
        <FilterCheckbox text='Платиковый' value='3' />
        <FilterCheckbox text='Универсальный' value='4' /> */}
      </div>
    </div>
  )
}
