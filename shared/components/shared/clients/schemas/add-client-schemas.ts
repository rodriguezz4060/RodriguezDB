import * as z from 'zod'

export const formAddClientSchema = z.object({
  name: z.string().optional(),
  lastName: z.string().optional(),
  VIN: z.string().transform(value => value.toUpperCase()),
  tel: z
    .string()
    .optional()
    .refine(
      value => {
        if (value === '+380') return true
        return value?.match(/^\+380\d{9}$/) !== null
      },
      {
        message: 'Номер должен содержать только цифры, начинаться с +380 и содержать 9 цифр',
      }
    ),
})

export type TFormAddClientSchema = z.infer<typeof formAddClientSchema>
