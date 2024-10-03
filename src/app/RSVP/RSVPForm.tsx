import { useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Textarea,
  VStack,
  Heading,
  Tooltip,
} from "@chakra-ui/react";
import { InfoOutlineIcon } from "@chakra-ui/icons";

export default function RSVPForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [allergies, setAllergies] = useState("");
  const [foodOption, setFoodOption] = useState<"meat" | "vegetarian" | "">(""); // Single state for food option
  const [anecdote, setAnecdote] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({
      name,
      email,
      foodOption,
      anecdote,
    });
    // Clear form after submission (optional)
    setName("");
    setEmail("");
    setFoodOption("");
    setAnecdote("");
  };

  return (
    <Box maxW="md" p={10} borderWidth="1px" borderRadius="8" bg={"brand.200"}>
      <VStack spacing={4} as="form" onSubmit={handleSubmit}>
        <Heading as="h2" size="lg" textAlign="center">
          RSVP Form
        </Heading>

        <FormControl id="name">
          <FormLabel>Name & Surname</FormLabel>
          <Input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name and surname"
          />
        </FormControl>

        <FormControl id="email">
          <FormLabel>Email Address</FormLabel>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
        </FormControl>

        <FormControl id="food">
          <FormLabel>Food Preference</FormLabel>
          <Stack spacing={4} direction="row">
            <Checkbox
              isChecked={foodOption === "meat"}
              onChange={() => setFoodOption("meat")}
            >
              Meat Option{" "}
              <Tooltip
                label="Grilled Steak and Mashed Potatoes."
                aria-label="A tooltip"
                placement="top-start"
              >
                <InfoOutlineIcon />
              </Tooltip>
            </Checkbox>

            <Checkbox
              isChecked={foodOption === "vegetarian"}
              onChange={() => setFoodOption("vegetarian")}
            >
              Vegetarian Option{" "}
              <Tooltip
                label="Roast Vegetable Lasagna."
                aria-label="A tooltip"
                placement="top-start"
              >
                <InfoOutlineIcon />
              </Tooltip>
            </Checkbox>
          </Stack>
        </FormControl>

        <FormControl id="allergies">
          <FormLabel>Allergies </FormLabel>
          <Textarea
            value={allergies}
            onChange={(e) => setAllergies(e.target.value)}
            placeholder="Please include any allergies you have"
            resize="vertical"
          />
        </FormControl>

        <FormControl id="anecdote">
          <FormLabel>
            Cute Anecdote{" "}
            <Tooltip
              label="Please write a short memory involving the couple that stands out to you."
              aria-label="A tooltip"
              placement="top-start"
            >
              <InfoOutlineIcon />
            </Tooltip>
          </FormLabel>
          <Textarea
            value={anecdote}
            onChange={(e) => setAnecdote(e.target.value)}
            placeholder="Share a cute anecdote or story"
            resize="vertical"
          />
        </FormControl>

        <Button type="submit" colorScheme="teal" size="md" width="full">
          Submit RSVP
        </Button>
      </VStack>
    </Box>
  );
}
