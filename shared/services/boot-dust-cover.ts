import { BootDustCover } from '@prisma/client'
import { axiosInstance } from './instance'
import { ApiRoutes } from './constants'

export const getBootDustCover = async (): Promise<BootDustCover[]> => {
  return (await axiosInstance.get<BootDustCover[]>(ApiRoutes.BOOT_DUST_COVER)).data
}
