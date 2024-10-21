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
import { CarCardToInfo } from './car-card-info'

interface Props {
  oilInfo: OilInfo
  className?: string
}

export const CarToInfoPage: React.FC<Props> = ({ oilInfo, className }) => {
  const { formatMessage } = useIntl()

  const methods = useForm()

  const maintenanceData = MaintenanceDataToTable(oilInfo.oilToInfo)
  const columns = TableColumns()

  return (
    <Container className='h-full flex flex-col py-5 secondary dark:bg-zinc-900'>
      <CarCardToInfo oilInfo={oilInfo} />
      <FormProvider {...methods}>
        <FormTableCarTo
          name='maintenance'
          label={formatMessage({ id: 'carToPage.tableTitle' })}
          data={maintenanceData}
          columns={columns}
          className='flex-grow'
        />
      </FormProvider>
    </Container>
  )
}
