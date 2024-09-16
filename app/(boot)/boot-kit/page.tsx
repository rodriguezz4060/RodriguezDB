'use client'

import { Container, SortGroup, Title } from '@/shared/components/shared'
import { useIntl } from 'react-intl'

export default function Home() {
  const { formatMessage } = useIntl()
  return (
    <>
      <Container className=' secondary dark:bg-zinc-900 px-4'>
        <Title
          text={formatMessage({ id: 'content.bootKitSelection' })}
          size='lg'
          className='font-extrabold pt-4'
        ></Title>
        <div className='flex justify-end'>
          <SortGroup />
        </div>
      </Container>

      <Container className='pb-14 h-screen dark:bg-zinc-900 px-4'>
        <div className='flex gap-[60px]'>
          {/* Фильтация */}
          <div className='w-[250px]'>
            {/* <Filters/> */}
            Фильтра
          </div>

          {/* Список пыльников */}
          <div className='flex-1'>
            <div className='flex flex-col gap-16'>Список пыльников</div>
          </div>
        </div>
      </Container>
    </>
  )
}
