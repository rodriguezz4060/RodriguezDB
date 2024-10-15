import Link from 'next/link'

interface PartItemProps {
  label: string
  value: string
}

export const PartItemForm: React.FC<PartItemProps> = ({ label, value }) => {
  if (!value) return null

  const href = `https://autoyamato.com.ua/newsearch/?keyword=${encodeURIComponent(value)}`

  return (
    <div className='flex items-center'>
      <span>
        {label}: {value}
      </span>
      <div className='flex-1 border-b border-dashed border-b-neutral-200 relative top-1 mx-2' />
      <Link href={href} target='_blank' rel='noopener noreferrer' className='text-blue-500'>
        Цена
      </Link>
    </div>
  )
}
