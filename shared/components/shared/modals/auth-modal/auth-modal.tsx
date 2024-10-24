import { Dialog, DialogContent } from '@/shared/components/ui/dialog'
import React from 'react'
import { LoginForm } from './forms/login-form'
import { RegisterForm } from './forms/register-form'
import { EmailForm } from './forms/email-form'

interface Props {
  open: boolean
  onClose: () => void
  className?: string
}

export const AuthModal: React.FC<Props> = ({ open, onClose, className }) => {
  const [type, setType] = React.useState<'login' | 'email' | 'register'>('login')

  const onSwitchType = () => {
    setType(type === 'login' ? 'register' : 'login')
  }

  const handleClose = () => {
    onClose()
  }

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className='min-w-[700px] min-h-[700px] p-0'>
        <div className='flex w-full'>
          <div className='w-[40%]'>
            <img
              className='rounded-l-md h-full object-cover'
              src='/assets/images/login.jpg'
              alt='logo'
            />
          </div>
          <div className='w-[60%] flex h-full items-center justify-center'>
            {type === 'login' && <LoginForm onClose={handleClose} setType={setType} />}
            {type === 'register' && <RegisterForm onClose={handleClose} setType={setType} />}
            {type === 'email' && <EmailForm onClose={handleClose} setType={setType} />}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
