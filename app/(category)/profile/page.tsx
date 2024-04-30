import { createClient } from '@/utils/supabase/server'
import React from 'react'


export default async function page() {
    const supabase = createClient()
    const { data: { user } } = await supabase.auth.getUser();

    const userdata = user?.user_metadata;

    if (!userdata) {
        return <div>error</div>;
    }

    return <div>Hi, {userdata.user_name}</div>;

}
