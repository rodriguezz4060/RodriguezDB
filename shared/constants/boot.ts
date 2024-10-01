export const mapForm = {
  1: 'Круглый',
  2: 'Тришип',
} as const

export const mapType = {
  1: 'Резиновый',
  2: 'Пластиковый',
  3: 'Силиконовый',
  4: 'Универсальный',
} as const

export const bootForms = Object.entries(mapForm).map(([value, name]) => ({
  name,
  value,
}))

export const BootTypes = Object.entries(mapType).map(([value, name]) => ({
  name,
  value,
}))

export type BootForm = keyof typeof mapForm
export type BootType = keyof typeof mapType

export interface BootFormTranslation {
  [id: number]: string
}

export interface BootTypeTranslation {
  [id: number]: string
}

export const bootForm: BootFormTranslation = {
  1: 'bootCoverInfo.round',
  2: 'bootCoverInfo.triship',
}

export const bootType: BootTypeTranslation = {
  1: 'bootCoverInfo.rubber',
  2: 'bootCoverInfo.plastic',
  3: 'bootCoverInfo.silicon',
  4: 'bootCoverInfo.triship',
}
