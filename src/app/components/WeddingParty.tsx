import { Box, HStack, VStack } from "@chakra-ui/react";

export const WeddingPartySection = () => {
  return (
    <Box marginTop={100}>
      {/* Bridesmaids */}

      <Box textAlign={"center"} fontSize={40}>
        Meet The Bridesmaids
      </Box>
      <HStack marginTop={10} textAlign={"center"} justify={"space-around"}>
        <VStack
          maxW={300}
          maxH={320.5}
          p={8}
          border={"4px double #9175BD"}
          borderRadius={12}
          background={"brand.500"}
        >
          <Box width={150}>
            <img src="./images/woman1.jpg" alt="test" />
          </Box>
          <Box fontSize={25}>This is Person 1</Box>
          <Box fontSize={15}>Person 1 is regularly rude to waiters</Box>
        </VStack>
        <VStack
          maxW={300}
          maxH={320.5}
          p={8}
          border={"4px double #9175BD"}
          borderRadius={12}
          background={"brand.500"}
        >
          <Box width={150}>
            <img src="./images/woman2.webp" alt="test" />
          </Box>
          <Box fontSize={25}>This is Person 2</Box>
          <Box fontSize={15}>
            Person 2 once stated that Stalin did nothing wrong
          </Box>
        </VStack>
        <VStack
          maxW={300}
          maxH={320.5}
          p={8}
          border={"4px double #9175BD"}
          borderRadius={12}
          background={"brand.500"}
        >
          <Box width={150}>
            <img src="./images/woman3.jpg" alt="test" />
          </Box>
          <Box fontSize={25}>This is Person 3</Box>
          <Box fontSize={15}>
            Person 3 has been known to kill the ducks at the park
          </Box>
        </VStack>
      </HStack>

      {/* Groomsmen */}

      <Box marginTop={10} textAlign={"center"} fontSize={40}>
        Meet The Groomsmen
      </Box>
      <HStack marginTop={10} textAlign={"center"} justify={"space-around"}>
        <VStack
          maxW={300}
          maxH={320.5}
          p={8}
          border={"4px double #9175BD"}
          borderRadius={12}
          background={"brand.500"}
        >
          <Box width={150}>
            <img src="./images/tarik.jpg" alt="test" />
          </Box>
          <Box fontSize={25}>This is Tarik</Box>
          <Box fontSize={15}>Tarik can drink 24 beers in 24 minutes</Box>
        </VStack>
        <VStack
          maxW={300}
          maxH={320.5}
          p={8}
          border={"4px double #9175BD"}
          borderRadius={12}
          background={"brand.500"}
        >
          <Box width={150}>
            <img src="./images/matthew.jpg" alt="test" />
          </Box>
          <Box fontSize={25}>This is Matthew</Box>
          <Box fontSize={15}>
            Matthew is really cool, nothing negative to say here
          </Box>
        </VStack>
        <VStack
          maxW={300}
          maxH={320.5}
          p={8}
          border={"4px double #9175BD"}
          borderRadius={12}
          background={"brand.500"}
        >
          <Box width={150}>
            <img src="./images/luke.jpg" alt="test" />
          </Box>
          <Box fontSize={25}>This is Luke</Box>
          <Box fontSize={15}>
            Luke once strangled a midget in the name of science
          </Box>
        </VStack>
      </HStack>
    </Box>
  );
};
