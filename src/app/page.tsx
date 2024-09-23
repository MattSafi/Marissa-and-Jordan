"use client";

import React, { useRef } from "react";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, AddIcon } from "@chakra-ui/icons";
import { handleLoginRedirect } from "../router/LoginHelper";
import { useRouter } from "next/navigation";

interface Props {
  children: React.ReactNode;
}

const Links = ["RSVP", "How We Met", "Photo Gallery"];

const NavLink = ({ children, onClick }: Props & { onClick?: () => void }) => {
  return (
    <Box
      as="a"
      px={2}
      py={1}
      rounded={"md"}
      _hover={{
        textDecoration: "none",
        bg: useColorModeValue("gray.200", "gray.700"),
      }}
      onClick={onClick} // Trigger the scroll on click
      href={"#"}
    >
      {children}
    </Box>
  );
};

export default function WithAction() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  // Create refs for each section
  const router = useRouter();
  const rsvpRef = useRef(null);
  const howWeMetRef = useRef(null);
  const photoGalleryRef = useRef(null);
  
  const scrollToSection = (ref: any) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleLoginRoute = () => {
    router.push('/login');
  }

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box>Marissa&Jordan</Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              <NavLink onClick={() => scrollToSection(rsvpRef)}>RSVP</NavLink>
              <NavLink onClick={() => scrollToSection(howWeMetRef)}>
                How We Met
              </NavLink>
              <NavLink onClick={() => scrollToSection(photoGalleryRef)}>
                Photo Gallery
              </NavLink>
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            <Button
              onClick={handleLoginRoute}
              variant={"solid"}
              colorScheme={"teal"}
              size={"sm"}
              mr={4}
            >
              Login
            </Button>
            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
                <Avatar
                  size={"sm"}
                  src={
                    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAAnJJREFUWEftmDFOHEEQRf+XwKdwYEhw4oQL2CROOQKQQMYJbGGET0BmJ4YjOHUCXIDEiUlgA06BLZX5qAf11HRP9+wMBlm0tNrVzmzP61+/qquXeGKDT4wH/weQmb0CsAngLQB91msW1Na7XsckT4dGYJBCZvYJwN6AhzRg+l3VqAIys3cAvgUlqiZ2N1WDFYHmUKUPeJ9kr1q9QGZ2AkDqTDmOSG7lJswCTayMf35WqSRQ8IzUecixRfLIPyAHdDXCwLWLmJFcKgKZmeqLMupfjE7oOgqZ2bzq3KX2rbIy7SwUTy1KSbGRSY6OSi2ghDrKBhVCVeLcKNaYACew1FxrcUX3QAqVQqZxl56FbULbQ3UVjuaSYs0iW2HzQHHdSWbBFMZyWXxKcq2Z1wPF/lmSF2IAM3sDYB3AdSpl3b1S+iWA7yR/umsKX1NWWj7yQHZPehuLBMw5gIXw/VeSOynFzOwLgO1w7Q+A1RgqhE6L15gb6AOAgwjgN8kXGaAbAIvRtY8kP7sFJhdfHbJEBl6QfJ0B+gVgJbrW8uMQhWJTt9JRk4dQqBRcAtgl+SMD9B7AIYBlFVkfWre4XlPHDVjvrjwm28ysU15yWZZ1/xgA/1u3G+QLYwjLvdkATF6LvBfpsjm1l8Wba3JHHqOWU6ez4BSQSrrM3ZT2ybzkOtC69iOEzbcgxV64pJozsm7vZLG+HNLCttKzBOCKoO/Nh7WwzWSJvrrYajiQ1Dmud2HzHoMEplOpGjJ5IW7I5L2m9/FCFkNfBAqemuKgqIwqHq2rgAJUc55//KN0otKW/mw4U0hrFPFzVys0JKvG3PsMVFLvL1MuODQHHzf4AAAAAElFTkSuQmCC"
                  }
                />
              </MenuButton>
              <MenuList>
                <MenuItem >Profile</MenuItem>
                <MenuItem>Settings</MenuItem>
                <MenuDivider />
                <MenuItem>Logout</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              <NavLink onClick={() => scrollToSection(rsvpRef)}>RSVP</NavLink>
              <NavLink onClick={() => scrollToSection(howWeMetRef)}>
                How We Met
              </NavLink>
              <NavLink onClick={() => scrollToSection(photoGalleryRef)}>
                Photo Gallery
              </NavLink>
            </Stack>
          </Box>
        ) : null}
      </Box>

      <Box p={4}>
        <div ref={rsvpRef}>
          <h2>RSVP to Our Wedding</h2>
            <p>Please let us know if you’ll be able to join us on our special day.</p>
        </div>
        <div ref={howWeMetRef}>
          <h2>How We Met Section</h2>
            <p>This section will contain information about how we met</p>
        </div>
        <div ref={photoGalleryRef}>Photo Gallery Section</div>
      </Box>
    </>
  );
}
