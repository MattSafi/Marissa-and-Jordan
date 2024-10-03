import { useState } from "react";
import { supabase } from "../../../../utils/supabase/client";

export const handleSignOut = async () => {
  try {
    const { error } = await supabase.auth.signOut();
    const [message, setMessage] = useState("");

    if (error) {
      setMessage(`Error during logout: ${error.message}`);
      console.error(error);
    } else {
      setMessage("You have successfully logged out.");
    }
  } catch (error) {
    console.error("Error during logout:", error);
  }
};
