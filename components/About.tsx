"use client";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  SiJavascript,
  SiTypescript,
  SiRust,
  SiReact,
  SiNextdotjs,
  SiAngular,
  SiVuedotjs,
  SiSvelte,
  SiDjango,
  SiNodedotjs,
  SiExpress,
  SiBootstrap,
  SiHtml5,
  SiTailwindcss,
  SiCss,
  SiFigma,
  SiVercel,
} from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { IconType } from "react-icons";

const skillIcons: Record<string, IconType> = {
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  Rust: SiRust,
  React: SiReact,
  "Next.js": SiNextdotjs,
  "Node.js": SiNodedotjs,
  "Express.js": SiExpress,
  "Angular": SiAngular,
  "Vue.js": SiVuedotjs,
  "Svelte": SiSvelte,
  "Django": SiDjango,
  "Tailwind CSS": SiTailwindcss,
  HTML: SiHtml5,
  Bootstrap: SiBootstrap,
  CSS: SiCss,
  "Git / GitHub": FaGithub,
  Figma: SiFigma,
  Vercel: SiVercel,
};

const skillColors: Record<string, string> = {
  JavaScript: "#F7DF1E",
  TypeScript: "#3178C6",
  Rust: "#000000",
  React: "#61DAFB",
  "Next.js": "#000000",
  "Node.js": "#339933",
  Angular: "#DD0031",
  "Vue.js": "#4FC08D",
  Svelte: "#FF3E00",
  Django: "#092E20",
  "Tailwind CSS": "#06B6D4",
  HTML: "#E34F26",
  "Git / GitHub": "#181717",
  Figma: "#F24E1E",
  Vercel: "#000000",
};

import Image from "next/image";

const skills: Record<string, string[]> = {
  "Tech Stack & Tools": ["JavaScript", "TypeScript", "Rust", "React", "Next.js", "Node.js", "Express.js", "Angular", "Vue.js", "Svelte", "Django", "Bootstrap", "Tailwind CSS", "CSS", "HTML", "Git / GitHub", "Figma", "Vercel"]
  
};

const aboutPhotos = {
  first: [
    { src: "/about-story-02.jpg", alt: "Victor speaking during a Superteam Nigeria gathering" },
    { src: "/about-story-01.jpg", alt: "Victor collaborating with builders at a Superteam Nigeria event" },
    { src: "/about-story-03.jpg", alt: "Victor sharing an idea with the Superteam Nigeria community" },
  ],
  second: [
    { src: "/about-story-04.jpg", alt: "Victor presenting a workshop brief" },
    { src: "/about-story-05.jpg", alt: "Victor facilitating a community workshop" },
    { src: "/about-story-06.jpg", alt: "Victor speaking and smiling during a workshop" },
  ],
};

function StoryCollage({
  photos,
  variant,
}: {
  photos: { src: string; alt: string }[];
  variant: "first" | "second";
}) {
  return (
    <div className={`about-collage about-collage-${variant}`}>
      <span className="about-collage-grid" aria-hidden="true" />
      <svg className="about-collage-route" viewBox="0 0 240 155" aria-hidden="true">
        <path d="M18 20 C52 2 83 16 77 43 C70 73 117 69 144 44 C174 18 212 31 221 61" />
        <path d="M214 54 L222 62 L214 68" />
        <rect x="12" y="16" width="8" height="8" rx="1" />
        <rect x="217" y="57" width="8" height="8" rx="1" />
      </svg>
      <div className="about-photo-stack">
        {photos.map((photo, index) => (
          <figure key={photo.src} className={`about-photo about-photo-${index + 1}`}>
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(max-width: 760px) 48vw, 260px"
              className="object-cover"
            />
          </figure>
        ))}
      </div>
    </div>
  );
}

function SkillCarousel({ items }: { items: string[] }) {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollByCard = (direction: -1 | 1) => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const card = scroller.querySelector<HTMLElement>(".skill-card");
    const gap = 20;
    const distance = (card?.offsetWidth ?? 172) + gap;
    scroller.scrollBy({ left: direction * distance, behavior: "smooth" });
  };

  return (
    <div className="skill-carousel relative">
      <button
        type="button"
        onClick={() => scrollByCard(-1)}
        aria-label="Scroll skills left"
        className="skill-carousel-arrow absolute top-1/2 left-0 z-2 flex size-11 -translate-x-1/3 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-(--border) text-(--text-2) transition-colors hover:border-(--accent) hover:text-(--accent)"
      >
        <ChevronLeft size={20} />
      </button>
      <div
        ref={scrollerRef}
        className="skill-list flex snap-x snap-mandatory gap-5 overflow-x-auto overscroll-x-contain px-1 pb-2 max-[360px]:gap-3"
      >
        {items.map((skill) => {
          const Icon = skillIcons[skill];

          return (
            <div
              key={skill}
              className="skill-card flex min-h-36 w-43 shrink-0 snap-start flex-col items-center justify-center gap-4 rounded-3xl
                         border border-(--border) bg-(--project-card-bg) px-3 py-5
                         text-center shadow-[0_20px_50px_rgba(13,44,84,0.06)] transition-[transform,box-shadow,border-color]
                         hover:-translate-y-1 hover:border-(--accent) hover:shadow-[0_26px_70px_rgba(13,44,84,0.11)] max-[520px]:min-h-30 max-[520px]:w-35 max-[520px]:rounded-2xl"
            >
              {Icon ? (
                <Icon className="text-[3rem] max-[520px]:text-[2.35rem]" style={{ color: skillColors[skill] ?? "var(--text)" }} />
              ) : (
                <span className="font-mono text-[2.8rem] font-black text-(--text)">
                  {skill.slice(0, 1)}
                </span>
              )}
              <span className="font-mono max-w-full text-[0.88rem] font-bold leading-tight text-(--text) max-[520px]:text-[0.78rem]">
                {skill}
              </span>
            </div>
          );
        })}
      </div>
      <button
        type="button"
        onClick={() => scrollByCard(1)}
        aria-label="Scroll skills right"
        className="skill-carousel-arrow absolute top-1/2 right-0 z-2 flex size-11 translate-x-1/3 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-(--border) text-(--text-2) transition-colors hover:border-(--accent) hover:text-(--accent)"
      >
        <ChevronRight size={20} />
      </button>
    </div>
  );
}

export default function About() {
  return (
    <section
      id="about"
      className="content-section about-section mx-auto w-full max-w-400 px-6 pb-20 pt-10 max-[760px]:px-5 max-[760px]:pb-14 max-[760px]:pt-8"
    >
      <div className="section-label mb-10 flex items-center gap-4 max-[760px]:mb-9">
        <span className="font-mono inline-flex min-h-11 items-center text-5xl italic font-extrabold tracking-[0.02em] text-(--text) max-[520px]:text-2xl">
          Who I am (and why that matters)
        </span>
      </div>
      <br />
      <br />
      <div className="about-story">
        <div className="about-story-row">
          <StoryCollage photos={aboutPhotos.first} variant="first" />
          <div className="about-story-copy font-mono">
            <p>
              I’m a frontend engineer and product builder focused on creating responsive web products, developer-facing tools, and digital experiences that combine strong engineering with clear product thinking.
            </p>
            <p>
              Recently, I’ve worked across Web3, fintech, AI agents, payments, prediction markets, and blockchain infrastructure, taking early-stage ideas from research and technical validation through product design, frontend development, and working prototypes.
            </p>
          </div>
        </div>

        <div className="about-story-divider" aria-hidden="true" />

        <div className="about-story-row about-story-row-reverse">
          <div className="about-story-copy font-mono">
            <p>
              Alongside engineering, I work as a technical researcher and writer, exploring DeFi, stablecoins, payments, Solana infrastructure, and emerging crypto products. That research shapes how I build—helping me understand users, validate assumptions, and turn complex systems into simpler experiences.
            </p>
            <p>
              Outside of software, I’m deeply involved in developer and Web3 communities through Superteam Nigeria. Working across community building, technical education, events, content, and ecosystem initiatives has shown me how products are built, communicated, distributed, and ultimately adopted.
            </p>
          </div>
          <StoryCollage photos={aboutPhotos.second} variant="second" />
        </div>
      </div>
      <br/>
      <br/>
      <br/>
      <div className="skills-grid mt-24 max-[760px]:mt-16">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category} className="skill-group">
            <div className="font-mono mb-6 font-bold text-3xl italic uppercase tracking-[0.14em] text-(--accent-warm) max-[760px]:text-2xl max-[520px]:text-xl">
              {category}
            </div>
            <br />
            <SkillCarousel items={items} />
          </div>
        ))}
      </div>
      <br/>
      <br/>
      <br/>
    </section>
  );
}
