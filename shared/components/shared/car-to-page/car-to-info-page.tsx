'use client'

import React from 'react'
import { useIntl } from 'react-intl'
import { Container } from '../container'
import { OilInfo } from '@/@types/prisma'

import Link from 'next/link'
import { cn } from '@/shared/lib/utils'
import { Separator } from '../../ui'
import { FormProvider, useForm } from 'react-hook-form'
import { FormTableCarTo } from '../form'
import { MaintenanceDataToTable, TableColumns } from '@/shared/constants/table-client-to'

interface Props {
  oilInfo: OilInfo
  className?: string
}

export const CarToInfoPage: React.FC<Props> = ({ oilInfo, className }) => {
  const { formatMessage } = useIntl()

  const methods = useForm()

  // Извлекаем первый элемент массива oilToInfo
  const oilToInfo = oilInfo.oilToInfo ? oilInfo.oilToInfo[0] : null

  const maintenanceData = MaintenanceDataToTable(oilToInfo)
  const columns = TableColumns()

  return (
    <Container className='h-full flex flex-col py-5 secondary dark:bg-zinc-900'>
      <div className='flex flex-wrap justify-start gap-6'>
        <div className='grid gap-[20px]'>
          <div
            className={cn(
              `flex flex-row border items-start p-3 bg-secondary
                 dark:bg-[#18181A] rounded-[5px] h-auto`,
              className
            )}
          >
            <div className='flex flex-row items-center'>
              <img className='min-w-[200px]' src={oilInfo.imageUrl} alt={oilInfo.models} />

              <Separator orientation='vertical' className='w-px h-24 mx-6 bg-gray-300' />

              <div className='flex flex-col w-[200px]'>
                <div className='flex'>
                  <span className='flex flex-1 '>
                    Марка:
                    <div className='flex-1 border-b border-dashed border-b-neutral-200 relative -top-1 mx-2' />
                    {oilInfo.carBrand?.name}
                  </span>
                </div>

                <div className='flex'>
                  <span className='flex flex-1 '>
                    Год выпуска:
                    <div className='flex-1 border-b border-dashed border-b-neutral-200 relative -top-1 mx-2' />
                    {oilInfo.modelYear}
                  </span>
                </div>

                <div className='flex'>
                  <span className='flex flex-1 '>
                    Кузов:
                    <div className='flex-1 border-b border-dashed border-b-neutral-200 relative -top-1 mx-2' />
                    {oilInfo.carBody}
                  </span>
                </div>

                <div className='flex'>
                  <span className='flex flex-1 '>
                    Двигатель:
                    <div className='flex-1 border-b border-dashed border-b-neutral-200 relative -top-1 mx-2' />
                    {oilInfo.engine}
                  </span>
                </div>

                <div className='flex'>
                  <span className='flex flex-1 '>
                    Объем:
                    <div className='flex-1 border-b border-dashed border-b-neutral-200 relative -top-1 mx-2' />
                    {oilInfo.volume}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FormProvider {...methods}>
        <FormTableCarTo
          name='maintenance'
          label='Информация о ТО'
          data={maintenanceData}
          columns={columns}
          className='flex-grow'
        />
      </FormProvider>
    </Container>
  )
}
