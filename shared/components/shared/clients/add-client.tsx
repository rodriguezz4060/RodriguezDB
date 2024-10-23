'use client'

import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  TFormAddClientSchema,
  formAddClientSchema,
} from '@/shared/components/shared/clients/schemas/add-client-schemas'
import { useIntl } from 'react-intl'
import { Container } from '../container'
import { FormInput, FormPhoneInput, LabeledBox } from '../form'
import { Title } from '../title'
import { Button } from '../../ui'
import { ArrowLeft, Loader, Save } from 'lucide-react'
import Link from 'next/link'
import { useAddClientForm } from '@/shared/hooks'

export const AddClientForm: React.FC = () => {
  const { formatMessage } = useIntl()

  const form = useForm<TFormAddClientSchema>({
    resolver: zodResolver(formAddClientSchema),
    defaultValues: {
      name: '',
      lastName: '',
      VIN: '',
      tel: '+380',
    },
  })

  const { onSubmit, isLoading } = useAddClientForm(form)

  return (
    <>
      <div className='flex items-center justify-between mt-4'>
        <Title
          text={formatMessage({ id: 'addClient.formTitle' })}
          size='lg'
          className='font-bold'
        />
        <Link href='/clients/'>
          <Button className='font-bold px-4 py-2'>
            <ArrowLeft size={20} className='mr-2' />
            {formatMessage({ id: 'addBootForm.backButton' })}
          </Button>
        </Link>
      </div>
      <Container className='flex items-center justify-center'>
        <FormProvider {...form}>
          <form className='flex flex-col gap-5 w-96 ' onSubmit={form.handleSubmit(onSubmit)}>
            <LabeledBox label={''}>
              <FormInput name='name' label={formatMessage({ id: 'addClient.name' })} />
              <FormInput name='lastName' label={formatMessage({ id: 'addClient.lastName' })} />
              <FormInput name='VIN' label={formatMessage({ id: 'addClient.VIN' })} required />
              <FormPhoneInput name='tel' label={formatMessage({ id: 'addClient.tel' })} />
            </LabeledBox>
            <Button variant='default' type='submit' disabled={isLoading} className='mt-5 '>
              {isLoading ? (
                <>
                  <Loader size={20} className='mr-2 animate-spin' />
                  {formatMessage({ id: 'addClient.loading' })}
                </>
              ) : (
                <>
                  <Save size={20} className='mr-2' />
                  {formatMessage({ id: 'addClient.saveButton' })}
                </>
              )}
            </Button>
          </form>
        </FormProvider>
      </Container>
    </>
  )
}
