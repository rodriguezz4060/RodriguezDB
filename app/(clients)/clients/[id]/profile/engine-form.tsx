'use client'

import { EngineFormData } from '@/@types/client-car'
import { EditClientCarButton, LabeledBox, PartItemForm } from '@/shared/components/shared'
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
import { useActiveTab, useTabsDataCheck } from '@/shared/hooks'
import { TabsList } from '@radix-ui/react-tabs'
import { useIntl } from 'react-intl'

interface Props {
  clientCar: EngineFormData
}

export function EngineForm({ clientCar }: Props) {
  const { formatMessage } = useIntl()

  const engineTimingBelt = EngineTimingBelt(clientCar)
  const { enginePiston, engineValves, engineLiner } = EngineAndPiston(clientCar)
  const { driveBelt, tensionerBelt } = BeltAndTensioner(clientCar)
  const { enginePgb, engineGasket } = EngineGasket(clientCar)
  const engineCushion = EngineCushion(clientCar)
  const engineOilSeals = EngineOilSeals(clientCar)
  const airSupplySystem = AirSupplySystem(clientCar)
  const filters = Filters(clientCar)

  const tabsData = [
    {
      value: 'drives',
      label: formatMessage({ id: 'clients.drives' }),
      blocks: [{ label: formatMessage({ id: 'clients.drives' }), data: engineTimingBelt }],
    },
    {
      value: 'pistons',
      label: formatMessage({ id: 'clients.engineAndPiston' }),
      blocks: [
        { label: formatMessage({ id: 'clients.enginePiston' }), data: enginePiston },
        { label: formatMessage({ id: 'clients.engineValves' }), data: engineValves },
        { label: formatMessage({ id: 'clients.engineLiner' }), data: engineLiner },
      ],
    },
    {
      value: 'beltAndRollerGenerator',
      label: formatMessage({ id: 'clients.beltAndRollerGenerator' }),
      blocks: [
        { label: formatMessage({ id: 'clients.driveBelt' }), data: driveBelt },
        { label: formatMessage({ id: 'clients.tensionerBelt' }), data: tensionerBelt },
      ],
    },
    {
      value: 'engineGasketAndPgb',
      label: formatMessage({ id: 'clients.engineGasketAndPgb' }),
      blocks: [
        { label: formatMessage({ id: 'clients.enginePgb' }), data: enginePgb },
        { label: formatMessage({ id: 'clients.engineGasket' }), data: engineGasket },
      ],
    },
    {
      value: 'engineCushion',
      label: formatMessage({ id: 'clients.engineCushion' }),
      blocks: [{ label: formatMessage({ id: 'clients.engineCushion' }), data: engineCushion }],
    },
    {
      value: 'engineOilSeals',
      label: formatMessage({ id: 'clients.engineOilSeals' }),
      blocks: [{ label: formatMessage({ id: 'clients.engineOilSeals' }), data: engineOilSeals }],
    },
    {
      value: 'airSupplySystem',
      label: formatMessage({ id: 'clients.airSupplySystem' }),
      blocks: [{ label: formatMessage({ id: 'clients.airSupplySystem' }), data: airSupplySystem }],
    },
    {
      value: 'filters',
      label: formatMessage({ id: 'clients.filters' }),
      blocks: [{ label: formatMessage({ id: 'clients.filters' }), data: filters }],
    },
  ]

  const filteredTabsData = tabsData
    .map(tab => ({
      ...tab,
      blocks: tab.blocks.filter(block => block.data.some(item => item.value)),
    }))
    .filter(tab => tab.blocks.length > 0)

  const activeTabValue = useActiveTab(filteredTabsData, 'drives')
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
