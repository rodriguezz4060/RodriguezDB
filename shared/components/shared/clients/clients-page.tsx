'use client'

import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { FormTableClientData } from '../form'
import { ClientsWithCar } from '@/@types/prisma'
import { TableClientsColumns } from '@/shared/constants/table'
import { useIntl } from 'react-intl'

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
      <FormProvider {...methods}>
        {clients && clients.length > 0 && (
          <FormTableClientData
            name='cars'
            label={formatMessage({ id: 'clients.labelText' })}
            data={clients}
            columns={columns}
            itemsPerPage={25}
          />
        )}
      </FormProvider>
    </div>
  )
}
