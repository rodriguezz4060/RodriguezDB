'use client'

import React from 'react'
import { Container } from '../container'
import { Title } from '../title'
import Link from 'next/link'
import { Button } from '../../ui'
import { ArrowLeft } from 'lucide-react'
import { AddBootDustCover } from './add-boot-dust-cover'
import { useIntl } from 'react-intl'

interface Props {
  className?: string
}

export const AddBootPage: React.FC<Props> = ({ className }) => {
  const { formatMessage } = useIntl()
  return (
    <Container className='secondary dark:bg-zinc-900 px-4'>
      <div className='flex items-center justify-between p-7'>
        <Title text={formatMessage({ id: 'addForm.saveButton' })} className='font-extrabold' />
        <Link href='/boot-kit/'>
          <Button className='font-bold px-4 py-2'>
            <ArrowLeft size={20} className='mr-2' />
            {formatMessage({ id: 'addForm.backButton' })}
          </Button>
        </Link>
      </div>
      <AddBootDustCover className='max-w-md mx-auto pb-10' />
    </Container>
  )
}
