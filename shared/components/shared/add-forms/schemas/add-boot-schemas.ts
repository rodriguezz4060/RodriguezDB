import { z } from 'zod'

export const formAddBootDustCoverSchema = z.object({
  newName: z.string().min(1, { message: 'Name is required' }),
  typeId: z.number().min(1, { message: 'Type is required' }),
  formId: z.number().min(1, { message: 'Form is required' }),
  dIn: z.number().min(1, { message: 'dIn is required' }),
  dOut: z.number().min(1, { message: 'dOut is required' }),
  height: z.number().min(1, { message: 'Height is required' }),
  partNumber: z.string().min(1, { message: 'Part number is required' }),
  imageUrl: z.string().url({ message: 'Invalid URL' }),
})

export type TFormAddBootDustCoverSchema = z.infer<typeof formAddBootDustCoverSchema>
