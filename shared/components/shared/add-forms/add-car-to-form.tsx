'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'
import React, { useEffect, useState } from 'react'
import { CarBrand } from '@prisma/client'
import toast from 'react-hot-toast'
import { createCar } from '@/app/actions'
import { Container } from '../container'
import { FormInput, FormSelect, LabeledBox } from '../form'
import { formCarSchema, TFormCarSchema } from './schemas/add-car-schemas'
import { Title } from '../title'
import { Button } from '../../ui'

import { useIntl } from 'react-intl'
import { getCarsBrands } from '@/shared/services/cars'
import { Loader, Save } from 'lucide-react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../ui/select'

export const AddCarTo: React.FC = () => {
  const { formatMessage } = useIntl()
  const [isLoading, setIsLoading] = useState(false)
  const [gearboxType, setGearboxType] = useState('automat')

  const form = useForm<TFormCarSchema>({
    resolver: zodResolver(formCarSchema),
    defaultValues: {
      imageUrl: '',
      models: '',
      carBody: '',
      modelYear: '',
      engine: '',
      volume: '',
      carBrandId: undefined,
    },
  })

  const [carBrands, setCarBrands] = useState<CarBrand[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const carBrands = await getCarsBrands()
        setCarBrands(carBrands)
      } catch (error) {
        console.error('Error fetching car brands:', error)
        toast.error(formatMessage({ id: 'toast.carBrandsFetchingError' }))
      }
    }

    fetchData()
  }, [])

  const onSubmit = async (data: TFormCarSchema) => {
    try {
      setIsLoading(true)
      await createCar(data)

      toast.success(formatMessage({ id: 'toast.carAddSuccess' }), {
        icon: '✅',
      })

      form.reset()
    } catch (error) {
      return toast.error(formatMessage({ id: 'toast.carAddError' }), {
        icon: '❌',
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleGearboxTypeChange = (value: string) => {
    setGearboxType(value)
  }

  return (
    <>
      <Title text={formatMessage({ id: 'addCar.formTitle' })} size='lg' className='font-bold' />
      <Container className='flex items-center justify-center pb-10'>
        <div className='flex gap-10 '>
          <div className='flex-1'>
            <FormProvider {...form}>
              <form className='flex flex-col gap-5 w-96' onSubmit={form.handleSubmit(onSubmit)}>
                <LabeledBox label={''}>
                  <FormSelect
                    name='carBrandId'
                    label={formatMessage({ id: 'addCar.carBrand' })}
                    required
                  >
                    {carBrands.map(brand => (
                      <option key={brand.id} value={brand.id}>
                        {brand.name}
                      </option>
                    ))}
                  </FormSelect>
                  <FormInput name='imageUrl' label={formatMessage({ id: 'addCar.imageUrl' })} />
                  <FormInput
                    name='models'
                    label={formatMessage({ id: 'addCar.carModel' })}
                    required
                  />
                  <FormInput
                    name='carBody'
                    label={formatMessage({ id: 'addCar.carBody' })}
                    required
                  />
                  <FormInput
                    name='modelYear'
                    label={formatMessage({ id: 'addCar.modelYear' })}
                    required
                  />
                  <FormInput
                    name='engine'
                    label={formatMessage({ id: 'addCar.engine' })}
                    required
                  />
                  <FormInput
                    name='volume'
                    label={formatMessage({ id: 'addCar.volume' })}
                    required
                  />
                </LabeledBox>
              </form>
            </FormProvider>
          </div>

          <div className='flex-1'>
            <FormProvider {...form}>
              <form className='flex flex-col gap-5 w-96' onSubmit={form.handleSubmit(onSubmit)}>
                <LabeledBox label={''}>
                  <FormInput name='engineOil' label={formatMessage({ id: 'clientTo.engineOil' })} />
                  <FormInput
                    name='engineOilVolume'
                    label={formatMessage({ id: 'clientTo.oilVolume' })}
                  />
                  <FormInput
                    name='engineOilPartNumber'
                    label={formatMessage({ id: 'clientTo.partNumber' })}
                  />
                  <div className='flex justify-end'>
                    <Select value={gearboxType} onValueChange={handleGearboxTypeChange}>
                      <SelectTrigger className='w-[180px] mb-1 '>
                        <SelectValue placeholder='Выберите тип' />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value='automat'>
                          {formatMessage({ id: 'clientTo.selectAutomat' })}
                        </SelectItem>
                        <SelectItem value='mechanical'>
                          {formatMessage({ id: 'clientTo.selectMechanical' })}
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  {gearboxType === 'automat' && (
                    <LabeledBox label={formatMessage({ id: 'clientTo.labeledAutomat' })}>
                      <FormInput
                        name='automaticTransmissionOil'
                        label={formatMessage({ id: 'clientTo.automaticTransmissionOil' })}
                      />
                      <FormInput
                        name='automaticTransmissionOilVolume1'
                        label={formatMessage({ id: 'clientTo.automaticTransmissionOilVolume1' })}
                      />
                      <FormInput
                        name='automaticTransmissionOilPartNumber'
                        label={formatMessage({ id: 'clientTo.partNumber' })}
                      />
                    </LabeledBox>
                  )}

                  {gearboxType === 'mechanical' && (
                    <LabeledBox label={formatMessage({ id: 'clientTo.labeledMechanical' })}>
                      <FormInput
                        name='mechanicTransmissionOil'
                        label={formatMessage({ id: 'clientTo.mechanicTransmissionOil' })}
                      />
                      <FormInput
                        name='mechanicTransmissionOilVolume'
                        label={formatMessage({ id: 'clientTo.oilVolume' })}
                      />
                      <FormInput
                        name='mechanicTransmissionOilPartNumber'
                        label={formatMessage({ id: 'clientTo.partNumber' })}
                      />
                    </LabeledBox>
                  )}
                </LabeledBox>
              </form>
            </FormProvider>
          </div>

          <div className='flex-1'>
            <FormProvider {...form}>
              <form className='flex flex-col gap-5 w-96' onSubmit={form.handleSubmit(onSubmit)}>
                <LabeledBox label={formatMessage({ id: 'clientTo.transferCase' })}>
                  <FormInput name='transferCaseOil' label='Масло раздаточной коробки' />
                  <FormInput
                    name='transferCaseOilVolume'
                    label={formatMessage({ id: 'clientTo.oilVolume' })}
                  />
                  <FormInput
                    name='transferCaseOilPartNumber'
                    label={formatMessage({ id: 'clientTo.partNumber' })}
                  />
                </LabeledBox>

                <LabeledBox label={formatMessage({ id: 'clientTo.axleGearboxFront' })}>
                  <FormInput name='frontAxleGearboxOil' label='Масло редуктора переднего моста' />
                  <FormInput
                    name='frontAxleGearboxOilVolume'
                    label={formatMessage({ id: 'clientTo.oilVolume' })}
                  />
                  <FormInput
                    name='frontAxleGearboxOilPartNumber'
                    label={formatMessage({ id: 'clientTo.partNumber' })}
                  />
                </LabeledBox>

                <LabeledBox label={formatMessage({ id: 'clientTo.axleGearboxRear' })}>
                  <FormInput
                    name='rearAxleGearboxOil'
                    label={formatMessage({ id: 'clientTo.rearAxleGearboxOil' })}
                  />
                  <FormInput
                    name='rearAxleGearboxOilVolume'
                    label={formatMessage({ id: 'clientTo.oilVolume' })}
                  />
                  <FormInput
                    name='rearAxleGearboxOilPartNumber'
                    label={formatMessage({ id: 'clientTo.partNumber' })}
                  />
                </LabeledBox>

                <LabeledBox label={formatMessage({ id: 'clientTo.antifreeze' })}>
                  <FormInput
                    name='antifreeze'
                    label={formatMessage({ id: 'clientTo.antifreezeColor' })}
                  />
                  <FormInput
                    name='antifreezeVolume'
                    label={formatMessage({ id: 'clientTo.antifreezeVolume' })}
                  />
                  <FormInput
                    name='antifreezePartNumber'
                    label={formatMessage({ id: 'clientTo.antifreezePartNumber' })}
                  />
                </LabeledBox>

                <LabeledBox label={formatMessage({ id: 'clientTo.steering' })}>
                  <FormInput
                    name='steeringFluid'
                    label={formatMessage({ id: 'clientTo.steeringFluid' })}
                  />
                  <FormInput
                    name='steeringFluidVolume'
                    label={formatMessage({ id: 'clientTo.steeringFluidVolume' })}
                  />
                  <FormInput
                    name='steeringFluidPartNumber'
                    label={formatMessage({ id: 'clientTo.steeringFluidPartNumber' })}
                  />
                </LabeledBox>

                <Button variant='default' type='submit' disabled={isLoading} className='mt-5 '>
                  {isLoading ? (
                    <>
                      <Loader size={20} className='mr-2 animate-spin' />
                      {formatMessage({ id: 'addCar.loading' })}
                    </>
                  ) : (
                    <>
                      <Save size={20} className='mr-2' />
                      {formatMessage({ id: 'addCar.saveButton' })}
                    </>
                  )}
                </Button>
              </form>
            </FormProvider>
          </div>
        </div>
      </Container>
    </>
  )
}
