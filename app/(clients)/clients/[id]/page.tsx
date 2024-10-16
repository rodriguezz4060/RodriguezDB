import { redirect } from 'next/navigation'

export default function ClientPage({ params }: { params: { id: string } }) {
  redirect(`/clients/${params.id}/profile`)
}
