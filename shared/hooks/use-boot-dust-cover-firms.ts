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
        const bootDustCovers = await Api.bootDustCover.getBootDustCover()
        const names = await Api.bootDustCover.getBootDustName()
        const filteredNames = names.filter(name =>
          bootDustCovers.some(bootDustCover => bootDustCover.nameId === name.id)
        )
        setBootDustCoversFirms(filteredNames)
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
