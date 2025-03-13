'use client'

import React from 'react'
import { useSession } from 'next-auth/react'
import { DeleteClient } from '../clients/delete-client'

interface Props {
  id: number
  className?: string
  onDelete?: (carId: number) => void
}

export const DeleteClientButton: React.FC<Props> = ({ id, className, onDelete }) => {
  const { data: session } = useSession()

  const userRole = session?.user?.role

  return <>{userRole === 'ADMIN' && <DeleteClient id={id} onDelete={onDelete} />}</>
}
