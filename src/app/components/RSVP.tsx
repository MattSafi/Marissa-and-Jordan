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
      <Box fontSize={20} textAlign={"start"} margin={8}>
        <p>
          &#x2022; We are so excited to celebrate our special day with all of
          you!
        </p>
        <p>
          &#x2022; Your presence means the world to us, and we would love for
          you to join us as we begin this new chapter together.
        </p>
        <p>
          &#x2022; Please take a moment to let us know if you will be able to
          attend by submitting your RSVP below.
        </p>
        <p>
          &#x2022; Kindly note that the deadline for your RSVP is [DEADLINE
          DATE] so that we can finalize all the details.
        </p>
        <p>
          &#x2022; Simply fill in your information and responses on the RSVP
          form and click Submit to RSVP.
        </p>
        <p>
          &#x2022; If you have any questions about travel, accommodation, or the
          schedule of events, feel free to reach out to us directly.
        </p>
        <p>&#x2022; We thank you, and we'll see you soon!</p>
      </Box>
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
