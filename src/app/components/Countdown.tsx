// src/components/Countdown.tsx
import { Box, Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";

interface CountdownProps {
  targetDate: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownSection: React.FC<CountdownProps> = ({ targetDate }) => {
  const calculateTimeLeft = (): TimeLeft => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft: TimeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <Flex
      alignItems={"center"}
      direction={"column"}
      p={8}
      m={2}
      marginBottom={20}
      color={"white"}
      fontSize={40}
      fontWeight={600}
    >
      Please join us for our special day on the 25th of October 2025
      <Flex>
        <Box w="110px" textAlign="center">
          {timeLeft.days} days
        </Box>{" "}
        :
        <Box w="110px" textAlign="center">
          {timeLeft.hours} hours
        </Box>{" "}
        :
        <Box w="100px" textAlign="center">
          {timeLeft.minutes}
        </Box>{" "}
        :
        <Box w="70px" textAlign="center">
          {timeLeft.seconds}
        </Box>
      </Flex>
    </Flex>
  );
};

export default CountdownSection;
