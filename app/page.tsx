import { Container, Title } from '@/shared/components/shared'

export default function Home() {
  return (
    <>
      <Container className='secondary h-screen dark:bg-zinc-900 px-4 '>
        <Title text='Выберите раздел' size='lg' className='font-extrabold pt-4'></Title>
      </Container>
    </>
  )
}
