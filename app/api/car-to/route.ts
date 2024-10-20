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
