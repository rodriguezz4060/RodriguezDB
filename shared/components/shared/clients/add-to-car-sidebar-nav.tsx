'use client'

import React from 'react'
import { SidebarNav } from '../sidebar-nav'
import { AddClientToPageSidebarNavItems } from '@/shared/constants/sidebar-nav-items'

interface Props {
  className?: string
}

export const AddToCarSidebarNav: React.FC<Props> = ({ className }) => {
  const sidebarNavItems = AddClientToPageSidebarNavItems()

  return (
    <>
      <aside className='-mx-4 lg:w-1/5'>
        <SidebarNav items={sidebarNavItems} />
      </aside>
    </>
  )
}
