'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { updateBootDustCover, linkCarToBootDustCover, removeConnection } from '@/app/actions'
import { Container } from '../container'
import { FormInput, FormSelect, FormTable, LabeledBox } from '../form'
import { formBootDustCoverSchema, TFormBootDustCoverSchema } from './schemas/edit-boot-schemas'
import { Title } from '../title'
import { Button } from '../../ui'
import {
  getBootDustForm,
  getBootDustName,
  getBootDustType,
} from '@/shared/services/boot-dust-cover'
import { useIntl } from 'react-intl'
import { BootWithCar } from '@/@types/prisma'
import { TableDeleteColumns } from '@/shared/constants/table'
import { EditBootModal } from '../modals'
import { Car, CarBrand } from '@prisma/client'
import { getCars, getCarsBrands } from '@/shared/services/cars'
import { Plus } from 'lucide-react'

interface Props {
  data: BootWithCar
  className?: string
}

export const EditBootDustCoverForm: React.FC<Props> = ({ data, className }) => {
  const { formatMessage } = useIntl()
  const columns = TableDeleteColumns()
  const [openModal, setOpenModal] = React.useState(false)

  const form = useForm<TFormBootDustCoverSchema>({
    resolver: zodResolver(formBootDustCoverSchema),
    defaultValues: {
      id: data.id,
      nameId: data.nameId,
      formId: data.formId,
      typeId: data.typeId,
      dIn: data.dIn,
      dOut: data.dOut,
      height: data.height,
      partNumber: data.partNumber,
      imageUrl: data.imageUrl || '',
      bootDustCoverId: data.bootDustCoverId,
    },
  })

  const [names, setNames] = useState<{ id: number; name: string }[]>([])
  const [forms, setForms] = useState<{ id: number; form: string }[]>([])
  const [types, setTypes] = useState<{ id: number; type: string }[]>([])
  const [allCar, setAllCar] = useState<Car[]>([])
  const [carBrands, setCarBrands] = useState<CarBrand[]>([])
  const [connectCars, setConnectCars] = useState<Car[]>(data.cars)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [names, types, forms, allCar, carBrands] = await Promise.all([
          getBootDustName(),
          getBootDustType(),
          getBootDustForm(),
          getCars(),
          getCarsBrands(),
        ])

        const carsWithBrands = allCar.map(car => {
          const carBrand = carBrands.find(carBrand => carBrand.id === car.carBrandId)
          return { ...car, carBrand: carBrand! }
        })

        setNames(names)
        setTypes(types)
        setForms(forms)
        setAllCar(carsWithBrands)
      } catch (error) {
        console.error('Error fetching data:', error)
        toast.error(formatMessage({ id: 'toast.bootFetchingError' }))
      }
    }

    fetchData()
  }, [])

  const onSubmit = async (data: TFormBootDustCoverSchema) => {
    try {
      const formattedData = {
        ...data,
        dIn: Number(data.dIn),
        dOut: Number(data.dOut),
        height: Number(data.height),
      }

      await updateBootDustCover(formattedData)

      toast.success(formatMessage({ id: 'toast.bootEditDataSuccess' }), {
        icon: '✅',
      })
    } catch (error) {
      return toast.error(formatMessage({ id: 'toast.bootEditDataError' }), {
        icon: '❌',
      })
    }
  }

  const handleLinkCar = async (id: number) => {
    try {
      await linkCarToBootDustCover(data.id, id)
      toast.success(formatMessage({ id: 'toast.connectBootAddError' }), {
        icon: '✅',
      })
      setConnectCars(prev => [...prev, allCar.find(car => car.id === id)!])

      setAllCar(prev => prev.filter(car => car.id !== id))
    } catch (error) {
      console.error('Ошибка при связывании машины с пыльником:', error)
      toast.error(formatMessage({ id: 'toast.connectBootAddError' }), {
        icon: '❌',
      })
    }
  }

  const handleRemoveCar = async (carId: number) => {
    try {
      await removeConnection(carId, data.id)
      toast.success(formatMessage({ id: 'toast.connectBootSuccessError' }), {
        icon: '✅',
      })

      setConnectCars(prev => prev.filter(car => car.id !== carId))
    } catch (error) {
      console.error('Ошибка при удалении связи:', error)
      toast.error(formatMessage({ id: 'toast.connectBootError' }), {
        icon: '❌',
      })
    }
  }

  const filteredCars = allCar.filter(
    car => !connectCars.some(connectedCar => connectedCar.id === car.id)
  )

  return (
    <Container className='h-full my-10'>
      <Title
        text={`${formatMessage({ id: 'addBootForm.editBootTitle' })} | #${data.partNumber}`}
        size='md'
        className='font-bold'
      />
      <div className='flex gap-[80px]'>
        <FormProvider {...form}>
          <form className='flex flex-col gap-5 w-96 ' onSubmit={form.handleSubmit(onSubmit)}>
            <LabeledBox label={''}>
              <FormSelect
                name='nameId'
                label={formatMessage({ id: 'addBootForm.newName' })}
                required
              >
                {names.map(name => (
                  <option key={name.id} value={name.id}>
                    {name.name}
                  </option>
                ))}
              </FormSelect>
              <FormSelect
                name='formId'
                label={formatMessage({ id: 'addBootForm.chooseForm' })}
                required
              >
                {forms.map(form => (
                  <option key={form.id} value={form.id}>
                    {form.form}
                  </option>
                ))}
              </FormSelect>
              <FormSelect
                name='typeId'
                label={formatMessage({ id: 'addBootForm.chooseType' })}
                required
              >
                {types.map(type => (
                  <option key={type.id} value={type.id}>
                    {type.type}
                  </option>
                ))}
              </FormSelect>
              <FormInput name='dIn' label={formatMessage({ id: 'addBootForm.dIn' })} required />
              <FormInput name='dOut' label={formatMessage({ id: 'addBootForm.dOut' })} required />
              <FormInput
                name='height'
                label={formatMessage({ id: 'addBootForm.height' })}
                required
              />
              <FormInput
                name='partNumber'
                label={formatMessage({ id: 'addBootForm.partNumber' })}
                required
              />
              <FormInput name='imageUrl' label={formatMessage({ id: 'addBootForm.imageUrl' })} />
            </LabeledBox>
            <Button
              disabled={form.formState.isSubmitting}
              className='text-base mt-10'
              type='submit'
            >
              {formatMessage({ id: 'addBootForm.editSave' })}
            </Button>
          </form>
        </FormProvider>

        <div className='flex-1'>
          <div className=' mt-10'>
            <EditBootModal
              open={openModal}
              onclose={() => setOpenModal(false)}
              cars={filteredCars}
              onLinkClick={handleLinkCar}
            />
            <Button
              onClick={() => setOpenModal(true)}
              className='text-base font-bold bg-[#4CAF50] hover:bg-[#388E3C]'
            >
              <Plus className='mr-1' />
              {formatMessage({ id: 'addBootForm.connectCar' })}
            </Button>

            <Title
              text={formatMessage({ id: 'addBootForm.connectedCar' })}
              size='sm'
              className='font-bold mt-5 mb-2'
            />
            <FormProvider {...form}>
              {connectCars && connectCars.length > 0 && (
                <FormTable
                  name='cars'
                  data={connectCars}
                  columns={columns}
                  onRemove={handleRemoveCar}
                />
              )}
            </FormProvider>
          </div>
        </div>
      </div>
    </Container>
  )
}
