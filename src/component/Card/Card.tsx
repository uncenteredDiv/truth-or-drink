import * as React from "react";
import {
  Card as ChakraCard,
  CardBody,
  CardHeader,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { CardProps } from "../../types/card";

export const Card = (props: CardProps) => {
  const {
    id,
    question,
    preCondition,
    type,
    name,
    count,
    colorTheme = "gray",
  } = props;

  return (
    <ChakraCard
      size="lg"
      position="relative"
      overflow="hidden"
      bg={useColorModeValue("gray.100", "gray.900")}
    >
      <CardHeader display="flex" alignItems="center" pb={4}>
        <Text fontSize="xl" lineHeight={1} color="gray.300">
          {id} / {count}
        </Text>
        <Text
          fontSize="xl"
          ml="auto"
          color={`${colorTheme}.400`}
          fontWeight="700"
          textTransform="uppercase"
        >
          {name}
        </Text>
      </CardHeader>
      <CardBody>
        <Text
          as="span"
          position="relative"
          p={2}
          bg={`${colorTheme}.400`}
          color="white"
          fontWeight="500"
          textTransform="uppercase"
          _after={{
            content: '""',
            width: 1,
            height: "100%",
            background: `${colorTheme}.400`,
            position: "absolute",
            top: 0,
            right: -2,
          }}
        >
          {type}
        </Text>
        <Stack spacing={2} mt={8}>
          {preCondition && <Text fontSize="xl">{preCondition}</Text>}
          <Text fontSize="2xl" fontWeight="500">
            {question}
          </Text>
        </Stack>
      </CardBody>
    </ChakraCard>
  );
};
