import { z } from 'zod'

export const formBootDustCoverSchema = z.object({
  id: z.number(),
  nameId: z.number(),
  formId: z.number(),
  typeId: z.number(),
  dIn: z.number(),
  dOut: z.number(),
  height: z.number(),
  partNumber: z.string(),
  imageUrl: z.string().optional(),
})

export type TFormBootDustCoverSchema = z.infer<typeof formBootDustCoverSchema>
