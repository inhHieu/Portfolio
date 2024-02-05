import React from 'react'
import Image from 'next/image'

interface ImageProps {
  image: string
}

interface Manga {
  id: number;
  name: string;
  sum: string;
  genre: string;
  rating: string;
  platforms: string[];
  poster: string;
  images: string[];
}

interface CardProps {
  manga: Manga;
}
interface PlatformComponents {
  [key: string]: JSX.Element;
}
const platformComponents: PlatformComponents = {
  Netflix: (
    <div className='relative w-5 h-5'>
      <Image src={'/img/provider/netflix.png'} alt='' fill={true} objectFit='cover' className='scale-125' />
    </div>
  ),
  Appletv: (
    <div className='appletvIcon relative w-5 h-5 rounded-[4px] filter grayscale'>
      <Image src={'/img/provider/appletv.png'} alt='' fill={true} objectFit='contain' />
    </div>
  ),
  // Add other platform components here
};
function Card({ manga }: CardProps) {

  console.log(manga.sum);


  return (
    <div className=' max-w-[350px] max-h-[180px] w-full aspect-video rounded-[10px]  bg-white/10 flex overflow-clip ' >
      <div className=' bg-blue-500 h-full w-[35%] relative flex-shrink-0 '>
        <Image
          src={manga.poster}
          fill={true}
          objectFit='cover'
          alt={manga.name} />
      </div>
      <div className=' m-5 text-sm flex flex-col justify-between  '>
        <div className=' flex flex-col gap-1 '>
          <p className=' text-base font-medium '>{manga.name}</p>
          <p className=' line-clamp-2 overflow-hidden '>
            {manga.sum} </p>
        </div>
        <div className=' flex flex-col '>
          <p> {manga.genre} </p>
          <p> {manga.rating} </p>
          <div className='platform flex gap-4 mt-1'>
            {manga.platforms.map((platform, index) => {
              const platformComponent = platformComponents[platform];

              if (!platformComponent) {
                return null; // Skip unknown platforms
              }

              return (
                <div key={index}>{platformComponent}</div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  )
}


export default Card;
// w-[680px]