import * as React from "react";
import { navigate } from "gatsby";
import { Button, ButtonGroup, Center, Container } from "@chakra-ui/react";
import { ArrowLeft, ArrowRight, Shuffle } from "@phosphor-icons/react";
import { getRandomBetween } from "../utils/getRandomBetween";
import { slugify } from "../utils/slugify";
import { Card } from "../component/Card/Card";
import { CardProps } from "../types/card";
import { BaseLayout } from "../layouts/Base";

type PageContext = {
  path: string;
  pageContext: CardProps;
};

const CardTemplate = ({ pageContext }: PageContext) => {
  const { id, deck, deckCount } = pageContext;
  const urlSlug = slugify(deck);

  const handleRandomClick = () => {
    const nextId = getRandomBetween(1, deckCount, id);
    navigate(`/${urlSlug}/${nextId}`);
  };

  const handlePrevClick = () => {
    navigate(`/${urlSlug}/${id - 1}`);
  };

  const handleNextClick = () => {
    navigate(`/${urlSlug}/${id + 1}`);
  };

  return (
    <BaseLayout>
      <Center minHeight="calc(100vh - 72px)" p={6}>
        <Container maxW="md">
          <Card {...pageContext} />
          <ButtonGroup
            spacing={4}
            mt={10}
            display="flex"
            justifyContent="center"
          >
            <Button
              colorScheme="gray"
              onClick={handlePrevClick}
              isDisabled={id === 1}
              leftIcon={<ArrowLeft />}
            >
              Previous
            </Button>
            <Button
              colorScheme="gray"
              onClick={handleRandomClick}
              isDisabled={deckCount === 1}
              leftIcon={<Shuffle />}
            >
              Random
            </Button>
            <Button
              colorScheme="gray"
              onClick={handleNextClick}
              isDisabled={id === deckCount}
              rightIcon={<ArrowRight />}
            >
              Next
            </Button>
          </ButtonGroup>
        </Container>
      </Center>
    </BaseLayout>
  );
};

export default CardTemplate;
