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
  const { id, ...data } = await req.json()

  try {
    const updatedCar = await prisma.car.update({
      where: { id: Number(id) },
      data,
    })
    return NextResponse.json(updatedCar, { status: 200 })
  } catch (error) {
    return NextResponse.json({ message: 'Failed to update boot dust cover' }, { status: 500 })
  }
}
