import * as z from 'zod'

export const formEditClientCarToSchema = z.object({
  id: z.number(),
  engineOil: z.string().optional(),
  engineOilVolume: z.string().optional(),
  engineOilPartNumber: z.string().optional(),

  automaticTransmissionOil: z.string().optional(),
  automaticTransmissionOilVolume1: z.string().optional(),
  automaticTransmissionOilPartNumber: z.string().optional(),

  mechanicTransmissionOil: z.string().optional(),
  mechanicTransmissionOilVolume: z.string().optional(),
  mechanicTransmissionOilPartNumber: z.string().optional(),

  transferCaseOil: z.string().optional(),
  transferCaseOilVolume: z.string().optional(),
  transferCaseOilPartNumber: z.string().optional(),

  frontAxleGearboxOil: z.string().optional(),
  frontAxleGearboxOilVolume: z.string().optional(),
  frontAxleGearboxOilPartNumber: z.string().optional(),

  rearAxleGearboxOil: z.string().optional(),
  rearAxleGearboxOilVolume: z.string().optional(),
  rearAxleGearboxOilPartNumber: z.string().optional(),

  antifreeze: z.string().optional(),
  antifreezeVolume: z.string().optional(),
  antifreezePartNumber: z.string().optional(),

  steeringFluid: z.string().optional(),
  steeringFluidVolume: z.string().optional(),
  steeringFluidPartNumber: z.string().optional(),
})

export type TFormEditClientCarToSchema = z.infer<typeof formEditClientCarToSchema>
