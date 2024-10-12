'use client'

import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { FormTableClientData } from '../form'
import { ClientsWithCar } from '@/@types/prisma'
import { TableClientsColumns } from '@/shared/constants/table'
import { useIntl } from 'react-intl'
import { AddClientButton } from '../buttons'
import { cn } from '@/shared/lib/utils'
import { Title } from '../title'

interface Props {
  clients: ClientsWithCar[]
  className?: string
}

export const ClientsPage: React.FC<Props> = ({ clients, className }) => {
  const columns = TableClientsColumns()
  const { formatMessage } = useIntl()
  const methods = useForm()

  return (
    <div className={className}>
      <div className={cn('flex items-center justify-between mb-3 mt-3', className)}>
        <Title
          size='lg'
          className='font-extrabold'
          text={formatMessage({ id: 'clients.labelText' })}
        />
        <AddClientButton />
      </div>
      <FormProvider {...methods}>
        {clients && clients.length > 0 && (
          <FormTableClientData
            name='cars'
            label=''
            data={clients}
            columns={columns}
            itemsPerPage={25}
          />
        )}
      </FormProvider>
    </div>
  )
}
