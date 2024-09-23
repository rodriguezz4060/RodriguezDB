import { prisma } from '@/prisma/prisma-client'
import { NextRequest, NextResponse } from 'next/server'

export async function GET() {
  const mainPageButtons = await prisma.mainButton.findMany()

  return NextResponse.json(mainPageButtons)
}
