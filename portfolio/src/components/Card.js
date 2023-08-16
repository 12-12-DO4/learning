import {
  Stack,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
  Box,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <Stack
      spacing={3}
      borderRadius={20}
      bg="#fff"
      color="#000"
      overflow="hidden"
    >
      <VStack alignItems="start">
        <Image src={imageSrc} />
        <Stack spacing={3} p={4}>
          <Heading as="h3" size="md">
            {title}
          </Heading>
          <Text>{description}</Text>
          <HStack>
            <a href="">See more</a>
            <FontAwesomeIcon icon={faArrowRight} />
          </HStack>
        </Stack>
      </VStack>
    </Stack>
  );
};

export default Card;
