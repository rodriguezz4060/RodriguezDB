'use client'
import { Container, FormTable } from '@/shared/components/shared'
import { FormProvider, useForm } from 'react-hook-form'
import { useIntl } from 'react-intl'

interface BootCoverCarsProps {
  cars: {
    imageUrl: string | null
    models: string
    carBody: string
    modelYear: string
    engine: string
    volume: string
    carBrand: {
      name: string
      imageUrl?: string | null
    }
  }[]
}

export default function BootCoverCars({ cars }: BootCoverCarsProps) {
  const { formatMessage } = useIntl()
  const methods = useForm()

  const columns = [
    { key: 'carBrand.name', label: formatMessage({ id: 'bootCars.carBrand' }) },
    { key: 'imageUrl', label: formatMessage({ id: 'bootCars.carImage' }) },
    { key: 'models', label: formatMessage({ id: 'bootCars.carModel' }) },
    { key: 'carBody', label: formatMessage({ id: 'bootCars.carBody' }) },
    { key: 'modelYear', label: formatMessage({ id: 'bootCars.carYear' }) },
    { key: 'engine', label: formatMessage({ id: 'bootCars.carEngine' }) },
    { key: 'volume', label: formatMessage({ id: 'bootCars.carVolume' }) },
  ]

  return (
    <FormProvider {...methods}>
      <Container className='h-full flex flex-col py-5 secondary dark:bg-zinc-900'>
        {cars && cars.length > 0 && (
          <FormTable
            name='cars'
            label={formatMessage({ id: 'bootCars.carsList' })}
            data={cars}
            columns={columns}
          />
        )}
      </Container>
    </FormProvider>
  )
}
