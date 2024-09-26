import { prisma } from '@/prisma/prisma-client'
import { Container, ProductImage, Title } from '@/shared/components/shared'
import { Button } from '@/shared/components/ui'
import { SquareArrowOutUpRight } from 'lucide-react'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export default async function BootPage({ params: { id } }: { params: { id: string } }) {
  const bootCover = await prisma.bootDustCover.findFirst({
    where: { id: Number(id) },
    include: {
      cars: {
        include: {
          carBrand: true,
        },
      },
    },
  })

  if (!bootCover) {
    return notFound()
  }

  const car = bootCover.cars[0]

  return (
    <>
      <Container className='h-full flex flex-col py-10 secondary dark:bg-zinc-900 '>
        <div className='flex flex-1'>
          <ProductImage imageUrl={bootCover.imageUrl} />

          <div className='w-[490px] p-7 mr-4 bg-[#fcfcfc] dark:bg-[#2b2b2b] rounded-lg shadow-md'>
            <Title text={bootCover.name} size='md' className='font-extrabold mb-4 text-center' />

            <div className='grid grid-cols-2 gap-4'>
              <div>
                <p className='font-semibold text-gray-700 dark:text-gray-300'>Форма пыльника:</p>
                <p className='text-gray-600 dark:text-gray-400'>{bootCover.form}</p>
              </div>
              <div>
                <p className='font-semibold text-gray-700 dark:text-gray-300'>Тип пыльника:</p>
                <p className='text-gray-600 dark:text-gray-400'>{bootCover.type}</p>
              </div>
              <div>
                <p className='font-semibold text-gray-700 dark:text-gray-300'>Наружный:</p>
                <p className='text-gray-600 dark:text-gray-400'>{bootCover.dIn} мм</p>
              </div>
              <div>
                <p className='font-semibold text-gray-700 dark:text-gray-300'>Внутренний:</p>
                <p className='text-gray-600 dark:text-gray-400'>{bootCover.dOut} мм</p>
              </div>
              <div>
                <p className='font-semibold text-gray-700 dark:text-gray-300'>Высота:</p>
                <p className='text-gray-600 dark:text-gray-400'>{bootCover.height} мм</p>
              </div>
            </div>

            <div className='flex justify-between items-center mt-10'>
              <div className='text-[20px]'>{bootCover.partNumber}</div>
              <Link
                href={`https://autoyamato.com.ua/newsearch/?keyword=${bootCover.partNumber}`}
                target='_blank'
              >
                <Button className='text-base font-bold'>
                  <SquareArrowOutUpRight size={20} className='mr-1' />
                  Наличие
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Container>

      <Container className='h-full flex flex-col py-5 secondary dark:bg-zinc-900'>
        {car && (
          <div className='mx-5'>
            <table className='min-w-full divide-y divide-gray-200'>
              <thead className='bg-gray-50'>
                <tr>
                  <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                    Image
                  </th>
                  <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                    Brand
                  </th>
                  <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                    Name
                  </th>
                  <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                    Model
                  </th>
                  <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                    Year
                  </th>
                </tr>
              </thead>
              <tbody className='bg-white dark:bg-gray-700 divide-y divide-gray-200'>
                <tr>
                  <td className='px-6 py-4 whitespace-nowrap'>
                    <img src={car.imageUrl} alt='Logo' className='h-[30px] w-auto' />
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap'>{car.carBrand.name}</td>
                  <td className='px-6 py-4 whitespace-nowrap'>{car.models}</td>
                  <td className='px-6 py-4 whitespace-nowrap'>{car.carBody}</td>
                  <td className='px-6 py-4 whitespace-nowrap'>{car.modelYear}</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </Container>
    </>
  )
}
