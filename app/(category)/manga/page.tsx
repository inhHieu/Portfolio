import List from '@/app/components/category/List';

import { createClient } from '@/utils/supabase/server';

interface Item {
  id: number;
  name: string;
  sum: string;
  genre: string;
  rating: string;
  platforms: string[];
  poster: string;
  lposter: string;
}

export default async function Manga() {
  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();
  const { data: rcm, error } = await supabase
    .from('recommendation')
    .select(`
      id,
      name,
      sum,
      genre,
      rating,
      platforms,
      poster,
      lposter
    `).eq('categoryID', 1)
  if (error) console.log(error)
return (
    // @ts-ignore comment
    <List isLoggedIn={user ? true : false} category={'manga'} data={rcm} />
  )
}
