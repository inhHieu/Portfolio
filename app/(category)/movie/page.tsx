import Data from '../../../public/data/data.json';
import List from '@/app/components/category/List';

import GlobalProvider from '@/context/GlobalProvider';
import { createClient } from '@/utils/supabase/server';

import { headers } from "next/headers";



const header = headers();
const pathname = header.get('next-url')
const category = pathname?.slice(1)
export default async function Movie() {



  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();


  if (!user) {
    console.log('redireecting')
  } else console.log('good to go')

  return (
    <div className=' max-w-[1440px] mx-auto ' >
      {category &&
        <List isLoggedIn={user ? true : false} category={category} data={Data.movie} />
      }

    </div>
  )
}
