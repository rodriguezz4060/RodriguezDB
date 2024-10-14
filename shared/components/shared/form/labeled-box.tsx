import React from 'react'

interface Props {
  children: React.ReactNode
  className?: string
  label: string
}

export const LabeledBox = ({ label, children, className = '' }: Props) => {
  return (
    <div className={`border p-4 mt-8 relative rounded-sm ${className}`}>
      <div className='absolute -top-4 left-5 bg-white px-2 text-lg font-medium dark:bg-zinc-900'>
        {label}
      </div>
      <div className='space-y-4'>{children}</div>
    </div>
  )
}
