import { BootDustCover, Form, Name, Type } from '@prisma/client'
import { axiosInstance } from './instance'
import { ApiRoutes } from './constants'

export const getBootDustCover = async (): Promise<BootDustCover[]> => {
  return (await axiosInstance.get<BootDustCover[]>(ApiRoutes.BOOT_DUST_COVER)).data
}

export const getBootDustName = async (): Promise<Name[]> => {
  return (await axiosInstance.get<Name[]>(ApiRoutes.BOOT_FIRMS)).data
}
export const getBootDustForm = async (): Promise<Form[]> => {
  return (await axiosInstance.get<Form[]>(ApiRoutes.BOOT_FORM)).data
}
export const getBootDustType = async (): Promise<Type[]> => {
  return (await axiosInstance.get<Type[]>(ApiRoutes.BOOT_TYPE)).data
}
