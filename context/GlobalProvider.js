import { useContext, createContext, useState, useEffect } from "react";
// import { getCurrentUser } from "../lib/appwrite";

import { User } from "@supabase/supabase-js";
import { createClient } from "@/utils/supabase/server";

const GlobalContext = createContext();
export const useGlobalContext = () => useContext(GlobalContext);

const GlobalProvider = () => {
  const [isUser, setIsUser] = (useState < User) | (null > null);

  useEffect(() => {
    const fetchUser = async () => {
      const {
        data: { user },
        error,
      } = await supabase.auth.getUser();
      if (error) {
        console.log("Error fetching user:", error.message);
      } else {
        setIsUser(user); // Update the user state with the fetched data
      }
    };
  }, []);

  return [isUser, setIsUser];
};
export default GlobalProvider;
