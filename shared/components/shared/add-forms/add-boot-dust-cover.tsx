'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { useIntl } from 'react-intl'

import { checkAndCreateBootName, createBootDustCover } from '@/app/actions'
import { Container } from '../container'
import { FormInput, FormSelect } from '../form'
import { Button } from '../../ui'
import {
  getBootDustForm,
  getBootDustName,
  getBootDustType,
} from '@/shared/services/boot-dust-cover'
import { formAddBootDustCoverSchema, TFormAddBootDustCoverSchema } from './schemas/add-boot-schemas'
import { Loader, Save } from 'lucide-react'

interface Props {
  className?: string
}

export const AddBootDustCoverForm: React.FC<Props> = ({ className }) => {
  const { formatMessage } = useIntl()
  const [isLoading, setIsLoading] = useState(false)

  const form = useForm<TFormAddBootDustCoverSchema>({
    resolver: zodResolver(formAddBootDustCoverSchema),
    defaultValues: {
      newName: '',
      typeId: undefined,
      formId: undefined,
      dIn: undefined,
      dOut: undefined,
      height: undefined,
      partNumber: '',
      imageUrl: '',
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

  const onSubmit = async (data: TFormAddBootDustCoverSchema) => {
    try {
      // Преобразование строк в числа
      const formattedData = {
        ...data,
        dIn: Number(data.dIn),
        dOut: Number(data.dOut),
        height: Number(data.height),
      }

      // Проверка и создание имени
      const nameId = await checkAndCreateBootName(data.newName)
      if (!nameId) {
        throw new Error('Failed to get or create name')
      }

      // Добавление nameId в данные
      const finalData = {
        ...formattedData,
        nameId,
      }

      await createBootDustCover(finalData)

      toast.success(formatMessage({ id: 'toast.bootAddedSuccess' }), {
        icon: '✅',
      })

      // Очистка формы после успешного добавления
      form.reset()
    } catch (error) {
      return toast.error(formatMessage({ id: 'toast.bootAddedError' }), {
        icon: '❌',
      })
    }
  }

  return (
    <Container className='h-full'>
      <FormProvider {...form}>
        <form className='flex flex-col gap-5 w-96 mt-10' onSubmit={form.handleSubmit(onSubmit)}>
          <FormInput name='newName' label={formatMessage({ id: 'addBootForm.newName' })} required />

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
          <FormInput
            type='number'
            name={formatMessage({ id: 'addBootForm.dIn' })}
            label='dIn'
            required
          />
          <FormInput
            type='number'
            name={formatMessage({ id: 'addBootForm.dOut' })}
            label='dOut'
            required
          />
          <FormInput
            type='number'
            name={formatMessage({ id: 'addBootForm.height' })}
            label='Height'
            required
          />
          <FormInput
            name={formatMessage({ id: 'addBootForm.partNumber' })}
            label='Part Number'
            required
          />
          <FormInput name={formatMessage({ id: 'addBootForm.imageUrl' })} label='Image URL' />

          <Button variant='default' type='submit' disabled={isLoading} className='mt-5 mb-20'>
            {isLoading ? (
              <>
                <Loader size={20} className='mr-2 animate-spin' />
                {formatMessage({ id: 'addBootForm.loading' })}
              </>
            ) : (
              <>
                <Save size={20} className='mr-2' />
                {formatMessage({ id: 'addBootForm.saveButton' })}
              </>
            )}
          </Button>
        </form>
      </FormProvider>
    </Container>
  )
}
