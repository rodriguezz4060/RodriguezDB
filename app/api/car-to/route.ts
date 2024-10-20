import { prisma } from '@/prisma/prisma-client'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const data = await req.json()

    const car = await prisma.car.create({
      data: {
        imageUrl: data.imageUrl,
        models: data.models,
        carBody: data.carBody,
        modelYear: data.modelYear,
        engine: data.engine,
        volume: data.volume,
        carBrand: {
          connect: { id: data.carBrandId },
        },
        oilTo: {
          create: {
            carBrandId: data.carBrandId,
          },
        },
        oilToInfo: {
          create: {}, // Создаем пустую запись в OilToInfo
        },
      },
    })

    return NextResponse.json({ car }, { status: 201 })
  } catch (error) {
    console.error('Error creating car:', error)
    return NextResponse.json({ error: 'Failed to create car' }, { status: 500 })
  } finally {
    await prisma.$disconnect()
  }
}

export async function PUT(req: Request) {
  const { id, ...data } = await req.json()

  try {
    // Преобразуем все строковые поля в верхний регистр
    const carToData = Object.fromEntries(
      Object.entries(data).map(([key, value]) => [
        key,
        typeof value === 'string' ? value.toUpperCase() : value,
      ])
    )

    // Обновление данных в таблице ClientCarTo
    const updateToCar = await prisma.oilToInfo.update({
      where: { id: Number(id) },
      data: carToData,
    })

    return NextResponse.json(updateToCar, { status: 200 })
  } catch (error) {
    console.error('Error updating client car to:', error)
    return NextResponse.json({ message: 'Failed to update car' }, { status: 500 })
  }
}
