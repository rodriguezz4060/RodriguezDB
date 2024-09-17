import Link from 'next/link'
import React from 'react'
import { cn } from '@/shared/lib/utils'

interface Props {
    className?: string
    listClassName?: string
}

export const MainPageButtons: React.FC<Props> = ({listClassName, className}) => {
    return (
<div className='flex justify-center gap-6'>
<Link href={`/boot-kit/`} className='transition-transform duration-200 hover:-translate-y-0.5 flex flex-row items-start p-3 bg-secondary rounded-[5px] h-[280px] w-[240px]'>
<div className='flex flex-col items-start'>
<p className='mb-2 text-base'><b>Boot Kit</b></p>
<img className='w-[215px] h-[215px] mb-5' src='/boot-logo.png' alt='Boot Kit' />
</div>
</Link>
<Link href={`/oil/`} className='transition-transform duration-200 hover:-translate-y-0.5 flex flex-row items-start p-3 bg-secondary rounded-[5px] h-[280px] w-[240px]'>
<div className='flex flex-col items-start'>
<p className='mb-2'><b>Oil</b></p>
<img className='w-[215px] h-[215px]' src='/path-to-your-second-image.png' alt='Second Button' />
</div>
</Link>
<Link href={`/clients/`} className='transition-transform duration-200 hover:-translate-y-0.5 flex flex-row items-start p-3 bg-secondary rounded-[5px] h-[280px] w-[240px]'>
<div className='flex flex-col items-start'>
<p className='mb-2'><b>Clients</b></p>
<img className='w-[215px] h-[215px]' src='/path-to-your-third-image.png' alt='Third Button' />
</div>
</Link>
</div>
);
};
