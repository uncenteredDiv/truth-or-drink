import { extendTheme } from "@chakra-ui/react";

const theme = {
  config: {
    initialColorMode: "dark",
  },
  styles: {
    global: {
      "html, body, #___gatsby, #gatsby-focus-wrapper": {
        height: "100%",
      },
    },
  },
};

export default extendTheme(theme);
