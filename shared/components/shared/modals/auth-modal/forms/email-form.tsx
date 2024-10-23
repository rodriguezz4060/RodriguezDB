import { Button } from '@/shared/components/ui/button'
import { zodResolver } from '@hookform/resolvers/zod'
import { signIn } from 'next-auth/react'
import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { useIntl } from 'react-intl'
import { formLoginSchema, TFormLoginSchema } from './schemas'
import { Title } from '../../../title'
import { FormInput } from '../../../form'
import toast from 'react-hot-toast'

interface Props {
  onClose?: VoidFunction
  setType: React.Dispatch<React.SetStateAction<'login' | 'email' | 'register'>>
}

export const EmailForm: React.FC<Props> = ({ setType, onClose }) => {
  const { formatMessage } = useIntl()
  const form = useForm<TFormLoginSchema>({
    resolver: zodResolver(formLoginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })
  const onSubmit = async (data: TFormLoginSchema) => {
    try {
      const resp = await signIn('credentials', {
        ...data,
        redirect: false,
      })

      if (!resp?.ok) {
        throw Error()
      }

      toast.success('Вы вошли в аккаунт', {
        icon: '✅',
      })
      onClose?.()
    } catch (error) {
      console.error('Error [LOGIN]', error)
      toast.error('Не удалось войти в аккаунт', {
        icon: '❌',
      })
    }
  }

  return (
    <FormProvider {...form}>
      <form className='flex flex-col gap-4' onSubmit={form.handleSubmit(onSubmit)}>
        <div className='flex justify-between items-center w-[85%]'>
          <div className='mr-2'>
            <Title
              text={formatMessage({ id: 'loginForm.title' })}
              size='md'
              className='font-bold'
            />
            {/* <p className='text-gray-400'> */}
            {/* 	{formatMessage({ id: 'loginForm.loginDescription' })} */}
            {/* </p> */}
          </div>
        </div>

        <FormInput
          name='email'
          label={formatMessage({ id: 'loginForm.formInputEmailLabel' })}
          placeholder='user@stormic.app'
          required
        />
        <FormInput
          name='password'
          label={formatMessage({ id: 'loginForm.formInputPassLabel' })}
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
          {formatMessage({ id: 'loginForm.loginButton' })}
        </Button>
        <p className='text-gray-400 text-center'>
          Нет аккаунта?{' '}
          <span
            className='text-a-color hover:text-a-color-hover cursor-pointer'
            onClick={() => setType('register')}
          >
            Создать
          </span>
        </p>
      </form>
    </FormProvider>
  )
}
