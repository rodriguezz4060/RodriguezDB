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

  // Сортировка массива по алфавиту
  const sortedBootDustCoversFirms = bootDustCoversFirms.sort((a, b) => a.name.localeCompare(b.name))

  const items = sortedBootDustCoversFirms.map(items => ({
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
          { text: formatMessage({ id: 'filters.formRound' }), value: '1' },
          { text: formatMessage({ id: 'filters.formTriship' }), value: '2' },
        ]}
      />

      <CheckboxFiltersGroup
        title={formatMessage({ id: 'filters.types' })}
        name='bootTypes'
        className='mt-5'
        loading={loading}
        limit={4}
        onClickCheckbox={filters.setBootTypes}
        selected={filters.bootTypes}
        items={[
          { text: formatMessage({ id: 'filters.formGym' }), value: '1' },
          { text: formatMessage({ id: 'filters.formPlastic' }), value: '2' },
          { text: formatMessage({ id: 'filters.formSilicon' }), value: '3' },
          { text: formatMessage({ id: 'filters.formUniversal' }), value: '4' },
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
            value={filters.sizes.inSizeFrom !== null ? String(filters.sizes.inSizeFrom) : ''}
            onChange={e => filters.setSizes('inSizeFrom', Number(e.target.value))}
          />
          <Input
            type='number'
            placeholder='200'
            min={100}
            max={200}
            value={filters.sizes.inSizeTo !== null ? String(filters.sizes.inSizeTo) : ''}
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
              value={filters.sizes.outSizeFrom !== null ? String(filters.sizes.outSizeFrom) : ''}
              onChange={e => filters.setSizes('outSizeFrom', Number(e.target.value))}
            />
            <Input
              type='number'
              placeholder='40'
              min={10}
              max={40}
              value={filters.sizes.outSizeTo !== null ? String(filters.sizes.outSizeTo) : ''}
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
