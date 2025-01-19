import { prisma } from '@/prisma/prisma-client'
import { NextResponse } from 'next/server'

export async function GET() {
  const cars = await prisma.clientCarTo.findMany()
  return NextResponse.json(cars)
}

export async function PATCH(req: Request) {
  const { id, ...data } = await req.json()

  // Проверка наличия обязательного поля `id`
  if (!id) {
    return new Response(JSON.stringify({ error: 'Missing required field: id' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    })
  }

  try {
    // Подготовка данных для обновления
    const clientCarData = Object.fromEntries(
      Object.entries(data)
        .filter(([_, value]) => value !== undefined) // Игнорируем поля со значением `undefined`
        .map(([key, value]) => [
          key,
          typeof value === 'string' ? value.toUpperCase() : value, // Преобразуем строки в верхний регистр
        ])
    )

    // Обновление данных в таблице ClientCar
    const updateClientCar = await prisma.clientCar.update({
      where: { id: Number(id) },
      data: clientCarData,
    })

    return new Response(JSON.stringify(updateClientCar), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    })
  } catch (error) {
    if (error instanceof Error) {
      return new Response(JSON.stringify({ error: error.message }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      })
    }
    // Если error не является объектом Error
    return new Response(JSON.stringify({ error: 'An unknown error occurred' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    })
  }
}
