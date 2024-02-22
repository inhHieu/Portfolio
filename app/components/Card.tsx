"use client"
import React from 'react'
import { motion as m, useScroll, useTransform } from "framer-motion"

import Image from 'next/image'
import Link from 'next/link';
import { platformComponents as platforms } from '../components/Platform'


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

function Card({ manga }: CardProps) {



  return (
    <Link href={`/manga/${manga.id}`}>
      <div className=' max-w-[350px] max-h-[180px] w-full aspect-video rounded-[10px]  bg-white/10 flex overflow-clip ' >
        <m.div className='  h-full w-[35%] relative flex-shrink-0 '>
          <Image
            src={manga.poster}
            fill={true}
            objectFit='cover'
            alt={manga.name} />
        </m.div>
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
                const { component, link } = (platforms as
                  { [key: string]: { component: JSX.Element; link?: string } })[platform] || {};

                if (!component) {
                  return null; // Skip unknown platforms
                }

                return (
                  <div key={index}>{component}</div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}


export default Card;
// w-[680px]