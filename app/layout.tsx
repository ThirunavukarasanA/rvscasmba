import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RVS CAS MBA - RVS College of Arts & Science",
  description: "RVS CAS MBA - Management education that combines business fundamentals with technology, analytics, and real-world decision-making.",
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
