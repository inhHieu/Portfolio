import React from 'react';
import Image from 'next/image';

export const platformComponents = {
  Netflix: {
    component: (
      <div className='relative w-5 h-5'>
        <Image src={'/img/provider/netflix.png'} alt='' fill={true} objectFit='cover' className='scale-125' />
      </div>
    ),
    link: '/netflix/manga',
  },
  Appletv: {
    component: (
      <div className='appletvIcon relative w-5 h-5 rounded-[4px] filter grayscale'>
        <Image src={'/img/provider/appletv.png'} alt='' fill={true} objectFit='contain' />
      </div>
    ),
    // Add other properties and values for Appletv component, if needed
  },
  // Add other platform components here
};