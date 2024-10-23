'use client'

import { useState } from 'react'
import { updateUserInfo } from '@/app/actions'
import toast from 'react-hot-toast'
import { useIntl } from 'react-intl'
import { TFormProfileSchema } from '../components/shared/modals/auth-modal/forms/schemas'
import { signOut } from 'next-auth/react'

export const useProfileForm = () => {
  const { formatMessage } = useIntl()
  const [isLoading, setIsLoading] = useState(false)

  const onSubmit = async (data: TFormProfileSchema) => {
    try {
      setIsLoading(true)

      const updatedData = {
        email: data.email,
        fullName: data.fullName,
        password: data.password || undefined, // Передаем пароль только если он был изменен
      }

      await updateUserInfo(updatedData)

      toast.error('Данные обновлены 📝', {
        icon: '✅',
      })
    } catch (error) {
      return toast.error('Ошибка при обновлении данных', {
        icon: '❌',
      })
    } finally {
      setIsLoading(false)
    }
  }

  const onClickSignOut = () => {
    signOut({
      callbackUrl: '/',
    })
  }

  return {
    onSubmit,
    onClickSignOut,
    isLoading,
  }
}
