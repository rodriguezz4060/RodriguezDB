'use client'

import { BrakeSystemFormData } from '@/@types/client-car'
import { LabeledBox, PartItemForm } from '@/shared/components/shared'
import { Tabs, TabsContent, TabsTrigger } from '@/shared/components/ui/tabs'
import {
  BrakeCable,
  BrakeDisksAndDrums,
  BrakePads,
  BrakeCylinder,
  FrontWheelBrakeMechanism,
  RearWheelBrakeMechanism,
  BrakeHoses,
} from '@/shared/constants/client-car'
import { TabsList } from '@radix-ui/react-tabs'

interface Props {
  clientCar: BrakeSystemFormData
}

export function BrakeSystemForm({ clientCar }: Props) {
  const brakeCable = BrakeCable(clientCar)
  const brakeDisksAndDrums = BrakeDisksAndDrums(clientCar)
  const brakePads = BrakePads(clientCar)
  const brakeCylinder = BrakeCylinder(clientCar)
  const frontWheelBrakeMechanism = FrontWheelBrakeMechanism(clientCar)
  const rearWheelBrakeMechanism = RearWheelBrakeMechanism(clientCar)
  const { brakeHosesFront, brakeHosesRear } = BrakeHoses(clientCar)

  const tabsData = [
    {
      value: 'handbrakeCable',
      label: 'Тормозной трос',
      blocks: [{ label: 'Тормозной трос', data: brakeCable }],
    },
    {
      value: 'brakeDisksAndDrums',
      label: 'Тормозные диски',
      blocks: [{ label: 'Диски', data: brakeDisksAndDrums }],
    },
    {
      value: 'brakePads',
      label: 'Тормозные колодки',
      blocks: [{ label: 'Колодки', data: brakePads }],
    },
    {
      value: 'frontWheelBrakeMechanism',
      label: 'Тормозной механизм переднего колеса',
      blocks: [{ label: 'Передний тормозной механизм', data: frontWheelBrakeMechanism }],
    },
    {
      value: 'rearWheelBrakeMechanism',
      label: 'Тормозной механизм заднего колеса',
      blocks: [{ label: 'Задний тормозной механизм', data: rearWheelBrakeMechanism }],
    },
    {
      value: 'brakeCylinder',
      label: 'Тормозной цилиндр',
      blocks: [{ label: 'Тормозной цилиндр', data: brakeCylinder }],
    },
    {
      value: 'silentBlocks',
      label: 'Тормозные шланги',
      blocks: [
        { label: 'Передние', data: brakeHosesFront },
        { label: 'Задние', data: brakeHosesRear },
      ],
    },
  ]

  const filteredTabsData = tabsData
    .map(tab => ({
      ...tab,
      blocks: tab.blocks.filter(block => block.data.some(item => item.value)),
    }))
    .filter(tab => tab.blocks.length > 0)

  return (
    <Tabs defaultValue='handbrakeCable'>
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
