'use client'

import { SuspensionFormData } from '@/@types/client-car'
import { EditClientCarButton, LabeledBox, PartItemForm } from '@/shared/components/shared'
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
import { useActiveTab, useTabsDataCheck } from '@/shared/hooks'
import { TabsList } from '@radix-ui/react-tabs'
import { useIntl } from 'react-intl'

interface Props {
  clientCar: SuspensionFormData
}

export function SuspensionForm({ clientCar }: Props) {
  const { formatMessage } = useIntl()

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
      label: formatMessage({ id: 'clients.absorbers' }),
      blocks: [
        { label: formatMessage({ id: 'clients.shockAbsorbersFront' }), data: shockAbsorbersFront },
        { label: formatMessage({ id: 'clients.shockAbsorbersRear' }), data: shockAbsorbersRear },
      ],
    },
    {
      value: 'nutsWheelStuds',
      label: formatMessage({ id: 'clients.nutsWheelStuds' }),
      blocks: [{ label: formatMessage({ id: 'clients.nutsWheelStuds' }), data: nutsWheelStuds }],
    },
    {
      value: 'beltAndRollers',
      label: formatMessage({ id: 'clients.beltAndRollers' }),
      blocks: [
        { label: formatMessage({ id: 'clients.strutMounts' }), data: strutMounts },
        { label: formatMessage({ id: 'clients.dustCoversBumpers' }), data: dustCoversBumpers },
      ],
    },
    {
      value: 'hubBearings',
      label: formatMessage({ id: 'clients.hubBearings' }),
      blocks: [
        { label: formatMessage({ id: 'clients.hubBearingsFront' }), data: hubBearingsFront },
        { label: formatMessage({ id: 'clients.hubBearingsRear' }), data: hubBearingsRear },
      ],
    },
    {
      value: 'steeringRack',
      label: formatMessage({ id: 'clients.steeringRack' }),
      blocks: [
        {
          label: formatMessage({ id: 'clients.steeringRackAndPowerSteering' }),
          data: steeringRackAndPowerSteering,
        },
        { label: formatMessage({ id: 'clients.powerSteeringBoot' }), data: powerSteeringBoot },
      ],
    },
    {
      value: 'arms',
      label: formatMessage({ id: 'clients.arms' }),
      blocks: [
        { label: formatMessage({ id: 'clients.armsFront' }), data: armsFront },
        { label: formatMessage({ id: 'clients.armsRear' }), data: armsRear },
      ],
    },
    {
      value: 'silentBlocks',
      label: formatMessage({ id: 'clients.silentBlocks' }),
      blocks: [
        { label: formatMessage({ id: 'clients.silentBlocksFront' }), data: silentBlocksFront },
        { label: formatMessage({ id: 'clients.silentBlocksRear' }), data: silentBlocksRear },
      ],
    },
    {
      value: 'stabilizer',
      label: formatMessage({ id: 'clients.stabilizer' }),
      blocks: [
        { label: formatMessage({ id: 'clients.stabilizerBushings' }), data: stabilizerBushings },
        { label: formatMessage({ id: 'clients.stabilizerRods' }), data: stabilizerRods },
      ],
    },
    {
      value: 'pullRodsAndLugs',
      label: formatMessage({ id: 'clients.pullRodsAndLugs' }),
      blocks: [
        { label: formatMessage({ id: 'clients.pullRods' }), data: pullRods },
        { label: formatMessage({ id: 'clients.rodsLugs' }), data: rodsLugs },
      ],
    },
    {
      value: 'ballBearings',
      label: formatMessage({ id: 'clients.ballBearings' }),
      blocks: [{ label: formatMessage({ id: 'clients.ballBearings' }), data: ballBearings }],
    },
  ]

  const filteredTabsData = tabsData
    .map(tab => ({
      ...tab,
      blocks: tab.blocks.filter(block => block.data.some(item => item.value)),
    }))
    .filter(tab => tab.blocks.length > 0)

  const activeTabValue = useActiveTab(filteredTabsData, 'absorbers')
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
