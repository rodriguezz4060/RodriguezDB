import { useMemo } from 'react'

interface Tab {
  value: string
  blocks: { data: { value: any }[] }[]
}

export function useActiveTab(tabs: Tab[], defaultTabValue: string): string {
  return useMemo(() => {
    // Определяем, есть ли данные в табе по умолчанию
    const defaultTabHasData = tabs.some(
      tab => tab.value === defaultTabValue && tab.blocks.length > 0
    )

    // Если данных в табе по умолчанию нет, находим первый таб с данными
    return defaultTabHasData
      ? defaultTabValue
      : tabs.find(tab => tab.blocks.length > 0)?.value || defaultTabValue
  }, [tabs, defaultTabValue])
}
