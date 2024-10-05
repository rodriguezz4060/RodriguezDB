import { prisma } from '@/prisma/prisma-client'
import { AddBootPage } from '@/shared/components/shared'
import { getUserSession } from '@/shared/lib/get-user-session'
import { redirect } from 'next/navigation'
import React from 'react'

export default async function AddBootHome() {
  const session = await getUserSession()

  if (!session) {
    return redirect('/not-auth')
  }

  const user = await prisma.user.findFirst({ where: { id: Number(session?.id) } })

  if (!user) {
    return redirect('/not-auth')
  }

  return <AddBootPage />
}
