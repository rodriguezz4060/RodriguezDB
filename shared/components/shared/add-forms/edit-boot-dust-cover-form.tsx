'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'
import React, { useEffect, useState } from 'react'
import { BootDustCover } from '@prisma/client'
import toast from 'react-hot-toast'

import { updateBootDustCover } from '@/app/actions'
import { Container } from '../container'
import { FormInput, FormSelect } from '../form'
import { formBootDustCoverSchema, TFormBootDustCoverSchema } from './schemas'
import { Title } from '../title'
import { Button } from '../../ui'
import {
  getBootDustForm,
  getBootDustName,
  getBootDustType,
} from '@/shared/services/boot-dust-cover'
import { useIntl } from 'react-intl'

interface Props {
  data: BootDustCover
  className?: string
}

export const EditBootDustCoverForm: React.FC<Props> = ({ data, className }) => {
  const { formatMessage } = useIntl()

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
    },
  })

  const [names, setNames] = useState<{ id: number; name: string }[]>([])
  const [forms, setForms] = useState<{ id: number; form: string }[]>([])
  const [types, setTypes] = useState<{ id: number; type: string }[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [names, types, forms] = await Promise.all([
          getBootDustName(),
          getBootDustType(),
          getBootDustForm(),
        ])

        setNames(names)
        setTypes(types)
        setForms(forms)
      } catch (error) {
        console.error('Error fetching data:', error)
        toast.error(formatMessage({ id: 'toast.bootFetchingError' }))
      }
    }

    fetchData()
  }, [])

  const onSubmit = async (data: TFormBootDustCoverSchema) => {
    try {
      // Преобразование строк в числа
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

  return (
    <Container className='my-10'>
      <Title text={`Редактирование пыльника | #${data.id}`} size='md' className='font-bold' />

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

          <Button disabled={form.formState.isSubmitting} className='text-base mt-10' type='submit'>
            Сохранить
          </Button>
        </form>
      </FormProvider>
    </Container>
  )
}
