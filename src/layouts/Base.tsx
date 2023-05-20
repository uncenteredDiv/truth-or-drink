import React, { ReactNode } from "react";
import { Link } from "gatsby";
import {
  ButtonGroup,
  Container,
  Link as ChakraLink,
  Grid,
  GridItem,
  Heading,
  IconButton,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { Moon, SunDim, X } from "@phosphor-icons/react";

type BaseProps = {
  children: ReactNode;
  location?: Location;
};
export const BaseLayout = ({ children, location }: BaseProps) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const date = new Date();

  return (
    <Grid height="100%" gridTemplateRows="auto 1fr auto">
      <GridItem as="header">
        <Container
          maxW="100%"
          py={4}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Heading as="h1">Truth or Drink</Heading>
          <ButtonGroup spacing={4}>
            <IconButton
              variant="outline"
              onClick={toggleColorMode}
              icon={colorMode === "light" ? <Moon /> : <SunDim />}
              aria-label="Toggle Color Mode"
            />
            {location?.pathname !== "/" && (
              <IconButton
                as={Link}
                to="/"
                icon={<X />}
                aria-label="Back to Homepage"
              />
            )}
          </ButtonGroup>
        </Container>
      </GridItem>
      <GridItem>{children}</GridItem>
      <GridItem textAlign="center" py={2}>
        <Text fontSize="sm">
          &copy; {date.getFullYear()}
          <span> - made by </span>
          <ChakraLink href="https://www.pixelschubser.ch" isExternal>
            Pixelschubser
          </ChakraLink>
        </Text>
      </GridItem>
    </Grid>
  );
};
