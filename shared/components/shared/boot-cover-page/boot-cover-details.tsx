'use client'

import { Container, DeleteBootButton, EditBootButton } from '@/shared/components/shared'
import { BootCoverInfo } from './boot-cover-info'
import BootCoverCars from './boot-cover-cars'
import { Popover, PopoverContent, PopoverTrigger } from '../../ui/popover'
import { Button } from '../../ui'
import { Settings } from 'lucide-react'
import { useIntl } from 'react-intl'
import { useSession } from 'next-auth/react'

interface BootCoverDetailsProps {
  bootCover: {
    id: number
    name: { name: string }
    imageUrl: string | null
    form: {
      id: number
      form: string
    }
    type: {
      id: number
      type: string
    }
    dIn: number
    dOut: number
    height: number
    partNumber: string
    cars: {
      imageUrl: string | null
      models: string
      carBody: string
      modelYear: string
      engine: string
      volume: string
      carBrand: {
        name: string
        imageUrl: string | null
      }
    }[]
  }
}

export default function BootCoverDetails({ bootCover }: BootCoverDetailsProps) {
  const { formatMessage } = useIntl()

  const { data: session } = useSession()

  const userRole = session?.user?.role
  return (
    <>
      <Container className='h-full flex flex-col py-5 secondary dark:bg-zinc-900 '>
        <div className='mb-5 mr-5 flex justify justify-end'>
          {userRole === 'ADMIN' && (
            <Popover>
              <PopoverTrigger asChild>
                <Button variant='ghost'>
                  <Settings className='mr-2' />
                  {formatMessage({ id: 'bootCoverInfo.settings' })}
                </Button>
              </PopoverTrigger>
              <PopoverContent className='w-auto'>
                <div className='mb-2'>
                  <EditBootButton />
                </div>
                <div className=''>
                  <DeleteBootButton dustCoverId={bootCover.id} />
                </div>
              </PopoverContent>
            </Popover>
          )}
        </div>
        <div className='flex flex-1'>
          <BootCoverInfo
            imageUrl={bootCover.imageUrl}
            name={bootCover.name.name}
            form={bootCover.form}
            type={bootCover.type}
            dIn={bootCover.dIn}
            dOut={bootCover.dOut}
            height={bootCover.height}
            partNumber={bootCover.partNumber}
          />
        </div>
      </Container>

      <BootCoverCars cars={bootCover.cars} />
    </>
  )
}
