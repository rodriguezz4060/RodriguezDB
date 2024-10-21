'use client'

import { useState } from 'react'
import { createCar } from '@/app/actions'
import toast from 'react-hot-toast'
import { useIntl } from 'react-intl'
import { TFormCarSchema } from '../components/shared/add-forms/schemas/add-car-schemas'

export const useAddCarForm = (form: { reset: () => void }) => {
  const { formatMessage } = useIntl()
  const [isLoading, setIsLoading] = useState(false)

  const onSubmit = async (data: TFormCarSchema) => {
    setIsLoading(true)
    try {
      await createCar(data)
      toast.success(formatMessage({ id: 'toast.carAddSuccess' }), {
        icon: '✅',
      })
      form.reset()
    } catch (error) {
      return toast.error(formatMessage({ id: 'toast.carAddError' }), {
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
