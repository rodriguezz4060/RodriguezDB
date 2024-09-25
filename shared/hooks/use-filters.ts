import { useSearchParams } from 'next/navigation'
import { useSet } from 'react-use'
import React from 'react'

interface SizeProps {
  inSizeFrom?: number
  inSizeTo?: number
  outSizeFrom?: number
  outSizeTo?: number
}

interface QueryFilters extends SizeProps {
  bootForm: string
  bootTypes: string
  sizes: string
  selectedFirms: string
}

export interface Filters {
  bootForm: Set<string>
  bootTypes: Set<string>
  selectedFirms: Set<string>
  sizes: SizeProps
}

interface ReturnProps extends Filters {
  setSizes: (name: keyof SizeProps, value: number) => void
  setBootTypes: (value: string) => void
  setBootForm: (value: string) => void
  setBootFirms: (value: string) => void
}

export const useFilters = (): ReturnProps => {
  const searchParams = useSearchParams() as unknown as Map<keyof QueryFilters, string>

  /*Фильтр по фирмам пыльников*/
  const [selectedFirms, { toggle: toggleBootFirms }] = useSet(
    new Set<string>(searchParams.get('selectedFirms')?.split(','))
  )

  /*Фильтр по типу пыльников */
  const [bootTypes, { toggle: toggleBootType }] = useSet(
    new Set<string>(searchParams.has('bootTypes') ? searchParams.get('bootTypes')?.split(',') : [])
  )

  /*Фильтр по форме пыльников */
  const [bootForm, { toggle: toggleBootForm }] = useSet(
    new Set<string>(searchParams.has('bootForm') ? searchParams.get('bootForm')?.split(',') : [])
  )

  /*Фильтр по размеру пыльников */
  const [sizes, setSize] = React.useState<SizeProps>({
    inSizeFrom: Number(searchParams.get('inSizeFrom')) || undefined,
    inSizeTo: Number(searchParams.get('inSizeTo')) || undefined,
    outSizeFrom: Number(searchParams.get('outSizeFrom')) || undefined,
    outSizeTo: Number(searchParams.get('outSizeTo')) || undefined,
  })

  const updateSize = (name: keyof SizeProps, value: number) => {
    setSize(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  return {
    bootTypes,
    bootForm,
    selectedFirms,
    sizes,
    setSizes: updateSize,
    setBootTypes: toggleBootType,
    setBootForm: toggleBootForm,
    setBootFirms: toggleBootFirms,
  }
}
