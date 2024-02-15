import React from 'react'
import Card from '@/app/components/Card'
import mangaData from '../../../public/data/data.json';

export default function Manga() {
  return (
    <main className=' -mt-14 xl-mt-20 '>
      <div className="blackgap w-full h-14 xl:h-20 sticky top-0 left-0 z-10 bg-black"></div>
      <div className=' w-full flex gap-6 px-6 flex-wrap justify-center max-w-[1920px] m-auto '>
        {mangaData.manga.map((manga) => (
          <Card manga={manga} />
        ))}
      </div>
    </main>
  )
}
