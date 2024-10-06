import { createCar } from '@/app/actions'
import { prisma } from '@/prisma/prisma-client'
import { TFormCarSchema } from '@/shared/components/shared/add-forms/schemas/add-car-schemas'
import { NextApiRequest, NextApiResponse } from 'next'
import { NextResponse } from 'next/server'

export async function GET() {
  const cars = await prisma.car.findMany()

  return NextResponse.json(cars)
}

export async function POST(request: Request) {
  try {
    const data: TFormCarSchema = await request.json()
    const car = await createCar(data)

    return NextResponse.json(car, { status: 201 })
  } catch (error) {
    console.error('Error creating car:', error)
    return NextResponse.json({ error: 'Failed to create car' }, { status: 500 })
  }
}

export async function PUT(req: Request) {
  const { id, bootDustCoverId, ...data } = await req.json()

  try {
    const updateData: any = { ...data }
    // Проверяем, есть ли bootDustCoverId и добавляем связь, если есть
    if (bootDustCoverId) {
      updateData.bootDustCover = {
        connect: { id: Number(bootDustCoverId) },
      }
    }
    const updatedCar = await prisma.car.update({
      where: { id: Number(id) },
      data: updateData,
    })
    return NextResponse.json(updatedCar, { status: 200 })
  } catch (error) {
    return NextResponse.json({ message: 'Failed to update car' }, { status: 500 })
  }
}

export async function DELETE(request: Request) {
  const { searchParams } = new URL(request.url)
  const carId = searchParams.get('carId')
  const dustCoverId = searchParams.get('dustCoverId')

  if (!carId || !dustCoverId) {
    return NextResponse.json({ error: 'Missing carId or dustCoverId' }, { status: 400 })
  }

  try {
    await prisma.car.update({
      where: { id: parseInt(carId) },
      data: {
        bootDustCover: {
          disconnect: { id: parseInt(dustCoverId) },
        },
      },
    })

    return NextResponse.json({ message: 'Dust cover removed from car' })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to remove dust cover from car' }, { status: 500 })
  }
}
