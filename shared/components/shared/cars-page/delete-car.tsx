'use client'

import React from 'react'
import { useIntl } from 'react-intl'
import { Button } from '../../ui'
import { Loader, Trash2 } from 'lucide-react'
import { useDeleteCarForm } from '@/shared/hooks'

interface Props {
  carId: number
  onDelete?: (carId: number) => void
}

export const DeleteCar: React.FC<Props> = ({ carId, onDelete }) => {
  const { formatMessage } = useIntl()

  const { isDeleting, error, handleDelete } = useDeleteCarForm({ carId, onDelete })

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
