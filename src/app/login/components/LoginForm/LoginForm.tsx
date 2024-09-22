"use client";

import { Button, Input, VStack } from "@chakra-ui/react";
import { useState } from "react";
// import { supabase } from "../../../../../utils/supabase/client";

export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [token, setToken] = useState("");
  const [showTokenForm, setShowTokenForm] = useState(false);

  const handleLogin = async () => {
    setShowTokenForm(true);

    // const { data, error } = await supabase.auth.signInWithOtp({
    //   email: "",
    //   options: {
    //     // set this to false if you do not want the user to be automatically signed up
    //     shouldCreateUser: false,
    // },
    // });
  };

  const handleVerify = () => {};

  if (showTokenForm) {
    return (
      <VStack>
        <Input
          value={token}
          onChange={(e) => setToken(e.target.value)}
          w={300}
          top={200}
        />
        <Button onClick={handleVerify} top={200}>
          Verify
        </Button>
        ;
      </VStack>
    );
  }

  return (
    <VStack>
      <Input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        w={300}
        top={200}
      />
      <Button onClick={handleLogin} top={200}>
        Login
      </Button>
      ;
    </VStack>
  );
};
