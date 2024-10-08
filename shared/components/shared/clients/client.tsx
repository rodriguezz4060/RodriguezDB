'use client'

import React from 'react'
import { useForm } from 'react-hook-form'
import { ClientsWithCar } from '@/@types/prisma'
import { TableClientsColumns } from '@/shared/constants/table'
import { useIntl } from 'react-intl'
import { Container } from '../container'
import { cn } from '@/shared/lib/utils'

interface Props {
  client: ClientsWithCar
  className?: string
}

export const Client: React.FC<Props> = ({ client, className }) => {
  const columns = TableClientsColumns()
  const { formatMessage } = useIntl()

  return (
    <Container className='min-h-screen dark:bg-zinc-900 px-4 flex flex-col'>
      <div className='mb-4'>база клиентов</div>
      <div className='flex-1 flex gap-[80px]'>
        <Container>
          <div className='w-[300px] p-7 mr-4 bg-[#fcfcfc] dark:bg-[#1b1b1b] rounded-sm shadow-md'>
            <span className='text-lg font-bold'>Клиент</span>
            <div className='mt-4'>
              <div className='mb-2'>
                <span className='font-semibold'>Имя:</span> {client.name}
              </div>
              <div className='mb-2'>
                <span className='font-semibold'>Фамилия:</span> {client.lastName}
              </div>
              <div className='mb-2'>
                <span className='font-semibold'>Телефон:</span> {client.tel}
              </div>
              <div className='mb-2'>
                <span className='font-semibold'>VIN:</span> {client.VIN}
              </div>
              <div className='mb-2'>
                <span className='font-semibold'>Гос. номер:</span> {clientCar.gosNumber}
              </div>
              <div className='mb-2'>
                <span className='font-semibold'>Модель:</span> {clientCar.models}
              </div>
            </div>
          </div>
        </Container>

        <div className='flex-1'>
          <Container>
            <div className='flex flex-col gap-16'>
              <p>adasdas</p>
            </div>
          </Container>
        </div>
      </div>
    </Container>
  )
}
