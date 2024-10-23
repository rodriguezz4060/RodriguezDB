'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'
import React from 'react'
import { formProfileSchema } from './modals/auth-modal/forms/schemas'
import { User } from '@prisma/client'
import { Container } from './container'
import { Title } from './title'
import { FormInput } from './form'
import { Button } from '../ui'
import { useProfileForm } from '@/shared/hooks'
import { useIntl } from 'react-intl'

interface Props {
  data: User
  className?: string
}

export const ProfileForm: React.FC<Props> = ({ data, className }) => {
  const { formatMessage } = useIntl()
  const form = useForm({
    resolver: zodResolver(formProfileSchema),
    defaultValues: {
      fullName: data.fullName,
      email: data.email,
      password: '',
      confirmPassword: '',
    },
  })

  const { onSubmit, onClickSignOut, isLoading } = useProfileForm()

  return (
    <Container className='my-10'>
      <Title
        text={`${formatMessage({ id: 'profile.title' })} | #${data.fullName}`}
        size='md'
        className='font-bold'
      />

      <FormProvider {...form}>
        <form className='flex flex-col gap-5 w-96 mt-10' onSubmit={form.handleSubmit(onSubmit)}>
          <FormInput name='email' label={formatMessage({ id: 'profile.email' })} required />
          <FormInput name='fullName' label={formatMessage({ id: 'profile.fullName' })} required />
          <FormInput
            type='password'
            name='password'
            label={formatMessage({ id: 'profile.password' })}
          />
          <FormInput
            type='password'
            name='confirmPassword'
            label={formatMessage({ id: 'profile.confirmPassword' })}
          />
          <Button disabled={form.formState.isSubmitting} className='text-base mt-5' type='submit'>
            {formatMessage({ id: 'profile.save' })}
          </Button>

          <Button
            onClick={onClickSignOut}
            variant='secondary'
            disabled={form.formState.isSubmitting}
            className='text-base mb-5'
            type='button'
          >
            {formatMessage({ id: 'profile.exit' })}
          </Button>
        </form>
      </FormProvider>
    </Container>
  )
}
