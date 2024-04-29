

import { createClient } from "@/utils/supabase/server";
import { headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";




export default function SignIn() {
  const signin = async () => {
    'use server';
    // 1. create supabase client
    const supabase = createClient();
    const origin = headers().get('orgin');

    // 2. sign in with provider
    const { error, data } = await supabase.auth.signInWithOAuth({
      provider: 'github',
      options: {
        redirectTo: `${origin}/auth/callback`
      }
    })
    if (error) {
      console.log(error)
    } else {
      return redirect(data.url)
    }
    // 3. redirect back
    
  }

  return (
    <div className="h-screen py-4 box-border">
      <div className="bg-white h-full w-1/3 mx-auto flex justify-center items-center box-border">
        <div>

          <form action={signin}>
            <div>
              <span className="text-sm text-gray-900">Welcome back</span>
              <h1 className="text-2xl font-bold">Login to your account</h1>
            </div>
            <div className="mt-5">
              <label className="block text-md mb-2" htmlFor="password">Password</label>
              <input className="px-4 w-full border-2 py-2 rounded-md text-sm outline-none" type="password" name="password" placeholder="password" />
            </div>
            <div className="my-3">
              <label className="block text-md mb-2" htmlFor="email">Email</label>
              <input className="px-4 w-full border-2 py-2 rounded-md text-sm outline-none" type="email" name="password" placeholder="email" />
            </div>
            <div className="flex justify-between">
              <div>
                <input className="cursor-pointer" type="radio" name="rememberme" />
                <span className="text-sm">Remember Me</span>
              </div>
              <span className="text-sm text-blue-700 hover:underline cursor-pointer">Forgot password?</span>
            </div>
            <div className="">
              <button disabled className=" cursor-not-allowed mt-4 mb-3 w-full bg-green-500 hover:bg-green-400 text-white py-2 rounded-md transition duration-100">Login now</button>
              <div className="cursor-pointer flex space-x-2 justify-center items-center bg-gray-700 hover:bg-gray-600 text-white py-2 rounded-md transition duration-100">
                <Image src={'/img/provider/github.png'} alt="github icon" width={20} height={20} style={{borderRadius:"100%"}}/>
                <button type="submit" >Or sign-in with GitHub</button>
              </div>
            </div>
          </form>
          <p className="mt-8"> Dont have an account? <Link href={'/sign-up'} className="cursor-pointer text-sm text-blue-600"> Join free today</Link></p>
        </div>
      </div>
    </div >
  )
}