'use client'

import React, { useState } from 'react'
import { useSession } from 'next-auth/react'
import { DeleteBootDustCoverButton } from '../add-forms'

interface Props {
  dustCoverId: number
  className?: string
}

export const DeleteBootButton: React.FC<Props> = ({ dustCoverId, className }) => {
  const { data: session } = useSession()

  const userRole = session?.user?.role

  return <>{userRole === 'ADMIN' && <DeleteBootDustCoverButton dustCoverId={dustCoverId} />}</>
}
