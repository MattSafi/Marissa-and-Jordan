"use client";

import { Flex } from "@chakra-ui/react";
import { LoginForm } from "./components/LoginForm";

export default function Page() {
  return (
    <>
      <Flex justify={"center"} bg={"brand.800"} height={1000}>
        <LoginForm />
      </Flex>
    </>
  );
}
