'use client'

import { CoolingFormData } from '@/@types/client-car'
import { EditClientCarButton, LabeledBox, PartItemForm } from '@/shared/components/shared'
import { Tabs, TabsContent, TabsTrigger } from '@/shared/components/ui/tabs'
import { CoolingSystem, Radiator, RadiatorPipe } from '@/shared/constants/client-car'
import { useActiveTab, useTabsDataCheck } from '@/shared/hooks'
import { TabsList } from '@radix-ui/react-tabs'
import { useIntl } from 'react-intl'

interface Props {
  clientCar: CoolingFormData
}

export function CoolingForm({ clientCar }: Props) {
  const { formatMessage } = useIntl()

  const coolingSystem = CoolingSystem(clientCar)
  const { radiator, radiatorCap } = Radiator(clientCar)
  const radiatorPipe = RadiatorPipe(clientCar)

  const tabsData = [
    {
      value: 'coolingSystem',
      label: formatMessage({ id: 'clients.coolingSystem' }),
      blocks: [{ label: formatMessage({ id: 'clients.coolingSystem' }), data: coolingSystem }],
    },
    {
      value: 'radiator',
      label: formatMessage({ id: 'clients.radiator' }),
      blocks: [
        { label: formatMessage({ id: 'clients.radiator' }), data: radiator },
        { label: formatMessage({ id: 'clients.radiatorCap' }), data: radiatorCap },
      ],
    },
    {
      value: 'radiatorPipe',
      label: formatMessage({ id: 'clients.radiatorPipe' }),
      blocks: [{ label: formatMessage({ id: 'clients.radiatorPipe' }), data: radiatorPipe }],
    },
  ]

  const filteredTabsData = tabsData
    .map(tab => ({
      ...tab,
      blocks: tab.blocks.filter(block => block.data.some(item => item.value)),
    }))
    .filter(tab => tab.blocks.length > 0)

  const activeTabValue = useActiveTab(filteredTabsData, 'coolingSystem')
  const noDataAvailable = useTabsDataCheck(filteredTabsData)

  return (
    <div>
      <Tabs defaultValue={activeTabValue}>
        <TabsList>
          {filteredTabsData.map(tab => (
            <TabsTrigger key={tab.value} value={tab.value}>
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>

        {filteredTabsData.map(tab => (
          <TabsContent key={tab.value} value={tab.value}>
            {tab.blocks.map((block, index) => (
              <LabeledBox key={index} label={block.label}>
                {block.data.map((item, itemIndex) => (
                  <PartItemForm key={itemIndex} label={item.label} value={item.value ?? ''} />
                ))}
              </LabeledBox>
            ))}
          </TabsContent>
        ))}
      </Tabs>

      {noDataAvailable && (
        <div className='mt-2 text-center'>
          <span className='text-lg font-bold'>
            {formatMessage({ id: 'clients.noDataAvailable' })}
          </span>
          <div className='mt-5'>
            <EditClientCarButton id={clientCar.id} className='rounded-[5px]' />
          </div>
        </div>
      )}
    </div>
  )
}
