'use client'

import { TransmissionFormData } from '@/@types/client-car'
import { EditClientCarButton, LabeledBox, PartItemForm } from '@/shared/components/shared'
import { Tabs, TabsContent, TabsTrigger } from '@/shared/components/ui/tabs'
import {
  GrenadesAndDrives,
  Gearbox,
  SuspensionBearing,
  BootDustCovers,
  TransmissionOilSeals,
  Clutch,
  ClutchCylinders,
} from '@/shared/constants/client-car'
import { useActiveTab, useTabsDataCheck } from '@/shared/hooks'
import { TabsList } from '@radix-ui/react-tabs'
import { useIntl } from 'react-intl'

interface Props {
  clientCar: TransmissionFormData
}

export function TransmissionForm({ clientCar }: Props) {
  const { formatMessage } = useIntl()

  const { grenadesFront, driveShafts, grenadesRear } = GrenadesAndDrives(clientCar)
  const { gearboxFilter, gearboxSmall, drainPlug } = Gearbox(clientCar)
  const suspensionBearing = SuspensionBearing(clientCar)
  const { bootDustCoversFront, bootDustCoversRear } = BootDustCovers(clientCar)
  const transmissionOilSeals = TransmissionOilSeals(clientCar)
  const clutch = Clutch(clientCar)
  const { clutchCylinders, clutchCylindersRepair } = ClutchCylinders(clientCar)

  const tabsData = [
    {
      value: 'driveShafts',
      label: formatMessage({ id: 'clients.driveShaftsAndGrenades' }),
      blocks: [
        { label: formatMessage({ id: 'clients.grenadesFront' }), data: grenadesFront },
        { label: formatMessage({ id: 'clients.driveShafts' }), data: driveShafts },
        { label: formatMessage({ id: 'clients.grenadesRear' }), data: grenadesRear },
      ],
    },
    {
      value: 'gearbox',
      label: formatMessage({ id: 'clients.gearbox' }),
      blocks: [
        { label: formatMessage({ id: 'clients.gearboxFilter' }), data: gearboxFilter },
        { label: formatMessage({ id: 'clients.gearboxSmall' }), data: gearboxSmall },
        { label: formatMessage({ id: 'clients.drainPlug' }), data: drainPlug },
      ],
    },
    {
      value: 'suspensionBearing',
      label: formatMessage({ id: 'clients.suspensionBearing' }),
      blocks: [
        { label: formatMessage({ id: 'clients.suspensionBearing' }), data: suspensionBearing },
      ],
    },
    {
      value: 'bootDustCovers',
      label: formatMessage({ id: 'clients.bootDustCovers' }),
      blocks: [
        { label: formatMessage({ id: 'clients.bootDustCoversFront' }), data: bootDustCoversFront },
        { label: formatMessage({ id: 'clients.bootDustCoversRear' }), data: bootDustCoversRear },
      ],
    },
    {
      value: 'transmissionOilSeals',
      label: formatMessage({ id: 'clients.transmissionOilSeals' }),
      blocks: [
        {
          label: formatMessage({ id: 'clients.transmissionOilSeals' }),
          data: transmissionOilSeals,
        },
      ],
    },
    {
      value: 'clutch',
      label: formatMessage({ id: 'clients.clutch' }),
      blocks: [{ label: formatMessage({ id: 'clients.clutch' }), data: clutch }],
    },
    {
      value: 'clutchCylinders',
      label: formatMessage({ id: 'clients.clutchCylinders' }),
      blocks: [
        { label: formatMessage({ id: 'clients.clutchCylinders' }), data: clutchCylinders },
        {
          label: formatMessage({ id: 'clients.clutchCylindersRepair' }),
          data: clutchCylindersRepair,
        },
      ],
    },
  ]

  const filteredTabsData = tabsData
    .map(tab => ({
      ...tab,
      blocks: tab.blocks.filter(block => block.data.some(item => item.value)),
    }))
    .filter(tab => tab.blocks.length > 0)

  const activeTabValue = useActiveTab(filteredTabsData, 'driveShafts')
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
