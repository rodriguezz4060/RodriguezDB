'use client'

import { AddBootDustCover, Container, Title } from '@/shared/components/shared'
import { Button } from '@/shared/components/ui'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { useIntl } from 'react-intl'

export default function Home() {
  const { formatMessage } = useIntl()

  return (
    <>
      <Container className='secondary dark:bg-zinc-900 px-4'>
        <div className='flex items-center justify-between p-7'>
          <Title text={'Добавить пыльник'} className='font-extrabold' />
          <Link href='/boot-kit/'>
            <Button className='font-bold px-4 py-2'>
              <ArrowLeft size={20} className='mr-2' />
              {formatMessage({ id: 'addForm.backButton' })}
            </Button>
          </Link>
        </div>
        <AddBootDustCover className='max-w-md mx-auto pb-10' />
      </Container>
    </>
  )
}
