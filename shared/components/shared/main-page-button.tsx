import { Title } from '@radix-ui/react-dialog'
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui'
import { Plus } from 'lucide-react'

interface Props {
    className?: string
}

export const MainPageButtons: React.FC<Props> = ({className}) => {
    return (
        <div className={className}>
      <Link href={`/boot-kit/`}>
        <div className='flex justify-center p-6 bg-secondary rounded-lg h-[260px]'>
          <img className='w-[215px] h-[215px]' src='/public/myImage.png' alt={'имя'} />
        </div>

        <p className='text-sm text-gray-400'>
          Цыпленок, моцарелла, сыры чеддер и пармезан, сырный соус, томаты, соус альфредо, чеснок
        </p>

        <div className='flex justify-between items-center mt-4'>
          <span className='text-[20px]'>
            от <b>233 ₴</b>
          </span>
          <Button variant='secondary' className='text-base font-bold'>
            <Plus size={20} className='mr-1' />
            Добавить
          </Button>
        </div>
      </Link>
    </div>
    )
}