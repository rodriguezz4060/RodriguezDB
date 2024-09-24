'use client'

import { BootGroupList, Container, Filters, SortGroup, Title } from '@/shared/components/shared'
import { useIntl } from 'react-intl'

export default function Home() {
  const { formatMessage } = useIntl()
  return (
    <>
      <Container className=' secondary dark:bg-zinc-900 px-4 '>
        <Title
          text={formatMessage({ id: 'content.bootKitSelection' })}
          size='lg'
          className='font-extrabold pt-6'
        ></Title>
        <div className='flex justify-end'>
          <SortGroup />
        </div>
      </Container>

      <Container className='h-full pb-14 dark:bg-zinc-900 px-4'>
        <div className='flex gap-[80px]'>
          {/* Фильтрация */}
          <div className='w-[250px]'>
            <Filters />
          </div>

          {/* Список пыльников */}
          <div className='flex-1'>
            <div className='flex flex-col gap-16'>
              <BootGroupList
                items={[
                  {
                    id: 1,
                    name: 'MARUCHI',
                    partNumber: '27-411 ',
                    dIn: 82,
                    dOut: 24,
                    high: 90,
                    imageUrl: 'https://autoyamato.com.ua/image/87245_27-411_1.jpg',
                  },
                  {
                    id: 2,
                    name: 'MARUCHI',
                    partNumber: '27-411 ',
                    dIn: 82,
                    dOut: 24,
                    high: 90,
                    imageUrl: 'https://autoyamato.com.ua/image/87245_27-411_1.jpg',
                  },
                  {
                    id: 3,
                    name: 'MARUCHI',
                    partNumber: '27-411 ',
                    dIn: 82,
                    dOut: 24,
                    high: 90,
                    imageUrl: 'https://autoyamato.com.ua/image/87245_27-411_1.jpg',
                  },
                  {
                    id: 4,
                    name: 'MARUCHI',
                    partNumber: '27-411 ',
                    dIn: 82,
                    dOut: 24,
                    high: 90,
                    imageUrl: 'https://autoyamato.com.ua/image/87245_27-411_1.jpg',
                  },
                  {
                    id: 5,
                    name: 'MARUCHI',
                    partNumber: '27-411 ',
                    dIn: 82,
                    dOut: 24,
                    high: 90,
                    imageUrl: 'https://autoyamato.com.ua/image/87245_27-411_1.jpg',
                  },
                  {
                    id: 6,
                    name: 'MARUCHI',
                    partNumber: '27-411 ',
                    dIn: 82,
                    dOut: 24,
                    high: 90,
                    imageUrl: 'https://autoyamato.com.ua/image/87245_27-411_1.jpg',
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}
