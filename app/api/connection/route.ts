import { prisma } from '@/prisma/prisma-client'
import { NextResponse } from 'next/server'

export async function DELETE(request: Request) {
  const { searchParams } = new URL(request.url)
  const carId = searchParams.get('carId')
  const dustCoverId = searchParams.get('dustCoverId')

  if (!carId || !dustCoverId) {
    return NextResponse.json({ error: 'Missing carId or dustCoverId' }, { status: 400 })
  }

  try {
    // Удаляем связь между машиной и пыльником
    await prisma.car.update({
      where: { id: parseInt(carId) },
      data: {
        bootDustCover: {
          disconnect: { id: parseInt(dustCoverId) },
        },
      },
    })

    // Удаляем связь между пыльником и машиной
    await prisma.bootDustCover.update({
      where: { id: parseInt(dustCoverId) },
      data: {
        cars: {
          disconnect: { id: parseInt(carId) },
        },
      },
    })

    return NextResponse.json({ message: 'Dust cover and car connection removed' })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to remove connection' }, { status: 500 })
  }
}
