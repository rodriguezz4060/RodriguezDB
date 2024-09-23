import { axiosInstance } from './instance'
import { ApiRoutes } from './constants'
import { MainButton } from '@prisma/client'

export const getButtons = async (): Promise<MainButton[]> => {
  return (await axiosInstance.get<MainButton[]>(ApiRoutes.MAIN_PAGE_BUTTONS)).data
}
