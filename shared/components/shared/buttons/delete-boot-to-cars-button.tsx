import React from 'react'

interface ConnectedDustCoverProps {
  dustCover: { id: number; partNumber: string }
  onRemove: (id: number) => void
}

export const DeleteBootToCarsButton: React.FC<ConnectedDustCoverProps> = ({
  dustCover,
  onRemove,
}) => {
  return (
    <li key={dustCover.id} className='flex items-center justify-between w-[300px]'>
      {dustCover.partNumber}
      <div className='flex-1 border-b border-dashed border-b-neutral-200 relative top-1 mx-2' />
      <button
        type='button'
        onClick={() => onRemove(dustCover.id)}
        className='font-extrabold text-lg opacity-30 hover:opacity-100 cursor-pointer hover:text-red-700'
      >
        ✕
      </button>
    </li>
  )
}
