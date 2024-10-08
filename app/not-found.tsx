'use client'

import { PageNotFound } from '@/shared/components/shared'
import { useIntl } from 'react-intl'

export default function UnauthorizedPage() {
  const { formatMessage } = useIntl()

  return (
    <div className='flex flex-col items-center justify-center mt-40 pb-40'>
      <PageNotFound
        title={formatMessage({ id: 'noFoundPage.notFoundErrorTitle' })}
        text={formatMessage({ id: 'noFoundPage.notFoundErrorText' })}
        imageUrl='/assets/images/not-found.png'
      />
    </div>
  )
}
