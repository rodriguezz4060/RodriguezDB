import Link from 'next/link'
import React from 'react'
import { useIntl } from 'react-intl';

interface Props {
    className?: string
}

export const MainPageButtons: React.FC<Props> = ({ className}) => {
    const { formatMessage } = useIntl()
    return (
<div className='flex justify-center gap-6'>
<Link href={`/boot-kit/`} className='flex flex-row items-start p-3 bg-secondary rounded-lg h-[280px] w-[240px] hover:bg-secondary hover:opacity-80 hover:shadow-md transition duration-200'>
<div className='flex flex-col items-start'>
<p className='mb-2 text-base'><b>{formatMessage({ id: 'mainPage.BootKit' })}</b></p>
<img className='w-[215px] h-[215px] mb-5' src='/boot-logo.png' alt={formatMessage({ id: 'mainPage.BootKit' })} />
</div>
</Link>
<Link href={`/oil/`} className='flex flex-row items-start p-3 bg-secondary rounded-lg h-[280px] w-[240px] hover:bg-secondary hover:opacity-80 hover:shadow-md transition duration-200'>
<div className='flex flex-col items-start'>
<p className='mb-2'><b>{formatMessage({ id: 'mainPage.oil' })}</b></p>
<img className='w-[215px] h-[215px]' src='/oil.png' alt={formatMessage({ id: 'mainPage.oil' })} />
</div>
</Link>
<Link href={`/clients/`} className='flex flex-row items-start p-3 bg-secondary rounded-lg h-[280px] w-[240px] hover:bg-secondary hover:opacity-80 hover:shadow-md transition duration-200'>
<div className='flex flex-col items-start'>
<p className='mb-2'><b>{formatMessage({ id: 'mainPage.clients' })}</b></p>
<img className='w-[215px] h-[215px]' src='/clients.png' alt={formatMessage({ id: 'mainPage.clients' })} />
</div>
</Link>
</div>
);
};
