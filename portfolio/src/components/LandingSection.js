import React from "react";
import { Avatar, Heading, VStack, Box } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Pete!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack>
      <Avatar size="xl" name="Pete" src="https://i.pravatar.cc/150?img=7" />
      <Heading as="h1" size="xs">
        {greeting}
      </Heading>
      <Box pt={6}>
        <VStack>
          <Heading as="h2" size="lg">
            {bio1}
          </Heading>
          <Heading as="h2" size="lg">
            {bio2}
          </Heading>
        </VStack>
      </Box>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
