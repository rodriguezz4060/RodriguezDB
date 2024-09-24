'use client'

import React from 'react'
import { Title } from './title'
import { useIntl } from 'react-intl'
import { FilterCheckbox } from './filter-checkbox'
import { Input } from '../ui'
import { RangeSlider } from './range-slider'
import { CheckboxFiltersGroup } from './checkbox-filters-group'
import { useBootBootCover } from '@/shared/hooks/useBootBootCover'

interface Props {
  className?: string
}

export const Filters: React.FC<Props> = ({ className }) => {
  const { formatMessage } = useIntl()
  const { bootDustCovers, loading, onAddId, selectedIds } = useBootBootCover()

  const items = bootDustCovers.map(items => ({ value: String(items.id), text: String(items.name) }))

  return (
    <div className={className}>
      <Title text={formatMessage({ id: 'filters.title' })} size='sm' className='mb-5 font-bold' />

      {/*Верхние чекбоксы */}
      <div className='flex flex-col gap-4'>
        <p>{formatMessage({ id: 'filters.form' })}</p>
        <FilterCheckbox text='Круглый' value='1' />
        <FilterCheckbox text='Тришип' value='2' />
      </div>
      <div className='flex flex-col gap-4 mt-4'>
        <p>{formatMessage({ id: 'filters.types' })}</p>
        <FilterCheckbox text='Резиновый' value='1' />
        <FilterCheckbox text='Пластиковый' value='2' />
        <FilterCheckbox text='Универсальный' value='3' />
      </div>

      {/*Фильтр по цене */}
      <div className='mt-5 border-y border-y-neutral-100 py-6 pb-7'>
        <p className='font-bold mt-3'>{formatMessage({ id: 'filters.diameterIn' })}</p>
        <div className='flex gap-3 mb-5'>
          <Input type='number' placeholder='0' min={0} max={200} defaultValue={0} />
          <Input type='number' placeholder='100' min={100} max={200} defaultValue={200} />
        </div>

        <RangeSlider min={0} max={200} step={1} value={[0, 200]} />

        <div className='py-1'>
          <p className='font-bold mt-3'>{formatMessage({ id: 'filters.diameterOut' })}</p>
          <div className='flex gap-3 mb-5'>
            <Input type='number' placeholder='0' min={0} max={40} defaultValue={0} />
            <Input type='number' placeholder='100' min={10} max={40} defaultValue={40} />
          </div>

          <RangeSlider min={0} max={40} step={1} value={[0, 40]} />
        </div>
      </div>

      {/*Фильтр по Фирме */}

      <CheckboxFiltersGroup
        title={formatMessage({ id: 'filters.firms' })}
        className='mt-5'
        limit={6}
        defaultItems={items.slice(0, 6)}
        items={items}
        loading={loading}
        onClickCheckbox={onAddId}
        selectedIds={selectedIds}
      />
    </div>
  )
}
