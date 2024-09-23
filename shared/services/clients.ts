import { Clients } from '@prisma/client'
import { axiosInstance } from './instance'
import { ApiRoutes } from './constants'

export const search = async (query: string): Promise<Clients[]> => {
  return (await axiosInstance.get<Clients[]>(ApiRoutes.SEARCH_CLIENT, { params: { query } })).data
}
