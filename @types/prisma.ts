import { BootDustCover, Car, CarBrand } from '@prisma/client'

// Определяем тип для машины с брендом
export type CarWithBrand = Car & {
  carBrand: CarBrand
}

// Определяем тип для пыльника с машинами и брендами
export type BootWithRelation = BootDustCover & {
  cars: CarWithBrand[]
  name: { name: string }
  form: {
    id: number
    form: string
  }

  type: {
    id: number
    type: string
  }
}

export type CarWithBoot = Car & {
  carBrand: CarBrand
  bootDustCoverId?: number
  bootDustCover: BootDustCover[]
}

export type BootWithCar = BootDustCover & {
  bootDustCoverId?: number
  cars: CarWithBrand[]
}
