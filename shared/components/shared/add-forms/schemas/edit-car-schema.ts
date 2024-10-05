import * as z from 'zod'

export const formEditCarSchema = z.object({
  id: z.number(),
  carBrandId: z.number().int().positive(),
  imageUrl: z.string().url().optional(),
  models: z.string(),
  carBody: z.string(),
  modelYear: z.string(),
  engine: z.string(),
  volume: z.string(),
})

export type TFormEditCarSchema = z.infer<typeof formEditCarSchema>
