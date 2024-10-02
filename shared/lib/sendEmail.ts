import { Resend } from 'resend'

export const sendEmail = async () => {
  const resend = new Resend(process.env.RESEND_API_KEY)
}

const { data, error } = await resend.emails.send({
  from: 'onboarding@resend.dev',
  to: ['delivered@resend.dev'],
  subject: 'Hello world',
  react: EmailTemplate({ firstName: 'John' }),
})
