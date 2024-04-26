import React, { ReactNode } from 'react';
import type { Metadata } from 'next'

import Navbar from '../components/Navbar';


interface LayoutProps {
  children: ReactNode;
}
export default async function Layout({ children }: LayoutProps) {



  return (
    <>
      <Navbar />
      {children}
    </>
  );
}