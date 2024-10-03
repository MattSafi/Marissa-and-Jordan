"use client";

import { Box, Button, Flex, Input, Tooltip, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { useRouter } from "next/navigation"; // Import useRouter from Next.js
import { supabase } from "../../../../utils/supabase/client";
import { InfoOutlineIcon } from "@chakra-ui/icons";
import { useAuth } from "@/app/authContext";

export const LoginForm = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [token, setToken] = useState("");
  const [showTokenForm, setShowTokenForm] = useState(false);
  const [message, setMessage] = useState("");
  const { setIsLoggedIn } = useAuth();

  // Function to handle sending OTP to user's email
  const handleLogin = async () => {
    try {
      const { data, error } = await supabase.auth.signInWithOtp({
        email, // Using the email entered by the user
        options: {
          shouldCreateUser: true, // Set this to true if you want to auto-create a user
        },
      });

      if (error) {
        setMessage(`Error sending OTP: ${error.message}`);
        console.error(error);
      } else {
        setMessage("OTP sent to your email!");
        setShowTokenForm(true); // Show OTP input form
      }
    } catch (error) {
      console.error("Error during OTP request:", error);
    }
  };

  const handleVerify = async () => {
    try {
      const { data, error } = await supabase.auth.verifyOtp({
        email, // The same email used to request OTP
        token, // The OTP entered by the user
        type: "email",
      });

      if (error) {
        setMessage(`Error verifying OTP: ${error.message}`);
        console.error(error);
      } else {
        setMessage("OTP verified successfully! You're logged in.");
        router.push("/");
      }
    } catch (error) {
      console.error("Error during OTP verification:", error);
    }
  };

  if (showTokenForm) {
    return (
      <Box alignSelf={"center"} p={20}>
        <VStack
          p={20}
          gap={3}
          bg={"brand.500"}
          border={"6px double #CCB7E5"}
          borderRadius={15}
        >
          <Box>
            Enter the code you received via Email{" "}
            <Tooltip
              label="A 6-digit code was sent to your email. Enter this code below and click Verify to be logged in."
              aria-label="A tooltip"
              placement="right-end"
            >
              <InfoOutlineIcon />
            </Tooltip>
          </Box>
          <Input
            value={token}
            onChange={(e) => setToken(e.target.value)}
            w={300}
          />
          <Button w={150} colorScheme="teal" onClick={handleVerify}>
            Verify
          </Button>
          {message && <Box color="red.500">{message}</Box>}
          <Button w={150} colorScheme="gray" onClick={() => router.push("/")}>
            Back to Home
          </Button>
        </VStack>
      </Box>
    );
  }

  return (
    <Box alignSelf={"center"} p={20}>
      <VStack
        p={20}
        gap={3}
        bg={"brand.500"}
        border={"6px double #CCB7E5"}
        borderRadius={15}
      >
        <Box>
          Enter Your Email Address{" "}
          <Tooltip
            label="In order to log in, a 6-digit code will be sent to the email you provide below.
            Enter this code on the next page and you will be logged in."
            aria-label="Email Tooltip"
            placement="right-end"
            fontSize="md"
          >
            <InfoOutlineIcon />
          </Tooltip>
        </Box>

        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          w={300}
          placeholder="Enter your email"
        />
        <Button w={150} colorScheme="teal" onClick={handleLogin}>
          Login
        </Button>
        {message && <Box color="red.500">{message}</Box>}
        <Button w={150} colorScheme="brand" onClick={() => router.push("/")}>
          Back to Home
        </Button>
      </VStack>
    </Box>
  );
};
