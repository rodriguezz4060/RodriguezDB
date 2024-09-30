import { prisma } from '@/prisma/prisma-client'
import { NextResponse } from 'next/server'

export async function GET() {
  const bootDustName = await prisma.name.findMany()

  return NextResponse.json(bootDustName)
}

export async function POST(request: Request) {
  try {
    // Получаем данные из тела запроса
    const { name } = await request.json()

    // Проверяем, существует ли уже такое имя
    let existingName = await prisma.name.findUnique({
      where: { name },
    })

    if (!existingName) {
      // Создаем новое имя
      existingName = await prisma.name.create({
        data: { name },
      })
    }

    return NextResponse.json(existingName, { status: 201 })
  } catch (error) {
    // Обрабатываем ошибки
    console.error('Error creating or finding name:', error)
    return NextResponse.json({ error: 'Failed to create or find name' }, { status: 500 })
  }
}
