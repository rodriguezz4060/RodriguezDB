import React from 'react'
import { Api } from '../services/api-client'
import { Name } from '@prisma/client'

export const useBootBootCoverFirms = () => {
  const [bootDustCoversFirms, setBootDustCoversFirms] = React.useState<Name[]>([])
  const [loading, setLoading] = React.useState(true)

  React.useEffect(() => {
    async function fetchGetBootFirms() {
      try {
        setLoading(true)
        const bootFirms = await Api.bootDustCover.getBootDustName()
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
