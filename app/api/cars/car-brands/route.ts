import { prisma } from '@/prisma/prisma-client'
import { NextResponse } from 'next/server'

export async function GET() {
  const carBrand = await prisma.carBrand.findMany()

  return NextResponse.json(carBrand)
}
