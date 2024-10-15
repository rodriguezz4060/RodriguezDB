'use client'

import { EngineFormData } from '@/@types/client-car'
import { LabeledBox, PartItemForm } from '@/shared/components/shared'
import { Tabs, TabsContent, TabsTrigger } from '@/shared/components/ui/tabs'
import {
  BeltAndTensioner,
  EngineAndPiston,
  EngineCushion,
  EngineGasket,
  EngineOilSeals,
  EngineTimingBelt,
  AirSupplySystem,
  Filters,
} from '@/shared/constants/client-car'
import { TabsList } from '@radix-ui/react-tabs'

interface Props {
  clientCar: EngineFormData
}

export function EngineForm({ clientCar }: Props) {
  const engineTimingBelt = EngineTimingBelt(clientCar)
  const { enginePiston, engineValves, engineLiner } = EngineAndPiston(clientCar)
  const { driveBelt, tensionerBelt } = BeltAndTensioner(clientCar)
  const { enginePgb, engineGasket } = EngineGasket(clientCar)
  const engineCushion = EngineCushion(clientCar)
  const engineOilSeals = EngineOilSeals(clientCar)
  const airSupplySystem = AirSupplySystem(clientCar)
  const filters = Filters(clientCar)

  const tabsData = [
    { value: 'drives', label: 'ГРМ', blocks: [{ label: 'ГРМ', data: engineTimingBelt }] },
    {
      value: 'pistons',
      label: 'Двигатель и поршневая',
      blocks: [
        { label: 'Поршня', data: enginePiston },
        { label: 'Клапана', data: engineValves },
        { label: 'Вкладыши', data: engineLiner },
      ],
    },
    {
      value: 'beltAndRollers',
      label: 'Приводные ремни и ролики',
      blocks: [
        { label: 'Приводные ремни', data: driveBelt },
        { label: 'Ролики и натяжитель', data: tensionerBelt },
      ],
    },
    {
      value: 'engineGasket',
      label: 'ПГБ и прокладки',
      blocks: [
        { label: 'ПГБ', data: enginePgb },
        { label: 'Прокладки', data: engineGasket },
      ],
    },
    {
      value: 'engineCushion',
      label: 'Подушки двигателя',
      blocks: [{ label: 'Подушки двигателя', data: engineCushion }],
    },
    {
      value: 'engineOilSeals',
      label: 'Сальники двигателя',
      blocks: [{ label: 'Сальники двигателя', data: engineOilSeals }],
    },
    {
      value: 'airSupplySystem',
      label: 'Система подачи воздуха',
      blocks: [{ label: 'Система подачи воздуха', data: airSupplySystem }],
    },
    { value: 'filters', label: 'Фильтра', blocks: [{ label: 'Фильтр', data: filters }] },
  ]

  const filteredTabsData = tabsData
    .map(tab => ({
      ...tab,
      blocks: tab.blocks.filter(block => block.data.some(item => item.value)),
    }))
    .filter(tab => tab.blocks.length > 0)

  return (
    <Tabs defaultValue='drives'>
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
