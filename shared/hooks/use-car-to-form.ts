'use client'

import { useState } from 'react'
import { updateCarTo } from '@/app/actions'
import toast from 'react-hot-toast'
import { TFormEditClientCarToSchema } from '../components/shared/clients/schemas/edit-client-to-schemas'

export const useCarToForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const onSubmit = async (data: TFormEditClientCarToSchema) => {
    setIsSubmitting(true)
    try {
      await updateCarTo(data)
      toast.success('Данные машины обновлены 🚗', {
        icon: '✅',
      })
    } catch (error) {
      toast.error('Ошибка при обновлении данных машины', {
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
