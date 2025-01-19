'use server'

import { prisma } from '@/prisma/prisma-client'
import { TFormAddBootDustCoverSchema } from '@/shared/components/shared/add-forms/schemas/add-boot-schemas'
import { TFormCarSchema } from '@/shared/components/shared/add-forms/schemas/add-car-schemas'
import { TFormAddClientSchema } from '@/shared/components/shared/clients/schemas/add-client-schemas'
import { TFormEditClientCarSchema } from '@/shared/components/shared/clients/schemas/edit-client-car-schemas'
import { TFormEditClientProfileSchema } from '@/shared/components/shared/clients/schemas/edit-client-profile-schemas'
import { TFormEditClientCarToSchema } from '@/shared/components/shared/clients/schemas/edit-client-to-schemas'
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
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://rodriguez-db.vercel.app' // Убедитесь, что эта переменная определена в вашем .env файле
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

export async function createCar(data: TFormCarSchema) {
  try {
    const car = await prisma.car.create({
      data: {
        imageUrl: data.imageUrl ?? '',
        models: data.models,
        carBody: data.carBody,
        modelYear: data.modelYear,
        engine: data.engine,
        volume: data.volume,
        carBrand: {
          connect: { id: data.carBrandId },
        },
      },
    })

    return car
  } catch (error) {
    console.error('Error creating car:', error)
    throw new Error('Failed to create car')
  } finally {
    await prisma.$disconnect()
  }
}

export const updatedCar = async (data: any) => {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://rodriguez-db.vercel.app' // Убедитесь, что эта переменная определена в вашем .env файле
  const url = `${baseUrl}/api/cars`

  const response = await fetch(url, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })

  if (!response.ok) {
    throw new Error('Failed to update car')
  }

  return await response.json()
}

export const deleteCar = async (id: number) => {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://rodriguez-db.vercel.app'
  const url = `${baseUrl}/api/cars`

  const response = await fetch(url, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id }),
  })

  if (!response.ok) {
    throw new Error('Failed to delete car')
  }

  return await response.json()
}

export const removeConnection = async (carId: number, dustCoverId: number) => {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://rodriguez-db.vercel.app'
  const url = `${baseUrl}/api/connection?carId=${carId}&dustCoverId=${dustCoverId}`

  const response = await fetch(url, {
    method: 'DELETE',
  })

  if (!response.ok) {
    throw new Error('Failed to remove connection')
  }

  return await response.json()
}

export async function createBootDustCover(data: TFormAddBootDustCoverSchema & { nameId: number }) {
  try {
    const bootDustCover = await prisma.bootDustCover.create({
      data: {
        name: {
          connect: { id: data.nameId },
        },
        type: {
          connect: { id: data.typeId },
        },
        form: {
          connect: { id: data.formId },
        },
        dIn: data.dIn,
        dOut: data.dOut,
        height: data.height,
        partNumber: data.partNumber,
        imageUrl: data.imageUrl,
      },
    })

    return bootDustCover
  } catch (error) {
    console.error('Error creating boot dust cover:', error)
    throw new Error('Failed to create boot dust cover')
  } finally {
    await prisma.$disconnect()
  }
}

export async function checkAndCreateBootName(name: string) {
  try {
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

    return existingName.id
  } catch (error) {
    console.error('Error checking or creating name:', error)
    throw new Error('Failed to check or create name')
  }
}

export const linkCarToBootDustCover = async (bootDustCoverId: number, carId: number) => {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://rodriguez-db.vercel.app' // Убедитесь, что эта переменная определена в вашем .env файле
  const url = `${baseUrl}/api/boot-dust-cover`

  const response = await fetch(url, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id: bootDustCoverId, carId }),
  })

  if (!response.ok) {
    throw new Error('Failed to link car to boot dust cover')
  }
}

export async function createClient(data: TFormAddClientSchema): Promise<void> {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://rodriguez-db.vercel.app'
    const url = `${baseUrl}/api/clients`
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    if (!response.ok) {
      const errorData = await response.json()
      throw new Error(errorData.error || 'Failed to create client')
    }
  } catch (error) {
    console.error('Error creating client:', error)
    throw error
  }
}

export const updateClientCarTo = async (data: TFormEditClientCarToSchema) => {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://rodriguez-db.vercel.app'
  const url = `${baseUrl}/api/clients/edit/to`

  console.log('Sending data to server:', data) // Логирование данных

  const response = await fetch(url, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })

  if (!response.ok) {
    throw new Error('Failed to update client car to')
  }

  return await response.json()
}

export const updateClientCar = async (data: TFormEditClientCarSchema) => {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://rodriguez-db.vercel.app'
  const url = `${baseUrl}/api/clients/edit/car`

  console.log('Sending data to server:', data) // Логирование данных

  const response = await fetch(url, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })

  if (!response.ok) {
    const errorResponse = await response.json() // Логирование ошибки
    console.error('Error response:', errorResponse)
    throw new Error('Failed to update client car to')
  }

  return await response.json()
}

export async function createCarTo(data: TFormCarSchema): Promise<void> {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://rodriguez-db.vercel.app'
    const url = `${baseUrl}/api/car-to`
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    if (!response.ok) {
      const errorData = await response.json()
      throw new Error(errorData.error || 'Failed to create client')
    }
  } catch (error) {
    console.error('Error creating client:', error)
    throw error
  }
}

export const updateCarTo = async (data: TFormEditClientCarToSchema) => {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://rodriguez-db.vercel.app'
  const url = `${baseUrl}/api/car-to`

  console.log('Sending data to server:', data) // Логирование данных

  const response = await fetch(url, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })

  if (!response.ok) {
    throw new Error('Failed to update client car to')
  }

  return await response.json()
}

export const updatedOilCar = async (data: any) => {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://rodriguez-db.vercel.app' // Убедитесь, что эта переменная определена в вашем .env файле
  const url = `${baseUrl}/api/car-to/oil-car`

  const response = await fetch(url, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })

  if (!response.ok) {
    throw new Error('Failed to update car')
  }

  return await response.json()
}

export const updateClientProfile = async (data: TFormEditClientProfileSchema) => {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://rodriguez-db.vercel.app'
  const url = `${baseUrl}/api/clients/edit/client-profile`

  console.log('Sending data to server:', data) // Логирование данных

  const response = await fetch(url, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })

  if (!response.ok) {
    // Если ответ не OK, пытаемся прочитать JSON с ошибкой
    const errorData = await response.json().catch(() => null)
    throw new Error(errorData?.error || 'Failed to update client profile')
  }

  return await response.json()
}
