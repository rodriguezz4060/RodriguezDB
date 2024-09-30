import { prisma } from '@/prisma/prisma-client'
import { NextResponse } from 'next/server'

export async function GET() {
  const bootDustName = await prisma.name.findMany()

  return NextResponse.json(bootDustName)
}
