import { prisma } from '@/prisma/prisma-client'

export interface GetSearchParams {
  query?: string
  sortBy?: string
  bootForm?: string
  bootTypes?: string
  inSizeFrom?: string
  inSizeTo?: string
  outSizeFrom?: string
  outSizeTo?: string
  selectedFirms?: string
  limit?: string
  page?: string
}

const DEFAULT_MIN_IN_SIZE = 0
const DEFAULT_MAX_IN_SIZE = 100
const DEFAULT_MIN_OUT_SIZE = 0
const DEFAULT_MAX_OUT_SIZE = 40

export const findBootDustCover = async (params: GetSearchParams) => {
  const bootForm = params.bootForm?.split(',').map(Number)
  const bootTypes = params.bootTypes?.split(',').map(Number)
  const selectedFirms = params.selectedFirms?.split(',').map(Number)

  const minInSize = Number(params.inSizeFrom) || DEFAULT_MIN_IN_SIZE
  const maxInSize = Number(params.inSizeTo) || DEFAULT_MAX_IN_SIZE
  const minOutSize = Number(params.outSizeFrom) || DEFAULT_MIN_OUT_SIZE
  const maxOutSize = Number(params.outSizeTo) || DEFAULT_MAX_OUT_SIZE

  const bootDustCovers = await prisma.bootDustCover.findMany({
    orderBy: {
      id: 'desc',
    },
    where: {
      dIn: {
        gte: minInSize,
        lte: maxInSize,
      },
      dOut: {
        gte: minOutSize,
        lte: maxOutSize,
      },
      form: {
        id: {
          in: bootForm,
        },
      },
      type: {
        id: {
          in: bootTypes,
        },
      },
      name: {
        id: {
          in: selectedFirms,
        },
      },
    },
    include: {
      name: true,
      form: true,
      type: true,
      cars: {
        include: {
          carBrand: true,
        },
      },
    },
  })

  return bootDustCovers
}
