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

  return (
    <Grid height="100%" gridTemplateRows="auto 1fr">
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
    </Grid>
  );
};
