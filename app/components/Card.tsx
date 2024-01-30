import React from 'react'
import Image from 'next/image'

export default function Card() {
  return (
    <div className=' max-w-[350px] max-h-[180px] w-full aspect-video rounded-[10px]  bg-white/10 flex overflow-clip ' >
      <div className=' bg-blue-500 h-full w-[35%] relative flex-shrink-0 '>
        <Image
          src={"/img/aot.jpg"}
          fill={true}
          objectFit='cover'
          alt="Picture of the author" />
      </div>
      <div className=' m-5 text-sm flex flex-col justify-between  '>
        <div className=' flex flex-col gap-1 '>
          <p className=' text-base '>Attack on Titan</p>
          <p className=' line-clamp-2 overflow-hidden '>some word about this anime some word about this anime </p>
        </div>
        <div className=' flex flex-col '>
          <p>horror, actions</p>
          <p>rating</p>
          <div className=' platfom flex gap-4 mt-1 '>
            <div className=' w-5 h-5 bg-blue-500 '></div>
            <div className=' w-5 h-5 bg-green-500 '></div>
          </div>
        </div>
      </div>
    </div>
  )
}
// w-[680px]