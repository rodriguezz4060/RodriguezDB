import { prisma } from '@/prisma/prisma-client'
import { TFormEditClientCarToSchema } from '@/shared/components/shared/clients/schemas/edit-client-to-schemas'
import { NextApiRequest, NextApiResponse } from 'next'
import { NextResponse } from 'next/server'

export async function GET() {
  const cars = await prisma.clientCarTo.findMany()

  return NextResponse.json(cars)
}

export async function PUT(req: Request) {
  const { id, ...data } = await req.json()

  try {
    const updateData: any = { ...data }

    const updateClientCarTo = await prisma.clientCarTo.update({
      where: { id: Number(id) },
      data: updateData,
    })

    return NextResponse.json(updateClientCarTo, { status: 200 })
  } catch (error) {
    console.error('Error updating client car to:', error)
    return NextResponse.json({ message: 'Failed to update car' }, { status: 500 })
  }
}
