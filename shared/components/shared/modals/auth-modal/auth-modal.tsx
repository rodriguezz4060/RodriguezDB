import { Button } from '@/shared/components/ui'
import { Dialog, DialogContent } from '@/shared/components/ui/dialog'
import { cn } from '@/shared/lib/utils'
import { Github } from 'lucide-react'
import { signIn } from 'next-auth/react'

import React from 'react'
import { LoginForm } from './forms/login-form'
import { RegisterForm } from './forms/register-form'

interface Props {
  open: boolean
  onclose: () => void
  className?: string
}

export const AuthModal: React.FC<Props> = ({ open, onclose, className }) => {
  const [type, setType] = React.useState<'login' | 'register'>('login')

  const onSwitchType = () => {
    setType(type === 'login' ? 'register' : 'login')
  }

  const handleClose = () => {
    onclose()
  }

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent
        className={cn('w-[450px] p-10 bg-[#fcfcfc] dark:bg-zinc-900', className)}
        aria-describedby={undefined}
      >
        {type === 'login' ? (
          <LoginForm onClose={onclose} />
        ) : (
          <RegisterForm onClose={handleClose} />
        )}

        <hr />
        <div className='flex gap-2'>
          <Button
            variant='secondary'
            onClick={() =>
              signIn('github', {
                callbackUrl: '/',
                redirect: true,
              })
            }
            type='button'
            className='gap-2 h-12 p-2 flex-1'
          >
            <Github size={28} strokeWidth={2.5} />
            GitHub
          </Button>

          <Button
            variant='secondary'
            onClick={() =>
              signIn('google', {
                callbackUrl: '/',
                redirect: true,
              })
            }
            type='button'
            className='gap-2 h-12 p-2 flex-1'
          >
            <img
              className='w-6 h-6'
              src='https://fonts.gstatic.com/s/i/productlogos/googleg/v6/24px.svg'
              alt='Google'
            />
            Google
          </Button>
        </div>

        <Button variant='outline' onClick={onSwitchType} type='button' className='h-12'>
          {type === 'login' ? 'Регистрация' : 'Войти'}
        </Button>
      </DialogContent>
    </Dialog>
  )
}
