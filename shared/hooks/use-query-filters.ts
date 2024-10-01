import React from 'react'
import { Filters } from './use-filters'
import qs from 'qs'
import { useRouter } from 'next/navigation'

export const useQueryFilters = (filters: Filters) => {
  const router = useRouter()

  React.useEffect(() => {
    const params = {
      ...filters.sizes,
      bootForm: Array.from(filters.bootForm),
      bootTypes: Array.from(filters.bootTypes),
      selectedFirms: Array.from(filters.selectedFirms),
    }
    const query = qs.stringify(params, {
      arrayFormat: 'comma',
    })

    router.push(`?${query}`, {
      scroll: false,
    })
  }, [filters])
}
