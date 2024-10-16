'use client'

import { BrakeSystemFormData } from '@/@types/client-car'
import { EditClientCarButton, LabeledBox, PartItemForm } from '@/shared/components/shared'
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
import { useActiveTab, useTabsDataCheck } from '@/shared/hooks'
import { TabsList } from '@radix-ui/react-tabs'
import { useIntl } from 'react-intl'

interface Props {
  clientCar: BrakeSystemFormData
}

export function BrakeSystemForm({ clientCar }: Props) {
  const { formatMessage } = useIntl()

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
      label: formatMessage({ id: 'clients.handbrakeCable' }),
      blocks: [{ label: formatMessage({ id: 'clients.handbrakeCable' }), data: brakeCable }],
    },
    {
      value: 'DisksAndDrums',
      label: formatMessage({ id: 'clients.DisksAndDrums' }),
      blocks: [
        { label: formatMessage({ id: 'clients.brakeDisksAndDrums' }), data: brakeDisksAndDrums },
      ],
    },
    {
      value: 'brake',
      label: formatMessage({ id: 'clients.brake' }),
      blocks: [{ label: formatMessage({ id: 'clients.brakePads' }), data: brakePads }],
    },
    {
      value: 'frontBrakeMechanism',
      label: formatMessage({ id: 'clients.frontBrakeMechanism' }),
      blocks: [
        {
          label: formatMessage({ id: 'clients.frontWheelBrakeMechanism' }),
          data: frontWheelBrakeMechanism,
        },
      ],
    },
    {
      value: 'rearBrakeMechanism',
      label: formatMessage({ id: 'clients.rearBrakeMechanism' }),
      blocks: [
        {
          label: formatMessage({ id: 'clients.rearWheelBrakeMechanism' }),
          data: rearWheelBrakeMechanism,
        },
      ],
    },
    {
      value: 'brakeCylinder',
      label: formatMessage({ id: 'clients.brakeCylinder' }),
      blocks: [{ label: formatMessage({ id: 'clients.brakeCylinder' }), data: brakeCylinder }],
    },
    {
      value: 'brakeHoses',
      label: formatMessage({ id: 'clients.brakeHoses' }),
      blocks: [
        { label: formatMessage({ id: 'clients.brakeHosesFront' }), data: brakeHosesFront },
        { label: formatMessage({ id: 'clients.brakeHosesRear' }), data: brakeHosesRear },
      ],
    },
  ]

  const filteredTabsData = tabsData
    .map(tab => ({
      ...tab,
      blocks: tab.blocks.filter(block => block.data.some(item => item.value)),
    }))
    .filter(tab => tab.blocks.length > 0)

  const activeTabValue = useActiveTab(filteredTabsData, 'handbrakeCable')
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
