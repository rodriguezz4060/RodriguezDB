'use client'

import React, { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from '../ui/breadcrumb'
import { Container } from './container'

interface BreadcrumbItem {
  label: string
  href: string
}

export const BreadcrumbProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const pathname = usePathname()
  const [breadcrumbs, setBreadcrumbs] = useState<BreadcrumbItem[]>([])

  useEffect(() => {
    const pathWithoutQuery = pathname.split('?')[0]
    let pathArray = pathWithoutQuery.split('/')
    pathArray.shift()

    pathArray = pathArray.filter(path => path !== '')

    const breadcrumbs = pathArray.map((path, index) => {
      const href = `/${pathArray.slice(0, index + 1).join('/')}`
      return {
        label: path.charAt(0).toUpperCase() + path.slice(1),
        href,
      }
    })

    setBreadcrumbs([{ label: 'Главная', href: '/' }, ...breadcrumbs])
  }, [pathname])

  return (
    <>
      <Container className='secondary dark:bg-zinc-900 px-4 pt-2'>
        <Breadcrumb>
          <BreadcrumbList>
            {breadcrumbs.map((item, index) => (
              <React.Fragment key={index}>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link href={item.href}>{item.label}</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                {index < breadcrumbs.length - 1 && <BreadcrumbSeparator />}
              </React.Fragment>
            ))}
          </BreadcrumbList>
        </Breadcrumb>
        {children}
      </Container>
    </>
  )
}
