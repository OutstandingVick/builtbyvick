"use client";
import Image from "next/image";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const featured = [
  {
    name: "Tutela Markets",
    category: "DeFi / Prediction Market",
    period: "2026",
    desc: "A peer-to-peer football prediction market on Solana using a constant-product AMM. Users stake SOL on match outcomes; prices update automatically via the AMM formula.",
    site: "https://tutelamarkets.vercel.app/app",
    image: "/tutela.png",
    imageAlt: "Tutela Markets website preview",
    stack: ["Next.js", "TypeScript", "Solana", "Tailwind"],
  },
  {
    name: "Edged",
    category: "Circle Agent Stack × Arc Testnet",
    period: "2026",
    desc: "Financial intelligence for prediction markets. Edged scans live Polymarket order books, estimates fair odds, explains its thesis, sizes exposure with Kelly, and settles test USDC through Circle developer-controlled wallets.",
    site: "https://edged.vercel.app/",
    image: "/edged.png",
    imageAlt: "Edged website preview",
    stack: ["Next.js", "TypeScript", "Circle", "Polymarket"],
  },
  {
    name: "Immunis Protocol",
    category: "RWA Compliance / ZK",
    period: "2025",
    desc: "Privacy-preserving compliance infrastructure for tokenized real-world assets on Stellar. Immunis lets a wallet prove it satisfies a public access policy with zero-knowledge proofs, without exposing raw KYC data on-chain.",
    site: "https://immunis-protocol.vercel.app/",
    image: "/immunis.png",
    imageAlt: "Immunis Protocol website preview",
    stack: ["Next.js", "TypeScript", "Stellar", "ZK"],
  },
];

type FeaturedProject = (typeof featured)[number];

function ProjectRow({
  project,
  index,
}: {
  project: FeaturedProject;
  index: number;
}) {
  const rowRef = useRef<HTMLAnchorElement>(null);
  const previewRef = useRef<HTMLDivElement>(null);

  const onMove = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const row = rowRef.current;
    const preview = previewRef.current;
    if (!row || !preview) return;

    const rect = row.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    preview.style.left = `${x}px`;
    preview.style.top = `${y}px`;
  };

  return (
    <a
      ref={rowRef}
      href={project.site}
      target="_blank"
      rel="noopener noreferrer"
      onMouseMove={onMove}
      className="project-row group relative flex items-center justify-between gap-6 overflow-visible border-b border-(--border) px-2 no-underline transition-colors duration-200 first:border-t hover:bg-(--project-row-hover-bg) hover:text-(--project-row-hover-fg) max-[760px]:flex-col max-[760px]:items-start max-[760px]:gap-3"
    >
      <div className="flex min-w-0 items-baseline gap-5 max-[760px]:gap-3">
        <span className="font-mono shrink-0 text-[0.72rem] font-bold tracking-[0.16em] text-(--text-3) transition-colors duration-200 group-hover:text-(--project-row-hover-fg)">
          {String(index).padStart(2, "0")}
        </span>
        <h3 className="font-display m-0 text-[clamp(1.7rem,3.4vw,3.4rem)] font-extrabold leading-[1.05] tracking-[-0.04em] text-(--text) transition-colors duration-200 group-hover:text-(--project-row-hover-fg)">
          {project.name}
        </h3>
      </div>

      <div className="flex min-w-0 shrink-0 items-center gap-5 max-[760px]:w-full max-[760px]:justify-between max-[760px]:pl-9">
        <span className="font-mono text-[0.68rem] font-bold uppercase tracking-[0.14em] text-(--text-3) transition-colors duration-200 group-hover:text-(--project-row-hover-fg) max-[760px]:text-[0.58rem]">
          {project.period} — {project.stack.join(" — ")}
        </span>
        <ArrowUpRight
          size={22}
          strokeWidth={1.8}
          className="shrink-0 text-(--text-3) transition-colors duration-200 group-hover:text-(--project-row-hover-fg)"
        />
      </div>

      <div
        ref={previewRef}
        className="project-row-preview pointer-events-none absolute top-1/2 left-1/2 z-20 hidden overflow-hidden rounded-md shadow-[0_24px_60px_rgba(7,24,39,0.28)] max-[760px]:hidden min-[761px]:block"
      >
        <Image
          src={project.image}
          alt={project.imageAlt}
          fill
          sizes="352px"
          className="object-cover object-top"
        />
      </div>
    </a>
  );
}

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
      className="content-section projects-section mx-auto w-full max-w-400 overflow-visible px-6 py-20 max-[760px]:px-5 max-[760px]:py-14"
    >
      <div className="section-label mb-10 flex items-center gap-4 max-[760px]:mb-9">
        <span className="font-mono inline-flex min-h-11 items-center text-5xl font-extrabold tracking-[0.02em] text-(--text) max-[520px]:text-2xl">
          My Latest Works
        </span>
      </div>
      <br />
      <br />
      <div className="featured-projects mx-auto flex w-full flex-col">
        {featured.map((project, index) => (
          <ProjectRow key={project.name} project={project} index={index + 1} />
        ))}
      </div>
      <div className="projects-github-action mx-auto flex w-full justify-center pb-16 pt-12 max-[760px]:pb-12 max-[760px]:pt-8">
         <a href="https://github.com/outstandingvick"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono inline-flex min-h-14 w-full max-w-72 items-center justify-center gap-3 rounded-full bg-(--accent) px-8 py-4 text-base 
            font-extrabold tracking-normal text-[#0D2C54] no-underline shadow-[0_18px_38px_color-mix(in_srgb,var(--accent)_24%,transparent)] 
            transition-[opacity,transform] hover:-translate-y-0.5 hover:opacity-[0.88]"
          >
             <FaGithub aria-hidden="true" className="text-xl" />
             <span>More on GitHub</span>
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
