'use client'

import React from 'react'
import { SidebarNav } from '../sidebar-nav'
import { ClientEditPageSidebarNavItems } from '@/shared/constants/sidebar-nav-items'

interface Props {
  id: number
  className?: string
}

export const ClientEditCarSidebarNav: React.FC<Props> = ({ id, className }) => {
  const sidebarNavItems = ClientEditPageSidebarNavItems(id)

  return (
    <>
      <aside className='-mx-4 lg:w-1/5'>
        <SidebarNav items={sidebarNavItems} />
      </aside>
    </>
  )
}
