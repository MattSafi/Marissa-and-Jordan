import { Box, Button, Flex } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

export const RSVPSection = () => {
  const router = useRouter();
  const routetoRSVPPage = () => {
    router.push("/RSVP");
  };
  return (
    <Flex
      direction="column"
      p={10}
      textAlign={"justify"}
      color={"brand.1000"}
      border={"4px double #9175BD"}
      borderRadius={12}
      fontFamily={"heading"}
    >
      <Box textAlign={"center"} fontSize={40}>
        RSVP to Our Wedding
      </Box>
      <Box fontSize={20} textAlign={"start"} margin={8}></Box>
      <Button
        onClick={routetoRSVPPage}
        w={130}
        alignSelf={"center"}
        colorScheme={"brand"}
        borderRadius={50}
        color={"white"}
        marginTop={5}
      >
        RSVP Now
      </Button>
    </Flex>
  );
};
