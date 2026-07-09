"use client";
import Image from "next/image";

const featured = [
  {
    name: "Tei Markets",
    category: "DeFi / Prediction Market",
    period: "2025",
    desc: "A peer-to-peer football prediction market on Solana using a constant-product AMM. Users stake SOL on match outcomes; prices update automatically via the AMM formula.",
    site: "https://tei-markets.vercel.app/",
    image: "/tei.png",
    imageAlt: "Tei Markets website preview",
  },
  {
    name: "Edged",
    category: "Circle Agent Stack × Arc Testnet",
    period: "2026",
    desc: "Financial intelligence for prediction markets. Edged scans live Polymarket order books, estimates fair odds, explains its thesis, sizes exposure with Kelly, and settles test USDC through Circle developer-controlled wallets.",
    site: "https://edged.vercel.app/",
    image: "/edged.png",
    imageAlt: "Edged website preview",
  },
  {
    name: "Immunis Protocol",
    category: "RWA Compliance / ZK",
    period: "2025",
    desc: "Privacy-preserving compliance infrastructure for tokenized real-world assets on Stellar. Immunis lets a wallet prove it satisfies a public access policy with zero-knowledge proofs, without exposing raw KYC data on-chain.",
    site: "https://immunis-protocol.vercel.app/",
    image: "/immunis.png",
    imageAlt: "Immunis Protocol website preview",
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
      className="content-section projects-section mx-auto w-full max-w-280 overflow-hidden px-5 py-20 max-[980px]:max-w-190 max-[760px]:px-4 max-[760px]:py-14"
    >
      <div className="section-label mb-10 flex items-center gap-4 max-[760px]:mb-9">
        <span className="font-mono inline-flex min-h-11 items-center px-5 text-3xl font-extrabold tracking-[0.02em] text-(--text)">
          Projects
        </span>
      </div>

      <div className="featured-projects mx-auto flex w-full flex-col gap-6">
        {featured.map((p) => (
          <article
         key={p.name}
        className="project-featured-item group mb-6 grid grid-cols-[0.85fr_1.15fr] items-center gap-12 rounded-[28px] border 
        border-(--border) p-12 transition-colors 
        hover:bg-(--tertiary)
        max-[980px]:grid-cols-1 max-[980px]:p-8 max-[760px]:gap-8 max-[760px]:p-6 bg-(--project-card-bg)">
      <div className="min-w-0 pl-2 max-[980px]:pl-0">
      <div className="project-meta mb-4 flex items-center gap-3 max-[760px]:flex-wrap max-[760px]:gap-y-1.5">
      <span className="font-mono text-[0.62rem] uppercase tracking-[0.15em] hover:text-(--text-4) text-(--text-3) font-bold">
        {p.category}
      </span>
      <br />
      <span className="text-[0.6rem] text-(--border-2)">·</span>
      <br />
      <span className="font-mono text-[0.62rem] hover:text-(--text-4) text-(--text-3) font-bold">
        {p.period}
      </span>
      <br />
    </div>
    <br />
    <h3 className="font-display project-title mb-4 text-[clamp(2rem,4vw,4rem)] font-black leading-[0.95] tracking-[-0.04em] text-(--text) wrap:anywhere max-[760px]:text-3xl">
      {p.name}
    </h3>
    <br />
    <p className="font-mono project-description mb-6 max-w-160 text-base leading-[1.7] text-(--text-2) max-[760px]:text-[0.95rem]">
      {p.desc}
    </p>
    <br/>
    <div
       className="font-mono inline-flex min-h-14 min-w-44 items-center justify-center rounded-full bg-(--accent) px-10 py-4 text-base 
            font-extrabold tracking-normal text-[#102217] no-underline shadow-[0_18px_38px_color-mix(in_srgb,var(--accent)_24%,transparent)] 
            transition-[opacity,transform] hover:-translate-y-0.5 hover:opacity-[0.88] max-[760px]:w-full">
      <a href={p.site}
      className="underline"
      >
        View Project</a>
    </div>
  </div>

  <div className="relative overflow-hidden rounded-3xl border border-(--border) bg-white shadow-[0_30px_80px_rgba(16,34,23,0.12)]">
    <div className="flex h-10 items-center gap-2 border-b border-(--border) bg-[color-mix(in_srgb,var(--surface)_86%,white)] px-4">
      <span className="size-2.5 rounded-full bg-red-400" />
      <span className="size-2.5 rounded-full bg-yellow-400" />
      <span className="size-2.5 rounded-full bg-green-400" />
      <span className="font-mono ml-3 text-[0.62rem] hover:text-(--text-4)  text-(--text-3)">
        project preview
      </span>
    </div>

    <div className="relative aspect-16/10 w-full overflow-hidden">
      {p.image ? (
        <Image
          src={p.image}
          alt={p.imageAlt}
          fill
          sizes="(max-width: 980px) 100vw, 720px"
          className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center bg-[color-mix(in_srgb,var(--surface)_78%,white)] px-8 text-center">
          <span className="font-mono text-[0.78rem] uppercase tracking-[0.14em] hover:text-(--text-4) text-(--text-3)">
            Preview image coming soon
          </span>
        </div>
      )}
       </div>
      </div>
      </article>
        ))}
      </div>
      <br />
      <br />
      <div className="mx-auto mt-16 flex w-full max-w-280 justify-center p-32 max-[760px]:px-4 hero-actions flex-wrap gap-4">
         <a href="https://github.com/outstandingvick"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono inline-flex min-h-14 min-w-44 items-center justify-center rounded-full bg-(--accent) px-10 py-4 text-base 
            font-extrabold tracking-normal text-[#102217] no-underline shadow-[0_18px_38px_color-mix(in_srgb,var(--accent)_24%,transparent)] 
            transition-[opacity,transform] hover:-translate-y-0.5 hover:opacity-[0.88] max-[760px]:w-full"
          >
             More on GitHub ↗
             </a>
      </div>

      <div className="collaboration-section mt-20 border-t-0 pb-4 pt-16 max-[760px]:mt-14 max-[760px]:pt-12">
        <div className="collaboration-heading mx-auto mb-16 max-w-190 text-center max-[760px]:mb-10">
          <h3 className="font-display mb-5 text-[clamp(1.7rem,4vw,3rem)] font-extrabold leading-[1.05] tracking-tighter text-(--text) max-[760px]:text-[1.65rem]">
            Testimonials from <span className="text-(--accent)">remote</span> collaborators
          </h3>
          <p className="font-mono text-[0.95rem] leading-[1.7] text-(--text-3) max-[760px]:text-[0.86rem] max-[760px]:leading-[1.65]">
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
                className="collaboration-card testimonial-card relative overflow-hidden rounded-[20px] border border-(--border) bg-[color-mix(in_srgb,var(--surface)_72%,transparent)] p-6"
                key={testimonial.name}
              >
                <div className="collaboration-quote-mark">”</div>
                <div className="collaboration-card-header relative z-1 mb-5 flex items-center gap-4">
                  <div>
                    <h4 className="font-display mb-1 text-[1.1rem] font-bold leading-[1.2] text-(--text)">
                      {testimonial.name}
                    </h4>
                    <p className="font-mono text-[0.78rem] text-(--text-3)">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
                <p className="font-mono collaboration-copy relative z-1 text-[0.95rem] leading-[1.75] text-(--text-2) max-[760px]:text-[0.86rem] max-[760px]:leading-[1.65]">
                  {testimonial.quote}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
    </section>
  );
}
