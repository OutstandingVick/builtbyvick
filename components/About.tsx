"use client";
import {
  SiJavascript,
  SiTypescript,
  SiRust,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiHtml5,
  // SiCss3,
  SiFigma,
  SiVercel,
  SiNotebooklm,
} from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { IconType } from "react-icons";

const skillIcons: Record<string, IconType> = {
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  Rust: SiRust,
  React: SiReact,
  "Next.js": SiNextdotjs,
  "Tailwind CSS": SiTailwindcss,
  "HTML/CSS": SiHtml5,
  "Git / GitHub": FaGithub,
  Figma: SiFigma,
  Vercel: SiVercel,
  NotebookLM: SiNotebooklm,
};

import Image from "next/image";

const skills: Record<string, string[]> = {
  "Tech Stack": ["JavaScript", "TypeScript", "Rust", "React", "Next.js", "Tailwind CSS", "HTML/CSS"],
  Tools: ["Git / GitHub", "Figma", "Vercel", "NotebookLM"],
};

export default function About() {
  return (
    <section
      id="about"
      className="content-section about-section mx-auto w-full max-w-280 px-5 py-20 max-[980px]:max-w-190 max-[760px]:px-4 max-[760px]:py-14"
    >
      <div className="section-label mb-10 flex items-center gap-4 max-[760px]:mb-9">
        <span className="font-mono inline-flex min-h-11 px-5 text-3xl font-extrabold tracking-[0.02em] text-(--text)">
          About Me
        </span>
      </div>
      <br />
      <div className="about-grid grid grid-cols-[0.9fr_1.1fr] items-start gap-16 max-[980px]:grid-cols-1 max-[980px]:gap-10">
        <div className="portrait-column flex flex-col gap-8 max-[980px]:mx-auto max-[980px]:w-full max-[980px]:max-w-140 max-[760px]:max-w-60 max-[380px]:max-w-60">
          <div className="relative aspect-square w-full overflow-hidden rounded-[20px] bg-(--surface) shadow-[0_24px_70px_rgba(0,0,0,0.14)]">
            <Image
              src="/victor-portrait.jpg"
              alt="Portrait of Victor Ogundimu"
              fill
              sizes="(max-width: 900px) 100vw, 480px"
              className="object-cover object-[50%_36%]"
            />
          </div>
        </div>

        <div>
          <h2 className="font-display section-heading mb-8 text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.1] tracking-[-0.02em] text-(--text) max-[760px]:text-[1.65rem] max-[760px]:leading-[1.15] max-[520px]:text-2xl">
            Building at the <span className="font-serif italic text-(--accent)">
              intersection
            </span>{" "}
            of code, & research.
          </h2>
          <br />
          <div className="font-mono about-copy flex flex-col gap-4 text-base leading-[1.7] text-(--text-2) max-[760px]:text-[0.95rem] max-[760px]:leading-[1.65]">
            <p className="text-2xl">
              I&apos;m Victor, a frontend engineer focused on creating responsive
              and scalable digital experiences. I blend research-driven thinking
              with hands-on development to build products that are both
              functional and impactful.
            </p>
            <p className="text-2xl">
              I&apos;m currently strengthening my software engineering skills
              through continuous learning and hands-on project development.
            </p>
          </div>
          <br />
          <br />
        </div>
      </div>
      <br />
      <div className="skills-grid mt-11 grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-6 max-[760px]:grid-cols-2 max-[520px]:grid-cols-1">
  {Object.entries(skills).map(([category, items]) => (
    <div key={category} className="skill-group">
      <div className="font-mono mb-4 font-bold text-3xl uppercase tracking-[0.18em] text-(--accent)">
        {category}
      </div>

      <div className="skill-list grid grid-cols-2 gap-5 max-[760px]:grid-cols-1">
        {items.map((skill) => {
          const Icon = skillIcons[skill];

          return (
            <div
              key={skill}
              className="skill-card flex min-h-40 flex-col items-center justify-center gap-5 rounded-4xl border border-(--border) bg-[color-mix(in_srgb,var(--surface)_72%,transparent)] px-5 py-7 text-center shadow-[0_20px_50px_rgba(16,34,23,0.06)] transition-[transform,box-shadow,border-color] hover:-translate-y-1 hover:border-(--accent) hover:shadow-[0_26px_70px_rgba(16,34,23,0.11)]"
            >
              {Icon ? (
                <Icon className="text-[3.4rem] text-(--text)" />
              ) : (
                <span className="font-mono text-[2.8rem] font-black text-(--text)">
                  {skill.slice(0, 1)}
                </span>
              )}
              <span className="font-mono text-[1rem] font-bold text-(--text)">
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
    </section>
  );
}
