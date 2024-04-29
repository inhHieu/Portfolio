import React from 'react';
import Image from 'next/image';

export const platformComponents = {
  Netflix: {
    component: (
      <div className='relative w-5 h-5 '>
        <Image src={'/img/provider/netflix.png'} alt='' fill={true} style={{objectFit:"contain"}} className='scale-125' />
      </div>
    ),
    link: 'https://www.netflix.com',
  },
  Appletv: {
    component: (
      <div className='appletvIcon relative w-5 h-5 rounded-[4px] filter grayscale'>
        <Image src={'/img/provider/appletv.png'} alt='' fill={true}  style={{objectFit:"contain"}} />
      </div>
    ),
    link: 'https://tv.apple.com',
    // Add other properties and values for Appletv component, if needed
  },
  Mangapill: {
    component: (
      <div className='mangapill relative w-5 h-5 rounded-[4px] '>
        <Image src={'/img/provider/mangapill.png'} alt='' fill={true}  style={{objectFit:"contain"}} />
      </div>
    ),
    link: 'https://www.mangapill.com',
    // Add other properties and values for Appletv component, if needed
  },
  // Add other platform components here
};