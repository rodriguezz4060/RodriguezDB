'use client'

import React from 'react'
import { useSession } from 'next-auth/react'
import { DeleteCar } from '../cars-page'

interface Props {
  id: number
  className?: string
  onDelete?: (carId: number) => void
}

export const DeleteCarButton: React.FC<Props> = ({ id, className, onDelete }) => {
  const { data: session } = useSession()

  const userRole = session?.user?.role

  return <>{userRole === 'ADMIN' && <DeleteCar carId={id} onDelete={onDelete} />}</>
}
