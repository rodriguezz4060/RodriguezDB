import React from 'react'
import { Container } from '../container'
import { ClientsWithCar } from '@/@types/prisma'
import { IdCard, PhoneIcon, TagIcon, TruckIcon } from 'lucide-react'
import { AccordionForm } from '../form'

interface Props {
  client: ClientsWithCar
  className?: string
}

export const ClientInfoPage: React.FC<Props> = ({ client, className }) => {
  const filters = [
    { label: 'Air Filter', value: client.clientCar?.airFilter },
    { label: 'Oil Filter', value: client.clientCar?.oilFilter },
    { label: 'Gas Filter', value: client.clientCar?.gasFilter },
  ]

  const brakes = [
    { label: 'Front Brake', value: client.clientCar?.frontBrake },
    { label: 'Rear Brake', value: client.clientCar?.rearBrake },
  ]

  const gear = [
    { label: 'Передний сайленблок', value: 'j42031' },
    { label: 'Задний сайленблок', value: 'j42030' },
  ]

  return (
    <Container className='min-h-screen dark:bg-zinc-900 px-4 flex flex-col'>
      <div className='mb-4 text-2xl font-bold'>База клиентов</div>
      <div className='flex-1 flex gap-[60px]'>
        <Container>
          <div className='w-[300px] p-5 mr-2 bg-white dark:bg-gray-800 rounded-lg shadow-lg'>
            <span className='text-xl font-bold text-gray-900 dark:text-white'>Клиент</span>
            <div className='mt-4 space-y-4'>
              <div className='flex items-center'>
                <IdCard className='w-5 h-5 mr-2 text-gray-500' />
                <span className='font-semibold text-gray-700 dark:text-gray-300'>Имя:</span>{' '}
                {client.name} {client.lastName}
              </div>
              <div className='flex items-center'>
                <PhoneIcon className='w-5 h-5 mr-2 text-gray-500' />
                <span className='font-semibold text-gray-700 dark:text-gray-300'>
                  Телефон:
                </span>{' '}
                {client.tel}
              </div>
              <div className='flex items-center'>
                <TagIcon className='w-5 h-5 mr-2 text-gray-500' />
                <span className='font-semibold text-gray-700 dark:text-gray-300'>VIN:</span>{' '}
                {client.VIN}
              </div>
              <div className='flex items-center'>
                <TruckIcon className='w-5 h-5 mr-2 text-gray-500' />
                <span className='font-semibold text-gray-700 dark:text-gray-300'>
                  Гос. номер:
                </span>{' '}
                {client.clientCar?.gosNumber || 'Не указан'}
              </div>
              <div className='flex items-center'>
                <TruckIcon className='w-5 h-5 mr-2 text-gray-500' />
                <span className='font-semibold text-gray-700 dark:text-gray-300'>Модель:</span>{' '}
                {client.clientCar?.models || 'Не указана'}
              </div>
            </div>
          </div>
        </Container>

        <div className='flex-1'>
          <Container>
            <p className='text-2xl font-bold'>Запчасти</p>
            <div className=' grid grid-cols-3 gap-4'>
              <AccordionForm label='Фильтры' parts={filters} />
              <AccordionForm label='Тормоза' parts={brakes} />
              <AccordionForm label='Сайленблоки' parts={gear} />
              <AccordionForm label='Шрусы' parts={filters} />
              <AccordionForm label='Пыльник' parts={filters} />
              <AccordionForm label='Тяжки' parts={filters} />
              <AccordionForm label='Дворники' parts={filters} />
            </div>
          </Container>
        </div>
      </div>
    </Container>
  )
}
