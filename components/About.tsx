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

export default function About() {
  return (
    <section
      id="about"
      className="content-section about-section mx-auto w-full max-w-280 px-6 py-20 max-[980px]:max-w-190 max-[760px]:px-4 max-[760px]:py-14"
    >
      <div className="section-label mb-10 flex items-center gap-4 max-[760px]:mb-9">
        <span className="font-mono inline-flex min-h-11 items-center text-3xl font-extrabold tracking-[0.02em] text-(--text) max-[520px]:text-2xl">
          About Me
        </span>
      </div>
      <div className="about-grid grid grid-cols-[0.9fr_1.1fr] items-start gap-16 max-[980px]:grid-cols-1 max-[980px]:gap-10">
        <div className="portrait-column flex w-full max-w-120 flex-col gap-8 max-[980px]:mx-auto max-[980px]:max-w-100 max-[760px]:max-w-70">
          <div className="portrait-stamp w-full">
            <div className="portrait-stamp-inner relative aspect-square w-full overflow-hidden bg-(--surface)">
              <Image
                src="/vic-prof.jpg"
                alt="Portrait of Victor Ogbonna"
                fill
                sizes="(max-width: 900px) 100vw, 480px"
                className="object-cover object-[50%_36%]"
              />
            </div>
          </div>
        </div>

        <div>
          <h2 className="font-display section-heading mb-7 text-5xl font-bold leading-[1.1] tracking-[-0.02em] text-(--text) max-[1100px]:text-4xl max-[760px]:text-[1.75rem] max-[520px]:text-2xl">
            Building at the <span className="font-serif italic text-(--accent)">
              intersection
            </span>{" "}
            of code, & research.
          </h2>
          <div className="font-mono about-copy flex flex-col gap-5 text-lg leading-[1.75] text-(--text-2) max-[760px]:text-base max-[520px]:text-[0.95rem]">
            <p>
              I&apos;m Victor, a frontend engineer focused on creating responsive
              and scalable digital experiences. I blend research-driven thinking
              with hands-on development to build products that are both
              functional and impactful.
            </p>
            <p>
              I&apos;m currently strengthening my software engineering skills
              through continuous learning and hands-on project development.
            </p>
          </div>
        </div>
      </div>
      <br />
    <br />
      <div className="skills-grid mt-16 grid gap-6 max-[760px]:mt-12">
  {Object.entries(skills).map(([category, items]) => (
    <div key={category} className="skill-group">
      <div className="font-mono mb-6 font-bold text-3xl italic uppercase tracking-[0.14em] text-(--accent-warm) max-[760px]:text-2xl max-[520px]:text-xl">
        {category}
      </div>
      <div className="skill-list grid grid-cols-6 gap-5 max-[1100px]:grid-cols-4 max-[760px]:grid-cols-3 max-[520px]:grid-cols-2 max-[360px]:gap-3">
        {items.map((skill) => {
          const Icon = skillIcons[skill];
          

          return (
            <div
              key={skill}
              className="skill-card flex min-h-36 min-w-0 flex-col items-center justify-center gap-4 rounded-3xl 
                         border border-(--border) bg-(--project-card-bg) px-3 py-5 
                         text-center shadow-[0_20px_50px_rgba(13,44,84,0.06)] transition-[transform,box-shadow,border-color] 
                         hover:-translate-y-1 hover:border-(--accent) hover:shadow-[0_26px_70px_rgba(13,44,84,0.11)] max-[520px]:min-h-30 max-[520px]:rounded-2xl"
            >
              {Icon ? (
                <Icon className="text-[3rem] max-[520px]:text-[2.35rem]" style={{ color: skillColors[skill] ?? "var(--text)" }}
/>
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
    </div>
  ))}
    </div>
    <br />
    <br />
    <br />
    </section>
  );
}
