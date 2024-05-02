import Data from '../../../public/data/data.json';
import List from '@/app/components/category/List';

import { createClient } from '@/utils/supabase/server';
export default async function Game() {

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
        `).eq('categoryID', 3)
    if (error) console.log(error)
    return (
        // @ts-ignore comment
        <List isLoggedIn={user ? true : false} category={'game'} data={rcm} />
    )
}
