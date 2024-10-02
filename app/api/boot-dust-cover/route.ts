import { prisma } from '@/prisma/prisma-client'
import { NextResponse } from 'next/server'

export async function GET() {
  const bootDustCover = await prisma.bootDustCover.findMany()

  return NextResponse.json(bootDustCover)
}

export async function POST(request: Request) {
  try {
    // Получаем данные из тела запроса
    const { nameId, typeId, formId, dIn, dOut, height, partNumber, imageUrl } = await request.json()

    // Проверяем, существует ли уже такое имя
    const existingName = await prisma.name.findUnique({
      where: { id: nameId },
    })

    if (!existingName) {
      return NextResponse.json({ error: 'Name not found' }, { status: 404 })
    }

    // Добавляем пыльник в базу данных
    const bootDustCover = await prisma.bootDustCover.create({
      data: {
        name: {
          connect: { id: nameId },
        },
        type: {
          connect: { id: typeId },
        },
        form: {
          connect: { id: formId },
        },
        dIn,
        dOut,
        height,
        partNumber,
        imageUrl,
      },
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
