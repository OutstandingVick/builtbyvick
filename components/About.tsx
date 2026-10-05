"use client";
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
  TypeScript: "#5FA7F3",
  Rust: "#F8FBFF",
  React: "#61DAFB",
  "Next.js": "#F8FBFF",
  "Node.js": "#68C550",
  "Express.js": "#F8FBFF",
  Angular: "#DD0031",
  "Vue.js": "#4FC08D",
  Svelte: "#FF3E00",
  Django: "#5FD2A1",
  Bootstrap: "#A77BF3",
  "Tailwind CSS": "#06B6D4",
  HTML: "#E34F26",
  CSS: "#63A8F5",
  "Git / GitHub": "#F8FBFF",
  Figma: "#F24E1E",
  Vercel: "#F8FBFF",
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

function SkillMarquee({ items }: { items: string[] }) {
  const renderItems = (copy: "primary" | "duplicate") =>
    items.map((skill) => {
      const Icon = skillIcons[skill];

      return (
        <div key={`${copy}-${skill}`} className="skill-marquee-item">
          {Icon ? (
            <Icon
              className="skill-marquee-icon"
              aria-hidden="true"
              style={{ color: skillColors[skill] ?? "var(--supporting-contrast)" }}
            />
          ) : (
            <span className="skill-marquee-fallback" aria-hidden="true">
              {skill.slice(0, 1)}
            </span>
          )}
          <span>{skill}</span>
        </div>
      );
    });

  return (
    <div className="skill-marquee" role="region" aria-label="Technology stack and tools">
      <div className="skill-marquee-track">
        <div className="skill-marquee-group">{renderItems("primary")}</div>
        <div className="skill-marquee-group" aria-hidden="true">
          {renderItems("duplicate")}
        </div>
      </div>
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
        <span className="section-title inline-flex min-h-11 items-center text-5xl text-(--text) max-[520px]:text-4xl">
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
            <div className="skill-group-title font-mono">
              {category}
            </div>
            <SkillMarquee items={items} />
          </div>
        ))}
      </div>
      <br/>
      <br/>
      <br/>
    </section>
  );
}
