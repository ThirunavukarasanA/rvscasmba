import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chicago Booth - University of Chicago Booth School of Business",
  description: "The University of Chicago Booth School of Business",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
