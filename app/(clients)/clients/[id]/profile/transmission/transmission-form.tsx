'use client'

import { TransmissionFormData } from '@/@types/client-car'
import { LabeledBox, PartItemForm } from '@/shared/components/shared'
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
import { TabsList } from '@radix-ui/react-tabs'

interface Props {
  clientCar: TransmissionFormData
}

export function TransmissionForm({ clientCar }: Props) {
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
      label: 'ШРУСЫ и привода',
      blocks: [
        { label: 'ШРУС передний', data: grenadesFront },
        { label: 'Привода', data: driveShafts },
        { label: 'ШРУС задний', data: grenadesRear },
      ],
    },
    {
      value: 'gearbox',
      label: 'Коробка передач',
      blocks: [
        { label: 'Фильтр АКПП', data: gearboxFilter },
        { label: 'Фильтра тонкой очистки', data: gearboxSmall },
        { label: 'Сливная пробка', data: drainPlug },
      ],
    },
    {
      value: 'suspensionBearing',
      label: 'Подвесной подшипник',
      blocks: [{ label: 'Подвесной подшипник', data: suspensionBearing }],
    },
    {
      value: 'bootDustCoversFront',
      label: 'Пыльники ШРУСов',
      blocks: [
        { label: 'Пыльники передних ШРУСов', data: bootDustCoversFront },
        { label: 'Пыльники задних ШРУСов', data: bootDustCoversRear },
      ],
    },
    {
      value: 'transmissionOilSeals',
      label: 'Сальники трансмиссии',
      blocks: [{ label: 'Сальники трансмиссии', data: transmissionOilSeals }],
    },
    { value: 'clutch', label: 'Сцепление', blocks: [{ label: 'Сцепление', data: clutch }] },
    {
      value: 'clutchCylinders',
      label: 'Цилиндры сцепления',
      blocks: [
        { label: 'Цилиндры сцепления', data: clutchCylinders },
        { label: 'Ремкомплекты цилиндра сцепления', data: clutchCylindersRepair },
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
    <Tabs defaultValue='driveShafts'>
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
