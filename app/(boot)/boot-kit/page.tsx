import { BootGroupList, Container, Filters, SortGroup } from '@/shared/components/shared'
import { findBootDustCover, GetSearchParams } from '@/shared/lib/find-boot-dust-cover'
import { Suspense } from 'react'

export default async function Home({ searchParams }: { searchParams: GetSearchParams }) {
  const bootDustCovers = await findBootDustCover(searchParams)

  return (
    <>
      <Container className='secondary dark:bg-zinc-900 px-4'>
        <div className='mr-4 ml-5 py-1'>
          <SortGroup />
        </div>
      </Container>

      <Container className='h-full pb-14 dark:bg-zinc-900 px-4'>
        <div className='flex gap-[80px]'>
          {/* Фильтрация */}
          <div className='w-[250px]'>
            <Suspense>
              <Filters />
            </Suspense>
          </div>

          {/* Список пыльников */}
          <div className='flex-1'>
            <div className='flex flex-col gap-16'>
              <BootGroupList items={bootDustCovers} />
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}
