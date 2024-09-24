import React from 'react'
import { BootDustCover } from '@prisma/client'
import { Api } from '../services/api-client'
import { useSet } from 'react-use'

interface ReturnProps {
  bootDustCovers: BootDustCover[]
  loading: boolean
  selectedIds: Set<string>
  onAddId: (id: string) => void
}

export const useBootBootCover = (): ReturnProps => {
  const [bootDustCovers, setBootDustCovers] = React.useState<BootDustCover[]>([])
  const [loading, setLoading] = React.useState(true)

  const [selectedIds, { toggle }] = useSet(new Set<string>([]))

  React.useEffect(() => {
    async function fetchGetBootFirms() {
      try {
        setLoading(true)
        const bootFirms = await Api.bootDustCover.getBootDustCover()
        setBootDustCovers(bootFirms)
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    }

    fetchGetBootFirms()
  }, [])

  return { bootDustCovers, loading, onAddId: toggle, selectedIds }
}
