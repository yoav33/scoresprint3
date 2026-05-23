import type { Metadata, Viewport } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Math Prep Course | MYP5, DP, and CP1",
  description:
    "An online maths prep course for students starting MYP5, DP, or CP1, designed to build confidence before the new school year."
};

export const viewport: Viewport = {
  themeColor: "#eef4f5"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
