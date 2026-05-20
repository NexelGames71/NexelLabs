import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "Nexel Labs | Modern Websites, Apps and Software",
  description:
    "Nexel Labs designs and develops modern websites, apps, and custom software systems with a product-focused approach.",
  icons: {
    icon: "/nexel-labs-icon.svg",
    shortcut: "/nexel-labs-icon.svg",
    apple: "/nexel-labs-icon.svg",
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${spaceGrotesk.variable}`}>{children}</body>
    </html>
  );
}
