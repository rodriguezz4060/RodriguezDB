import { prisma } from '@/prisma/prisma-client'

export interface GetSearchParams {
  query?: string
  sortBy?: string
  bootForm?: string
  bootType?: string
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
  const bootForms = params.bootForm?.split(',').map(Number)
  const bootTypes = params.bootType?.split(',').map(Number)
  const selectedFirmsArr = params.selectedFirms?.split(',')

  const minInSize = Number(params.inSizeFrom) || DEFAULT_MIN_IN_SIZE
  const maxInSize = Number(params.inSizeTo) || DEFAULT_MAX_IN_SIZE
  const minOutSize = Number(params.outSizeFrom) || DEFAULT_MIN_OUT_SIZE
  const maxOutSize = Number(params.outSizeTo) || DEFAULT_MAX_OUT_SIZE

  const where: any = {
    dIn: {
      gte: minInSize,
      lte: maxInSize,
    },
    dOut: {
      gte: minOutSize,
      lte: maxOutSize,
    },
  }

  if (bootForms && bootForms.length > 0) {
    where.form = {
      in: bootForms.map(formId => (formId === 1 ? 'Круглый' : 'Тришип')),
    }
  }

  if (selectedFirmsArr && selectedFirmsArr.length > 0) {
    where.name = {
      in: selectedFirmsArr,
    }
  }

  console.log('Query parameters:', params)
  console.log('Where clause:', where)

  const bootDustCovers = await prisma.bootDustCover.findMany({
    where,
    include: {
      cars: true,
    },
  })

  return bootDustCovers
}
