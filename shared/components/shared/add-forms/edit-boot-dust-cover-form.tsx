'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { updateBootDustCover, linkCarToBootDustCover, removeConnection } from '@/app/actions'
import { Container } from '../container'
import { FormInput, FormSelect, FormTable } from '../form'
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
import { TableColumns } from '@/shared/constants/table'
import { EditBootModal } from '../modals'
import { Car, CarBrand } from '@prisma/client'
import { getCars, getCarsBrands } from '@/shared/services/cars'

interface Props {
  data: BootWithCar
  className?: string
}

export const EditBootDustCoverForm: React.FC<Props> = ({ data, className }) => {
  const { formatMessage } = useIntl()
  const columns = TableColumns()
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

      toast.success('Данные пыльника обновлены 📝', {
        icon: '✅',
      })
    } catch (error) {
      return toast.error('Ошибка при обновлении данных пыльника', {
        icon: '❌',
      })
    }
  }

  const handleLinkCar = async (id: number) => {
    try {
      await linkCarToBootDustCover(data.id, id)
      toast.success('Машина успешно связана с пыльником')
    } catch (error) {
      console.error('Ошибка при связывании машины с пыльником:', error)
      toast.error('Ошибка при связывании машины с пыльником')
    }
  }

  const handleRemoveCar = async (carId: number) => {
    try {
      await removeConnection(carId, data.id) // Удаляем связь между машиной и пыльником
      toast.success('Связь между машиной и пыльником удалена')
      // Обновляем состояние, чтобы удалить машину из списка
      data.cars = data.cars.filter(car => car.id !== carId)
    } catch (error) {
      console.error('Ошибка при удалении связи:', error)
      toast.error('Ошибка при удалении связи')
    }
  }

  return (
    <Container className='my-10'>
      <Title text={`Редактирование пыльника | #${data.id}`} size='md' className='font-bold' />
      <div className='flex gap-[80px]'>
        <FormProvider {...form}>
          <form className='flex flex-col gap-5 w-96 mt-10' onSubmit={form.handleSubmit(onSubmit)}>
            <FormSelect name='nameId' label='Name' required>
              {names.map(name => (
                <option key={name.id} value={name.id}>
                  {name.name}
                </option>
              ))}
            </FormSelect>
            <FormSelect name='formId' label='Form' required>
              {forms.map(form => (
                <option key={form.id} value={form.id}>
                  {form.form}
                </option>
              ))}
            </FormSelect>
            <FormSelect name='typeId' label='Type' required>
              {types.map(type => (
                <option key={type.id} value={type.id}>
                  {type.type}
                </option>
              ))}
            </FormSelect>
            <FormInput type='number' name='dIn' label='dIn' required />
            <FormInput type='number' name='dOut' label='dOut' required />
            <FormInput type='number' name='height' label='Height' required />
            <FormInput name='partNumber' label='Part Number' required />
            <FormInput name='imageUrl' label='Image URL' />

            <Button
              disabled={form.formState.isSubmitting}
              className='text-base mt-10'
              type='submit'
            >
              Сохранить
            </Button>
          </form>
        </FormProvider>

        <div className='flex-1'>
          <div className=' mt-10'>
            <EditBootModal
              open={openModal}
              onclose={() => setOpenModal(false)}
              cars={allCar}
              onLinkClick={handleLinkCar}
            />
            <Button onClick={() => setOpenModal(true)}>Связать машину</Button>

            <Title text='Связанные машины:' size='sm' className='font-bold' />
            <FormProvider {...form}>
              {data.cars && data.cars.length > 0 && (
                <FormTable
                  name='cars'
                  data={data.cars}
                  columns={columns}
                  onRemove={handleRemoveCar} // Передаем функцию для удаления связи
                />
              )}
            </FormProvider>
          </div>
        </div>
      </div>
    </Container>
  )
}
