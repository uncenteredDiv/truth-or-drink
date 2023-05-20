import * as React from "react";
import { navigate } from "gatsby";
import { ButtonGroup, Center, Container, IconButton } from "@chakra-ui/react";
import { ArrowLeft, ArrowRight, Shuffle } from "@phosphor-icons/react";
import { getRandomBetween } from "../utils/getRandomBetween";
import { Card } from "../component/Card/Card";
import { CardProps } from "../types/card";
import { BaseLayout } from "../layouts/Base";

type PageContext = {
  path: string;
  pageContext: CardProps;
};

const CardTemplate = ({ pageContext }: PageContext) => {
  const { id, slug, count } = pageContext;

  const handleRandomClick = () => {
    const nextId = getRandomBetween(1, count, id);
    navigate(`/${slug}/${nextId}`);
  };

  const handlePrevClick = () => {
    navigate(`/${slug}/${id - 1}`);
  };

  const handleNextClick = () => {
    navigate(`/${slug}/${id + 1}`);
  };

  return (
    <BaseLayout>
      <Container
        maxW="md"
        py={6}
        height="100%"
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
      >
        <Center flex={1}>
          <Card {...pageContext} />
        </Center>
        {count > 1 && (
          <ButtonGroup
            spacing={4}
            mt={10}
            display="flex"
            justifyContent="center"
          >
            <IconButton
              aria-label="Previous Question"
              icon={<ArrowLeft />}
              onClick={handlePrevClick}
              isDisabled={id === 1}
            />
            {count > 2 && (
              <IconButton
                aria-label="Random Question"
                icon={<Shuffle />}
                onClick={handleRandomClick}
              />
            )}
            <IconButton
              aria-label="Next Question"
              icon={<ArrowRight />}
              onClick={handleNextClick}
              isDisabled={id === count}
            />
          </ButtonGroup>
        )}
      </Container>
    </BaseLayout>
  );
};

export default CardTemplate;
