import React from 'react'
import { BootDustCover } from '@prisma/client'
import { Api } from '../services/api-client'

interface ReturnProps {
  bootDustCovers: BootDustCover[]
  loading: boolean
}

export const useBootBootCover = (): ReturnProps => {
  const [bootDustCovers, setBootDustCovers] = React.useState<BootDustCover[]>([])
  const [loading, setLoading] = React.useState(true)

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

  return { bootDustCovers, loading }
}
