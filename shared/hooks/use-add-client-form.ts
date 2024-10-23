'use client'

import { useState } from 'react'
import { createClient } from '@/app/actions'
import toast from 'react-hot-toast'
import { useIntl } from 'react-intl'
import { TFormAddClientSchema } from '../components/shared/clients/schemas/add-client-schemas'

export const useAddClientForm = (form: { reset: () => void }) => {
  const { formatMessage } = useIntl()
  const [isLoading, setIsLoading] = useState(false)

  const onSubmit = async (data: TFormAddClientSchema) => {
    try {
      setIsLoading(true)
      await createClient(data)

      toast.success(formatMessage({ id: 'toast.clientAddSuccess' }), {
        icon: '✅',
      })

      form.reset()
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
