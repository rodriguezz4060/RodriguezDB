'use client'

import React from 'react'
import { useIntl } from 'react-intl'
import { Button } from '../../ui'
import { Loader, Trash2 } from 'lucide-react'
import { useDeleteClientForm } from '@/shared/hooks'

interface Props {
  id: number
  onDelete?: (id: number) => void
}

export const DeleteClient: React.FC<Props> = ({ id, onDelete }) => {
  const { formatMessage } = useIntl()

  const { isDeleting, error, handleDelete } = useDeleteClientForm({ id, onDelete })

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
