import { z } from 'zod'

export const formEditCarSchema = z.object({
  id: z.number(),
  carBrandId: z.number(),
  imageUrl: z.string().url(),
  models: z.string(),
  carBody: z.string(),
  modelYear: z.string(),
  engine: z.string(),
  volume: z.string(),
  bootDustCoverId: z.number().optional().nullable(),
})

export type TFormEditCarSchema = z.infer<typeof formEditCarSchema>
