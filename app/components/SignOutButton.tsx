'use client'

import { createClient } from "@/utils/supabase/client"


export default function SignOutButton() {

    const signOut = () => {
        const supabase = createClient();
        supabase.auth.signOut()
    }

    return (
        <div onClick={signOut}
            className='bg-white/10 py-1 text-sm text-center border border-white/10 rounded-md cursor-pointer transition duration-300 ease-in-out hover:bg-red-500 '
        >
            Log out
        </div>
    )
}
