'use client'

import toast from 'react-hot-toast'
import { useIntl } from 'react-intl'
import { TFormRegisterSchema } from '../components/shared/modals/auth-modal/forms/schemas'
import { registerUser } from '@/app/actions'

interface Props {
  onClose?: () => void
}

export const useRegisterForm = ({ onClose }: Props) => {
  const { formatMessage } = useIntl()

  const onSubmit = async (data: TFormRegisterSchema) => {
    try {
      await registerUser({
        email: data.email,
        fullName: data.fullName,
        password: data.password,
      })

      toast.error(formatMessage({ id: 'toast.registerSuccess' }), {
        icon: '✅',
      })

      onClose?.()
    } catch (error) {
      return toast.error(formatMessage({ id: 'toast.registerError' }), {
        icon: '❌',
      })
    }
  }

  return {
    onSubmit,
  }
}
