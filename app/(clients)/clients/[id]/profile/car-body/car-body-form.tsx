'use client'

import { CarBodyFormData } from '@/@types/client-car'
import { LabeledBox, PartItemForm } from '@/shared/components/shared'
import { Tabs, TabsContent, TabsTrigger } from '@/shared/components/ui/tabs'
import { Wipers, HoodShockAbsorbers } from '@/shared/constants/client-car'
import { TabsList } from '@radix-ui/react-tabs'

interface Props {
  clientCar: CarBodyFormData
}

export function CarBodyForm({ clientCar }: Props) {
  const wipers = Wipers(clientCar)
  const hoodShockAbsorbers = HoodShockAbsorbers(clientCar)

  const tabsData = [
    { value: 'wipers', label: 'Дворник', blocks: [{ label: 'Дворник', data: wipers }] },
    {
      value: 'washerMotor',
      label: 'Амортизаторы капота',
      blocks: [{ label: 'Амортизаторы капота', data: hoodShockAbsorbers }],
    },
  ]

  const filteredTabsData = tabsData
    .map(tab => ({
      ...tab,
      blocks: tab.blocks.filter(block => block.data.some(item => item.value)),
    }))
    .filter(tab => tab.blocks.length > 0)

  return (
    <Tabs defaultValue='wipers'>
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