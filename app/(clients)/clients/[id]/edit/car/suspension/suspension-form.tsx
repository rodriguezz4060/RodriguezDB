'use client'

import {
  formEditClientCarSchema,
  TFormEditClientCarSchema,
} from '@/shared/components/shared/clients/schemas/edit-client-car-schemas'
import { useClientCarForm } from '@/shared/hooks'
import { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { SuspensionFormData } from '@/@types/client-car'
import { FormInput, LabeledBox } from '@/shared/components/shared'
import { Tabs, TabsContent, TabsTrigger } from '@/shared/components/ui/tabs'
import { TabsList } from '@radix-ui/react-tabs'
import { Button } from '@/shared/components/ui'

interface Props {
  clientCar: SuspensionFormData
}

export function SuspensionForm({ clientCar }: Props) {
  const form = useForm<TFormEditClientCarSchema>({
    resolver: zodResolver(formEditClientCarSchema),
    defaultValues: {
      id: clientCar.id,
      frontLeftShockAbsorber: clientCar.frontLeftShockAbsorber ?? '',
      frontRightShockAbsorber: clientCar.frontRightShockAbsorber ?? '',
      rearLeftShockAbsorber: clientCar.rearLeftShockAbsorber ?? '',
      rearRightShockAbsorber: clientCar.rearRightShockAbsorber ?? '',

      wheelStud: clientCar.wheelStud ?? '',
      wheelNut: clientCar.wheelNut ?? '',

      leftFrontStrutSupport: clientCar.leftFrontStrutSupport ?? '',
      rightFrontStrutSupport: clientCar.rightFrontStrutSupport ?? '',
      leftRearStrutSupport: clientCar.leftRearStrutSupport ?? '',
      rightRearStrutSupport: clientCar.rightRearStrutSupport ?? '',
      frontSupportBearing: clientCar.frontSupportBearing ?? '',
      frontLeftStrutDuster: clientCar.frontLeftStrutDuster ?? '',
      frontRightStrutDuster: clientCar.frontRightStrutDuster ?? '',
      rearLeftStrutDuster: clientCar.rearLeftStrutDuster ?? '',
      rearRightStrutDuster: clientCar.rearRightStrutDuster ?? '',
      frontStrutBumper: clientCar.frontStrutBumper ?? '',
      rearStrutBumper: clientCar.rearStrutBumper ?? '',

      frontLeftHubBearing: clientCar.frontLeftHubBearing ?? '',
      frontRightHubBearing: clientCar.frontRightHubBearing ?? '',
      rearLeftHubBearing: clientCar.rearLeftHubBearing ?? '',
      rearRightHubBearing: clientCar.rearRightHubBearing ?? '',

      hydraulicPowerSteeringKit: clientCar.hydraulicPowerSteeringKit ?? '',
      railSealsAndGaskets: clientCar.railSealsAndGaskets ?? '',
      steeringRackDustCoverLeft: clientCar.steeringRackDustCoverLeft ?? '',
      steeringRackDustCoverRight: clientCar.steeringRackDustCoverRight ?? '',

      frontLowerLeftArm: clientCar.frontLowerLeftArm ?? '',
      frontLowerRightArm: clientCar.frontLowerRightArm ?? '',
      frontUpperLeftArm: clientCar.frontUpperLeftArm ?? '',
      frontUpperRightArm: clientCar.frontUpperRightArm ?? '',
      rearLeftLongitudinalArm: clientCar.rearLeftLongitudinalArm ?? '',
      rearRightLongitudinalArm: clientCar.rearRightLongitudinalArm ?? '',
      rearLeftTransverseArm1: clientCar.rearLeftTransverseArm1 ?? '',
      rearRightTransverseArm1: clientCar.rearRightTransverseArm1 ?? '',
      rearLeftTransverseArm2: clientCar.rearLeftTransverseArm2 ?? '',
      rearRightTransverseArm2: clientCar.rearRightTransverseArm2 ?? '',
      rearCrescentArm: clientCar.rearCrescentArm ?? '',
      rearUpperShortArm: clientCar.rearUpperShortArm ?? '',

      frontLowerControlArmFrontSilentBlock: clientCar.frontLowerControlArmFrontSilentBlock ?? '',
      frontLowerControlArmRearSilentBlock: clientCar.frontLowerControlArmRearSilentBlock ?? '',
      frontUpperControlArmFrontSilentBlock: clientCar.frontUpperControlArmFrontSilentBlock ?? '',
      frontUpperControlArmRearSilentBlock: clientCar.frontUpperControlArmRearSilentBlock ?? '',
      longitudinalArmSilentBlockLeft: clientCar.longitudinalArmSilentBlockLeft ?? '',
      longitudinalArmSilentBlockRight: clientCar.longitudinalArmSilentBlockRight ?? '',
      longitudinalHubArmSilentBlockLeft: clientCar.longitudinalHubArmSilentBlockLeft ?? '',
      bodyLeftCrossArmSilentBlock: clientCar.bodyLeftCrossArmSilentBlock ?? '',
      hubLeftCrossArmSilentBlock: clientCar.hubLeftCrossArmSilentBlock ?? '',
      bodyRightCrossArmSilentBlock: clientCar.bodyRightCrossArmSilentBlock ?? '',
      hubRightCrossArmSilentBlock: clientCar.hubRightCrossArmSilentBlock ?? '',
      camberArmSilentBlock1: clientCar.camberArmSilentBlock1 ?? '',
      camberArmSilentBlock2: clientCar.camberArmSilentBlock2 ?? '',
      frontSubframeSilentBlock: clientCar.frontSubframeSilentBlock ?? '',
      rearSubframeSilentBlock: clientCar.rearSubframeSilentBlock ?? '',
      frontStabilizerSushings: clientCar.frontStabilizerSushings ?? '',
      frontStabilizerSushingsLeft: clientCar.frontStabilizerSushingsLeft ?? '',
      frontStabilizerSushingsRight: clientCar.frontStabilizerSushingsRight ?? '',
      rearStabilizerSushings: clientCar.rearStabilizerSushings ?? '',
      frontLeftStabilizerBar: clientCar.frontLeftStabilizerBar ?? '',
      frontRightStabilizerBar: clientCar.frontRightStabilizerBar ?? '',
      rearLeftStabilizerBar: clientCar.rearLeftStabilizerBar ?? '',
      rearRightStabilizerBar: clientCar.rearRightStabilizerBar ?? '',

      steeringLinkLeft: clientCar.steeringLinkLeft ?? '',
      steeringLinkRight: clientCar.steeringLinkRight ?? '',
      outerLeftSteeringKnuckle: clientCar.outerLeftSteeringKnuckle ?? '',
      outerRightSteeringKnuckle: clientCar.outerRightSteeringKnuckle ?? '',
      leftInnerSteeringKnuckle: clientCar.leftInnerSteeringKnuckle ?? '',
      leftRightSteeringKnuckle: clientCar.leftRightSteeringKnuckle ?? '',

      lowerLeftBallJoint: clientCar.lowerLeftBallJoint ?? '',
      lowerRightBallJoint: clientCar.lowerRightBallJoint ?? '',
      upperLeftBallJoint: clientCar.upperLeftBallJoint ?? '',
      upperRightBallJoint: clientCar.upperRightBallJoint ?? '',
    },
  })

  const { onSubmit, isSubmitting } = useClientCarForm()

  return (
    <FormProvider {...form}>
      <form className='gap-5' onSubmit={form.handleSubmit(onSubmit)}>
        <Tabs defaultValue='absorbers'>
          <TabsList>
            <TabsTrigger value='absorbers'>Амортизаторы</TabsTrigger>
            <TabsTrigger value='wheelStuds'>Гайки и шпильки колесные</TabsTrigger>
            <TabsTrigger value='bumpers'>Опоры стойки, пыльники, отбойники</TabsTrigger>
            <TabsTrigger value='hub'>Подшипники ступиц</TabsTrigger>
            <TabsTrigger value='powerSteering'>Рулевая рейка и ГУР</TabsTrigger>
            <TabsTrigger value='arm'>Рычаги</TabsTrigger>
            <TabsTrigger value='sanent'>Сайленблоки</TabsTrigger>
            <TabsTrigger value='stabilizer'>Стабилизатор</TabsTrigger>
            <TabsTrigger value='linkRoad'>Тяги и наконечники</TabsTrigger>
            <TabsTrigger value='ballJoints'>Шаровые опоры</TabsTrigger>
          </TabsList>
          <TabsContent value='absorbers'>
            <LabeledBox label='Амортизаторы'>
              <FormInput name='frontLeftShockAbsorber' label='Передний левый' />
              <FormInput name='frontRightShockAbsorber' label='Передний правый' />
              <FormInput name='rearLeftShockAbsorber' label='Задний левый' />
              <FormInput name='rearRightShockAbsorber' label='Задний правый' />
            </LabeledBox>
          </TabsContent>

          <TabsContent value='wheelStuds'>
            <LabeledBox label='Гайки и шпильки'>
              <FormInput name='wheelStud' label='Шпилька' />
              <FormInput name='wheelNut' label='Гайка' />
            </LabeledBox>
          </TabsContent>

          <TabsContent value='bumpers'>
            <LabeledBox label='Опоры и подшипник стойки'>
              <FormInput name='leftFrontStrutSupport' label='Передняя левая' />
              <FormInput name='rightFrontStrutSupport' label='Передняя правая' />
              <FormInput name='leftRearStrutSupport' label='Задняя левая' />
              <FormInput name='rightRearStrutSupport' label='Задняя правая' />
              <FormInput name='frontSupportBearing' label='Опорный подшипник' />
            </LabeledBox>

            <LabeledBox label='Пыльники и отбойники'>
              <FormInput name='frontLeftStrutDuster' label='Пыльник стойки передней левой' />
              <FormInput name='frontRightStrutDuster' label='Пыльник стойки передней правой' />
              <FormInput name='rearLeftStrutDuster' label='Пыльник стойки задней левой' />
              <FormInput name='rearRightStrutDuster' label='Пыльник стойки задней правой' />
              <FormInput name='frontStrutBumper' label='Отбойник передней стойки' />
              <FormInput name='rearStrutBumper' label='Отбойник задней стойки' />
            </LabeledBox>
          </TabsContent>

          <TabsContent value='hub'>
            <LabeledBox label='Подшипники ступиц'>
              <FormInput name='frontLeftHubBearing' label='Передней левой ступицы' />
              <FormInput name='frontRightHubBearing' label='Передней правой ступицы' />
              <FormInput name='rearLeftHubBearing' label='Задней левой ступицы' />
              <FormInput name='rearRightHubBearing' label='Задней правой ступицы' />
            </LabeledBox>
          </TabsContent>

          <TabsContent value='powerSteering'>
            <LabeledBox label='Рулевая рейка и ГУР'>
              <FormInput name='hydraulicPowerSteeringKit' label='Ремкомплект ГУР' />
              <FormInput name='railSealsAndGaskets' label='Сальники и прокладки рейки' />
              <FormInput name='steeringRackDustCoverLeft' label='Пыльник рулевой рейки левый' />
              <FormInput name='steeringRackDustCoverRight' label='Пыльник рулевой рейки правый' />
            </LabeledBox>
          </TabsContent>

          <TabsContent value='arm'>
            <LabeledBox label='Передние рычаги'>
              <FormInput name='frontLowerLeftArm' label='Нижний левый рычаг' />
              <FormInput name='frontLowerRightArm' label='Нижний правый рычаг' />
              <FormInput name='frontUpperLeftArm' label='Верхний левый рычаг' />
              <FormInput name='frontUpperRightArm' label='Верхний правый рычаг' />
            </LabeledBox>

            <LabeledBox label='Задние рычаги'>
              <FormInput name='rearLeftLongitudinalArm' label='Левый продольный рычаг' />
              <FormInput name='rearRightLongitudinalArm' label='Правый продольный рычаг' />
              <FormInput name='rearLeftTransverseArm1' label='Левый поперечный рычаг 1' />
              <FormInput name='rearRightTransverseArm1' label='Правый поперечный рычаг 1' />
              <FormInput name='rearLeftTransverseArm2' label='Левый поперечный рычаг 2' />
              <FormInput name='rearRightTransverseArm2' label='Правый поперечный рычаг 2' />
              <FormInput name='rearCrescentArm' label='Левый полумесяц рычаг' />
              <FormInput name='rearUpperShortArm' label='Верхний короткий рычаг' />
            </LabeledBox>
          </TabsContent>

          <TabsContent value='sanent'>
            <LabeledBox label='Сайленблоки передние'>
              <FormInput
                name='frontLowerControlArmFrontSilentBlock'
                label='Нижнего рычага передний'
              />
              <FormInput name='frontLowerControlArmRearSilentBlock' label='Нижнего рычага задний' />
              <FormInput
                name='frontUpperControlArmFrontSilentBlock'
                label='Верхнего рычага передний'
              />
              <FormInput
                name='frontUpperControlArmRearSilentBlock'
                label='Верхнего рычага задний'
              />
            </LabeledBox>

            <LabeledBox label='Сайленблоки задние'>
              <FormInput name='longitudinalArmSilentBlockLeft' label='Продольных рычагов левый' />
              <FormInput name='longitudinalArmSilentBlockRight' label='Продольных рычагов правый' />
              <FormInput
                name='longitudinalHubArmSilentBlockLeft'
                label='Продольных рычагов ступичный'
              />
              <FormInput
                name='bodyLeftCrossArmSilentBlock'
                label='Поперечного левого рычага кузовной'
              />
              <FormInput
                name='hubLeftCrossArmSilentBlock'
                label='Поперечного левого рычага ступичный'
              />
              <FormInput
                name='bodyRightCrossArmSilentBlock'
                label='Поперечного правого рычага кузовной'
              />
              <FormInput
                name='hubRightCrossArmSilentBlock'
                label='Поперечного правого рычага ступичный'
              />
              <FormInput name='camberArmSilentBlock1' label='Развального рычага Развальный' />
              <FormInput name='camberArmSilentBlock2' label='Развального рычага' />
              <FormInput name='frontSubframeSilentBlock' label='Подрамника передний' />
              <FormInput name='rearSubframeSilentBlock' label='Подрамника задний' />
            </LabeledBox>
          </TabsContent>

          <TabsContent value='stabilizer'>
            <LabeledBox label='Втулки стабилизатора'>
              <FormInput name='frontStabilizerSushingsLeft' label='Передняя левая' />
              <FormInput name='frontStabilizerSushingsRight' label='Передняя правая' />
              <FormInput name='rearStabilizerSushings' label='Задние' />
            </LabeledBox>

            <LabeledBox label='Стойка стабилизатора'>
              <FormInput name='frontLeftStabilizerBar' label='Передняя левая' />
              <FormInput name='frontRightStabilizerBar' label='Передняя правая' />
              <FormInput name='rearLeftStabilizerBar' label='Задняя левая' />
              <FormInput name='rearRightStabilizerBar' label='Задняя правая' />
            </LabeledBox>
          </TabsContent>

          <TabsContent value='linkRoad'>
            <LabeledBox label='Тяги'>
              <FormInput name='steeringLinkLeft' label='Левая' />
              <FormInput name='steeringLinkRight' label='Правая' />
            </LabeledBox>

            <LabeledBox label='Наконечники'>
              <FormInput name='outerLeftSteeringKnuckle' label='Наружный левый' />
              <FormInput name='outerRightSteeringKnuckle' label='Наружный правый' />
              <FormInput name='leftInnerSteeringKnuckle' label='Внутренний левый' />
              <FormInput name='leftRightSteeringKnuckle' label='Внутренний правый' />
            </LabeledBox>
          </TabsContent>

          <TabsContent value='ballJoints'>
            <LabeledBox label='Шаровые опоры'>
              <FormInput name='lowerLeftBallJoint' label='Нижняя левая' />
              <FormInput name='lowerRightBallJoint' label='Нижняя правая' />
              <FormInput name='upperLeftBallJoint' label='Верхняя левая' />
              <FormInput name='upperRightBallJoint' label='Верхняя правая' />
            </LabeledBox>
          </TabsContent>
        </Tabs>

        <Button disabled={isSubmitting} className='text-base mt-5 col-span-full' type='submit'>
          Сохранить
        </Button>
      </form>
    </FormProvider>
  )
}
