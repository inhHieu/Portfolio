import Detail from '@/app/components/category/Detail'
import React from 'react'

export default function page({ params }: { params: { ID: string } }) {
  return (
    <Detail paramID={params.ID} />
  )
}
