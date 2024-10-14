import { prisma } from '@/prisma/prisma-client'
import { NextResponse } from 'next/server'

export async function GET() {
  const cars = await prisma.clientCarTo.findMany()

  return NextResponse.json(cars)
}

export async function PUT(req: Request) {
  const { id, ...data } = await req.json()

  try {
    // Преобразуем все строковые поля в верхний регистр
    const clientCarData = Object.fromEntries(
      Object.entries(data).map(([key, value]) => [
        key,
        typeof value === 'string' ? value.toUpperCase() : value,
      ])
    )

    // Обновление данных в таблице ClientCarTo
    const updateClientCar = await prisma.clientCar.update({
      where: { id: Number(id) },
      data: clientCarData,
    })

    return NextResponse.json(updateClientCar, { status: 200 })
  } catch (error) {
    console.error('Error updating client car to:', error)
    return NextResponse.json({ message: 'Failed to update car' }, { status: 500 })
  }
}
