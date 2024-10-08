'use client'

import React, { useState } from 'react'
import { useIntl } from 'react-intl'
import { Button } from '../../ui'
import { Loader, Trash2 } from 'lucide-react'
import Swal from 'sweetalert2'
import { deleteCar } from '@/app/actions'

interface Props {
  carId: number
  onDelete?: (carId: number) => void
}

export const DeleteCar: React.FC<Props> = ({ carId, onDelete }) => {
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

  return (
    <div>
      <Button variant='destructive' onClick={handleDelete} disabled={isDeleting}>
        {isDeleting ? (
          <>
            <Loader size={20} className='mr-2 animate-spin' />
            {formatMessage({ id: 'deleteBoot.deleting' })}
          </>
        ) : (
          <>
            <Trash2 size={20} className='mr-2' />
            {formatMessage({ id: 'deleteCar.deleteButton' })}
          </>
        )}
      </Button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  )
}
