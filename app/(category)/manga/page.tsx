import React from 'react'
import Card from '@/app/components/Card'
import mangaData from '../../../public/data/data.json';

export default function Manga() {
  return (
    <div className=' w-full flex gap-6 px-6 flex-wrap justify-center max-w-[1920px] m-auto'>
      {mangaData.manga.map((manga)=>(
        <Card manga={manga}/>
      ))}
    </div>
  )
}
