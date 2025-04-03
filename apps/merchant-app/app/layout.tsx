import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Providers } from "../providers";


export const metadata: Metadata = {
  title: "VMoney",
  description: "This is a money transfer website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Providers>
      <body >
        {children}
      </body>
      </Providers>
    </html>
  );
}
