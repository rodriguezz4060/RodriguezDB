// useTranslations.ts
import { useIntl } from 'react-intl'
import { useMemo } from 'react'
import { bootForm, bootType } from '../constants/boot'

const useTranslations = () => {
  const { formatMessage } = useIntl()

  const translations = useMemo(
    () => ({
      getFormTranslation: (id: number) => {
        const translationId = bootForm[id]
        return translationId ? formatMessage({ id: translationId }) : ''
      },
      getTypeTranslation: (id: number) => {
        const translationId = bootType[id]
        return translationId ? formatMessage({ id: translationId }) : ''
      },
    }),
    [formatMessage]
  )

  return translations
}

export default useTranslations
