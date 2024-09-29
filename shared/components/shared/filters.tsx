'use client'

import React from 'react'
import { Title } from './title'
import { useIntl } from 'react-intl'
import { Input } from '../ui'
import { RangeSlider } from './range-slider'
import { useBootBootCoverFirms, useFilters, useQueryFilters } from '@/shared/hooks'
import { CheckboxFiltersGroup } from './checkbox-filters-group'

interface Props {
  className?: string
}

export const Filters: React.FC<Props> = ({ className }) => {
  const { formatMessage } = useIntl()

  const { bootDustCoversFirms, loading } = useBootBootCoverFirms()
  const filters = useFilters()

  useQueryFilters(filters)

  const items = bootDustCoversFirms.map(items => ({
    value: String(items.id),
    text: String(items.name),
  }))

  const updateSizesIn = (sizes: number[]) => {
    filters.setSizes('inSizeFrom', sizes[0])
    filters.setSizes('inSizeTo', sizes[1])
  }

  const updateSizesOut = (sizes: number[]) => {
    filters.setSizes('outSizeFrom', sizes[0])
    filters.setSizes('outSizeTo', sizes[1])
  }

  return (
    <div className={className}>
      <Title text={formatMessage({ id: 'filters.title' })} size='sm' className='mb-5 font-bold' />

      {/*Верхние чекбоксы */}
      <CheckboxFiltersGroup
        title={formatMessage({ id: 'filters.form' })}
        name='bootForm'
        className='mt-5'
        loading={loading}
        limit={2}
        onClickCheckbox={filters.setBootForm}
        selected={filters.bootForm}
        items={[
          { text: formatMessage({ id: 'filters.typeRound' }), value: '1' },
          { text: 'Тришип', value: '2' },
        ]}
      />

      <CheckboxFiltersGroup
        title={formatMessage({ id: 'filters.types' })}
        name='bootTypes'
        className='mt-5'
        loading={loading}
        limit={3}
        onClickCheckbox={filters.setBootTypes}
        selected={filters.bootTypes}
        items={[
          { text: 'Резиновый', value: '1' },
          { text: 'Пластиковый', value: '2' },
          { text: 'Универсальный', value: '3' },
        ]}
      />

      {/*Фильтр по размеру */}
      <div className='mt-5 border-y border-y-neutral-100 py-6 pb-7'>
        <p className='font-bold mt-3'>{formatMessage({ id: 'filters.diameterIn' })}</p>
        <div className='flex gap-3 mb-5'>
          {/*Фильтр наружного диаметра*/}
          <Input
            type='number'
            placeholder='0'
            min={0}
            max={200}
            value={String(filters.sizes.inSizeFrom || 0)}
            onChange={e => filters.setSizes('inSizeFrom', Number(e.target.value))}
          />
          <Input
            type='number'
            placeholder='200'
            min={100}
            max={200}
            value={String(filters.sizes.inSizeTo || 200)}
            onChange={e => filters.setSizes('inSizeTo', Number(e.target.value))}
          />
        </div>

        <RangeSlider
          min={0}
          max={200}
          step={1}
          value={[filters.sizes.inSizeFrom || 0, filters.sizes.inSizeTo || 200]}
          onValueChange={updateSizesIn}
        />

        <div className='py-1'>
          <p className='font-bold mt-3'>{formatMessage({ id: 'filters.diameterOut' })}</p>
          <div className='flex gap-3 mb-5'>
            {/*Фильтр внутреннего диаметра*/}
            <Input
              type='number'
              placeholder='0'
              min={0}
              max={40}
              value={String(filters.sizes.outSizeFrom || 0)}
              onChange={e => filters.setSizes('outSizeFrom', Number(e.target.value))}
            />
            <Input
              type='number'
              placeholder='40'
              min={10}
              max={40}
              value={String(filters.sizes.outSizeTo || 40)}
              onChange={e => filters.setSizes('outSizeTo', Number(e.target.value))}
            />
          </div>

          <RangeSlider
            min={0}
            max={40}
            step={1}
            value={[filters.sizes.outSizeFrom || 0, filters.sizes.outSizeTo || 40]}
            onValueChange={updateSizesOut}
          />
        </div>
      </div>

      {/*Фильтр по Фирме */}

      <CheckboxFiltersGroup
        title={formatMessage({ id: 'filters.firms' })}
        name='firms'
        className='mt-5'
        limit={6}
        defaultItems={items.slice(0, 6)}
        items={items}
        loading={loading}
        onClickCheckbox={filters.setBootFirms}
        selected={filters.selectedFirms}
      />
    </div>
  )
}
