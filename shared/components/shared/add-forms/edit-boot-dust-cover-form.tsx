'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, FormProvider, useForm } from 'react-hook-form'
import React from 'react'
import { Container } from '../container'
import { FormInput, FormSelect, FormTable, LabeledBox } from '../form'
import { formBootDustCoverSchema, TFormBootDustCoverSchema } from './schemas/edit-boot-schemas'
import { Title } from '../title'
import { Button } from '../../ui'
import { useIntl } from 'react-intl'
import { BootWithCar } from '@/@types/prisma'
import { TableDeleteColumns } from '@/shared/constants/table'
import { EditBootModal } from '../modals'
import { Plus } from 'lucide-react'
import { useEditBootDustCoverForm } from '@/shared/hooks'

interface Props {
  data: BootWithCar
  names: {
    id: number
    name: string
  }[]
  forms: {
    id: number
    form: string
  }[]
  types: {
    id: number
    type: string
  }[]
  className?: string
}

export const EditBootDustCoverForm: React.FC<Props> = ({
  names,
  forms,
  types,
  data,
  className,
}) => {
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

  const { connectCars, onSubmit, handleLinkCar, handleRemoveCar, filteredCars } =
    useEditBootDustCoverForm({ data })

  return (
    <Container className='h-full my-10'>
      <Title
        text={`${formatMessage({ id: 'addBootForm.editBootTitle' })} | #${data.partNumber}`}
        size='md'
        className='font-bold'
      />
      <div className='flex gap-[50px]'>
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
              <Controller
                name='dIn'
                control={form.control}
                render={({ field }) => (
                  <FormInput
                    {...field}
                    label={formatMessage({ id: 'addBootForm.dIn' })}
                    required
                    onChange={e => field.onChange(Number(e.target.value))}
                  />
                )}
              />
              <Controller
                name='dOut'
                control={form.control}
                render={({ field }) => (
                  <FormInput
                    {...field}
                    label={formatMessage({ id: 'addBootForm.dOut' })}
                    required
                    onChange={e => field.onChange(Number(e.target.value))}
                  />
                )}
              />
              <Controller
                name='height'
                control={form.control}
                render={({ field }) => (
                  <FormInput
                    {...field}
                    label={formatMessage({ id: 'addBootForm.height' })}
                    required
                    onChange={e => field.onChange(Number(e.target.value))}
                  />
                )}
              />
              <FormInput
                name='partNumber'
                label={formatMessage({ id: 'addBootForm.partNumber' })}
                required
              />
              <FormInput name='imageUrl' label={formatMessage({ id: 'addBootForm.imageUrl' })} />
            </LabeledBox>
            <Button disabled={form.formState.isSubmitting} className='text-base mt-5' type='submit'>
              {formatMessage({ id: 'addBootForm.editSave' })}
            </Button>
          </form>
        </FormProvider>

        <div className='flex-1'>
          <div className='mt-8'>
            <LabeledBox label={''}>
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
            </LabeledBox>
          </div>
        </div>
      </div>
    </Container>
  )
}
