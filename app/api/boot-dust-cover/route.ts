import { prisma } from '@/prisma/prisma-client'
import { NextResponse } from 'next/server'

export async function GET() {
  const bootDustCover = await prisma.bootDustCover.findMany()

  return NextResponse.json(bootDustCover)
}
