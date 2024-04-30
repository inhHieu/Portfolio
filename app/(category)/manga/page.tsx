import Data from '../../../public/data/data.json';
import List from '@/app/components/category/List';

import { createClient } from '@/utils/supabase/server';

export default async function Manga() {
  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();


  return (
    <div className=' max-w-[1440px] mx-auto ' >
      <List isLoggedIn={user ? true : false} category={'manga'} data={Data.manga} />
    </div>
  )
}
