import { prisma } from '@/prisma/prisma-client'
import { getUserSession } from '@/shared/lib/get-user-session'
import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

export async function Get() {
  try {
    const user = await getUserSession()

    if (!user) {
      return NextResponse.json({ message: 'Вы не авторизованы' }, { status: 404 })
    }

    const data = await prisma.user.findUnique({
      where: {
        id: Number(user.id),
      },
      select: {
        fullName: true,
        email: true,
        password: false,
      },
    })

    return NextResponse.json(data)
  } catch (error) {
    console.log(error)
    return NextResponse.json({ message: '[USER_GET] Server error' }, { status: 500 })
  }
}
