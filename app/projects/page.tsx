import type { Metadata } from "next";
import Projects from "@/components/Projects";

export const metadata: Metadata = {
  title: "Projects — Victor Ogbonna",
  description: "Selected frontend, Web3, fintech, and research projects by Victor Ogbonna.",
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen overflow-x-clip pt-20">
      <Projects />
    </main>
  );
}
