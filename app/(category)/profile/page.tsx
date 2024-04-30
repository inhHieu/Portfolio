"use server"
import SignOutButton from '@/app/components/SignOutButton';
import { createClient } from '@/utils/supabase/server'
import Image from 'next/image';


export default async function page() {
    const supabase = createClient()
    const { data: { user } } = await supabase.auth.getUser();

    const userdata = user?.user_metadata;


    if (!userdata) {
        return <div>error</div>;
    }

    return (

        <main className=' w-[80vw] mx-auto flex gap-8  '>
            <div className=' flex flex-col gap-4  '>
                <div>
                    <Image src={userdata.avatar_url} alt='avatar'
                        style={{ borderRadius: '100%' }}
                        width={300} height={300}
                    />
                </div>
                <div className=' text-xl '>
                    {userdata.user_name}
                </div>
                <SignOutButton />
            </div>
            <div className=' bg-emerald-500/10 flex-1 h-[200vh] '>posted</div>
        </main>
    );

}
