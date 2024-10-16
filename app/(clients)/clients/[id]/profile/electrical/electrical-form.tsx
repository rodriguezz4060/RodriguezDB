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
import { useIntl } from 'react-intl'

interface Props {
  clientCar: ElectricalFormData
}

export function ElectricalForm({ clientCar }: Props) {
  const { formatMessage } = useIntl()

  const sensors = Sensors(clientCar)
  const washerMotor = WasherMotor(clientCar)
  const handwheelCable = HandwheelCable(clientCar)
  const lambda = Lambda(clientCar)
  const { sparkPlugs, IgnitionCoil, ignitionWires, trampler } = SparkPlugsAndIgnitionCoil(clientCar)
  const { absFront, absRear } = AbsSensor(clientCar)
  const lightBulbs = LightBulbs(clientCar)

  const tabsData = [
    {
      value: 'sensors',
      label: formatMessage({ id: 'clients.sensors' }),
      blocks: [{ label: formatMessage({ id: 'clients.sensors' }), data: sensors }],
    },
    {
      value: 'washerMotor',
      label: formatMessage({ id: 'clients.washerMotor' }),
      blocks: [{ label: formatMessage({ id: 'clients.washerMotor' }), data: washerMotor }],
    },
    {
      value: 'handwheelCable',
      label: formatMessage({ id: 'clients.handwheelCable' }),
      blocks: [{ label: formatMessage({ id: 'clients.handwheelCable' }), data: handwheelCable }],
    },
    {
      value: 'lambda',
      label: formatMessage({ id: 'clients.lambda' }),
      blocks: [{ label: formatMessage({ id: 'clients.lambda' }), data: lambda }],
    },
    {
      value: 'absSensor',
      label: formatMessage({ id: 'clients.absSensor' }),
      blocks: [
        { label: formatMessage({ id: 'clients.absFront' }), data: absFront },
        { label: formatMessage({ id: 'clients.absRear' }), data: absRear },
      ],
    },
    {
      value: 'sparkPlugsIgnitionCoil',
      label: formatMessage({ id: 'clients.sparkPlugsIgnitionCoil' }),
      blocks: [
        { label: formatMessage({ id: 'clients.sparkPlugs' }), data: sparkPlugs },
        { label: formatMessage({ id: 'clients.IgnitionCoil' }), data: IgnitionCoil },
        { label: formatMessage({ id: 'clients.ignitionWires' }), data: ignitionWires },
        { label: formatMessage({ id: 'clients.trampler' }), data: trampler },
      ],
    },
    {
      value: 'lightBulbs',
      label: formatMessage({ id: 'clients.lightBulbs' }),
      blocks: [{ label: formatMessage({ id: 'clients.lightBulbs' }), data: lightBulbs }],
    },
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
