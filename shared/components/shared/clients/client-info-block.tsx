'use client'

import React from 'react'
import { Container } from '../container'
import { ClientsInfo } from '@/@types/prisma'
import { IdCard, PhoneIcon, TagIcon, TruckIcon } from 'lucide-react'
import { Button } from '../../ui'
import { ClientModal } from '../modals'

interface Props {
  client: ClientsInfo
  className?: string
}

export const ClientInfoBlock: React.FC<Props> = ({ client, className }) => {
  const [openModal, setOpenModal] = React.useState(false)

  return (
    <Container className='min-h-screen dark:bg-zinc-900 flex flex-col'>
      <div className='flex-1 flex '>
        <Container>
          <div className='w-[300px] p-5 mr-2 bg-white dark:bg-gray-800 rounded-sm shadow-lg'>
            <span className='text-xl font-bold text-gray-900 dark:text-white'>Клиент</span>
            <div className='mt-4 space-y-4'>
              <div className='flex items-center flex-1'>
                <IdCard className='w-5 h-5 mr-2 text-gray-500' />
                <span className='font-semibold text-gray-700 dark:text-gray-300'>Имя:</span>{' '}
                <div className='flex-1 border-b border-dashed border-b-neutral-200 relative top-1 mx-2' />
                {client.name} {client.lastName}
              </div>
              <div className='flex items-center'>
                <PhoneIcon className='w-5 h-5 mr-2 text-gray-500' />
                <span className='font-semibold text-gray-700 dark:text-gray-300'>Телефон:</span>
                <div className='flex-1 border-b border-dashed border-b-neutral-200 relative top-1 mx-2' />
                {client.tel}
              </div>
              <div className='flex items-center'>
                <TagIcon className='w-5 h-5 mr-2 text-gray-500' />
                <span className='font-semibold text-gray-700 dark:text-gray-300'>VIN:</span>
                <div className='flex-1 border-b border-dashed border-b-neutral-200 relative top-1 mx-2' />
                {client.VIN}
              </div>
              <div className='flex items-center'>
                <TruckIcon className='w-5 h-5 mr-2 text-gray-500' />
                <span className='font-semibold text-gray-700 dark:text-gray-300'>Гос. номер:</span>
                <div className='flex-1 border-b border-dashed border-b-neutral-200 relative top-1 mx-2' />
                {client.clientCar?.gosNumber || 'Не указан'}
              </div>
              <div className='flex items-center'>
                <TruckIcon className='w-5 h-5 mr-2 text-gray-500' />
                <span className='font-semibold text-gray-700 dark:text-gray-300'>Модель:</span>
                <div className='flex-1 border-b border-dashed border-b-neutral-200 relative top-1 mx-2' />
                {client.clientCar?.models || 'Не указана'}
              </div>
            </div>
          </div>

          <ClientModal open={openModal} onClose={() => setOpenModal(false)} client={client} />
          <Button
            onClick={() => setOpenModal(true)}
            className='text-base font-bold bg-[#4CAF50] hover:bg-[#388E3C] w-[300px] mt-5'
          >
            Запчасти ТО
          </Button>
        </Container>
      </div>
    </Container>
  )
}
