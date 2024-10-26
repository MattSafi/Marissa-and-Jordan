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
  Stack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { useRouter } from "next/navigation";
import { createClient } from "../../utils/supabase/client";
import { handleSignOut } from "./login/components/SignOut";
import { HowWeMetSection } from "./components/HowWeMet";
import { RSVPSection } from "./components/RSVP";
import { PhotoGallerySection } from "./components/PhotoGallery";
import { useAuth } from "./authContext";
import CountdownSection from "./components/Countdown";
import { WeddingPartySection } from "./components/WeddingParty";
import { LocationSection } from "./components/Location";
import { HowHeProposedSection } from "./components/HowHeProposed";

interface Props {
  children: React.ReactNode;
}

const NavLink = ({ children, onClick }: Props & { onClick?: () => void }) => {
  return (
    <Box
      as="button"
      px={3}
      py={1}
      rounded={"md"}
      _hover={{
        textDecoration: "underline",
        bg: "brand.100",
      }}
      onClick={onClick}
    >
      {children}
    </Box>
  );
};

export default function Page() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const supabase = createClient();
  supabase.auth.getUser().then((user) => console.log(user));

  const router = useRouter();

  const { isLoggedIn } = useAuth();

  const targetDate = "2025-10-30T09:00:00";

  // Create refs for each section

  const dateRef = useRef(null);
  const rsvpRef = useRef(null);
  const locationRef = useRef(null);
  const howWeMetRef = useRef(null);
  const howHeProposedRef = useRef(null);
  const photoGalleryRef = useRef(null);
  const weddingPartyRef = useRef(null);

  const scrollToSection = (ref: any) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const routeToLoginPage = () => {
    router.push("/login");
  };

  return (
    <>
      <Box minHeight={200}></Box>
      <Box
        bg="rgba(117, 83, 172, 0.7)"
        px={4}
        top={0}
        position={"sticky"}
        zIndex={1000}
      >
        <Flex h={14} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box w={50} h={50} borderRadius={20}>
              <img src="/images/couple.png" alt="Missa&Jordan" />
            </Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              <NavLink onClick={() => scrollToSection(dateRef)}>Date</NavLink>
              <NavLink onClick={() => scrollToSection(rsvpRef)}>RSVP</NavLink>
              <NavLink onClick={() => scrollToSection(locationRef)}>
                Location
              </NavLink>
              <NavLink onClick={() => scrollToSection(howWeMetRef)}>
                How We Met
              </NavLink>
              <NavLink onClick={() => scrollToSection(howHeProposedRef)}>
                How He Proposed
              </NavLink>
              <NavLink onClick={() => scrollToSection(photoGalleryRef)}>
                Photo Gallery
              </NavLink>
              <NavLink onClick={() => scrollToSection(weddingPartyRef)}>
                Meet The Wedding Party
              </NavLink>
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            {isLoggedIn ? (
              <Menu>
                <MenuButton
                  as={Button}
                  rounded={"full"}
                  variant={"link"}
                  cursor={"pointer"}
                  minW={0}
                >
                  <Box color={"#fff"} fontSize={13} fontWeight={500} py={0.5}>
                    You're Logged In
                  </Box>
                  <Avatar
                    size={"sm"}
                    src={
                      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAAAXNSR0IArs4c6QAABW9JREFUeF7tnH1y1DAMxZ2TQE8CPQn0JLQnoZyEchLgJGbfjtxxs5H0ZCuhfyQznc50l8T+6enDssNSzssksJx8bAInIEchJ6AT0FwQORX0XhVUa/1aSvlQSvm4+sGQ/6x+/pZSXpZlwd8PvQ5TkAD5dJnoZwEyMtEXgCql/ALAI4DtDqjW+u0yGagFSsm+HkspP/YEtRsgAYMJHHE97OWC6YDElaCaPRRjwUZ8esoGlQao1gog3yXGHKEa7RmIUQ9ZbpcCqNaKwPszSOVZMhUy1DVrtUkJ7JbdkOlwf/ywF+53nwFpGlAQDqAgA4VTdgetuS/jwlASnjl8TQGqtUI1jGUxyKcMi2KmYpQvkh29yU9lumFAtVbEG6Rv60I8ABj8Tr8EFBTlGelxWRYE8PA1BEgyFQBZF2LALmDWDyVrrSFIYUBEzEGAhO8fAqfBknHBaFZsuou6eQiQBMrfhmwQfO9ZHcv9EEva8gOTa+st/L4uK1jYcj/ERQ1SOLtFAVlBmYYjE2lLEIYngjyWFJQqa60wYgokGpCzdEANc8fMlIxfW7eC9Z+ZYEsoiY5HEUDVAEAFZDLzeZypyTmQaFejADnqYeHApbIWrywk65nUPVxATmCm4g6R+TzVrD+nM6WjWjerMYAsK7gPkMrXq7ihrGu26pYUaK5ZisswjqsiBpAWezIGaMYCItiy7m1V/aaRTUCOe7HqsRToTtAZg6sAUTBSvlYfTQHSJkepx3EvanJyD00BkXFo9zDH4SlIK7gik9PuQSlQAGn9poz6y4SsArKkfSnW3NjVrZG0GBYBBBfZWuLQgAR0eCwWIM29dh/UVs6/1GKbkwsaS1Oz2lgbAUS7l1hNG5QboFcr9a2WbtRYmtGxhMHOyM1lAdKCWqiNaXQd1UEp/Z6tmoi+hxgLDb6tPtYQIK24oy0vg1JdlekbZaR5QolqoLYUNJ19uhpE6yExhaK1lUQHemcsqqtagKaDYmc5a6lxbWOslhr4p2ikWUuNkHt5WVUL9mFAl8ZVyGqEiqIL1fb9kKt74xgBlOJineW0ADkCKJQoujGE66mRGBS2XDfAjJ7QkGuNVuQWIC1uDFkvCVKoBtsoFzQVD2WxlDpIqYoh9UjTPuVAgtEZVcFbCgrTjgYTZdsHt2lbP203I+XonVG0DgGyTmyEM1kUXvb3nYJTjauj7Y6pONRPXvrVFo+Us4iGe5nrOQ+QFodmMklfGTNHWJrLtZ3WoTOJRvN+qmFm1S60mw3spHoeFjpOM7OecxtfxjYulXKTNgs1YNTZn1H3wkMZQMPbPoEDVp5irM9NSDPqYQFZOwJqLDoITgOn1knOONww4SpISnRrX+kmowXheCc22mFOT2U3xnJ2dKkdERaQpSIM/NUS5AFyKnasFpntqJ2V+V7joneWie1lU4BERVYsuja+ZELmAauZM8xENmTHQSUYKgatijrvYBLcRTvYSUna8yPC5aFO61x1qNFPK0gG5rmaNr80OJ3bWcayOIfaNSFAhKtpA3OzBaOclZq15pd1q/ASKQxoAFJI0hFQwWw5tDwaAhSEFLYaCylw3nEITjhIrwceWEaE1k4MoMCzp+LfsIK6YBnpM19fTRh9nbJ7rdN7BaINj07nmlGmAQXdrR/Hm/dP2wc4CS/1Dv6EdN1e/I2+6xrKVrsCEkiYgPcqAOM9s99JfYEmRUGr9LvnS7wevPSEkA6oKyiZtZM3Yfbz9CTw6vLsCEa+162dovGDfdxuYA4BtHI9ZB4cSGDbFxqkdtBh6lVL1gK7uJj3cOnT4KB4D6u1MdorUe2/p8Dtht5z9cbBfP5fADEDey/fOQE5ljgBnYDmnPVU0KmgOQX9Ayi6QHaPlaP+AAAAAElFTkSuQmCC"
                    }
                  />
                </MenuButton>
                <MenuList bg={"brand.200"} color={"brand.1000"}>
                  <MenuItem
                    bg={"brand.200"}
                    _hover={{
                      bg: "brand.100",
                      color: "white",
                    }}
                  >
                    Profile
                  </MenuItem>
                  <MenuItem
                    bg={"brand.200"}
                    _hover={{
                      bg: "brand.100",
                      color: "white",
                    }}
                  >
                    Settings
                  </MenuItem>
                  <MenuDivider />
                  <MenuItem
                    onClick={handleSignOut}
                    bg={"brand.200"}
                    _hover={{
                      bg: "brand.100",
                      color: "white",
                    }}
                  >
                    Logout
                  </MenuItem>
                </MenuList>
              </Menu>
            ) : (
              <Button
                onClick={routeToLoginPage}
                variant={"solid"}
                colorScheme={"brand"}
                size={"md"}
                mr={4}
                fontWeight={700}
              >
                Login
              </Button>
            )}
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              <NavLink onClick={() => scrollToSection(dateRef)}>Date</NavLink>
              <NavLink onClick={() => scrollToSection(rsvpRef)}>RSVP</NavLink>
              <NavLink onClick={() => scrollToSection(locationRef)}>
                Location
              </NavLink>
              <NavLink onClick={() => scrollToSection(howWeMetRef)}>
                How We Met
              </NavLink>
              <NavLink onClick={() => scrollToSection(howHeProposedRef)}>
                How He Proposed
              </NavLink>
              <NavLink onClick={() => scrollToSection(photoGalleryRef)}>
                Photo Gallery
              </NavLink>
              <NavLink onClick={() => scrollToSection(weddingPartyRef)}>
                Meet The Wedding Party
              </NavLink>
            </Stack>
          </Box>
        ) : null}
      </Box>

      <Flex justifyContent={"center"} marginTop={1}>
        <Box bg="brand.800" p={20}>
          <div ref={dateRef}>
            <CountdownSection targetDate={targetDate} />
          </div>
          <div ref={rsvpRef}>
            <RSVPSection />
          </div>
          <div ref={locationRef}>
            <LocationSection />
          </div>
          <div ref={howWeMetRef}>
            <HowWeMetSection />
          </div>
          <div ref={howHeProposedRef}>
            <HowHeProposedSection />
          </div>
          <div ref={photoGalleryRef}>
            <PhotoGallerySection />
          </div>
          <div ref={weddingPartyRef}>
            <WeddingPartySection />
          </div>
        </Box>
      </Flex>
    </>
  );
}
