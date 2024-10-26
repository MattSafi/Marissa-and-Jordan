import { ChangeEvent, useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Radio,
  RadioGroup,
  Stack,
  Textarea,
  VStack,
  Heading,
  Tooltip,
  Alert,
  AlertIcon,
  Spinner,
} from "@chakra-ui/react";
import { InfoOutlineIcon } from "@chakra-ui/icons";
import { supabase } from "../../../utils/supabase/client";

export default function RSVPForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [foodOption, setFoodOption] = useState<"meat" | "vegetarian" | "">("");
  const [anecdote, setAnecdote] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) return;

    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const { error } = await supabase
        .from("rsvps")
        .insert([{ name, email, food_option: foodOption, anecdote }]);

      if (error) {
        setError("There was an error submitting your RSVP.");
      } else {
        setSuccess("RSVP submitted successfully!");
        setName("");
        setEmail("");
        setFoodOption("");
        setAnecdote("");
      }
    } catch (err) {
      console.error("Error inserting data:", err);
      setError("An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box maxW="md" p={10} borderWidth="1px" borderRadius="8" bg="brand.200">
      <VStack spacing={4} as="form" onSubmit={handleSubmit}>
        <Heading as="h2" size="lg" textAlign="center">
          RSVP Form
        </Heading>

        {error && (
          <Alert status="error">
            <AlertIcon />
            {error}
          </Alert>
        )}
        {success && (
          <Alert status="success">
            <AlertIcon />
            {success}
          </Alert>
        )}
        {loading && <Spinner size="lg" color="teal.500" />}

        <FormControl id="name">
          <FormLabel>Name & Surname</FormLabel>
          <Input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name and surname"
            required
          />
        </FormControl>

        <FormControl id="email">
          <FormLabel>Email Address</FormLabel>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </FormControl>

        <FormControl id="food">
          <FormLabel>Food Preference</FormLabel>
          <RadioGroup
            value={foodOption}
            onChange={(value) =>
              setFoodOption(value as "meat" | "vegetarian" | "")
            }
          >
            <Stack direction="row">
              <Radio value="meat">
                Meat Option{" "}
                <Tooltip
                  label="Grilled Steak and Mashed Potatoes."
                  aria-label="Meat option tooltip"
                  placement="top-start"
                >
                  <InfoOutlineIcon />
                </Tooltip>
              </Radio>
              <Radio value="vegetarian">
                Vegetarian Option{" "}
                <Tooltip
                  label="Roast Vegetable Lasagna."
                  aria-label="Vegetarian option tooltip"
                  placement="top-start"
                >
                  <InfoOutlineIcon />
                </Tooltip>
              </Radio>
            </Stack>
          </RadioGroup>
        </FormControl>

        <FormControl id="anecdote">
          <FormLabel>
            Cute Anecdote{" "}
            <Tooltip
              label="Please write a short memory involving the couple that stands out to you."
              aria-label="Anecdote tooltip"
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

        <Button
          type="submit"
          colorScheme="teal"
          size="md"
          width="full"
          isDisabled={loading}
        >
          {loading ? <Spinner size="sm" /> : "Submit RSVP"}
        </Button>
      </VStack>
    </Box>
  );
}
