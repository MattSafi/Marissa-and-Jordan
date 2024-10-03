"use client";

import { Button, Flex } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import RSVPForm from "./RSVPForm";

export default function RSVPPage() {
  const router = useRouter();
  return (
    <>
      <Flex
        alignItems={"center"}
        direction={"column"}
        bg={"brand.800"}
        height={1000}
        py={10}
        gap={5}
      >
        <RSVPForm />
        <Button w={150} colorScheme="brand" onClick={() => router.push("/")}>
          Back to Home
        </Button>
      </Flex>
    </>
  );
}
