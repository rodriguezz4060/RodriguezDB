import { cn } from "@/shared/lib/utils"
import { Search } from "lucide-react"
import React from "react"
import { useIntl } from "react-intl"
import { useClickAway } from 'react-use'


interface Props {
    className?: string
}

export const SearchInput: React.FC<Props> = ({ className }) => {
    const { formatMessage } = useIntl()
    const [focused, setFocused] = React.useState(false)
    const ref = React.useRef(null)

    useClickAway(ref, () => {
        setFocused(false)
      })

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
          placeholder={formatMessage({id: 'header.serchplaceholder'})}
          onFocus={() => setFocused(true)}
        />
        
      </div>
    </>
  )
}