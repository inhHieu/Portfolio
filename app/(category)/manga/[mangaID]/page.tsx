"use client"
import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive'
import { motion as m, AnimatePresence } from "framer-motion"

import mangaData from '../../../../public/data/data.json';
import { platformComponents as platforms } from '../../../components/Platform';
import PopupDetail from '@/app/components/PopupDetail'; import Link from 'next/link';
;

export default function MangaInfo({ params }: { params: { mangaID: string } }) {

  const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1224px)' })
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
  //------------------------------------------------------------------------------

  const mangaID = parseInt(params.mangaID, 10);
  const manga = mangaData.manga.find((m) => m.id === mangaID);

  const [showPopup, setShowPopup] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const margin = 'mx-6';
  //------------------------------------------------------------------------------


  const handleImageClick = (image: string, index: number) => {
    setSelectedImageIndex(index);
    setShowPopup(true);
  };

  const handlePopupClose = () => {
    setShowPopup(false);
  };

  if (!manga) {
    return <div>Not found</div>;
  }
  return (
    <div className="warp absolute w-screen h-dvh top-0 overflow-hidden">
      <main className="relative w-full h-full">
        <div className="absolute w-full h-full -z-10">
          {isPortrait &&
            <img src={manga.poster} alt="" className="w-full h-full object-cover" />
          }
          <img src={manga.lposter} alt="" className="w-full h-full object-cover" />
        </div>
        <m.section
          initial={{ y: 700 }}
          animate={{ y: 0 }}
          transition={{ ease: "circInOut", duration: .7, delay: .2 }}
          style={{ scrollbarWidth: 'thin' }}
          className="absolute w-full max-h-[400px] h-4/6 md:h-2/5 left-0 bottom-0 rounded-t-2xl bg-black bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-60 overflow-auto">
          <div className="h-full max-w-[1440px] mx-auto font-medium text-xl text-white/80 py-7 flex flex-col justify-between">
            <div className={`${margin}`}>
              <div className="text-3xl text-white mb-1">{manga.name}</div>
              <div className=' text-white/70 text-base '>{manga.sum}</div>
            </div>
            <div className="h-1/2 md:h-2/3 ">
              <div className=' md:flex '>

                <div className={`${margin}`}>Genre: {manga.genre}</div>
                <div className={`${margin}`}>My rate: {manga.rating}</div>
                <div className={`${margin}` + ' platform flex gap-4 mt-1 '}>
                  {manga.platforms.map((platform, index) => {
                    const { component, link } = (platforms as { [key: string]: { component: JSX.Element; link?: string } })[platform] || {};

                    if (!component) {
                      return null; // Skip unknown platforms
                    }

                    const validLink = link || '#'; // Provide a default link value if it is undefined

                    return (
                      <Link href={validLink} target='_blank' key={index} className='flex md:items-center md:justify-center'>
                        {component}
                      </Link>
                    );
                  })}
                </div >
              </div>
              <div className="h-2/3 p-4 px-4 overflow-y-auto no-scrollbar  ">
                <div className="flex flex-row gap-4 h-full">
                  {manga.images.map((image, index) => (
                    <img
                      src={image}
                      alt=""
                      className="aspect-[2/3] object-cover cursor-pointer md:aspect-[3/2]"
                      onClick={() => handleImageClick(image, index)}
                      key={index}
                    ></img>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </m.section>
      </main>
      {showPopup &&
        <PopupDetail images={manga.images} selectedImageIndex={selectedImageIndex}
          onClose={handlePopupClose} />}
    </div>
  );
}