export const mapFotm = {
  1: 'Круглый',
  2: 'Тришип',
} as const

export const mapType = {
  1: 'Резиновый',
  2: 'Пластиковый',
  3: 'Универсальный',
} as const

export const bootForms = Object.entries(mapFotm).map(([value, name]) => ({
  name,
  value,
}))

export type BootForm = keyof typeof mapFotm
export type BootType = keyof typeof mapType
