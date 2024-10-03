'use server'

import { prisma } from '@/prisma/prisma-client'
import { getUserSession } from '@/shared/lib/get-user-session'
import { Prisma } from '@prisma/client'
import { hashSync } from 'bcrypt'

export async function updateUserInfo(body: Prisma.UserUpdateInput) {
  try {
    const currentUser = await getUserSession()

    if (!currentUser) {
      throw new Error('Пользователь не найден')
    }

    const findUser = await prisma.user.findFirst({
      where: {
        id: Number(currentUser.id),
      },
    })

    await prisma.user.update({
      where: {
        id: Number(currentUser.id),
      },
      data: {
        fullName: body.fullName,
        email: body.email,
        password: body.password ? hashSync(body.password as string, 10) : findUser?.password,
      },
    })
  } catch (err) {
    console.log('Error [UPDATE_USER]', err)
    throw err
  }
}

export async function registerUser(body: Prisma.UserCreateInput) {
  try {
    const user = await prisma.user.findFirst({
      where: {
        email: body.email,
      },
    })

    if (user) {
      throw new Error('Такой пользователь уже существует')
    }

    const createdUser = await prisma.user.create({
      data: {
        fullName: body.fullName,
        email: body.email,
        password: hashSync(body.password, 10),
      },
    })
    return createdUser
  } catch (err) {
    console.log('Error [CREATE_USER]', err)
    throw err
  }
}

export const updateBootDustCover = async (data: any) => {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3000' // Убедитесь, что эта переменная определена в вашем .env файле
  const url = `${baseUrl}/api/boot-dust-cover`

  const response = await fetch(url, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })

  if (!response.ok) {
    throw new Error('Failed to update boot dust cover')
  }

  return await response.json()
}
