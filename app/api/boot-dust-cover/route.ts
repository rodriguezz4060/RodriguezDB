import { prisma } from '@/prisma/prisma-client'
import { BootDustCover } from '@prisma/client'
import { NextResponse } from 'next/server'

export async function GET() {
  const bootDustCover = await prisma.bootDustCover.findMany()

  return NextResponse.json(bootDustCover)
}

export async function POST(request: Request) {
  try {
    // Получаем данные из тела запроса
    const data: BootDustCover = await request.json()

    // Добавляем пыльник в базу данных
    const bootDustCover = await prisma.bootDustCover.create({
      data,
    })

    // Возвращаем созданный пыльник в ответе
    return NextResponse.json(bootDustCover, { status: 201 })
  } catch (error) {
    // Обрабатываем ошибки
    console.error('Error creating boot dust cover:', error)
    return NextResponse.json({ error: 'Failed to create boot dust cover' }, { status: 500 })
  }
}

export async function DELETE(request: Request) {
  try {
    // Получаем идентификатор пыльника из тела запроса
    const { id } = await request.json()
    console.log('Received ID:', id) // Добавьте это для отладки

    // Проверяем, существует ли пыльник с таким идентификатором
    const existingBootDustCover = await prisma.bootDustCover.findUnique({
      where: { id },
    })

    if (!existingBootDustCover) {
      console.log('Boot dust cover not found') // Добавьте это для отладки
      return NextResponse.json({ error: 'Boot dust cover not found' }, { status: 404 })
    }

    // Удаляем пыльник из базы данных
    await prisma.bootDustCover.delete({
      where: { id },
    })

    console.log('Boot dust cover deleted successfully') // Добавьте это для отладки
    // Возвращаем успешный ответ
    return NextResponse.json({ message: 'Boot dust cover deleted successfully' }, { status: 200 })
  } catch (error) {
    // Обрабатываем ошибки
    console.error('Error deleting boot dust cover:', error)
    return NextResponse.json({ error: 'Failed to delete boot dust cover' }, { status: 500 })
  }
}
