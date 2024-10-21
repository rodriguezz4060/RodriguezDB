'use client'

import { useState } from 'react'
import { checkAndCreateBootName, createBootDustCover } from '@/app/actions'
import toast from 'react-hot-toast'
import { useIntl } from 'react-intl'
import { TFormAddBootDustCoverSchema } from '../components/shared/add-forms/schemas/add-boot-schemas'

export const useAddBootKitForm = (form: { reset: () => void }) => {
  const { formatMessage } = useIntl()
  const [isLoading, setIsLoading] = useState(false)

  const onSubmit = async (data: TFormAddBootDustCoverSchema) => {
    try {
      setIsLoading(true)

      // Преобразование строк в числа
      const formattedData = {
        ...data,
        dIn: Number(data.dIn),
        dOut: Number(data.dOut),
        height: Number(data.height),
      }

      // Проверка и создание имени
      const nameId = await checkAndCreateBootName(data.newName)
      if (!nameId) {
        throw new Error('Failed to get or create name')
      }

      // Добавление nameId в данные
      const finalData = {
        ...formattedData,
        nameId,
      }

      await createBootDustCover(finalData)

      toast.success(formatMessage({ id: 'toast.bootAddedSuccess' }), {
        icon: '✅',
      })

      // Очистка формы после успешного добавления
      form.reset()
    } catch (error) {
      return toast.error(formatMessage({ id: 'toast.bootAddedError' }), {
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
