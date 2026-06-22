"use client";
import { useState } from "react";

const work = [
  {
    role: "Ecosystem Researcher & Technical Writer",
    org: "SuperteamNG",
    period: "2023 — Present",
    location: "Lagos, Nigeria",
    bullets: [
      "Produce long-form technical articles, research reports, and content bounty submissions across the Solana ecosystem.",
      "Built SolScout (ElizaOS v2 DeFi intelligence agent, Nosana GPU deployed) and AgentOracle (autonomous AI prediction market trader on Polymarket).",
      "Scored 91/100 on the Xara writing bounty; consistently placing in SuperteamNG content competitions.",
    ],
  },
  {
    role: "Frontend Developer (Freelance)",
    org: "Independent",
    period: "2022 — Present",
    location: "Remote",
    bullets: [
      "Built and deployed Tei (tei.markets) — a Solana-based peer-to-peer football prediction market using a constant-product AMM on devnet.",
      "Developed an LP Intelligence Dashboard (React) for Meteora DLMM pool tracking and strategy analysis.",
      "Shipped UI and frontend experiences for multiple Web3 protocols including Seasons DeFi, Xpend, and FossaPay.",
    ],
  },
  {
    role: "Turbine Cohort Graduate",
    org: "Solana Foundation",
    period: "2024",
    location: "Online",
    bullets: [
      "Completed the intensive Turbine builder program, gaining deep understanding of Solana program architecture, Anchor framework, and on-chain mechanics.",
      "Built and deployed programs to devnet as part of cohort assignments.",
    ],
  },
];

const certs = [
  {
    title: "Solana Turbine Program",
    issuer: "Solana Foundation",
    year: "2024",
    desc: "Intensive cohort for Solana builders covering programs, PDAs, CPIs, and full-stack dApp development.",
  },
  {
    title: "Project Sinan Research Fellowship",
    issuer: "SuperteamNG",
    year: "2025",
    desc: "Structured research mentorship covering user research methodology, study design, ethics, and usability testing.",
  },
];

export default function Experience() {
  const [tab, setTab] = useState<"work" | "certs">("work");

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

      {/* Tabs */}
      <div className="experience-tabs" style={{ display: "flex", gap: "0", marginBottom: "3.5rem", borderBottom: "1px solid var(--border)" }}>
        {(["work", "certs"] as const).map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className="font-mono"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "10px 20px",
              fontSize: "0.68rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: tab === t ? "var(--accent)" : "var(--text-3)",
              borderBottom: tab === t ? "2px solid var(--accent)" : "2px solid transparent",
              marginBottom: "-1px",
              transition: "color 0.2s",
            }}
          >
            {t === "work" ? "Work" : "Certifications"}
          </button>
        ))}
      </div>

      {/* Work list */}
      {tab === "work" && (
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
                  className="font-display"
                  style={{ fontSize: "1.05rem", fontWeight: 600, color: "var(--text)", marginBottom: "4px" }}
                >
                  {item.role}
                </div>
                <div
                  className="font-mono"
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
      )}

      {/* Certs list */}
      {tab === "certs" && (
        <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
          {certs.map((item, i) => (
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
              <div>
                <div
                  className="font-mono"
                  style={{ fontSize: "0.72rem", color: "var(--text-2)" }}
                >
                  {item.year}
                </div>
              </div>
              <div>
                <div
                  className="font-display"
                  style={{ fontSize: "1.05rem", fontWeight: 600, color: "var(--text)", marginBottom: "4px" }}
                >
                  {item.title}
                </div>
                <div
                  className="font-mono"
                  style={{ fontSize: "0.72rem", color: "var(--accent)", marginBottom: "1rem", letterSpacing: "0.08em" }}
                >
                  @ {item.issuer}
                </div>
                <p
                  className="font-mono experience-body"
                  style={{ fontSize: "1.23rem", color: "var(--text-2)", lineHeight: 1.6 }}
                >
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
