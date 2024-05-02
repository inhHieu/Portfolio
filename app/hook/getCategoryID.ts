"use server";
import { createClient } from "@/utils/supabase/server";

export default async function getCategoryID(name: string) {
  const supabase = createClient();
  const { data: categoryID, error } = await supabase
    .from("categories")
    .select(` id `)
    .eq("name", name);
  if (error) {
    return error;
  }
  return categoryID;
}
