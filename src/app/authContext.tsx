// authContext.tsx
import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { supabase } from "../../utils/supabase/client";

// Create the context
const AuthContext = createContext<{
  isLoggedIn: boolean;
  setIsLoggedIn: (value: boolean) => void;
  checkLoggedInState: () => void;
} | null>(null);

// Create a provider component
export function AuthProvider({ children }: { children: ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const sendOTP = async (email: string) => {
    const response = await supabase.auth.signInWithOtp({
      email,
      options: {
        shouldCreateUser: false, // Set this to true to auto-create a user
      },
    });
    return response;
  };

  const checkLoggedInState = async () => {
    const { data, error } = await supabase.auth.getUser();
    console.log(!!data.user); // Checks if the user is logged in
    if (error) {
      setIsLoggedIn(false);
      return;
    }
    setIsLoggedIn(!!data.user);
  };

  useEffect(() => {
    checkLoggedInState();
  }, [supabase]);

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, setIsLoggedIn, checkLoggedInState }}
    >
      {children}
    </AuthContext.Provider>
  );
}

// Create a custom hook to use the AuthContext
export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
