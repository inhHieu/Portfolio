import React, { ReactNode } from 'react';

import Navbar from '../components/Navbar';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Navbar />
      <div className=' max-w-[1440px] mx-auto ' >
        {children}
      </div>
    </>
  );
}