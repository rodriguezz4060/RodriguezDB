'use client'

import React from 'react'
import { useIntl } from 'react-intl'
import { Button } from '../../ui'
import { Loader, Trash2 } from 'lucide-react'
import { useDeleteBootCoverForm } from '@/shared/hooks'

interface Props {
  dustCoverId: number
}

export const DeleteBootDustCoverButton: React.FC<Props> = ({ dustCoverId }) => {
  const { formatMessage } = useIntl()
  const { handleDelete, isDeleting, error } = useDeleteBootCoverForm(dustCoverId)

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
            {formatMessage({ id: 'deleteBoot.deleteButton' })}
          </>
        )}
      </Button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  )
}
