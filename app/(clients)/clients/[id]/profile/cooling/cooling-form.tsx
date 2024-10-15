'use client'

import { CoolingFormData } from '@/@types/client-car'
import { LabeledBox, PartItemForm } from '@/shared/components/shared'
import { Tabs, TabsContent, TabsTrigger } from '@/shared/components/ui/tabs'
import { CoolingSystem, Radiator, RadiatorPipe } from '@/shared/constants/client-car'
import { TabsList } from '@radix-ui/react-tabs'

interface Props {
  clientCar: CoolingFormData
}

export function CoolingForm({ clientCar }: Props) {
  const coolingSystem = CoolingSystem(clientCar)
  const { radiator, radiatorCap } = Radiator(clientCar)
  const radiatorPipe = RadiatorPipe(clientCar)

  const tabsData = [
    {
      value: 'coolingSystem',
      label: 'Помпа и термостат',
      blocks: [{ label: 'ШРУС передний', data: coolingSystem }],
    },
    {
      value: 'radiator',
      label: 'Радиаторы',
      blocks: [
        { label: 'Радиаторы', data: radiator },
        { label: 'Крышка радиатора и бачка', data: radiatorCap },
      ],
    },
    {
      value: 'radiatorPipe',
      label: 'Патрубки',
      blocks: [{ label: 'Патрубки', data: radiatorPipe }],
    },
  ]

  const filteredTabsData = tabsData
    .map(tab => ({
      ...tab,
      blocks: tab.blocks.filter(block => block.data.some(item => item.value)),
    }))
    .filter(tab => tab.blocks.length > 0)

  return (
    <Tabs defaultValue='coolingSystem'>
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
  )
}
