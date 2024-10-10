'use client'

import { Dialog, DialogContent, DialogTitle } from '@/shared/components/ui/dialog'
import { cn } from '@/shared/lib/utils'
import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { FormTableClientTo } from '../../form'
import { useIntl } from 'react-intl'
import { TableColumns } from '@/shared/constants/table-client-to'
import { MaintenanceDataTable } from '@/shared/constants/table-client-to'
import { ClientsWithCar } from '@/@types/prisma'

interface Props {
  open: boolean
  onClose: () => void
  className?: string
  client: ClientsWithCar
}

export const ClientModal: React.FC<Props> = ({ open, onClose, className, client }) => {
  const { formatMessage } = useIntl()
  const columns = TableColumns()
  const methods = useForm()

  const maintenanceData = MaintenanceDataTable(client.clientCarTo)

  const handleClose = () => {
    onClose()
  }

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent
        className={cn(
          'w-[1060px] max-w-[1060px] min-h-[510px] bg-[#fcfcfc] dark:bg-zinc-900',
          className
        )}
        aria-describedby={undefined}
      >
        <DialogTitle className='text-[30px]'>Запчасти ТО</DialogTitle>
        <FormProvider {...methods}>
          <FormTableClientTo
            name='maintenance'
            label=''
            required
            data={maintenanceData}
            columns={columns}
          />
        </FormProvider>
      </DialogContent>
    </Dialog>
  )
}
