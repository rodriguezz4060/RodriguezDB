'use client'

import React from 'react'
import { useIntl } from 'react-intl'
import { Container } from '../container'
import { CarWithBrand } from '@/@types/prisma'
import Link from 'next/link'

interface Props {
  cars: CarWithBrand[]
  classNames?: string
}

export const CarsPage: React.FC<Props> = ({ cars, classNames }) => {
  const { formatMessage } = useIntl()

  return (
    <Container className='h-full flex flex-col py-5 secondary dark:bg-zinc-900'>
      {cars && cars.length > 0 && (
        <div className='mx-5'>
          <table className='min-w-full divide-y divide-gray-200'>
            <thead className='bg-gray-50'>
              <tr>
                <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                  {formatMessage({ id: 'bootCars.carBrand' })}
                </th>
                <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                  {formatMessage({ id: 'bootCars.carImage' })}
                </th>
                <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                  {formatMessage({ id: 'bootCars.carModel' })}
                </th>
                <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                  {formatMessage({ id: 'bootCars.carBody' })}
                </th>
                <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                  {formatMessage({ id: 'bootCars.carYear' })}
                </th>
                <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                  {formatMessage({ id: 'bootCars.carEngine' })}
                </th>
                <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                  {formatMessage({ id: 'bootCars.carVolume' })}
                </th>
                <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                  {formatMessage({ id: 'bootCars.actions' })}
                </th>
              </tr>
            </thead>
            <tbody className='bg-white dark:bg-gray-700 divide-y divide-gray-200'>
              {cars.map((car, index) => (
                <tr key={index}>
                  <td className='px-6 py-4 whitespace-nowrap font-extrabold'>
                    {car.carBrand.name}
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap'>
                    <img src={car.imageUrl ?? ''} alt='Logo' className='h-[30px] w-auto' />
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap'>{car.models}</td>
                  <td className='px-6 py-4 whitespace-nowrap'>{car.carBody}</td>
                  <td className='px-6 py-4 whitespace-nowrap'>{car.modelYear}</td>
                  <td className='px-6 py-4 whitespace-nowrap'>{car.engine}</td>
                  <td className='px-6 py-4 whitespace-nowrap'>{car.volume}</td>
                  <td className='px-6 py-4 whitespace-nowrap'>
                    <Link href={`/cars/edit/${car.id}`} className='text-blue-500 hover:underline'>
                      Edit
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </Container>
  )
}
