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

    return new Response(JSON.stringify(updateClientCar), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    })
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to update client profile' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    })
  }
}
