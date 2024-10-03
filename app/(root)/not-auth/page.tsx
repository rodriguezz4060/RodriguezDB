'use client'

import { InfoBlock } from '@/shared/components/shared'
import { useIntl } from 'react-intl'

export default function UnauthorizedPage() {
  const { formatMessage } = useIntl()

  return (
    <div className='flex flex-col items-center justify-center mt-40'>
      <InfoBlock
        title={formatMessage({ id: 'noFoundPage.notAuthErrorTitle' })}
        text={formatMessage({ id: 'noFoundPage.notAuthErrorText' })}
        imageUrl='/assets/images/lock.png'
      />
    </div>
  )
}
