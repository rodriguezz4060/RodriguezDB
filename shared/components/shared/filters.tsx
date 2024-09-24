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

interface SizeProps {
  inSizeFrom: number
  inSizeTo: number
  outSizeFrom: number
  outSizeTo: number
}

export const Filters: React.FC<Props> = ({ className }) => {
  const { formatMessage } = useIntl()
  const { bootDustCovers, loading, onAddId, selectedIds } = useBootBootCover()

  const [sizes, setSize] = React.useState<SizeProps>({
    inSizeFrom: 0,
    inSizeTo: 200,
    outSizeFrom: 0,
    outSizeTo: 40,
  })

  const items = bootDustCovers.map(items => ({ value: String(items.id), text: String(items.name) }))

  const updateSize = (name: keyof SizeProps, value: number) => {
    setSize({
      ...sizes,
      [name]: value,
    })
  }

  return (
    <div className={className}>
      <Title text={formatMessage({ id: 'filters.title' })} size='sm' className='mb-5 font-bold' />

      {/*Верхние чекбоксы */}
      <div className='flex flex-col gap-4'>
        <p>{formatMessage({ id: 'filters.form' })}</p>
        <FilterCheckbox name='form1' text='Круглый' value='1' />
        <FilterCheckbox name='form2' text='Тришип' value='2' />
      </div>
      <div className='flex flex-col gap-4 mt-4'>
        <p>{formatMessage({ id: 'filters.types' })}</p>
        <FilterCheckbox name='type1' text='Резиновый' value='1' />
        <FilterCheckbox name='type2' text='Пластиковый' value='2' />
        <FilterCheckbox name='type3' text='Универсальный' value='3' />
      </div>

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
            value={String(sizes.inSizeFrom)}
            onChange={e => updateSize('inSizeFrom', Number(e.target.value))}
          />
          <Input
            type='number'
            placeholder='100'
            min={100}
            max={200}
            value={String(sizes.inSizeTo)}
            onChange={e => updateSize('inSizeTo', Number(e.target.value))}
          />
        </div>

        <RangeSlider
          min={0}
          max={200}
          step={1}
          value={[sizes.inSizeFrom, sizes.inSizeTo]}
          onValueChange={([inSizeFrom, inSizeTo]) => setSize({ ...sizes, inSizeFrom, inSizeTo })}
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
              value={sizes.outSizeFrom}
              onChange={e => updateSize('outSizeFrom', Number(e.target.value))}
            />
            <Input
              type='number'
              placeholder='100'
              min={10}
              max={40}
              value={sizes.outSizeTo}
              onChange={e => updateSize('outSizeTo', Number(e.target.value))}
            />
          </div>

          <RangeSlider
            min={0}
            max={40}
            step={1}
            value={[sizes.outSizeFrom, sizes.outSizeTo]}
            onValueChange={([outSizeFrom, outSizeTo]) =>
              setSize({ ...sizes, outSizeFrom, outSizeTo })
            }
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
        onClickCheckbox={onAddId}
        selectedIds={selectedIds}
      />
    </div>
  )
}
