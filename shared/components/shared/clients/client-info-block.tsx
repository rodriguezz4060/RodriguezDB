'use client'

import React from 'react'
import { Container } from '../container'
import { ClientsInfo } from '@/@types/prisma'
import { IdCard, PhoneIcon, TagIcon, TruckIcon } from 'lucide-react'
import { Button } from '../../ui'
import { ClientModal } from '../modals'
import { useIntl } from 'react-intl'
import Link from 'next/link'
import { EditClientButton } from '../buttons'

interface Props {
  client: ClientsInfo
  className?: string
}

export const ClientInfoBlock: React.FC<Props> = ({ client, className }) => {
  const { formatMessage } = useIntl()

  const [openModal, setOpenModal] = React.useState(false)

  return (
    <Container>
      <div className='w-[300px] border p-5 mr-2 bg-white dark:bg-[#18181A] rounded-[5px] shadow-lg'>
        {/* Заголовок и кнопка редактирования */}
        <div className='flex items-center justify-between'>
          <span className='text-xl font-bold text-gray-900 dark:text-white'>
            {formatMessage({ id: 'clients.clientTitle' })}
          </span>
          <EditClientButton id={client.id} className='ml-2' />
        </div>

        {/* Информация о клиенте */}
        <div className='mt-4 space-y-4'>
          <div className='flex items-center flex-1'>
            <IdCard className='w-5 h-5 mr-2 text-gray-500' />
            <span className='font-semibold text-gray-700 dark:text-gray-300'>
              {formatMessage({ id: 'clients.name' })}:
            </span>
            <div className='flex-1 border-b border-dashed border-b-neutral-200 relative top-1 mx-2' />
            {client.name} {client.lastName}
          </div>
          <div className='flex items-center'>
            <PhoneIcon className='w-5 h-5 mr-2 text-gray-500' />
            <span className='font-semibold text-gray-700 dark:text-gray-300'>
              {formatMessage({ id: 'clients.phone' })}:
            </span>
            <div className='flex-1 border-b border-dashed border-b-neutral-200 relative top-1 mx-2' />
            {client.tel}
          </div>
          <div className='flex items-center'>
            <TagIcon className='w-5 h-5 mr-2 text-gray-500' />
            <span className='font-semibold text-gray-700 dark:text-gray-300'>
              {formatMessage({ id: 'clients.VIN' })}:
            </span>
            <div className='flex-1 border-b border-dashed border-b-neutral-200 relative top-1 mx-2' />
            <Link
              href={`https://exist.ua/car-search/?task=vin&code=${client.VIN}`}
              target='_blank'
              className='text-blue-500 hover:text-blue-700'
            >
              {client.VIN}
            </Link>
          </div>
          <div className='flex items-center'>
            <TruckIcon className='w-5 h-5 mr-2 text-gray-500' />
            <span className='font-semibold text-gray-700 dark:text-gray-300'>
              {formatMessage({ id: 'clients.gosNumber' })}:
            </span>
            <div className='flex-1 border-b border-dashed border-b-neutral-200 relative top-1 mx-2' />
            {client.clientCar?.gosNumber || 'Не указан'}
          </div>
          <div className='flex items-center'>
            <TruckIcon className='w-5 h-5 mr-2 text-gray-500' />
            <span className='font-semibold text-gray-700 dark:text-gray-300'>
              {formatMessage({ id: 'clients.clientCar' })}:
            </span>
            <div className='flex-1 border-b border-dashed border-b-neutral-200 relative top-1 mx-2' />
            {client.clientCar?.models || 'Не указана'}
          </div>
        </div>
      </div>

      {/* Модальное окно и кнопка */}
      <ClientModal open={openModal} onClose={() => setOpenModal(false)} client={client} />
      <Button
        onClick={() => setOpenModal(true)}
        className='text-base rounded-[5px] font-bold bg-[#4CAF50] hover:bg-[#388E3C] w-[300px] mt-5'
      >
        {formatMessage({ id: 'clients.maintenanceParts' })}
      </Button>
    </Container>
  )
}
