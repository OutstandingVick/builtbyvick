import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Victor Ogundimu — Frontend Engineer",
  description: "Frontend engineer, technical writer & Solana ecosystem researcher based in Lagos, Nigeria.",
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
