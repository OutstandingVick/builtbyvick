const work = [
  {
    role: "Frontend Engineer — React / Web3",
    org: "Bounsser",
    period: "Q2 2025 — Present",
    location: "Remote",
    bullets: [
      "Build and maintain secure dashboard interfaces for a decentralized identity and authentication platform using React and TypeScript, shipping features directly to production.",
      "Introduced a reusable component library and standardized state management patterns, reducing UI development overhead and improving consistency across security-sensitive flows.",
      "Collaborate closely with backend engineers to optimize API integrations; responsible for end-to-end delivery of authentication and credential-management UI features.",
    ],
  },
  {
    role: "Frontend Engineer — Solana Ecosystem",
    org: "HotOdds",
    period: "Sep 2024 — Feb 2025",
    location: "Delta, Nigeria",
    bullets: [
      "Delivered production-ready real-time dashboards and Solana-integrated data interfaces for the Solana Radar Hackathon (Q4 2024), shipping a working demo under competition deadline.",
      "Integrated frontend with Solana APIs and WebSocket services to achieve low-latency data flow across high-frequency trading interfaces.",
      "Diagnosed and resolved critical UI bugs during the final pre-demo sprint, ensuring a stable, performant product at judging time.",
    ],
  },
  {
    role: "Frontend Engineer & Web Design Tutor",
    org: "AGM Techpulse",
    period: "Jan 2020 — Oct 2024",
    location: "Bayelsa, Nigeria",
    bullets: [
      "Designed and shipped responsive, accessible web applications using React, JavaScript, and Tailwind CSS, translating Figma specs to production UI.",
      "Led code reviews and mentored junior developers, raising team standards on accessibility compliance, performance optimization, and code quality.",
    ],
  },
  {
    role: "Freelance Frontend Engineer",
    org: "Independent",
    period: "Aug 2019 — Jan 2023",
    location: "Remote",
    bullets: [
      "Built a React product showcase for a luxury watch platform (The Uglee One), prioritizing visual performance and responsive cross-device design.",
      "Delivered a mobile-friendly HTML/CSS/JS e-commerce prototype for Nonis Designs, used in partner demos and investor pitches.",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="content-section experience-section"
      style={{
        padding: "8rem 2rem",
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
          02 / Experience
        </span>
        <div style={{ flex: 1, height: "1px", backgroundColor: "var(--border)" }} />
      </div>

      {/* Work list */}
      <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
        {work.map((item, i) => (
          <div
            key={i}
            className="experience-item"
            style={{
              display: "grid",
              gridTemplateColumns: "200px 1fr",
              gap: "3rem",
              padding: "2.5rem 0",
              borderBottom: "1px solid var(--border)",
            }}
          >
            {/* Left */}
            <div>
              <div
                className="font-mono"
                style={{ fontSize: "0.72rem", color: "var(--text-2)", marginBottom: "6px" }}
              >
                {item.period}
              </div>
              <div
                className="font-mono"
                style={{ fontSize: "0.68rem", color: "var(--text-3)", letterSpacing: "0.05em" }}
              >
                {item.location}
              </div>
            </div>
            {/* Right */}
            <div>
              <div
                className="font-display experience-role"
                style={{ fontSize: "1.05rem", fontWeight: 600, color: "var(--text)", marginBottom: "4px" }}
              >
                {item.role}
              </div>
              <div
                className="font-mono experience-org"
                style={{ fontSize: "0.72rem", color: "var(--accent)", marginBottom: "1.2rem", letterSpacing: "0.08em" }}
              >
                @ {item.org}
              </div>
              <ul style={{ display: "flex", flexDirection: "column", gap: "0.5rem", listStyle: "none" }}>
                {item.bullets.map((b, j) => (
                  <li
                    key={j}
                    className="font-mono experience-body"
                    style={{ fontSize: "1.23rem", color: "var(--text-2)", lineHeight: 1.6, paddingLeft: "1rem", position: "relative" }}
                  >
                    <span style={{ position: "absolute", left: 0, color: "var(--border-2)" }}>—</span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
