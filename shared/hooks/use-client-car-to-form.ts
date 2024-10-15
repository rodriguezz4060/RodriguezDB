'use client'

import { useState } from 'react'
import { updateClientCarTo } from '@/app/actions'
import toast from 'react-hot-toast'
import { TFormEditClientCarToSchema } from '../components/shared/clients/schemas/edit-client-to-schemas'

export const useClientCarToForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const onSubmit = async (data: TFormEditClientCarToSchema) => {
    setIsSubmitting(true)
    try {
      await updateClientCarTo(data)
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
