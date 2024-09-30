import { prisma } from '@/prisma/prisma-client'
import { NextResponse } from 'next/server'

export async function GET() {
  const bootDustForm = await prisma.form.findMany()

  return NextResponse.json(bootDustForm)
}
