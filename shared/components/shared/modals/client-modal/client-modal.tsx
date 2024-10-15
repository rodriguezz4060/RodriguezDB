'use client'

import { Dialog, DialogContent, DialogTitle } from '@/shared/components/ui/dialog'
import { cn } from '@/shared/lib/utils'
import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { FormTableClientTo } from '../../form'
import { useIntl } from 'react-intl'
import { TableColumns } from '@/shared/constants/table-client-to'
import { MaintenanceDataTable } from '@/shared/constants/table-client-to'
import { ClientsInfo } from '@/@types/prisma'
import { ScrollArea } from '@/shared/components/ui'
import { EditClientCarTo } from '../../buttons'

interface Props {
  open: boolean
  onClose: () => void
  className?: string
  client: ClientsInfo
}

export const ClientModal: React.FC<Props> = ({ open, onClose, className, client }) => {
  const { formatMessage } = useIntl()
  const columns = TableColumns()
  const methods = useForm()

  const maintenanceData = MaintenanceDataTable(client.clientCarTo, client.clientCar)

  const handleClose = () => {
    onClose()
  }

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent
        className={cn(
          'w-[1060px] max-w-[1060px] min-h-[510px] bg-[#fcfcfc] dark:bg-zinc-900 flex flex-col',
          className
        )}
        aria-describedby={undefined}
      >
        <div className='flex items-center justify-between mt-4 mr-5'>
          <DialogTitle className='text-[30px]'>Запчасти ТО</DialogTitle>
          <EditClientCarTo id={client.id} />
        </div>
        <ScrollArea className='h-[510px] rounded-md border'>
          <FormProvider {...methods}>
            <FormTableClientTo
              clientId={client.id}
              name='maintenance'
              label=''
              required
              data={maintenanceData}
              columns={columns}
              className='flex-grow'
            />
          </FormProvider>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  )
}
