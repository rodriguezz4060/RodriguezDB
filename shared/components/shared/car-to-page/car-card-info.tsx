'use client'

import React from 'react'
import { useIntl } from 'react-intl'
import { OilInfo } from '@/@types/prisma'
import { cn } from '@/shared/lib/utils'
import { Separator } from '../../ui'
import { EditCarToButton } from '../buttons'

interface Props {
  oilInfo: OilInfo
  className?: string
}

export const CarCardToInfo: React.FC<Props> = ({ oilInfo, className }) => {
  const { formatMessage } = useIntl()

  const src = oilInfo.imageUrl || '/no_img.jpg'

  return (
    <div className='flex flex-wrap justify-start gap-6'>
      <div className='grid gap-[20px]'>
        <div
          className={cn(
            `flex flex-row border items-start p-3 bg-secondary
                 dark:bg-[#18181A] rounded-[5px] h-auto`,
            className
          )}
        >
          <div className='flex flex-row items-center w-full'>
            <img className='min-w-[200px] max-w-[200px]' src={src} alt={oilInfo.models} />

            <Separator orientation='vertical' className='w-px h-24 mx-6 bg-gray-300' />

            <div className='flex flex-col flex-1 w-[300px]'>
              <div className='flex flex-col'>
                <div className='flex'>
                  <span className='flex flex-1 '>
                    {formatMessage({ id: 'carToPage.model' })}
                    <div className='flex-1 border-b border-dashed border-b-neutral-200 relative -top-1 mx-2' />
                    <div className=''>{oilInfo.models}</div>
                  </span>
                </div>

                <div className='flex'>
                  <span className='flex flex-1 '>
                    {formatMessage({ id: 'carToPage.body' })}
                    <div className='flex-1 border-b border-dashed border-b-neutral-200 relative -top-1 mx-2' />
                    {oilInfo.carBody}
                  </span>
                </div>

                <div className='flex'>
                  <span className='flex flex-1 '>
                    {formatMessage({ id: 'carToPage.carYear' })}
                    <div className='flex-1 border-b border-dashed border-b-neutral-200 relative -top-1 mx-2' />
                    {oilInfo.modelYear}
                  </span>
                </div>

                <div className='flex'>
                  <span className='flex flex-1 '>
                    {formatMessage({ id: 'carToPage.engine' })}
                    <div className='flex-1 border-b border-dashed border-b-neutral-200 relative -top-1 mx-2' />
                    {oilInfo.engine}
                  </span>
                </div>

                <div className='flex'>
                  <span className='flex flex-1 '>
                    {formatMessage({ id: 'carToPage.engineVolume' })}
                    <div className='flex-1 border-b border-dashed border-b-neutral-200 relative -top-1 mx-2' />
                    {oilInfo.volume}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <EditCarToButton id={oilInfo.id} className='absolute top-2 right-2' />
        </div>
      </div>
    </div>
  )
}
