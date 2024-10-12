import { AddClientForm, Container } from '@/shared/components/shared'

export default async function ClientsAdd() {
  return (
    <>
      <Container className='secondary dark:bg-zinc-900 px-4 pb-10'>
        <AddClientForm />
      </Container>
    </>
  )
}
