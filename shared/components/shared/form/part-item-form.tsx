'use client'

import Link from 'next/link'
import { useIntl } from 'react-intl'

interface PartItemProps {
  label: string
  value: string
}

export const PartItemForm: React.FC<PartItemProps> = ({ label, value }) => {
  const { formatMessage } = useIntl()
  if (!value) return null

  const href = `https://autoyamato.com.ua/newsearch/?keyword=${encodeURIComponent(value)}`

  return (
    <div className='flex items-center'>
      <span>
        {label}: <b>{value}</b>
      </span>
      <div className='flex-1 border-b border-dashed border-b-neutral-200 relative top-1 mx-2' />
      <Link href={href} target='_blank' rel='noopener noreferrer' className='text-blue-500'>
        {formatMessage({ id: 'bootCars.price' })}
      </Link>
    </div>
  )
}
