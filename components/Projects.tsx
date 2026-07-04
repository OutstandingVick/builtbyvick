"use client";

const featured = [
  {
    name: "Tei Markets",
    category: "DeFi / Prediction Market",
    period: "2025",
    desc: "A peer-to-peer football prediction market on Solana using a constant-product AMM. Users stake SOL on match outcomes; prices update automatically via the AMM formula.",
    bullets: [],
  },
  {
    name: "Edged",
    category: "Circle Agent Stack × Arc Testnet",
    period: "2026",
    desc: "Financial intelligence for prediction markets. Edged scans live Polymarket order books, estimates fair odds, explains its thesis, sizes exposure with Kelly, and settles test USDC through Circle developer-controlled wallets.",
    bullets: [],
  },
  {
    name: "Immunis Protocol",
    category: "RWA Compliance / ZK",
    period: "2025",
    desc: "Privacy-preserving compliance infrastructure for tokenized real-world assets on Stellar. Immunis lets a wallet prove it satisfies a public access policy with zero-knowledge proofs, without exposing raw KYC data on-chain.",
    bullets: [
      "Generate a ZK eligibility proof against public RWA access policies",
      "Mint a reusable Immunis access pass without revealing age, jurisdiction, or investor status",
      "Access a gated Stellar RWA vault while keeping sensitive identity facts private",
    ],
  },
];

const more = [
  {
    name: "SolScout",
    stack: ["ElizaOS v2", "Nosana GPU", "TypeScript"],
    desc: "DeFi intelligence agent deployed on Nosana GPUs. Surfaces protocol data from across the Solana ecosystem for the Nosana × ElizaOS Builders Challenge.",
  },
  {
    name: "Xara Article — \"Money at the Speed of Conversation\"",
    stack: ["Technical Writing", "Research"],
    desc: "Long-form article on Xara (WhatsApp-native conversational banking on Solana). Scored 91/100 in SuperteamNG bounty competition.",
  },
  {
    name: "CLOUD DAO Governance Proposal",
    stack: ["Governance", "Writing", "Substack"],
    desc: "Full DAO governance proposal for $CLOUD token, including Substack article and promotional flyer.",
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
      className="content-section projects-section mx-auto max-w-[1100px] px-[1.6rem] py-32 max-[980px]:max-w-[760px] max-[760px]:px-[0.8rem] max-[760px]:py-16"
    >
      <div className="section-label mb-10 flex items-center gap-4 max-[760px]:mb-9">
        <span className="font-mono inline-flex min-h-16 items-center rounded-full border border-[var(--border-2)] bg-[color-mix(in_srgb,var(--surface)_62%,transparent)] px-[1.7rem] text-[1.44rem] font-extrabold tracking-[0.02em] text-[var(--text)]">
          03 / Projects
        </span>
      </div>

      <div className="flex flex-col">
        {featured.map((p) => (
          <article
            key={p.name}
            className="project-featured-item mb-5 grid grid-cols-1 items-start gap-16 rounded-[28px] border border-[var(--border)] bg-[color-mix(in_srgb,var(--surface)_70%,transparent)] p-8 max-[760px]:gap-10 max-[760px]:p-8"
          >
            <div>
              <div className="project-meta mb-4 flex items-center gap-3 max-[760px]:flex-wrap max-[760px]:gap-y-1.5">
                <span className="font-mono text-[0.62rem] uppercase tracking-[0.15em] text-[var(--text-3)]">
                  {p.category}
                </span>
                <span className="text-[0.6rem] text-[var(--border-2)]">·</span>
                <span className="font-mono text-[0.62rem] text-[var(--text-3)]">
                  {p.period}
                </span>
              </div>

              <h3 className="font-display project-title mb-4 text-[clamp(1.4rem,3vw,2rem)] font-bold tracking-[-0.01em] text-[var(--text)] [overflow-wrap:anywhere] max-[760px]:text-base max-[760px]:leading-[1.3]">
                {p.name}
              </h3>

              <p className="font-mono project-description mb-6 text-base leading-[1.6] text-[var(--text-2)] max-[760px]:text-[0.95rem] max-[760px]:leading-[1.65]">
                {p.desc}
              </p>

              {p.bullets.length > 0 && (
                <ul className="mb-8 flex flex-col gap-1.5">
                  {p.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="font-mono project-bullet relative pl-4 text-[0.92rem] leading-[1.55] text-[var(--text-3)] max-[760px]:text-[0.86rem]"
                    >
                      <span className="absolute left-0 text-[var(--accent)]">›</span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              )}

              <div className="project-links flex gap-4 max-[760px]:flex-col">
                <a
                  href="https://github.com/outstandingvick"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono inline-flex min-h-12 items-center justify-center rounded-full bg-[var(--accent)] px-4 py-2 text-[0.68rem] font-extrabold tracking-normal text-[#102217] no-underline shadow-[0_12px_30px_color-mix(in_srgb,var(--accent)_20%,transparent)] transition-opacity hover:opacity-80 max-[760px]:w-full"
                >
                  GitHub ↗
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-20">
        <h3 className="font-display mb-8 text-base font-semibold tracking-[0.02em] text-[var(--text-2)]">
          More Projects
        </h3>
        <div className="projects-more-grid grid grid-cols-3 gap-4 max-[980px]:grid-cols-1">
          {more.map((p) => (
            <article
              key={p.name}
              className="rounded-[28px] border border-[var(--border)] bg-[color-mix(in_srgb,var(--surface)_72%,transparent)] p-7 transition-colors hover:bg-[var(--bg-3)]"
            >
              <h4 className="font-display more-project-title mb-2 text-[0.92rem] font-semibold text-[var(--text)] max-[760px]:text-base max-[760px]:leading-[1.3]">
                {p.name}
              </h4>
              <p className="font-mono more-project-description mb-4 text-[0.9rem] leading-[1.6] text-[var(--text-3)] max-[760px]:text-[0.84rem]">
                {p.desc}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {p.stack.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono rounded-sm border border-[var(--border)] px-2 py-0.5 text-[0.65rem] text-[var(--text-3)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="collaboration-section mt-24 border-t-0 pb-4 pt-20 max-[760px]:mt-16 max-[760px]:pt-14">
        <div className="collaboration-heading mx-auto mb-16 max-w-[760px] text-center max-[760px]:mb-10">
          <h3 className="font-display mb-5 text-[clamp(1.7rem,4vw,3rem)] font-extrabold leading-[1.05] tracking-[-0.05em] text-[var(--text)] max-[760px]:text-[1.65rem]">
            Testimonials from <span className="text-[var(--accent)]">remote</span> collaborators
          </h3>
          <p className="font-mono text-[0.95rem] leading-[1.7] text-[var(--text-3)] max-[760px]:text-[0.86rem] max-[760px]:leading-[1.65]">
            Recommendations from people I&apos;ve worked with across global teams,
            product builds, and remote engineering collaborations.
          </p>
        </div>

        <div className="collaboration-layout grid grid-cols-1 items-center gap-8 max-[980px]:gap-12">
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

          <div className="testimonials-grid grid grid-cols-3 gap-4 max-[980px]:grid-cols-2 max-[760px]:grid-cols-1">
            {testimonials.map((testimonial) => (
              <article
                className="collaboration-card testimonial-card relative overflow-hidden rounded-[28px] border border-[var(--border)] bg-[color-mix(in_srgb,var(--surface)_72%,transparent)] p-6"
                key={testimonial.name}
              >
                <div className="collaboration-quote-mark">”</div>
                <div className="collaboration-card-header relative z-[1] mb-5 flex items-center gap-4">
                  <div>
                    <h4 className="font-display mb-1 text-[1.1rem] font-bold leading-[1.2] text-[var(--text)]">
                      {testimonial.name}
                    </h4>
                    <p className="font-mono text-[0.78rem] text-[var(--text-3)]">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
                <p className="font-mono collaboration-copy relative z-[1] text-[0.95rem] leading-[1.75] text-[var(--text-2)] max-[760px]:text-[0.86rem] max-[760px]:leading-[1.65]">
                  {testimonial.quote}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
