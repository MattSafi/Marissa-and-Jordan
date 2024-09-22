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
import { handleLoginRedirect } from "./router/LoginHelper";

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
  const rsvpRef = useRef(null);
  const howWeMetRef = useRef(null);
  const photoGalleryRef = useRef(null);

  const scrollToSection = (ref: any) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const redirectToLogin = handleLoginRedirect();

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
              onClick={redirectToLogin}
              variant={"solid"}
              colorScheme={"teal"}
              size={"sm"}
              mr={4}
              leftIcon={<AddIcon />}
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
                    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAVxJREFUSEvFldFNw0AQRCedhEoIlQC/UESgiOQXOgEqIZ2EPHRzWp/XiS+SlZOsi+P1zs7O+Halhddq4fyaA7CRdC+Jnetw2r/L/lN+T9Z5DmAt6aMkPUcUwIcCOIqbAtieIt862gfIp6T39p0MoDd5zElRA5AWgLb8dlTehsLkOerSAnzN6PklfEDuHBQBnoqoBMAkW+613UMcznpsCkN0nDawqXtvsbh3gkkRQxUUaKCqRWSAJQmih4Bcs2BDm6keFgMGiEvF9I+KWTtJL5L2kl4bxOyZTVJ1iAwygGNI2hpi6pn//4+PL9lBVaArGNgotJhWpyKPPpYOMWyUVGQLNPBxR3JC3YVqlNiieLhVih0AdmF1UNsi7uNR0WNXsydH1DCdBxaK4Dl6xMPx4mFnFnyRPq49YOJwgSlDiGJ8rKTF3GzgWFuq8+WxybOMVeqHOTO5w0jj0MUB/gBG2loZgDgmxAAAAABJRU5ErkJggg=="
                  }
                />
              </MenuButton>
              <MenuList>
                <MenuItem>Link 1</MenuItem>
                <MenuItem>Link 2</MenuItem>
                <MenuDivider />
                <MenuItem>Link 3</MenuItem>
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
          RSVP Section
          11111111111111111111111111111111111111111111111111111111111111111111111111111111111
          11111111111111111111111111111111111111111111111111111111111111111111111111111111111
          11111111111111111111111111111111111111111111111111111111111111111111111111111111111
          11111111111111111111111111111111111111111111111111111111111111111111111111111111111
        </div>
        <div ref={howWeMetRef}>How We Met Section</div>
        <div ref={photoGalleryRef}>Photo Gallery Section</div>
      </Box>
    </>
  );
}
