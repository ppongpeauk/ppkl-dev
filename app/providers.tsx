"use client";

import { ChakraProvider } from "@chakra-ui/react";

import { ColorModeScript } from "@chakra-ui/react";
import theme from "./theme";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      {children}
    </ChakraProvider>
  );
}
