import { Button } from '@/shared/components/ui'
import { Dialog, DialogContent } from '@/shared/components/ui/dialog'
import { cn } from '@/shared/lib/utils'
import React from 'react'

interface Props {
  open: boolean
  onclose: () => void
  className?: string
}

export const EditBootModal: React.FC<Props> = ({ open, onclose, className }) => {
  const handleClose = () => {
    onclose()
  }

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent
        className={cn('w-[450px] p-10 bg-[#fcfcfc] dark:bg-zinc-900', className)}
        aria-describedby={undefined}
      >
        test
      </DialogContent>
    </Dialog>
  )
}
