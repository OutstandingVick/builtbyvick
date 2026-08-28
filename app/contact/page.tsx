import type { Metadata } from "next";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Contact — Victor Ogbonna",
  description: "Contact Victor Ogbonna about frontend engineering, product work, or technical research.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen overflow-x-clip">
      <Contact />
    </main>
  );
}
