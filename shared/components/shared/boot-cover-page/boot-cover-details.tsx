import { Container, ProductImage } from '@/shared/components/shared'
import { BootCoverInfo } from './boot-cover-info'
import BootCoverCars from './boot-cover-cars'
import { DeleteBootDustCoverButton } from '../add-forms/delete-boot-cover'

interface BootCoverDetailsProps {
  bootCover: {
    id: number
    name: string
    imageUrl: string | null
    form: string
    type: string
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
  return (
    <>
      <Container className='h-full flex flex-col py-5 secondary dark:bg-zinc-900 '>
        <div className='mb-5 mr-5 flex justify justify-end'>
          <DeleteBootDustCoverButton dustCoverId={bootCover.id} />
        </div>
        <div className='flex flex-1'>
          <ProductImage imageUrl={bootCover.imageUrl} />
          <BootCoverInfo
            name={bootCover.name}
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
