'use client'

import { Container, Title } from '@/shared/components/shared'
import { useIntl } from 'react-intl'

export default function Home() {
  const { formatMessage } = useIntl()
  return (
    <>
      <Container className='secondary h-screen dark:bg-zinc-900 px-4'>
        <Title
          text={formatMessage({ id: 'content.selectSection' })}
          size='lg'
          className='font-extrabold pt-4'
        ></Title>
      </Container>
    </>
  )
}
