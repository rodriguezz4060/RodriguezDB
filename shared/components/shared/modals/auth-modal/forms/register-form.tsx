'use client'

import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { TFormRegisterSchema, formRegisterSchema } from './schemas'
import toast from 'react-hot-toast'
import { FormInput } from '../../../form'
import { Button } from '@/shared/components/ui'
import { registerUser } from '@/app/actions'
import { useIntl } from 'react-intl'

interface Props {
  onClose?: VoidFunction
  onClickLogin?: VoidFunction
  setType: React.Dispatch<React.SetStateAction<'login' | 'email' | 'register'>>
}

export const RegisterForm: React.FC<Props> = ({ setType, onClose, onClickLogin }) => {
  const { formatMessage } = useIntl()
  const form = useForm<TFormRegisterSchema>({
    resolver: zodResolver(formRegisterSchema),
    defaultValues: {
      email: '',
      fullName: '',
      password: '',
      confirmPassword: '',
    },
  })

  const onSubmit = async (data: TFormRegisterSchema) => {
    try {
      await registerUser({
        email: data.email,
        fullName: data.fullName,
        password: data.password,
      })

      toast.error('Регистрация успешна 📝.', {
        icon: '✅',
      })

      onClose?.()
    } catch (error) {
      return toast.error('Неверный E-Mail или пароль', {
        icon: '❌',
      })
    }
  }

  console.log(form.formState)

  return (
    <FormProvider {...form}>
      <form className='flex flex-col gap-4 w-[80%]' onSubmit={form.handleSubmit(onSubmit)}>
        <p className='text-xl font-bold text-center'>{formatMessage({ id: 'register.label' })}</p>

        <FormInput
          name='email'
          label={formatMessage({ id: 'register.email' })}
          placeholder='user@gmail.com'
          required
        />
        <FormInput
          name='fullName'
          label={formatMessage({ id: 'register.fullName' })}
          placeholder='RodriguezDB'
          required
        />
        <FormInput
          name='password'
          label={formatMessage({ id: 'register.password' })}
          type='password'
          placeholder='********'
          required
        />
        <FormInput
          name='confirmPassword'
          label={formatMessage({ id: 'register.confirmPassword' })}
          type='password'
          placeholder='********'
          required
        />

        <Button
          variant='blue'
          loading={form.formState.isSubmitting}
          className='flex items-center gap-2 text-sm font-bold bg-secondary'
          type='submit'
        >
          {formatMessage({ id: 'register.registerButton' })}
        </Button>
        <p className='text-gray-400 text-center'>
          {formatMessage({ id: 'register.alreadyHaveAccount' })}{' '}
          <span
            className='text-blue-600 hover:text-blue-700 cursor-pointer'
            onClick={() => setType('login')}
          >
            {formatMessage({ id: 'register.enter' })}
          </span>
        </p>
      </form>
    </FormProvider>
  )
}
