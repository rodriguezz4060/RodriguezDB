import { axiosInstance } from './instance'
import { ApiRoutes } from './constants'
import { Car, CarBrand } from '@prisma/client'

export const getCarsBrands = async (): Promise<CarBrand[]> => {
  return (await axiosInstance.get<CarBrand[]>(ApiRoutes.CARS_BRANDS)).data
}

export const getCars = async (): Promise<Car[]> => {
  return (await axiosInstance.get<Car[]>(ApiRoutes.CARS)).data
}
