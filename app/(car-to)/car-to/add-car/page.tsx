import { prisma } from '@/prisma/prisma-client'
import { getUserSession } from '@/shared/lib/get-user-session'
import { notFound, redirect } from 'next/navigation'
import React from 'react'
import { AddCarForm } from './add-car-form'

export default async function AddCarHome() {
  const carBrands = await prisma.carBrand.findMany({})

  const session = await getUserSession()

  if (!carBrands) {
    return notFound()
  }

  if (!session) {
    return redirect('/not-auth')
  }

  const user = await prisma.user.findFirst({ where: { id: Number(session?.id) } })

  if (!user) {
    return redirect('/not-auth')
  }

  return <AddCarForm carBrands={carBrands} />
}
