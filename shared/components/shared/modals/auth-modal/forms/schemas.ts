import { z } from 'zod'

export const passwordSchema = z
  .string()
  .min(6, { message: 'Пароль должен быть не менее 6 символов' })

export const passwordProfileSchema = z
  .string()
  .min(6, { message: 'Пароль должен быть не менее 6 символов' })
  .optional()
  .or(z.literal(''))

export const formLoginSchema = z.object({
  email: z.string().email({ message: 'Введите корректную почту' }),
  password: passwordSchema,
})

export const formRegisterSchema = formLoginSchema
  .merge(
    z.object({
      fullName: z.string().min(2, { message: 'Имя должно быть не менее 2 символов' }),
      confirmPassword: passwordSchema,
    })
  )
  .refine(data => data.password === data.confirmPassword, {
    message: 'Пароли не совпадают',
    path: ['confirmPassword'],
  })

export const formProfileLoginSchema = z.object({
  email: z.string().email({ message: 'Введите корректную почту' }),
  password: passwordProfileSchema,
})

export const formProfileSchema = formProfileLoginSchema
  .merge(
    z.object({
      fullName: z.string().min(2, { message: 'Имя должно быть не менее 2 символов' }),
      confirmPassword: passwordProfileSchema,
    })
  )
  .refine(
    data => {
      if (data.password && data.confirmPassword) {
        return data.password === data.confirmPassword
      }
      return true
    },
    {
      message: 'Пароли не совпадают',
      path: ['confirmPassword'],
    }
  )

export type TFormLoginSchema = z.infer<typeof formLoginSchema>
export type TFormRegisterSchema = z.infer<typeof formRegisterSchema>
export type TFormProfileSchema = z.infer<typeof formProfileSchema>
