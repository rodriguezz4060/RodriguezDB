'use client'

import { useState } from 'react'
import { useIntl } from 'react-intl'
import Swal from 'sweetalert2'
import { deleteCar } from '@/app/actions'

interface DeleteCarFormProps {
  carId: number
  onDelete?: (carId: number) => void
}

export const useDeleteCarForm = ({ carId, onDelete }: DeleteCarFormProps) => {
  const { formatMessage } = useIntl()

  const [isDeleting, setIsDeleting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleDelete = async () => {
    const result = await Swal.fire({
      title: formatMessage({ id: 'deleteBoot.confirmTitle' }),
      text: formatMessage({ id: 'deleteBoot.confirmText' }),
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: formatMessage({ id: 'deleteBoot.confirmButton' }),
      cancelButtonText: formatMessage({ id: 'deleteBoot.cancelButton' }),
    })

    if (result.isConfirmed) {
      setIsDeleting(true)
      setError(null)

      try {
        await deleteCar(carId)

        Swal.fire({
          title: formatMessage({ id: 'deleteBoot.successTitle' }),
          text: formatMessage({ id: 'deleteCar.successText' }),
          icon: 'success',
        })

        onDelete && onDelete(carId)
      } catch (error: unknown) {
        Swal.fire({
          title: formatMessage({ id: 'deleteBoot.errorTitle' }),
          text: (error as Error).message,
          icon: 'error',
        })

        setError((error as Error).message)
      } finally {
        setIsDeleting(false)
      }
    }
  }

  return {
    isDeleting,
    error,
    handleDelete,
  }
}
