import { createBootDustCover } from '@/app/actions'
import { prisma } from '@/prisma/prisma-client'
import { TFormAddBootDustCoverSchema } from '@/shared/components/shared/add-forms/schemas/add-boot-schemas'
import { NextResponse } from 'next/server'

// Обработчик GET запроса
export async function GET() {
  const bootDustCover = await prisma.bootDustCover.findMany()
  return NextResponse.json(bootDustCover)
}

// Обработчик POST запроса
export async function POST(req: Request) {
  try {
    const data: TFormAddBootDustCoverSchema & { nameId: number } = await req.json()
    const bootDustCover = await createBootDustCover(data)
    return NextResponse.json(bootDustCover, { status: 201 })
  } catch (error) {
    console.error('Error creating boot dust cover:', error)
    return NextResponse.json({ error: 'Failed to create boot dust cover' }, { status: 500 })
  }
}

// Обработчик DELETE запроса
export async function DELETE(req: Request) {
  try {
    const { id } = await req.json()
    console.log('Received ID:', id) // Добавьте это для отладки

    const existingBootDustCover = await prisma.bootDustCover.findUnique({
      where: { id },
    })

    if (!existingBootDustCover) {
      console.log('Boot dust cover not found') // Добавьте это для отладки
      return NextResponse.json({ error: 'Boot dust cover not found' }, { status: 404 })
    }

    await prisma.bootDustCover.delete({
      where: { id },
    })

    console.log('Boot dust cover deleted successfully') // Добавьте это для отладки
    return NextResponse.json({ message: 'Boot dust cover deleted successfully' }, { status: 200 })
  } catch (error) {
    console.error('Error deleting boot dust cover:', error)
    return NextResponse.json({ error: 'Failed to delete boot dust cover' }, { status: 500 })
  }
}

// Обработчик PUT запроса
export async function PUT(req: Request) {
  const { id, carId, ...data } = await req.json()

  try {
    if (carId) {
      await prisma.bootDustCover.update({
        where: { id: Number(id) },
        data: {
          cars: {
            connect: { id: Number(carId) },
          },
        },
      })
    }

    const updatedBootDustCover = await prisma.bootDustCover.update({
      where: { id: Number(id) },
      data,
    })

    return NextResponse.json(updatedBootDustCover, { status: 200 })
  } catch (error) {
    return NextResponse.json({ message: 'Failed to update boot dust cover' }, { status: 500 })
  }
}
