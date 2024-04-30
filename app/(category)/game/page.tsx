import Data from '../../../public/data/data.json';
import List from '@/app/components/category/List';

import { createClient } from '@/utils/supabase/server';
export default async function Game() {


    const supabase = createClient();
    const { data: { user } } = await supabase.auth.getUser();
    return (
        <List isLoggedIn={user ? true : false} category={'game'} data={Data.game} />
    )
}
