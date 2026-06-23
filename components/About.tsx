"use client";

import Image from "next/image";

const skills = {
  "Languages": ["JavaScript", "TypeScript", "Rust (learning)"],
  "Frontend": ["React", "Next.js", "Tailwind CSS", "HTML/CSS"],
  "Tools": ["Git / GitHub", "Figma", "Vercel", "NotebookLM"],
};

export default function About() {
  return (
    <section
      id="about"
      className="content-section about-section"
      style={{
        padding: "4rem 2rem",
        maxWidth: "1100px",
        margin: "0 auto",
      }}
    >
      {/* Section label */}
      <div className="section-label" style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "4rem" }}>
        <span
          className="font-mono"
          style={{ fontSize: "0.65rem", letterSpacing: "0.2em", color: "var(--accent)", textTransform: "uppercase" }}
        >
          01 / About
        </span>
        <div style={{ flex: 1, height: "1px", backgroundColor: "var(--border)" }} />
      </div>

      <div
        className="about-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "6rem",
          alignItems: "start",
        }}
      >
        {/* Left — portrait */}
        <div className="portrait-column" style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
          <div
            style={{
              position: "relative",
              width: "100%",
              aspectRatio: "1 / 1",
              overflow: "hidden",
              border: "1px solid var(--border)",
              borderRadius: "4px",
              backgroundColor: "var(--surface)",
            }}
          >
            <Image
              src="/victor-portrait.jpg"
              alt="Portrait of Victor Ogundimu"
              fill
              sizes="(max-width: 900px) 100vw, 480px"
              style={{
                objectFit: "cover",
                objectPosition: "50% 36%",
              }}
            />
          </div>
        </div>

        {/* Right — text */}
        <div>
          <h2
            className="font-display section-heading"
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              marginBottom: "2rem",
              color: "var(--text)",
            }}
          >
            Building at the
            <br />
            <span className="font-serif" style={{ fontStyle: "italic", color: "var(--accent)" }}>
              intersection
            </span>{" "}
            of code,<br />
             & research.
          </h2>

          <div
            className="font-mono about-copy"
            style={{ fontSize: "1.3rem", color: "var(--text-2)", lineHeight: 1.7, display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            <p>
              I&apos;m Victor, a frontend engineer focused on creating responsive
              and scalable digital experiences. I blend research-driven thinking
              with hands-on development to build products that are both
              functional and impactful.
            </p>
            <p>
              I&apos;m currently strengthening my software engineering skills
              through continuous learning and hands-on project development.
            </p>
          </div>

          {/* Skills */}
          <div
            className="skills-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))",
              gap: "1.5rem",
              marginTop: "2.75rem",
            }}
          >
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="skill-group">
                <div
                  className="font-mono"
                  style={{
                    fontSize: "0.6rem",
                    letterSpacing: "0.18em",
                    color: "var(--accent)",
                    textTransform: "uppercase",
                    marginBottom: "0.75rem",
                  }}
                >
                  {category}
                </div>
                <div className="skill-list" style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="font-mono"
                      style={{
                        fontSize: "0.75rem",
                        color: "var(--text-2)",
                        backgroundColor: "var(--surface)",
                        border: "1px solid var(--border)",
                        padding: "4px 10px",
                        borderRadius: "2px",
                        letterSpacing: "0.05em",
                        width: "fit-content",
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
