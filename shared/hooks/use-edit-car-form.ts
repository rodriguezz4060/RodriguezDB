'use client'

import { useState } from 'react'
import toast from 'react-hot-toast'
import { updatedCar, removeConnection } from '@/app/actions'
import { BootDustCover } from '@prisma/client'
import { TFormEditCarSchema } from '../components/shared/add-forms/schemas/edit-car-schema'
import { useIntl } from 'react-intl'

export const useEditCarForm = (carId: number, initialDustCovers: BootDustCover[]) => {
  const { formatMessage } = useIntl()
  const [isLoading, setIsLoading] = useState(false)
  const [connectedDustCovers, setConnectedDustCovers] = useState<BootDustCover[]>(initialDustCovers)

  const onSubmit = async (data: TFormEditCarSchema) => {
    setIsLoading(true)
    try {
      await updatedCar(data)

      toast.success(formatMessage({ id: 'toast.carEditSuccess' }), {
        icon: '✅',
      })
    } catch (error) {
      return toast.error(formatMessage({ id: 'toast.editCarError' }), {
        icon: '❌',
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleRemoveDustCover = async (id: number) => {
    try {
      await removeConnection(carId, id)

      // Обновление локального состояния
      setConnectedDustCovers(prev => prev.filter(dustCover => dustCover.id !== id))

      toast.success(formatMessage({ id: 'toast.editCarConnectSuccess' }))
    } catch (error) {
      console.error('Ошибка при удалении связи с пыльником:', error)
      toast.error(formatMessage({ id: 'toast.editCarConnectError' }))
    }
  }

  return {
    isLoading,
    connectedDustCovers,
    setConnectedDustCovers,
    onSubmit,
    handleRemoveDustCover,
  }
}
