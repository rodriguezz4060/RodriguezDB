'use client'

import { useState } from 'react'
import toast from 'react-hot-toast'
import { useIntl } from 'react-intl'
import { TFormLoginSchema } from '../components/shared/modals/auth-modal/forms/schemas'
import { signIn } from 'next-auth/react'

interface Props {
  onClose: () => void
}

export const useLoginForm = ({ onClose }: Props) => {
  const { formatMessage } = useIntl()

  const onSubmit = async (data: TFormLoginSchema) => {
    try {
      const resp = await signIn('credentials', {
        ...data,
        redirect: false,
      })

      if (!resp?.ok) {
        throw Error()
      }

      toast.success(formatMessage({ id: 'toast.loginSuccess' }), {
        icon: '✅',
      })
      onClose?.()
    } catch (error) {
      console.error('Error [LOGIN]', error)
      toast.error(formatMessage({ id: 'toast.loginError' }), {
        icon: '❌',
      })
    } finally {
    }
  }

  return {
    onSubmit,
  }
}
