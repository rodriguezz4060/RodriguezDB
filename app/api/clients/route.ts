import { prisma } from '@/prisma/prisma-client'
import { TFormAddClientSchema } from '@/shared/components/shared/clients/schemas/add-client-schemas'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const data: TFormAddClientSchema = await req.json()

    const client = await prisma.clients.create({
      data: {
        name: data.name ?? '',
        lastName: data.lastName ?? '',
        VIN: data.VIN,
        tel: data.tel ?? '',
        clientCar: {
          create: {}, // Создаем пустую модель ClientCar
        },
        clientCarTo: {
          create: {}, // Создаем пустую модель ClientCarTo
        },
      },
    })

    return NextResponse.json({ client }, { status: 201 })
  } catch (error) {
    console.error('Error creating client:', error)
    return NextResponse.json({ error: 'Failed to create client' }, { status: 500 })
  } finally {
    await prisma.$disconnect()
  }
}
