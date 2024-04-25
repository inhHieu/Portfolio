
// import { signup } from '../../action/auth'

import { createClient } from "@/utils/supabase/server";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

 

// TODO: make a sign-up method with password 

export default function SignUp() {
  const  signup = async ()=>{
    'use server';
    // 1. create supabase client
    const supabase = createClient();
    const origin = headers().get('orgin');

    // 2. sign in with provider
    const {error, data} = await supabase.auth.signInWithOAuth({
      provider:'github',
      options:{
        redirectTo: `${origin}/auth/callback`
      }
    })
    if(error){
      console.log(error)
    }else {
      return redirect(data.url)
    }
    // 3. redirect back
  }
  
  return (
    <div>
      <form action={signup}>
        <div>
          <label htmlFor="name">Name</label>
          <input className="text-black" id="name" name="name" placeholder="Name" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input className="text-black" id="email" name="email" type="email" placeholder="Email" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input className="text-black" id="password" name="password" type="password" />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  )
}