import { cn } from '@/shared/lib/utils'
import { Api } from '@/shared/services/api-client'
import { Clients } from '@prisma/client'
import { Search } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { useIntl } from 'react-intl'
import { useClickAway, useDebounce } from 'react-use'

interface Props {
  className?: string
}

export const SearchInput: React.FC<Props> = ({ className }) => {
  const { formatMessage } = useIntl()
  const [searchQuery, setSearchQuery] = React.useState('')
  const [focused, setFocused] = React.useState(false)
  const [clients, setClients] = React.useState<Clients[]>([])
  const ref = React.useRef(null)

  useClickAway(ref, () => {
    setFocused(false)
  })

  useDebounce(
    () => {
      Api.clients.search(searchQuery).then(items => setClients(items))
    },
    100,
    [searchQuery]
  )

  return (
    <>
      {focused && <div className='fixed top-0 left-0 bottom-0 right-0 bg-black/50 z-30' />}
      <div
        className={cn('flex rounded-2xl flex-1 justify-between relative h-11 z-30', className)}
        ref={ref}
      >
        <Search className='absolute -translate-y-[-50%] left-3 h-5 text-gray-400' />
        <input
          className='rounded-2xl border outline-none w-full pl-11'
          type='text'
          placeholder={formatMessage({ id: 'header.serchplaceholder' })}
          onFocus={() => setFocused(true)}
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
        />

        <div
          className={cn(
            'absolute w-full rounded-xl bg-white dark:bg-[#121212] py-2 top-14 shadow-md transition-all duration-200 invisible opacity-0 z-30',
            focused && 'visible opacity-100 top-12'
          )}
        >
          {clients.map(client => (
            <Link
              className='flex items-center gap-3 px-3 py-2 hover:bg-primary/10'
              key={client.id}
              href={`/clients/${client.id}`}
            >
              <span>VIN {client.VIN}</span>
              <span>{client.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}
