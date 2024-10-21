'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'
import React from 'react'
import { useIntl } from 'react-intl'
import { Container } from '../container'
import { FormInput, FormSelect, LabeledBox } from '../form'
import { Button } from '../../ui'
import { formAddBootDustCoverSchema, TFormAddBootDustCoverSchema } from './schemas/add-boot-schemas'
import { Loader, Save } from 'lucide-react'
import { useAddBootKitForm } from '@/shared/hooks'

interface Props {
  forms: { id: number; form: string }[]
  types: { id: number; type: string }[]
  className?: string
}

export const AddBootDustCoverForm: React.FC<Props> = ({ forms, types, className }) => {
  const { formatMessage } = useIntl()

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

  const { onSubmit, isLoading } = useAddBootKitForm(form)

  return (
    <Container className='flex items-center justify-center mb-10'>
      <div className='flex gap-10 w-[800px]'>
        <div className='flex-1'>
          <FormProvider {...form}>
            <form className='flex flex-col gap-5 w-full' onSubmit={form.handleSubmit(onSubmit)}>
              <LabeledBox label={''}>
                <FormInput
                  name='newName'
                  label={formatMessage({ id: 'addBootForm.newName' })}
                  required
                />
                <FormSelect
                  name='formId'
                  label={formatMessage({ id: 'addBootForm.chooseForm' })}
                  required
                  className='rounded-lg'
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
                <FormInput name='imageUrl' label={formatMessage({ id: 'addBootForm.imageUrl' })} />
              </LabeledBox>
            </form>
          </FormProvider>
        </div>

        <div className='flex-1'>
          <FormProvider {...form}>
            <form className='flex flex-col gap-5 w-full' onSubmit={form.handleSubmit(onSubmit)}>
              <LabeledBox label={''}>
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
              </LabeledBox>
              <Button variant='default' type='submit' disabled={isLoading} className='mt-2 mb-20'>
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
        </div>
      </div>
    </Container>
  )
}
