import { z } from 'zod'

export const formAddBootDustCoverSchema = z.object({
  newName: z.string().min(1, { message: 'Имя обязательно' }),
  typeId: z.number().min(1, { message: 'Выберите тип пыльника' }),
  formId: z.number().min(1, { message: 'Форма обязательна' }),
  dIn: z
    .string()
    .transform(value => (value ? parseFloat(value) : undefined))
    .refine(value => value !== undefined, { message: 'Внутренний диаметр обязателен' }),
  dOut: z
    .string()
    .transform(value => (value ? parseFloat(value) : undefined))
    .refine(value => value !== undefined, { message: 'Внешний диаметр обязателен' }),
  height: z
    .string()
    .transform(value => (value ? parseFloat(value) : undefined))
    .refine(value => value !== undefined, { message: 'Высота обязательна' }),
  partNumber: z.string().min(1, { message: 'Номер детали обязателен' }),
  imageUrl: z.string().url({ message: 'Неверный URL' }).optional().or(z.literal('')),
})
export type TFormAddBootDustCoverSchema = z.infer<typeof formAddBootDustCoverSchema>
