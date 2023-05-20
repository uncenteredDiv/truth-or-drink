import * as React from "react";
import { graphql, Link } from "gatsby";
import type { HeadFC, PageProps } from "gatsby";
import {
  Button,
  Container,
  Heading,
  SimpleGrid,
  Stack,
} from "@chakra-ui/react";
import { BaseLayout } from "../layouts/Base";

const IndexPage: React.FC<PageProps> = ({ location, data }: any) => {
  return (
    <BaseLayout location={location}>
      <Container centerContent height="100%">
        <Stack
          spacing={8}
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          flex={1}
          textAlign="center"
        >
          <Heading size="md">Fun times awaits - choose your Deck</Heading>
          <SimpleGrid columns={2} spacing={4}>
            {data.allJsonFile.nodes.map(({ name, slug, colorTheme }: any) => (
              <Button
                as={Link}
                key={slug}
                to={`${slug}/1`}
                colorScheme={colorTheme}
                size="lg"
              >
                {name}
              </Button>
            ))}
          </SimpleGrid>
        </Stack>
      </Container>
    </BaseLayout>
  );
};

export const query = graphql`
  query {
    allJsonFile(sort: { sortOrder: ASC }) {
      nodes {
        name
        slug
        colorTheme
      }
    }
  }
`;

export default IndexPage;

export const Head: HeadFC = () => <title>Truth or Drink</title>;
