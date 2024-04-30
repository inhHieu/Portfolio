import { createClient } from "@/utils/supabase/server";

const supabase = createClient();

export async function getUser() {
  const { data } = await supabase.auth.getUser();
  return data.user;
}

export async function signOut() {
  const { error } = await supabase.auth.signOut()
}
