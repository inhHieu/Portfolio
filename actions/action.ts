"use server";
import { createClient } from "@/utils/supabase/server";

const supabase = createClient();

export const getRcm = async () => {
  const { data: rcm, error } = await supabase
    .from("recommendation")
    .select(
      `
    id,
    name,
    sum,
    genre,
    rating,
    platforms,
    poster,
    lposter
`
    )
    .eq("categoryID", 3);
  if (error) {
    console.log(error);
  }
};
