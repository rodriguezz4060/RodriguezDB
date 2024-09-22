import React from 'react'
import { Title } from './title'
import { useIntl } from 'react-intl'
import { FilterCheckbox } from './filter-checkbox'
import { Input } from '../ui'
import { RangeSlider } from './range-slider'
import { CheckboxFiltersGroup } from './checkbox-filters-group'

interface Props {
  className?: string
}

export const Filters: React.FC<Props> = ({ className }) => {
  const { formatMessage } = useIntl()

  return (
    <div className={className}>
      <Title text={formatMessage({ id: 'filters.title' })} size='sm' className='mb-5 font-bold' />

      {/*Верхние чекбоксы */}
      <div className='flex flex-col gap-4'>
        <p>{formatMessage({ id: 'filters.types' })}</p>
        <FilterCheckbox text='Круглый' value='1' />
        <FilterCheckbox text='Тришип' value='2' />
        <FilterCheckbox text='Пластиковый' value='3' />
        <FilterCheckbox text='Универсальный' value='4' />
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
        defaultItems={[
          {
            text: 'Maruchi',
            value: '1',
          },
          {
            text: 'Pascal',
            value: '2',
          },
          {
            text: 'RBI',
            value: '3',
          },
          {
            text: 'GSP',
            value: '4',
          },
          {
            text: 'GP',
            value: '5',
          },
          {
            text: 'FEBEST',
            value: '6',
          },
          {
            text: 'TOYOTA',
            value: '7',
          },
        ]}
        items={[
          {
            text: 'Maruchi',
            value: '1',
          },
          {
            text: 'Pascal',
            value: '2',
          },
          {
            text: 'RBI',
            value: '3',
          },
          {
            text: 'GSP',
            value: '4',
          },
          {
            text: 'GP',
            value: '5',
          },
          {
            text: 'FEBEST',
            value: '6',
          },
          {
            text: 'TOYOTA',
            value: '7',
          },
          {
            text: 'Maruchi',
            value: '1',
          },
          {
            text: 'Pascal',
            value: '2',
          },
          {
            text: 'RBI',
            value: '3',
          },
          {
            text: 'GSP',
            value: '4',
          },
          {
            text: 'GP',
            value: '5',
          },
          {
            text: 'FEBEST',
            value: '6',
          },
          {
            text: 'TOYOTA',
            value: '7',
          },
          {
            text: 'Maruchi',
            value: '1',
          },
          {
            text: 'Pascal',
            value: '2',
          },
          {
            text: 'RBI',
            value: '3',
          },
          {
            text: 'GSP',
            value: '4',
          },
          {
            text: 'GP',
            value: '5',
          },
          {
            text: 'FEBEST',
            value: '6',
          },
          {
            text: 'TOYOTA',
            value: '7',
          },
        ]}
      />
    </div>
  )
}
