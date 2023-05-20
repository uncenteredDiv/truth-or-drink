import React, { ReactNode } from "react";
import {
  Container,
  Grid,
  GridItem,
  Heading,
  IconButton,
  useColorMode,
} from "@chakra-ui/react";
import { Moon, SunDim } from "@phosphor-icons/react";

type BaseProps = {
  children: ReactNode;
};
export const BaseLayout = ({ children }: BaseProps) => {
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
          <IconButton
            variant="outline"
            onClick={toggleColorMode}
            icon={colorMode === "light" ? <Moon /> : <SunDim />}
            aria-label="Toggle Color Mode"
          />
        </Container>
      </GridItem>
      <GridItem>{children}</GridItem>
      <GridItem textAlign="center" py={2}>
        &copy; {date.getFullYear()}
        <span> - made by </span>
        <a href="https://www.pixelschubser.ch" target="_blank">
          Pixelschubser
        </a>
      </GridItem>
    </Grid>
  );
};
