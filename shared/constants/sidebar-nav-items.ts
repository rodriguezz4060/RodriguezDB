'use client'

import { useIntl } from 'react-intl'

export const ClientSidebarNavItems = (id: any) => {
  const { formatMessage } = useIntl()

  const sidebarNavItems = [
    {
      title: formatMessage({ id: 'clientNavbar.profile' }),
      href: `/clients/${id}/profile`,
    },
    {
      title: formatMessage({ id: 'clientNavbar.suspension' }),
      href: `/clients/${id}/profile/suspension`,
    },
    {
      title: formatMessage({ id: 'clientNavbar.brakeSystem' }),
      href: `/clients/${id}/profile/brake-system`,
    },
    {
      title: formatMessage({ id: 'clientNavbar.transmission' }),
      href: `/clients/${id}/profile/transmission`,
    },
    {
      title: formatMessage({ id: 'clientNavbar.cooling' }),
      href: `/clients/${id}/profile/cooling`,
    },
    {
      title: formatMessage({ id: 'clientNavbar.electrical' }),
      href: `/clients/${id}/profile/electrical`,
    },
    {
      title: formatMessage({ id: 'clientNavbar.carBody' }),
      href: `/clients/${id}/profile/car-body`,
    },
  ]

  return sidebarNavItems
}

export const ClientEditPageSidebarNavItems = (id: any) => {
  const { formatMessage } = useIntl()

  const sidebarNavItems = [
    {
      title: formatMessage({ id: 'clientNavbar.profile' }),
      href: `/clients/${id}/edit/car`,
    },
    {
      title: formatMessage({ id: 'clientNavbar.suspension' }),
      href: `/clients/${id}/edit/car/suspension`,
    },
    {
      title: formatMessage({ id: 'clientNavbar.brakeSystem' }),
      href: `/clients/${id}/edit/car/brake-system`,
    },
    {
      title: formatMessage({ id: 'clientNavbar.transmission' }),
      href: `/clients/${id}/edit/car/transmission`,
    },
    {
      title: formatMessage({ id: 'clientNavbar.cooling' }),
      href: `/clients/${id}/edit/car/cooling`,
    },
    {
      title: formatMessage({ id: 'clientNavbar.electrical' }),
      href: `/clients/${id}/edit/car/electrical`,
    },
    {
      title: formatMessage({ id: 'clientNavbar.carBody' }),
      href: `/clients/${id}/edit/car/car-body`,
    },
  ]

  return sidebarNavItems
}

export const ClientEditToPageSidebarNavItems = (id: any) => {
  const { formatMessage } = useIntl()

  const sidebarNavItems = [
    {
      title: formatMessage({ id: 'clientNavbar.to' }),
      href: `/clients/${id}/edit/to`,
    },
    {
      title: formatMessage({ id: 'clientNavbar.consumables' }),
      href: `/clients/${id}/edit/to/consumables`,
    },
  ]

  return sidebarNavItems
}
