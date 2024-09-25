import React from 'react'
import { Api } from '../services/api-client'
import { BootDustCover } from '@prisma/client'

export const useBootBootCoverFirms = () => {
  const [bootDustCoversFirms, setBootDustCoversFirms] = React.useState<BootDustCover[]>([])
  const [loading, setLoading] = React.useState(true)

  React.useEffect(() => {
    async function fetchGetBootFirms() {
      try {
        setLoading(true)
        const bootFirms = await Api.bootDustCover.getBootDustCover()
        setBootDustCoversFirms(bootFirms)
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    }

    fetchGetBootFirms()
  }, [])

  return { bootDustCoversFirms, loading }
}
