"use server"
import SignOutButton from '@/app/components/SignOutButton';
import { Card } from '@/app/components/category/Card';
import { createClient } from '@/utils/supabase/server'
import Image from 'next/image';

interface Item {
    id: number;
    name: string;
    sum: string;
    genre: string;
    rating: string;
    platforms: string[];
    poster: string;
}

export default async function Profile() {
    const supabase = createClient()
    const { data: { user } } = await supabase.auth.getUser();
    const userdata = user?.user_metadata;

    if (!userdata) {
        return <div>error</div>;
    }

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
        categories (
            id,
            name
        )
    `).eq('author', user.id)
    if (error) return <div>error</div>

    // const items: Item[] = rcm.map((item) => ({
    //     id: item.id,
    //     name: item.name,
    //     sum: item.sum,
    //     genre: item.genre,
    //     rating: item.rating,
    //     platforms: item.platforms,
    //     poster: item.poster,
    // }));



    return (

        <main className=' w-[80vw] mx-auto flex gap-8 '>
            <div className=' flex flex-col gap-4  flex-shrink-0  '>
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
            {/* <pre>{JSON.stringify(rcm, null, 2)}</pre> */}
            <div className=' gap-4 flex-1 flex flex-wrap justify-center '>
                {rcm.map((i) => (
                    // @ts-ignore comment
                    <Card category={i.categories.name} key={i.id} item={i} />
                ))}
            </div>
        </main>
    );

}
