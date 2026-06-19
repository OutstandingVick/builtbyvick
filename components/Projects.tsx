"use client";

const featured = [
  {
    name: "Tei Markets",
    url: "https://tei.markets",
    github: "https://github.com/outstandingvick/tei",
    category: "DeFi / Prediction Market",
    period: "2025",
    stack: ["Next.js", "Solana", "Anchor", "Tailwind"],
    desc: "A peer-to-peer football prediction market on Solana using a constant-product AMM. Users stake SOL on match outcomes; prices update automatically via the AMM formula.",
    bullets: [
      "Deployed to Solana devnet with working on-chain program logic",
      "Custom brand identity system — cream/lilac palette",
      "Full pitch deck and product documentation",
    ],
  },
  {
    name: "AgentOracle",
    url: "https://github.com/outstandingvick/agent-oracle",
    github: "https://github.com/outstandingvick/agent-oracle",
    category: "AI Agent / Hackathon",
    period: "2026",
    stack: ["Gemini 1.5 Flash", "Polymarket", "Arc/Circle", "TypeScript"],
    desc: "Autonomous AI prediction market trader built for the Agora Agents Hackathon. Uses Gemini to analyze market signals and execute positions on Polymarket.",
    bullets: [
      "Fully autonomous — no human-in-the-loop required",
      "Integrated Arc/Circle infrastructure for on-chain settlement",
      "Research-first build strategy, reverse-engineered past winners",
    ],
  },
  {
    name: "LP Intelligence Dashboard",
    url: "#",
    github: "https://github.com/outstandingvick/lp-dashboard",
    category: "DeFi Tooling",
    period: "2025",
    stack: ["React", "TypeScript", "Meteora API", "Recharts"],
    desc: "A React dashboard for tracking Meteora DLMM liquidity pool positions, fee income, and LP strategy performance in real time.",
    bullets: [
      "Real-time pool data via Meteora API",
      "Fee compounding calculator and position health indicators",
      "Built for long-term LP strategy research",
    ],
  },
];

const more = [
  {
    name: "SolScout",
    stack: ["ElizaOS v2", "Nosana GPU", "TypeScript"],
    desc: "DeFi intelligence agent deployed on Nosana GPUs. Surfaces protocol data from across the Solana ecosystem for the Nosana × ElizaOS Builders Challenge.",
    url: "#",
  },
  {
    name: "Xara Article — \"Money at the Speed of Conversation\"",
    stack: ["Technical Writing", "Research"],
    desc: "Long-form article on Xara (WhatsApp-native conversational banking on Solana). Scored 91/100 in SuperteamNG bounty competition.",
    url: "#",
  },
  {
    name: "CLOUD DAO Governance Proposal",
    stack: ["Governance", "Writing", "Substack"],
    desc: "Full DAO governance proposal for $CLOUD token, including Substack article and promotional flyer.",
    url: "#",
  },
  {
    name: "Solana Summit KZ Promo Script",
    stack: ["Scriptwriting", "Video"],
    desc: "Promotional video script for Solana Summit Kazakhstan — structured narrative for the ecosystem event.",
    url: "#",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
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
          03 / Projects
        </span>
        <div style={{ flex: 1, height: "1px", backgroundColor: "var(--border)" }} />
      </div>

      {/* Featured */}
      <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
        {featured.map((p, i) => (
          <div
            key={i}
            style={{
              padding: "3rem 0",
              borderBottom: "1px solid var(--border)",
              display: "grid",
              gridTemplateColumns: "1fr 340px",
              gap: "4rem",
              alignItems: "start",
            }}
          >
            {/* Left */}
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "1rem" }}>
                <span
                  className="font-mono"
                  style={{ fontSize: "0.62rem", letterSpacing: "0.15em", color: "var(--text-3)", textTransform: "uppercase" }}
                >
                  {p.category}
                </span>
                <span style={{ color: "var(--border-2)", fontSize: "0.6rem" }}>·</span>
                <span
                  className="font-mono"
                  style={{ fontSize: "0.62rem", color: "var(--text-3)" }}
                >
                  {p.period}
                </span>
              </div>

              <h3
                className="font-display"
                style={{
                  fontSize: "clamp(1.4rem, 3vw, 2rem)",
                  fontWeight: 700,
                  color: "var(--text)",
                  marginBottom: "1rem",
                  letterSpacing: "-0.01em",
                }}
              >
                {p.name}
              </h3>

              <p
                className="font-mono"
                style={{ fontSize: "1.27rem", color: "var(--text-2)", lineHeight: 1.6, marginBottom: "1.5rem" }}
              >
                {p.desc}
              </p>

              <ul style={{ display: "flex", flexDirection: "column", gap: "0.4rem", marginBottom: "2rem" }}>
                {p.bullets.map((b, j) => (
                  <li
                    key={j}
                    className="font-mono"
                    style={{ fontSize: "1.16rem", color: "var(--text-3)", paddingLeft: "1rem", position: "relative" }}
                  >
                    <span style={{ position: "absolute", left: 0, color: "var(--accent)" }}>›</span>
                    {b}
                  </li>
                ))}
              </ul>

              {/* Links */}
              <div style={{ display: "flex", gap: "1rem" }}>
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono"
                  style={{
                    fontSize: "0.68rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    textDecoration: "none",
                    color: "var(--bg)",
                    backgroundColor: "var(--accent)",
                    padding: "8px 16px",
                    borderRadius: "2px",
                    transition: "opacity 0.2s",
                  }}
                  onMouseEnter={(e) => ((e.target as HTMLElement).style.opacity = "0.8")}
                  onMouseLeave={(e) => ((e.target as HTMLElement).style.opacity = "1")}
                >
                  Live site ↗
                </a>
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono"
                  style={{
                    fontSize: "0.68rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    textDecoration: "none",
                    color: "var(--text-2)",
                    backgroundColor: "transparent",
                    padding: "8px 16px",
                    border: "1px solid var(--border-2)",
                    borderRadius: "2px",
                    transition: "color 0.2s, border-color 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    (e.target as HTMLElement).style.color = "var(--text)";
                    (e.target as HTMLElement).style.borderColor = "var(--text-2)";
                  }}
                  onMouseLeave={(e) => {
                    (e.target as HTMLElement).style.color = "var(--text-2)";
                    (e.target as HTMLElement).style.borderColor = "var(--border-2)";
                  }}
                >
                  GitHub
                </a>
              </div>
            </div>

            {/* Right — stack */}
            <div
              style={{
                backgroundColor: "var(--bg-3)",
                border: "1px solid var(--border)",
                borderRadius: "4px",
                padding: "1.75rem",
              }}
            >
              <div
                className="font-mono"
                style={{ fontSize: "0.6rem", letterSpacing: "0.18em", color: "var(--text-3)", textTransform: "uppercase", marginBottom: "1rem" }}
              >
                Stack
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="font-mono"
                    style={{
                      fontSize: "0.72rem",
                      color: "var(--text-2)",
                      backgroundColor: "var(--surface)",
                      border: "1px solid var(--border-2)",
                      padding: "4px 10px",
                      borderRadius: "2px",
                    }}
                  >
                    {s}
                  </span>
                ))}
              </div>
              {/* Number */}
              <div
                className="font-display"
                style={{
                  fontSize: "5rem",
                  fontWeight: 800,
                  color: "var(--border)",
                  lineHeight: 1,
                  marginTop: "2rem",
                  letterSpacing: "-0.04em",
                }}
              >
                0{i + 1}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* More projects */}
      <div style={{ marginTop: "5rem" }}>
        <h3
          className="font-display"
          style={{ fontSize: "1rem", fontWeight: 600, color: "var(--text-2)", marginBottom: "2rem", letterSpacing: "0.02em" }}
        >
          More work
        </h3>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "1px",
            backgroundColor: "var(--border)",
            border: "1px solid var(--border)",
          }}
        >
          {more.map((p, i) => (
            <div
              key={i}
              style={{
                backgroundColor: "var(--bg)",
                padding: "1.75rem",
                transition: "background-color 0.2s",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = "var(--bg-3)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = "var(--bg)")}
            >
              <h4
                className="font-display"
                style={{ fontSize: "0.92rem", fontWeight: 600, color: "var(--text)", marginBottom: "0.5rem" }}
              >
                {p.name}
              </h4>
              <p
                className="font-mono"
                style={{ fontSize: "1.01rem", color: "var(--text-3)", lineHeight: 1.6, marginBottom: "1rem" }}
              >
                {p.desc}
              </p>
              <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="font-mono"
                    style={{ fontSize: "0.65rem", color: "var(--text-3)", border: "1px solid var(--border)", padding: "2px 8px", borderRadius: "2px" }}
                  >
                    {s}
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
