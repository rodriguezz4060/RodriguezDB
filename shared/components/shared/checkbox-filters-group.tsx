'use client'

import React from 'react'
import { cn } from '@/shared/lib/utils'
import { FilterCheckbox, FilterCheckboxProps } from './filter-checkbox'
import { Input } from '../ui'
import { useIntl } from 'react-intl'

type Item = FilterCheckboxProps

interface Props {
  title: string
  items: Item[]
  defaultItems: Item[]
  limit?: number
  searchInputPlaceholder?: string
  onChange?: (values: string[]) => void
  defaultValue?: string[]
  className?: string
}

export const CheckboxFiltersGroup: React.FC<Props> = ({
  title,
  items,
  defaultItems,
  limit = 5,
  searchInputPlaceholder = 'Поиск',
  onChange,
  defaultValue,
  className,
}) => {
  const { formatMessage } = useIntl()
  const [showAll, setShowAll] = React.useState(false)
  const [searchValue, setSearchValue] = React.useState('')

  const onChangeSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value)
  }

  const list = showAll
    ? items.filter(item => item.text.toLowerCase().includes(searchValue.toLocaleLowerCase()))
    : defaultItems.slice(0, limit)

  return (
    <div className={cn(className)}>
      <p className='flex flex-col gap-4'>{title}</p>

      {showAll && (
        <div className='mb-5 mt-2'>
          <Input
            onChange={onChangeSearchInput}
            placeholder={formatMessage({ id: 'filters.searchInputPlaceholder' })}
            className=' border'
          />
        </div>
      )}

      <div className='flex flex-col gap-4 max-h-96 mt-2 pr-2 overflow-auto scrollbar'>
        {list.map((item, index) => (
          <FilterCheckbox
            key={index}
            text={item.text}
            value={item.value}
            endAdornment={item.endAdornment}
            checked={false}
            onCheckedChange={ids => console.log(ids)}
          />
        ))}
      </div>

      {items.length > limit && (
        <div className={showAll ? 'border-t-neutral-100 mt-4' : ''}>
          <button onClick={() => setShowAll(!showAll)} className='text-primary mt-3'>
            {showAll
              ? `${formatMessage({ id: 'filters.hideButton' })}`
              : `${formatMessage({ id: 'filters.showAllButton' })}`}
          </button>
        </div>
      )}
    </div>
  )
}
