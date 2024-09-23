import { prisma } from '@/prisma/prisma-client'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  const query = req.nextUrl.searchParams.get('query') || ''

  const clients = await prisma.clients.findMany({
    where: {
      OR: [
        {
          name: {
            contains: query,
            mode: 'insensitive',
          },
        },
        {
          VIN: {
            contains: query,
            mode: 'insensitive',
          },
        },
      ],
    },
    take: 5,
  })

  return NextResponse.json(clients)
}
