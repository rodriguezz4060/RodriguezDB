'use client'

import { useState } from 'react'
import { updateClientProfile } from '@/app/actions'
import toast from 'react-hot-toast'
import { useIntl } from 'react-intl'
import { TFormEditClientProfileSchema } from '../components/shared/clients/schemas/edit-client-profile-schemas'

export const useEditClientProfileForm = (form: { reset: () => void }) => {
  const { formatMessage } = useIntl()
  const [isLoading, setIsLoading] = useState(false)

  const onSubmit = async (data: TFormEditClientProfileSchema) => {
    try {
      setIsLoading(true)
      await updateClientProfile(data)

      toast.success(formatMessage({ id: 'toast.clientAddSuccess' }), {
        icon: '✅',
      })
    } catch (error) {
      return toast.error(formatMessage({ id: 'toast.clientAddError' }), {
        icon: '❌',
      })
    } finally {
      setIsLoading(false)
    }
  }

  return {
    onSubmit,
    isLoading,
  }
}
