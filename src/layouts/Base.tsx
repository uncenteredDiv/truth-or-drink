import React, { ReactNode } from "react";
import { Box, IconButton, useColorMode } from "@chakra-ui/react";
import { Moon, SunDim } from "@phosphor-icons/react";

type BaseProps = {
  children: ReactNode;
};
export const BaseLayout = ({ children }: BaseProps) => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Box as="header" p={4}>
        <IconButton
          variant="outline"
          onClick={toggleColorMode}
          icon={colorMode === "light" ? <Moon /> : <SunDim />}
          aria-label="Toggle Color Mode"
        ></IconButton>
      </Box>
      {children}
    </>
  );
};
