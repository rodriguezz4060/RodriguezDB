'use client'

import { ElectricalFormData } from '@/@types/client-car'
import { EditClientCarButton, LabeledBox, PartItemForm } from '@/shared/components/shared'
import { Tabs, TabsContent, TabsTrigger } from '@/shared/components/ui/tabs'
import {
  Sensors,
  WasherMotor,
  HandwheelCable,
  Lambda,
  SparkPlugsAndIgnitionCoil,
  AbsSensor,
  LightBulbs,
} from '@/shared/constants/client-car'
import { useActiveTab, useTabsDataCheck } from '@/shared/hooks'
import { TabsList } from '@radix-ui/react-tabs'

interface Props {
  clientCar: ElectricalFormData
}

export function ElectricalForm({ clientCar }: Props) {
  const sensors = Sensors(clientCar)
  const washerMotor = WasherMotor(clientCar)
  const radiatorPipe = HandwheelCable(clientCar)
  const lambda = Lambda(clientCar)
  const { sparkPlugs, IgnitionCoil, ignitionWires, trampler } = SparkPlugsAndIgnitionCoil(clientCar)
  const { absFront, absRear } = AbsSensor(clientCar)
  const lightBulbs = LightBulbs(clientCar)

  const tabsData = [
    { value: 'sensors', label: 'Датчики', blocks: [{ label: 'Датчики', data: sensors }] },
    {
      value: 'washerMotor',
      label: 'Моторчик омывателя',
      blocks: [{ label: 'Моторчик омывателя', data: washerMotor }],
    },
    {
      value: 'radiatorPipe',
      label: 'Подрулевой шлейф',
      blocks: [{ label: 'Подрулевой шлейф', data: radiatorPipe }],
    },
    { value: 'lambda', label: 'Лямбда зонды', blocks: [{ label: 'Лямбда зонды', data: lambda }] },
    {
      value: 'absSensor',
      label: 'Датчики абс',
      blocks: [
        { label: 'Передние', data: absFront },
        { label: 'Задние', data: absRear },
      ],
    },
    {
      value: 'sparkPlugs',
      label: 'Свечи, Катушки и Провода',
      blocks: [
        { label: 'Свечи', data: sparkPlugs },
        { label: 'Катушки', data: IgnitionCoil },
        { label: 'Провода', data: ignitionWires },
        { label: 'Трамблер', data: trampler },
      ],
    },
    { value: 'lightBulbs', label: 'Лампочки', blocks: [{ label: 'Лампочки', data: lightBulbs }] },
  ]

  const filteredTabsData = tabsData
    .map(tab => ({
      ...tab,
      blocks: tab.blocks.filter(block => block.data.some(item => item.value)),
    }))
    .filter(tab => tab.blocks.length > 0)

  const activeTabValue = useActiveTab(filteredTabsData, 'sensors')
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
          <span className='text-lg font-bold'>Нет информации.</span>
          <div className='mt-5'>
            <EditClientCarButton id={clientCar.id} className='rounded-[5px]' />
          </div>
        </div>
      )}
    </div>
  )
}
