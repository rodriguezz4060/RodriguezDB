import { createBootDustCover } from '@/app/actions'
import { prisma } from '@/prisma/prisma-client'
import { TFormAddBootDustCoverSchema } from '@/shared/components/shared/add-forms/schemas/add-boot-schemas'
import { NextApiRequest, NextApiResponse } from 'next'
import { NextResponse } from 'next/server'

export async function GET() {
  const bootDustCover = await prisma.bootDustCover.findMany()

  return NextResponse.json(bootDustCover)
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const data: TFormAddBootDustCoverSchema & { nameId: number } = req.body
      const bootDustCover = await createBootDustCover(data)

      return res.status(201).json(bootDustCover)
    } catch (error) {
      console.error('Error creating boot dust cover:', error)
      return res.status(500).json({ error: 'Failed to create boot dust cover' })
    }
  } else {
    return res.status(405).json({ error: 'Method not allowed' })
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

export async function PUT(req: Request) {
  const { id, ...data } = await req.json()

  try {
    const updatedBootDustCover = await prisma.bootDustCover.update({
      where: { id: Number(id) },
      data,
    })
    return NextResponse.json(updatedBootDustCover, { status: 200 })
  } catch (error) {
    return NextResponse.json({ message: 'Failed to update boot dust cover' }, { status: 500 })
  }
}
