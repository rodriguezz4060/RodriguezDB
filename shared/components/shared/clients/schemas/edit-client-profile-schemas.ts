import * as z from 'zod'

export const formEditClientProfileSchema = z.object({
  id: z.number().int().positive(),
  name: z.string().optional(),
  lastName: z.string().optional(),
  VIN: z
    .string()
    .min(1, { message: 'Поле VIN обязательно для заполнения' })
    .transform(value => value.toUpperCase()),
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
  clientCar: z.object({
    gosNumber: z.string(),
    models: z.string(),
  }),
})

export type TFormEditClientProfileSchema = z.infer<typeof formEditClientProfileSchema>
