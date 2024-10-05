import { axiosInstance } from './instance'
import { ApiRoutes } from './constants'
import { CarBrand } from '@prisma/client'
import { prisma } from '@/prisma/prisma-client'

export const getCarsBrands = async (): Promise<CarBrand[]> => {
  return (await axiosInstance.get<CarBrand[]>(ApiRoutes.CARS_BRANDS)).data
}

export async function getCarById(id: number) {
  try {
    const car = await prisma.car.findUnique({
      where: { id },
      include: { carBrand: true, bootDustCover: true },
    })
    return car
  } catch (error) {
    console.error('Error fetching car:', error)
    throw new Error('Failed to fetch car')
  } finally {
    await prisma.$disconnect()
  }
}
