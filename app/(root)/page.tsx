'use client'

import { Container, Title } from '@/shared/components/shared'
import { MainPageButtons } from '@/shared/components/shared/main-page-button'
import { useIntl } from 'react-intl'

export default function Home() {
  const { formatMessage } = useIntl()
  return (
    <>
      <Container className='secondary dark:bg-zinc-900 px-4 pb-10'>
        <Title
          text={formatMessage({ id: 'content.selectSection' })}
          size='lg'
          className='font-extrabold pt-4'
        ></Title>
      </Container>

      <Container className='h-screen dark:bg-zinc-900'>
        <div className='flex-1'>
          <MainPageButtons loading />
        </div>
      </Container>
    </>
  )
}
