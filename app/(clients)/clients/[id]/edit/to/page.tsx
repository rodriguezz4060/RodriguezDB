import { prisma } from '@/prisma/prisma-client'
import { OilForm } from './oil-form'

import { notFound } from 'next/navigation'

export default async function ClientPage({ params: { id } }: { params: { id: string } }) {
  const client = await prisma.clients.findFirst({
    where: { id: Number(id) },
    select: {
      id: true,
      clientCarTo: {
        select: {
          id: true,
          engineOil: true,
          engineOilVolume: true,
          engineOilPartNumber: true,
          automaticTransmissionOil: true,
          automaticTransmissionOilVolume1: true,
          automaticTransmissionOilPartNumber: true,
          mechanicTransmissionOil: true,
          mechanicTransmissionOilVolume: true,
          mechanicTransmissionOilPartNumber: true,
          transferCaseOil: true,
          transferCaseOilVolume: true,
          transferCaseOilPartNumber: true,
          frontAxleGearboxOil: true,
          frontAxleGearboxOilVolume: true,
          frontAxleGearboxOilPartNumber: true,
          rearAxleGearboxOil: true,
          rearAxleGearboxOilVolume: true,
          rearAxleGearboxOilPartNumber: true,
          antifreeze: true,
          antifreezeVolume: true,
          antifreezePartNumber: true,
          steeringFluid: true,
          steeringFluidVolume: true,
          steeringFluidPartNumber: true,
        },
      },
    },
  })

  if (!client || !client.clientCarTo) {
    return notFound()
  }

  return <OilForm clientCarTo={client.clientCarTo} />
}
