import Data from '../../../public/data/data.json';
import List from '@/app/components/category/List';

import { createClient } from '@/utils/supabase/server';

export default async function Movie() {


  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();


  // if (!user) {
  //   console.log('redireecting')
  // } else console.log('good to go')

  return (
    <div className=' max-w-[1440px] mx-auto ' >
      <List isLoggedIn={user ? true : false} category={'movie'} data={Data.movie} />
    </div>
  )
}
