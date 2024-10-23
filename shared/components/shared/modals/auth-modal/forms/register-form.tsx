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
        <p className='text-xl font-bold text-center'>Регистрация</p>

        <FormInput
          name='email'
          label={formatMessage({ id: 'registerForm.formInputEmailLabel' })}
          placeholder='user@gmail.com'
          required
        />
        <FormInput
          name='fullName'
          label={formatMessage({ id: 'registerForm.formInputNameLabel' })}
          placeholder='RodriguezDB'
          required
        />
        <FormInput
          name='password'
          label={formatMessage({ id: 'registerForm.formInputPassLabel' })}
          type='password'
          placeholder='********'
          required
        />
        <FormInput
          name='confirmPassword'
          label={formatMessage({ id: 'registerForm.formInputConfirmPassLabel' })}
          type='password'
          placeholder='********'
          required
        />

        <Button
          variant='blue'
          loading={form.formState.isSubmitting}
          className='flex items-center gap-2 text-sm font-bold bg-secondary hover:bg-blue-700 text-primary hover:text-white'
          type='submit'
        >
          {formatMessage({ id: 'registerForm.regButton' })}
        </Button>
        <p className='text-gray-400 text-center'>
          Есть есть аккаунт?{' '}
          <span
            className='text-a-color hover:text-a-color-hover cursor-pointer'
            onClick={() => setType('login')}
          >
            Войти
          </span>
        </p>
      </form>
    </FormProvider>
  )
}
