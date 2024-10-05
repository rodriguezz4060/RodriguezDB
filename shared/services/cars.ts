import { axiosInstance } from './instance'
import { ApiRoutes } from './constants'
import { CarBrand } from '@prisma/client'
import { prisma } from '@/prisma/prisma-client'

export const getCarsBrands = async (): Promise<CarBrand[]> => {
  return (await axiosInstance.get<CarBrand[]>(ApiRoutes.CARS_BRANDS)).data
}
