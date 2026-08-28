import type { Metadata } from "next";
import About from "@/components/About";
import Experience from "@/components/Experience";

export const metadata: Metadata = {
  title: "About — Victor Ogbonna",
  description: "Learn more about Victor Ogbonna's engineering, research, and community work.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen overflow-x-clip pt-20">
      <About />
      <Experience />
    </main>
  );
}
