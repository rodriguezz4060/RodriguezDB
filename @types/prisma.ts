import { BootDustCover, Car, CarBrand } from '@prisma/client'

// Определяем тип для машины с брендом
export type CarWithBrand = Car & {
  carBrand: CarBrand
}

// Определяем тип для пыльника с машинами и брендами
export type BootWithRelation = BootDustCover & {
  cars: CarWithBrand[]
  // carBrand: CarBrand[]
}