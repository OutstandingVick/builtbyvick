"use client";

import Image from "next/image";

const skills = {
  "Languages": ["JavaScript", "TypeScript", "Rust (learning)"],
  "Frontend": ["React", "Next.js", "Tailwind CSS", "HTML/CSS"],
  "Web3 / Solana": ["Anchor", "Web3.js", "Solana Programs", "DeFi Protocols"],
  "Tools": ["Git / GitHub", "Figma", "Vercel", "NotebookLM"],
};

export default function About() {
  return (
    <section
      id="about"
      style={{
        padding: "8rem 2rem",
        maxWidth: "1100px",
        margin: "0 auto",
      }}
    >
      {/* Section label */}
      <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "4rem" }}>
        <span
          className="font-mono"
          style={{ fontSize: "0.65rem", letterSpacing: "0.2em", color: "var(--accent)", textTransform: "uppercase" }}
        >
          01 / About
        </span>
        <div style={{ flex: 1, height: "1px", backgroundColor: "var(--border)" }} />
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "6rem",
          alignItems: "start",
        }}
      >
        {/* Left — text */}
        <div>
          <h2
            className="font-display"
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
            research & writing.
          </h2>

          <div
            className="font-mono"
            style={{ fontSize: "0.87rem", color: "var(--text-2)", lineHeight: 1.9, display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            <p>
              I&apos;m Victor — a frontend engineer and technical writer embedded in
              the Solana ecosystem. I split my time between building user-facing
              products and producing research & content that helps people
              understand how Web3 actually works.
            </p>
            <p>
              As a{" "}
              <span style={{ color: "var(--text)" }}>Solana Turbine graduate</span> and
              active member of{" "}
              <span style={{ color: "var(--text)" }}>SuperteamNG</span>, I&apos;ve
              competed in multiple hackathons, built DeFi tooling, and written
              long-form technical articles across the ecosystem.
            </p>
            <p>
              Currently pursuing a self-directed CS curriculum — going deep on
              fundamentals, Rust, and Solana architecture — while shipping under
              competition pressure.
            </p>
          </div>

          {/* Location / status */}
          <div
            style={{
              display: "flex",
              gap: "2rem",
              marginTop: "2.5rem",
              paddingTop: "2rem",
              borderTop: "1px solid var(--border)",
            }}
          >
            {[
              { label: "Location", value: "Lagos, Nigeria" },
              { label: "Status", value: "Open to roles" },
              { label: "Cohort", value: "Turbine '24" },
            ].map((item) => (
              <div key={item.label}>
                <div
                  className="font-mono"
                  style={{ fontSize: "0.6rem", letterSpacing: "0.15em", color: "var(--text-3)", textTransform: "uppercase", marginBottom: "4px" }}
                >
                  {item.label}
                </div>
                <div
                  className="font-mono"
                  style={{ fontSize: "0.8rem", color: "var(--text)" }}
                >
                  {item.value}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — portrait and skills */}
        <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
          <div
            style={{
              position: "relative",
              width: "100%",
              aspectRatio: "4 / 5",
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

          {Object.entries(skills).map(([category, items]) => (
            <div key={category}>
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
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
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
    </section>
  );
}
