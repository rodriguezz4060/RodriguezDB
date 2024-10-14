'use client'

import { useState } from 'react'
import { updateClientCar } from '@/app/actions'
import toast from 'react-hot-toast'
import { TFormEditClientCarSchema } from '../components/shared/clients/schemas/edit-client-car-schemas'

export const useClientCarForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const onSubmit = async (data: TFormEditClientCarSchema) => {
    setIsSubmitting(true)
    try {
      await updateClientCar(data)
      toast.success('Данные клиента обновлены 🚗', {
        icon: '✅',
      })
    } catch (error) {
      toast.error('Ошибка при обновлении данных клиента', {
        icon: '❌',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return {
    onSubmit,
    isSubmitting,
  }
}
