import type { Metadata } from "next";
import { Providers } from "./providers";
import { fonts } from "./fonts/font";

export const metadata: Metadata = {
  title: "Marissa & Jordan",
  description: "Marissa and Jordan's Wedding",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={fonts.merienda.variable}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
