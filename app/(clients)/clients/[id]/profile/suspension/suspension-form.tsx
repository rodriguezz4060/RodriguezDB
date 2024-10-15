'use client'

import { SuspensionFormData } from '@/@types/client-car'
import { LabeledBox, PartItemForm } from '@/shared/components/shared'
import { Tabs, TabsContent, TabsTrigger } from '@/shared/components/ui/tabs'
import {
  ShockAbsorbers,
  NutsWheelStuds,
  StrutMountsDustCoversBumpers,
  HubBearings,
  SteeringRackAndPowerSteering,
  Arms,
  SilentBlocks,
  Stabilizer,
  PullRodsAndLugs,
  BallBearings,
} from '@/shared/constants/client-car'
import { TabsList } from '@radix-ui/react-tabs'

interface Props {
  clientCar: SuspensionFormData
}

export function SuspensionForm({ clientCar }: Props) {
  const { shockAbsorbersFront, shockAbsorbersRear } = ShockAbsorbers(clientCar)
  const nutsWheelStuds = NutsWheelStuds(clientCar)
  const { strutMounts, dustCoversBumpers } = StrutMountsDustCoversBumpers(clientCar)
  const { hubBearingsFront, hubBearingsRear } = HubBearings(clientCar)
  const { steeringRackAndPowerSteering, powerSteeringBoot } =
    SteeringRackAndPowerSteering(clientCar)
  const { armsFront, armsRear } = Arms(clientCar)
  const { silentBlocksFront, silentBlocksRear } = SilentBlocks(clientCar)
  const { stabilizerBushings, stabilizerRods } = Stabilizer(clientCar)
  const { pullRods, rodsLugs } = PullRodsAndLugs(clientCar)
  const ballBearings = BallBearings(clientCar)

  const tabsData = [
    {
      value: 'absorbers',
      label: 'Амортизаторы',
      blocks: [
        { label: 'Передние амортизаторы', data: shockAbsorbersFront },
        { label: 'Задние амортизаторы', data: shockAbsorbersRear },
      ],
    },
    {
      value: 'nutsWheelStuds',
      label: 'Гайка и шпилька',
      blocks: [{ label: 'Гайка и шпилька', data: nutsWheelStuds }],
    },
    {
      value: 'beltAndRollers',
      label: 'Опоры стойки, пыльники, отбойники',
      blocks: [
        { label: 'Опоры и подшипник стойки', data: strutMounts },
        { label: 'Пыльники и отбойники', data: dustCoversBumpers },
      ],
    },
    {
      value: 'hubBearingsFront',
      label: 'Подшипники ступиц',
      blocks: [
        { label: 'Подшипники ступиц передний', data: hubBearingsFront },
        { label: 'Подшипники ступиц задний', data: hubBearingsRear },
      ],
    },
    {
      value: 'engineCushion',
      label: 'Рулевая рейка и ГУР',
      blocks: [
        { label: 'Ремкомплект ГУР', data: steeringRackAndPowerSteering },
        { label: 'Пыльник рейки', data: powerSteeringBoot },
      ],
    },
    {
      value: 'engineOilSeals',
      label: 'Рычаги',
      blocks: [
        { label: 'Рычаги передние', data: armsFront },
        { label: 'Рычаги задние', data: armsRear },
      ],
    },
    {
      value: 'silentBlocks',
      label: 'Сайленблоки',
      blocks: [
        { label: 'Сайленблоки передние', data: silentBlocksFront },
        { label: 'Сайленблоки задние', data: silentBlocksRear },
      ],
    },
    {
      value: 'stabilizer',
      label: 'Стабилизатор',
      blocks: [
        { label: 'Втулки стабилизатора', data: stabilizerBushings },
        { label: 'Тяжки стабилизатора', data: stabilizerRods },
      ],
    },
    {
      value: 'pullRodsAndLugs',
      label: 'Тяги и наконечники',
      blocks: [
        { label: 'Тяги', data: pullRods },
        { label: 'Наконечники', data: rodsLugs },
      ],
    },

    {
      value: 'ballBearings',
      label: 'Шаровые опоры',
      blocks: [{ label: 'Шаровые опоры', data: ballBearings }],
    },
  ]

  const filteredTabsData = tabsData
    .map(tab => ({
      ...tab,
      blocks: tab.blocks.filter(block => block.data.some(item => item.value)),
    }))
    .filter(tab => tab.blocks.length > 0)

  return (
    <Tabs defaultValue='absorbers'>
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
