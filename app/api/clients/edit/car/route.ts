import { prisma } from '@/prisma/prisma-client'
import { NextResponse } from 'next/server'

export async function GET() {
  const cars = await prisma.clientCarTo.findMany()

  return NextResponse.json(cars)
}

export async function PUT(req: Request) {
  const { id, ...data } = await req.json()

  console.log('Received data:', { id, data }) // Логирование данных

  try {
    // Разделяем данные на две части
    const clientCarData = data

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
