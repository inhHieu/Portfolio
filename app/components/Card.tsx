"use client"
import React from 'react'
import { motion as m, useScroll, useTransform } from "framer-motion"

import Image from 'next/image'
import Link from 'next/link';
import { platformComponents as platforms } from '../components/Platform'


interface ImageProps {
  image: string
}

interface Item {
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
  item: Item;
  category: String
}

function Card({ category, item }: CardProps) {



  return (
    <Link href={`/${category}/${item.id}`}>
      <div className=' w-[350px] h-[180px] aspect-video rounded-[10px]  bg-white/10 flex overflow-clip ' >
        <div className='  h-full w-[35%] relative flex-shrink-0 '>
          <Image
            src={item.poster}
            fill={true}
            objectFit='cover'
            alt={item.name} />
        </div>
        <div className=' m-5 text-sm flex flex-col justify-between  '>
          <div className=' flex flex-col gap-1 '>
            <p className=' text-base font-medium '>{item.name}</p>
            <p className=' line-clamp-2 overflow-hidden '>
              {item.sum} </p>
          </div>
          <div className=' flex flex-col '>
            <p> {item.genre} </p>
            <p> {item.rating} </p>
            <div className='platform flex gap-4 mt-1'>
              {item.platforms.map((platform, index) => {
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


function AddCard() {
  return (
    <m.div 
    className=' max-w-[350px] max-h-[180px] w-full aspect-video rounded-[10px]  bg-white/10 flex overflow-clip ' >
    <div className='h-full w-[35%] relative flex-shrink-0 bg-gray-300'>

      </div>
      <div className='m-5 text-sm flex flex-col justify-between'>
        <div className='flex flex-col gap-1'>
          <div className='h-4 bg-gray-300 rounded'></div>
          <div className='h-4 bg-gray-300 rounded'></div>
        </div>
        <div className='flex flex-col'>
          <div className='h-4 bg-gray-300 rounded'></div>
          <div className='h-4 bg-gray-300 rounded'></div>
          <div className='platform flex gap-4 mt-1'>
            <div className='h-4 w-4 bg-gray-300 rounded'></div>
            <div className='h-4 w-4 bg-gray-300 rounded'></div>
            <div className='h-4 w-4 bg-gray-300 rounded'></div>
          </div>
        </div>
      </div>
    </m.div>
  );
}

export { Card, AddCard };
