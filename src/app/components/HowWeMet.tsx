import { Box, Flex } from "@chakra-ui/react";

export const HowWeMetSection = () => {
  return (
    <Flex
      direction={"column"}
      p={10}
      marginTop={10}
      marginBottom={10}
      color={"brand.1000"}
      border={"4px double #9175BD"}
      borderRadius={12}
    >
      <Box textAlign={"center"} fontSize={40}>
        How We Met Section
      </Box>
      <Box fontSize={20} textAlign={"justify"}>
        Our story began in the most unexpected way. It was [location/event], and
        neither of us had planned to be there. [Partner 1] was [describe what
        they were doing], while [Partner 2] was [their activity]. As fate would
        have it, we ended up in the same place, and a casual conversation turned
        into something neither of us saw coming. What started as a shared
        interest in [common hobby or topic] soon grew into countless late-night
        talks, laughter, and shared adventures. There was an undeniable
        connection from the start, and it wasn’t long before we realized that
        what we had was something special. Through all the ups and downs, new
        experiences, and memories, our bond only grew stronger. We discovered
        that not only did we have a deep understanding of each other, but we
        also brought out the best in one another. From the small moments to the
        big milestones, we knew we had found something extraordinary. And now,
        we are beyond excited to take the next step in our journey together,
        surrounded by the people we love most.
      </Box>
    </Flex>
  );
};
