// theme.ts
import { extendTheme } from "@chakra-ui/react";
import { fonts } from "./font"; // Import the font configuration

const theme = extendTheme({
  fonts: {
    heading: `var(${fonts.allura.variable}), sans-serif`, // Use Allura for headings
    body: `var(${fonts.allura.variable}), sans-serif`, // Use Allura for body text
  },
});

export default theme;
