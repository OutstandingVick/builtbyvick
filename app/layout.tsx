import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Victor Ogbonna — Frontend Engineer",
  description: "Frontend engineer, technical writer & researcher building at the intersection of code and research.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
