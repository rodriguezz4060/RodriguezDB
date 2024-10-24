import * as z from 'zod'

export const formCarSchema = z.object({
  imageUrl: z.string().url().optional().or(z.literal('')),
  models: z.string().nonempty(),
  carBody: z.string().nonempty(),
  modelYear: z.string().nonempty(),
  engine: z.string().nonempty(),
  volume: z.string().nonempty(),
  carBrandId: z.number().int().positive(),
})

export type TFormCarSchema = z.infer<typeof formCarSchema>
