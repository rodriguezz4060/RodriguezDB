import { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from 'next-auth/react'

export const protectRoute = async (req: NextApiRequest, res: NextApiResponse, role: string) => {
  const session = await getSession({ req })

  if (!session || session.user.role !== role) {
    res.status(403).json({ message: 'Forbidden' })
    return false
  }

  return true
}
