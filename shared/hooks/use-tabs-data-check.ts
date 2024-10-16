import { useMemo } from 'react'

interface Tab {
  value: string
  blocks: { data: { value: any }[] }[]
}

export function useTabsDataCheck(tabs: Tab[]): boolean {
  return useMemo(() => {
    return tabs.every(tab => tab.blocks.length === 0)
  }, [tabs])
}
