import React, { ReactNode } from 'react';

import Navbar from '../components/Navbar';
import { createClient } from '@/utils/supabase/server';


interface LayoutProps {
  children: ReactNode;
}

export default async function Layout({ children }: LayoutProps) {
const supabase = createClient();

  const { data: { user } } = await supabase.auth.getUser();
  return (
    <>
      <Navbar user={user} />
      {children}
    </>
  );
}