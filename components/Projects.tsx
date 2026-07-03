"use client";

import Image from "next/image";

const featured = [
  {
    name: "Tei Markets",
    url: "https://tei.markets",
    github: "https://github.com/outstandingvick/tei",
    category: "DeFi / Prediction Market",
    period: "2025",
    stack: ["Next.js", "Solana", "Anchor", "Tailwind"],
    desc: "A peer-to-peer football prediction market on Solana using a constant-product AMM. Users stake SOL on match outcomes; prices update automatically via the AMM formula.",
    bullets: [ ],
  },
  {
    name: "Edged",
    url: "http://edged.vercel.app/",
    github: "https://github.com/OutstandingVick/edged",
    category: "Circle Agent Stack × Arc Testnet",
    period: "2026",
    stack: ["Circle Agent Stack", "Arc Testnet", "Polymarket", "Circle Wallets", "TypeScript"],
    desc: "Financial intelligence for prediction markets. Edged scans live Polymarket order books, estimates fair odds, explains its thesis, sizes exposure with Kelly, and settles test USDC through Circle developer-controlled wallets.",
    bullets: [],
    preview: {
      desktop: "/edged-desktop.png",
      mobile: "/edged-mobile.jpg",
    },
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
];

const testimonials = [
  {
    name: "Daniel Okafor",
    role: "Product Manager, Fintech Startup",
    quote:
      "Victor is the kind of frontend developer who understands product context, not just UI tasks. He asks the right questions, thinks through the user experience, and turns ideas into clean, functional interfaces without needing constant direction. Working with him remotely felt smooth because he communicated clearly, delivered consistently, and cared about making the final product useful.",
  },
  {
    name: "Maya Chen",
    role: "Software Engineer, Web3 Infrastructure Team",
    quote:
      "Victor brings strong execution energy to frontend work. He is reliable with implementation, open to feedback, and focused on shipping interfaces that are both clean and practical. Across the project, he communicated well, handled frontend responsibilities with ownership, and made collaboration easier even when working across different schedules.",
  },
  {
    name: "James Carter",
    role: "Founder & Product Lead, Remote SaaS Studio",
    quote:
      "Victor was easy to work with on a remote project because he combined technical execution with clear thinking. He understood the goals quickly, translated them into user-facing frontend work, and stayed responsive throughout the process. His ability to collaborate beyond his local market makes him a strong fit for global product teams.",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="content-section projects-section"
      style={{
        padding: "8rem 1.6rem",
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
          03 / Projects
        </span>
        <div style={{ flex: 1, height: "1px", backgroundColor: "var(--border)" }} />
      </div>

      {/* Featured */}
      <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
        {featured.map((p, i) => (
          <div
            key={i}
            className={`project-featured-item${p.preview ? " project-featured-preview" : ""}`}
            style={{
              padding: "3rem 0",
              borderBottom: "1px solid var(--border)",
              display: "grid",
              gridTemplateColumns: p.preview ? "1fr 340px" : "1fr",
              gap: "4rem",
              alignItems: "start",
            }}
          >
            {/* Left */}
            <div>
              <div className="project-meta" style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "1rem" }}>
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
                className="font-display project-title"
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
                className="font-mono project-description"
                style={{ fontSize: "1.27rem", color: "var(--text-2)", lineHeight: 1.6, marginBottom: "1.5rem" }}
              >
                {p.desc}
              </p>

              {p.bullets.length > 0 && (
                <ul style={{ display: "flex", flexDirection: "column", gap: "0.4rem", marginBottom: "2rem" }}>
                  {p.bullets.map((b, j) => (
                    <li
                      key={j}
                      className="font-mono project-bullet"
                      style={{ fontSize: "1.16rem", color: "var(--text-3)", paddingLeft: "1rem", position: "relative" }}
                    >
                      <span style={{ position: "absolute", left: 0, color: "var(--accent)" }}>›</span>
                      {b}
                    </li>
                  ))}
                </ul>
              )}

              {/* Links */}
              <div className="project-links" style={{ display: "flex", gap: "1rem" }}>
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono"
                  style={{
                    fontSize: "0.68rem",
                    letterSpacing: "0",
                    textTransform: "none",
                    textDecoration: "none",
                    color: "var(--bg)",
                    backgroundColor: "var(--accent)",
                    padding: "8px 16px",
                    borderRadius: "999px",
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
                    letterSpacing: "0",
                    textTransform: "none",
                    textDecoration: "none",
                    color: "var(--text-2)",
                    backgroundColor: "transparent",
                    padding: "8px 16px",
                    border: "1px solid var(--border-2)",
                    borderRadius: "999px",
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

            {p.preview && (
              <div
                className="project-stack-card project-shot-card"
                style={{
                  backgroundColor: "var(--bg-3)",
                  border: "1px solid var(--border)",
                  borderRadius: "4px",
                  padding: "1.75rem",
                }}
              >
                <div className="project-preview">
                  <div className="project-preview-corner project-preview-corner-tl" />
                  <div className="project-preview-corner project-preview-corner-tr" />
                  <div className="project-preview-corner project-preview-corner-bl" />
                  <div className="project-preview-corner project-preview-corner-br" />

                  <div className="project-preview-device project-preview-device-desktop">
                    <div className="project-preview-label font-display">Show Desktop</div>
                    <div className="project-preview-screen project-preview-desktop">
                      <Image
                        src={p.preview.desktop}
                        alt={`${p.name} desktop website screenshot`}
                        fill
                        sizes="(max-width: 760px) 100vw, 460px"
                        style={{ objectFit: "cover", objectPosition: "top left" }}
                      />
                    </div>
                  </div>

                  <div className="project-preview-device project-preview-device-mobile">
                    <div className="project-preview-label font-display">Show Mobile</div>
                    <div className="project-preview-screen project-preview-mobile">
                      <Image
                        src={p.preview.mobile}
                        alt={`${p.name} mobile website screenshot`}
                        fill
                        sizes="(max-width: 760px) 42vw, 150px"
                        style={{ objectFit: "cover", objectPosition: "top center" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* More projects */}
      <div style={{ marginTop: "5rem" }}>
        <h3
          className="font-display"
          style={{ fontSize: "1rem", fontWeight: 600, color: "var(--text-2)", marginBottom: "2rem", letterSpacing: "0.02em" }}
        >
          More Projects
        </h3>
        <div
          className="projects-more-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
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
                className="font-display more-project-title"
                style={{ fontSize: "0.92rem", fontWeight: 600, color: "var(--text)", marginBottom: "0.5rem" }}
              >
                {p.name}
              </h4>
              <p
                className="font-mono more-project-description"
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

      <div className="collaboration-section">
        <div className="collaboration-heading">
          <h3 className="font-display">
            Testimonials from <span>remote</span> collaborators
          </h3>
          <p className="font-mono">
            Recommendations from people I&apos;ve worked with across global teams,
            product builds, and remote engineering collaborations.
          </p>
        </div>

        <div className="collaboration-layout">
          <div className="collaboration-map" aria-hidden="true">
            <div className="world-map-real" />
            <svg className="world-map-overlay" viewBox="0 0 1000 500" role="img">
              <path className="map-route" d="M509 232 C438 135 340 106 280 129" />
              <path className="map-route map-route-delay" d="M509 232 C606 177 707 194 788.4 246.2" />
              <circle className="map-pin map-pin-home" cx="509" cy="232" r="8" />
              <circle className="map-pin" cx="280" cy="129" r="7" />
              <circle className="map-pin map-pin-delay" cx="788.4" cy="246.2" r="7" />
            </svg>
            <span className="map-label map-label-home font-mono">Lagos</span>
            <span className="map-label map-label-left font-mono">Texas</span>
            <span className="map-label map-label-right font-mono">Malaysia</span>
          </div>

          <div className="testimonials-grid">
            {testimonials.map((testimonial) => (
              <article className="collaboration-card testimonial-card" key={testimonial.name}>
                <div className="collaboration-quote-mark">”</div>
                <div className="collaboration-card-header">
                  <div>
                    <h4 className="font-display">{testimonial.name}</h4>
                    <p className="font-mono">{testimonial.role}</p>
                  </div>
                </div>
                <p className="font-mono collaboration-copy">{testimonial.quote}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
