'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useIntl } from 'react-intl'
import { Button } from '../../ui'
import { Loader, Trash2 } from 'lucide-react'
import Swal from 'sweetalert2'

interface Props {
  dustCoverId: number
}

export const DeleteBootDustCoverButton: React.FC<Props> = ({ dustCoverId }) => {
  const router = useRouter()
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
        const response = await fetch('/api/boot-dust-cover', {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ id: dustCoverId }),
        })

        if (!response.ok) {
          const errorData = await response.json()
          throw new Error(errorData.error || 'Failed to delete boot dust cover')
        }

        Swal.fire({
          title: formatMessage({ id: 'deleteBoot.successTitle' }),
          text: formatMessage({ id: 'deleteBoot.successText' }),
          icon: 'success',
        })

        router.push('/boot-kit')
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
            {formatMessage({ id: 'deleteBoot.deleteButton' })}
          </>
        )}
      </Button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  )
}
