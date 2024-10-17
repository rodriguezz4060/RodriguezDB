'use client'

import { EngineFormData } from '@/@types/client-car'
import { FormInput, LabeledBox } from '@/shared/components/shared'
import {
  formEditClientCarSchema,
  TFormEditClientCarSchema,
} from '@/shared/components/shared/clients/schemas/edit-client-car-schemas'
import { Button, Select } from '@/shared/components/ui'
import {
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/shared/components/ui/select'
import { Tabs, TabsContent, TabsTrigger } from '@/shared/components/ui/tabs'
import { useClientCarForm } from '@/shared/hooks/'
import { zodResolver } from '@hookform/resolvers/zod'
import { TabsList } from '@radix-ui/react-tabs'
import { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { useIntl } from 'react-intl'

interface Props {
  clientCar: EngineFormData
}

export function EngineForm({ clientCar }: Props) {
  const { formatMessage } = useIntl()
  const [engineType, setEngineType] = useState('belt')

  const form = useForm<TFormEditClientCarSchema>({
    resolver: zodResolver(formEditClientCarSchema),
    defaultValues: {
      id: clientCar.id,
      timingChainLong: clientCar.timingChainLong ?? '',
      timingChainShort: clientCar.timingChainShort ?? '',
      chainTensioner1: clientCar.chainTensioner1 ?? '',
      chainTensioner2: clientCar.chainTensioner2 ?? '',
      chainTensioner3: clientCar.chainTensioner3 ?? '',
      chainKit: clientCar.chainKit ?? '',
      timingBelt: clientCar.timingBelt ?? '',
      timingBeltTensioner: clientCar.timingBeltTensioner ?? '',
      timingBeltRoller: clientCar.timingBeltRoller ?? '',
      pistons: clientCar.pistons ?? '',
      pistonsRings: clientCar.pistonsRings ?? '',
      hydrocompensators: clientCar.hydrocompensators ?? '',
      valveIn: clientCar.valveIn ?? '',
      valveEx: clientCar.valveEx ?? '',
      valveGuidesIn: clientCar.valveGuidesIn ?? '',
      valveGuidesEx: clientCar.valveGuidesEx ?? '',
      bearingConnectingRod: clientCar.bearingConnectingRod ?? '',
      bearingCamshaft: clientCar.bearingCamshaft ?? '',
      crankshaftCamberRings: clientCar.crankshaftCamberRings ?? '',
      generatorBelt: clientCar.generatorBelt ?? '',
      powerSteeringBelt: clientCar.powerSteeringBelt ?? '',
      airConditionerBelt: clientCar.airConditionerBelt ?? '',
      tensionToller: clientCar.tensionToller ?? '',
      bypassRoller1: clientCar.bypassRoller1 ?? '',
      bypassRoller2: clientCar.bypassRoller2 ?? '',
      generatorOverrunningClutch: clientCar.generatorOverrunningClutch ?? '',
      engineGasketKit: clientCar.engineGasketKit ?? '',
      headGasket: clientCar.headGasket ?? '',
      valveCoverGasketLeft: clientCar.valveCoverGasketLeft ?? '',
      valveCoverGasketRight: clientCar.valveCoverGasketRight ?? '',
      valveCoverGasket: clientCar.valveCoverGasket ?? '',
      intakeManifoldGasket: clientCar.intakeManifoldGasket ?? '',
      exhaustManifoldGasket: clientCar.exhaustManifoldGasket ?? '',
      exhaustPipeGasket1: clientCar.exhaustPipeGasket1 ?? '',
      exhaustPipeGasket2: clientCar.exhaustPipeGasket2 ?? '',
      exhaustPipeGasket3: clientCar.exhaustPipeGasket3 ?? '',
      frontLeftEngineCushion: clientCar.frontLeftEngineCushion ?? '',
      frontRightEngineCushion: clientCar.frontRightEngineCushion ?? '',
      engineCushionLeft: clientCar.engineCushionLeft ?? '',
      engineCushionRear: clientCar.engineCushionRear ?? '',
      frontCrankshaftOilSeal: clientCar.frontCrankshaftOilSeal ?? '',
      rearCrankshaftOilSeal: clientCar.rearCrankshaftOilSeal ?? '',
      camshaftOilSeal: clientCar.camshaftOilSeal ?? '',
      oilPumpPacking: clientCar.oilPumpPacking ?? '',
      intakeOilCaps: clientCar.intakeOilCaps ?? '',
      exhaustOilCaps: clientCar.exhaustOilCaps ?? '',
      airDuctCorrugation: clientCar.airDuctCorrugation ?? '',
      oilFilter: clientCar.oilFilter ?? '',
      airFilter: clientCar.airFilter ?? '',
      fuelFilter: clientCar.fuelFilter ?? '',
      cabinFilter: clientCar.cabinFilter ?? '',
    },
  })

  const handleEngineTypeChange = (value: string) => {
    setEngineType(value)
  }

  const { onSubmit, isSubmitting } = useClientCarForm()

  return (
    <FormProvider {...form}>
      <form className='gap-5' onSubmit={form.handleSubmit(onSubmit)}>
        <Tabs defaultValue='grm'>
          <TabsList>
            <TabsTrigger value='grm'>{formatMessage({ id: 'clients.drives' })}</TabsTrigger>
            <TabsTrigger value='piston'>
              {formatMessage({ id: 'clients.engineAndPiston' })}
            </TabsTrigger>
            <TabsTrigger value='beltAndRollers'>
              {formatMessage({ id: 'clients.beltAndRollerGenerator' })}
            </TabsTrigger>
            <TabsTrigger value='gaskets'>
              {formatMessage({ id: 'clients.engineGasketAndPgb' })}
            </TabsTrigger>
            <TabsTrigger value='engineCushion'>
              {formatMessage({ id: 'clients.engineCushion' })}
            </TabsTrigger>
            <TabsTrigger value='engineOilSeals'>
              {formatMessage({ id: 'clients.engineOilSeals' })}
            </TabsTrigger>
            <TabsTrigger value='supplySystem'>
              {formatMessage({ id: 'clients.airSupplySystem' })}
            </TabsTrigger>
            <TabsTrigger value='filters'>{formatMessage({ id: 'clients.filters' })}</TabsTrigger>
          </TabsList>
          <TabsContent value='grm'>
            <div className='flex justify-end'>
              <Select value={engineType} onValueChange={handleEngineTypeChange}>
                <SelectTrigger className='w-[180px] mb-1 '>
                  <SelectValue placeholder={formatMessage({ id: 'clients.selectValue' })} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value='belt'>{formatMessage({ id: 'clients.valueBelt' })}</SelectItem>
                  <SelectItem value='chain'>
                    {formatMessage({ id: 'clientTab.chainLabel' })}
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
            {engineType === 'belt' && (
              <LabeledBox label={formatMessage({ id: 'clientTab.timingBelt' })}>
                <FormInput name='timingBelt' label={formatMessage({ id: 'clientTab.beltLabel' })} />
                <FormInput
                  name='timingBeltTensioner'
                  label={formatMessage({ id: 'clientTab.timingBeltTensioner' })}
                />
                <FormInput
                  name='timingBeltRoller'
                  label={formatMessage({ id: 'clientTab.timingBeltRoller' })}
                />
              </LabeledBox>
            )}

            {engineType === 'chain' && (
              <LabeledBox label={formatMessage({ id: 'clientTab.timingChainLong' })}>
                <FormInput
                  name='timingChainLong'
                  label={formatMessage({ id: 'clientTab.timingChainLong' })}
                />
                <FormInput
                  name='timingChainShort'
                  label={formatMessage({ id: 'clientTab.timingChainShort' })}
                />
                <FormInput
                  name='chainTensioner1'
                  label={formatMessage({ id: 'clientTab.chainTensioner1' })}
                />
                <FormInput
                  name='chainTensioner2'
                  label={formatMessage({ id: 'clientTab.chainTensioner2' })}
                />
                <FormInput
                  name='chainTensioner3'
                  label={formatMessage({ id: 'clientTab.chainTensioner3' })}
                />
                <FormInput name='chainKit' label={formatMessage({ id: 'clientTab.chainKit' })} />
              </LabeledBox>
            )}
          </TabsContent>
          <TabsContent value='piston'>
            <LabeledBox label={formatMessage({ id: 'clients.enginePiston' })}>
              <FormInput
                name='pistons'
                label={formatMessage({ id: 'clients.enginePiston' })}
                className='mb-2'
              />
              <FormInput
                name='pistonsRings'
                label={formatMessage({ id: 'clientTab.pistonsRings' })}
                className='mb-2'
              />
              <FormInput
                name='hydrocompensators'
                label={formatMessage({ id: 'clientTab.hydrocompensators' })}
                className='mb-2'
              />
            </LabeledBox>

            <LabeledBox label={formatMessage({ id: 'clients.engineValves' })}>
              <FormInput
                name='valveIn'
                label={formatMessage({ id: 'clientTab.valveIn' })}
                className='mb-2'
              />
              <FormInput
                name='valveEx'
                label={formatMessage({ id: 'clientTab.valveEx' })}
                className='mb-2'
              />
              <FormInput
                name='valveGuidesIn'
                label={formatMessage({ id: 'clientTab.valveGuidesIn' })}
                className='mb-2'
              />
              <FormInput
                name='valveGuidesEx'
                label={formatMessage({ id: 'clientTab.valveGuidesEx' })}
                className='mb-2'
              />
            </LabeledBox>

            <LabeledBox label={formatMessage({ id: 'clients.engineLiner' })}>
              <FormInput
                name='bearingConnectingRod'
                label={formatMessage({ id: 'clientTab.bearingConnectingRod' })}
                className='mb-2'
              />
              <FormInput
                name='bearingCamshaft'
                label={formatMessage({ id: 'clientTab.bearingCamshaft' })}
                className='mb-2'
              />
              <FormInput
                name='crankshaftCamberRings'
                label={formatMessage({ id: 'clientTab.crankshaftCamberRings' })}
                className='mb-2'
              />
            </LabeledBox>
          </TabsContent>

          <TabsContent value='beltAndRollers'>
            <LabeledBox label={formatMessage({ id: 'clients.driveBelt' })}>
              <FormInput
                name='generatorBelt'
                label={formatMessage({ id: 'clientTab.generatorBelt' })}
              />
              <FormInput
                name='powerSteeringBelt'
                label={formatMessage({ id: 'clientTab.powerSteeringBelt' })}
              />
              <FormInput
                name='airConditionerBelt'
                label={formatMessage({ id: 'clientTab.airConditionerBelt' })}
              />
            </LabeledBox>
            <LabeledBox label={formatMessage({ id: 'clients.tensionerBelt' })}>
              <FormInput
                name='tensionToller'
                label={formatMessage({ id: 'clientTab.tensionToller' })}
              />
              <FormInput
                name='bypassRoller1'
                label={formatMessage({ id: 'clientTab.bypassRoller1' })}
              />
              <FormInput
                name='bypassRoller2'
                label={formatMessage({ id: 'clientTab.bypassRoller2' })}
              />
              <FormInput
                name='generatorOverrunningClutch'
                label={formatMessage({ id: 'clientTab.generatorOverrunningClutch' })}
              />
            </LabeledBox>
          </TabsContent>

          <TabsContent value='gaskets'>
            <LabeledBox label={formatMessage({ id: 'clients.enginePgb' })}>
              <FormInput
                name='engineGasketKit'
                label={formatMessage({ id: 'clientTab.engineGasketKit' })}
              />
              <FormInput name='headGasket' label={formatMessage({ id: 'clientTab.headGasket' })} />
            </LabeledBox>
            <LabeledBox label={formatMessage({ id: 'clients.engineGasket' })}>
              <FormInput
                name='valveCoverGasket'
                label={formatMessage({ id: 'clientTab.valveCoverGasket' })}
              />
              <FormInput
                name='valveCoverGasketLeft'
                label={formatMessage({ id: 'clientTab.valveCoverGasketLeft' })}
              />
              <FormInput
                name='valveCoverGasketRight'
                label={formatMessage({ id: 'clientTab.valveCoverGasketRight' })}
              />
              <FormInput
                name='intakeManifoldGasket'
                label={formatMessage({ id: 'clientTab.intakeManifoldGasket' })}
              />
              <FormInput
                name='exhaustManifoldGasket'
                label={formatMessage({ id: 'clientTab.exhaustManifoldGasket' })}
              />
              <FormInput
                name='exhaustPipeGasket1'
                label={formatMessage({ id: 'clientTab.exhaustPipeGasket1' })}
              />
              <FormInput
                name='exhaustPipeGasket2'
                label={formatMessage({ id: 'clientTab.exhaustPipeGasket2' })}
              />
              <FormInput
                name='exhaustPipeGasket3'
                label={formatMessage({ id: 'clientTab.exhaustPipeGasket3' })}
              />
            </LabeledBox>
          </TabsContent>

          <TabsContent value='engineCushion'>
            <LabeledBox label={formatMessage({ id: 'clients.engineCushion' })}>
              <FormInput
                name='frontLeftEngineCushion'
                label={formatMessage({ id: 'clientTab.frontLeftEngineCushion' })}
              />
              <FormInput
                name='frontRightEngineCushion'
                label={formatMessage({ id: 'clientTab.frontRightEngineCushion' })}
              />
              <FormInput
                name='engineCushionLeft'
                label={formatMessage({ id: 'clientTab.engineCushionLeft' })}
              />
              <FormInput
                name='engineCushionRear'
                label={formatMessage({ id: 'clientTab.engineCushionRear' })}
              />
            </LabeledBox>
          </TabsContent>

          <TabsContent value='engineOilSeals'>
            <LabeledBox label={formatMessage({ id: 'clients.engineOilSeals' })}>
              <FormInput
                name='frontCrankshaftOilSeal'
                label={formatMessage({ id: 'clientTab.frontCrankshaftOilSeal' })}
              />
              <FormInput
                name='rearCrankshaftOilSeal'
                label={formatMessage({ id: 'clientTab.rearCrankshaftOilSeal' })}
              />
              <FormInput
                name='camshaftOilSeal'
                label={formatMessage({ id: 'clientTab.camshaftOilSeal' })}
              />
              <FormInput
                name='oilPumpPacking'
                label={formatMessage({ id: 'clientTab.oilPumpPacking' })}
              />
              <FormInput
                name='intakeOilCaps'
                label={formatMessage({ id: 'clientTab.intakeOilCaps' })}
              />
              <FormInput
                name='exhaustOilCaps'
                label={formatMessage({ id: 'clientTab.exhaustOilCaps' })}
              />
            </LabeledBox>
          </TabsContent>

          <TabsContent value='supplySystem'>
            <LabeledBox label={formatMessage({ id: 'clients.airSupplySystem' })}>
              <FormInput
                name='airDuctCorrugation'
                label={formatMessage({ id: 'clientTab.airDuctCorrugation' })}
              />
            </LabeledBox>
          </TabsContent>

          <TabsContent value='filters'>
            <LabeledBox label={formatMessage({ id: 'clients.filters' })}>
              <FormInput name='oilFilter' label={formatMessage({ id: 'clientTab.oilFilter' })} />
              <FormInput name='airFilter' label={formatMessage({ id: 'clientTab.airFilter' })} />
              <FormInput name='fuelFilter' label={formatMessage({ id: 'clientTab.fuelFilter' })} />
              <FormInput
                name='cabinFilter'
                label={formatMessage({ id: 'clientTab.cabinFilter' })}
              />
            </LabeledBox>
          </TabsContent>
        </Tabs>

        <Button disabled={isSubmitting} className='text-base mt-5 col-span-full' type='submit'>
          {formatMessage({ id: 'clients.saveButton' })}
        </Button>
      </form>
    </FormProvider>
  )
}
