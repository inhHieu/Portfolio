import Detail from '@/app/components/category/Detail'

export default async function page({ params }: { params: { ID: string } }) {


  return (
    <Detail paramID={params.ID} />
  )
}
