'use client'

import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useIntl } from 'react-intl'
import { Loader, Save } from 'lucide-react'
import { Container, FormInput, FormPhoneInput, LabeledBox } from '@/shared/components/shared'
import { Button } from '@/shared/components/ui'
import { useEditClientProfileForm } from '@/shared/hooks'
import {
  formEditClientProfileSchema,
  TFormEditClientProfileSchema,
} from '@/shared/components/shared/clients/schemas/edit-client-profile-schemas'
import { ClientProfile } from '@/@types/client-car'

interface Props {
  clientProfile: ClientProfile
}

export function Client({ clientProfile }: Props) {
  const { formatMessage } = useIntl()

  const form = useForm<TFormEditClientProfileSchema>({
    resolver: zodResolver(formEditClientProfileSchema),
    defaultValues: {
      id: clientProfile.id,
      name: clientProfile.name ?? '',
      lastName: clientProfile.lastName ?? '',
      VIN: clientProfile.VIN ?? '',
      tel: clientProfile.tel ?? '',
      clientCar: {
        gosNumber: clientProfile.clientCar?.gosNumber ?? '',
        models: clientProfile.clientCar?.models ?? '',
      },
    },
  })

  const { onSubmit, isLoading } = useEditClientProfileForm(form)

  return (
    <Container className='flex items-center justify-center'>
      <FormProvider {...form}>
        <form className='flex flex-col gap-5 w-96 ' onSubmit={form.handleSubmit(onSubmit)}>
          <LabeledBox label={''}>
            <FormInput name='name' label={formatMessage({ id: 'addClient.name' })} />
            <FormInput name='lastName' label={formatMessage({ id: 'addClient.lastName' })} />
            <FormInput name='VIN' label={formatMessage({ id: 'addClient.VIN' })} required />
            <FormPhoneInput name='tel' label={formatMessage({ id: 'addClient.tel' })} />
            <FormInput
              name='clientCar.gosNumber'
              label={formatMessage({ id: 'editClient.gosNumber' })}
            />
            <FormInput name='clientCar.models' label={formatMessage({ id: 'editClient.model' })} />
          </LabeledBox>
          <Button variant='default' type='submit' disabled={isLoading} className='mt-5 '>
            {isLoading ? (
              <>
                <Loader size={20} className='mr-2 animate-spin' />
                {formatMessage({ id: 'editClient.loading' })}
              </>
            ) : (
              <>
                <Save size={20} className='mr-2' />
                {formatMessage({ id: 'editClient.saveButton' })}
              </>
            )}
          </Button>
        </form>
      </FormProvider>
    </Container>
  )
}
