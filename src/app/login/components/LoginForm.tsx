"use client";

import { Box, Button, Input, Tooltip, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { useRouter } from "next/navigation"; // Import useRouter from Next.js
import { supabase } from "../../../../utils/supabase/client";
import { InfoIcon, InfoOutlineIcon } from "@chakra-ui/icons";


export const LoginForm = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [token, setToken] = useState("");
  const [showTokenForm, setShowTokenForm] = useState(false);
  const [message, setMessage] = useState("");


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

  // const handleVerify = async () => {
  //   try {
  //     const { data, error } = await supabase.auth.verifyOtp({
  //       email, // The same email used to request OTP
  //       token, // The OTP entered by the user
  //       type: "magiclink", // You can use 'magiclink' or 'signup'
  //     });

  //     if (error) {
  //       setMessage(`Error verifying OTP: ${error.message}`);
  //       console.error(error);
  //     } else {
  //       setMessage("OTP verified successfully! You're logged in.");
  //     }
  //   } catch (error) {
  //     console.error("Error during OTP verification:", error);
  //   }
  // };
  const handleVerify = async () => {
    // Check if the token is the correct one.
    const otpStored = otpStore[email]; // Assuming you stored the OTP in memory or a DB
  
    if (!otpStored) {
      setMessage("No OTP found for this email. Please request a new OTP.");
      return;
    }
  
    if (otpStored.otp === token) {
      // If the OTP is correct, log the user in or handle the login state
      setMessage("OTP verified successfully! You're logged in.");
      // Here, you can redirect the user or update the UI
    } else {
      setMessage("Invalid OTP. Please try again.");
    }
  };
  
  


  if (showTokenForm) {
    return (
      <VStack marginTop={200}>
        <Tooltip label="A 6-digit code was sent to your email. Enter this code below and click Verify to be logged in." 
        aria-label='A tooltip' placement="right-end">
          Enter the code your received via Email
        </Tooltip>
        <Input
          value={token}
          onChange={(e) => setToken(e.target.value)}
          w={300}
        
        />
        <Button w={150} colorScheme="teal" onClick={handleVerify}>
          Verify
        </Button>
        {message && <Box color="red.500">{message}</Box>}
        <Button w={150} colorScheme="gray" onClick={() => router.push('/')}>
        Back to Home
      </Button>
      </VStack>
    );
  }

  return (
    
    <VStack marginTop={200}>

      <Tooltip label="In order to log in, a 6-digit code will be sent to the email you provide below.
      Enter this code on the next page and you will be logged in." aria-label='A tooltip' placement="top" fontSize='md'>
      <InfoOutlineIcon />
      </Tooltip>

      <Box>
        Enter Your Email Address
      </Box>
      
      <Input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        w={300}
        placeholder="Enter your email"
      />
      <Button w={150} colorScheme="teal" onClick={handleLogin}>Login</Button>
      {message && <Box color="red.500">{message}</Box>}
      <Button w={150} colorScheme="gray" onClick={() => router.push('/')}>
        Back to Home
      </Button>
    </VStack>
    
  );
};