import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 2rem" }}>
        <div style={{ height: "1px", backgroundColor: "var(--border)" }} />
      </div>
      <About />
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 2rem" }}>
        <div style={{ height: "1px", backgroundColor: "var(--border)" }} />
      </div>
      <Experience />
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 2rem" }}>
        <div style={{ height: "1px", backgroundColor: "var(--border)" }} />
      </div>
      <Projects />
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 2rem" }}>
        <div style={{ height: "1px", backgroundColor: "var(--border)" }} />
      </div>
      <Contact />
    </main>
  );
}
