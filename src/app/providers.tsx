"use client";

import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { AuthProvider } from "./authContext";

const theme = extendTheme({
  colors: {
    brand: {
      100: "#7553ac",
      200: "#9175BD",
      300: "#AE37C8",
      400: "#C0C0C0",
      500: "#5e56a9",
      600: "#C0C0C0",
      700: "#FF00DE",
      800: "#B19CD9",
      900: "#BEA9DF",
      1000: "#000000",
    },
  },
});

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider theme={theme}>
      <AuthProvider>{children}</AuthProvider>
    </ChakraProvider>
  );
}
