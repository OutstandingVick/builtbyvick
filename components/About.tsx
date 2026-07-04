"use client";

import Image from "next/image";

const skills = {
  "Languages & Technologies": ["JavaScript", "TypeScript", "Rust", "React", "Next.js", "Tailwind CSS", "HTML/CSS"],
  Tools: ["Git / GitHub", "Figma", "Vercel", "NotebookLM"],
};

export default function About() {
  return (
    <section
      id="about"
      className="content-section about-section mx-auto max-w-[1100px] px-[1.6rem] py-16 max-[980px]:max-w-[760px] max-[760px]:px-[0.8rem] max-[760px]:py-16 max-[760px]:pt-12"
    >
      <div className="section-label mb-10 flex items-center gap-4 max-[760px]:mb-9">
        <span className="font-mono inline-flex min-h-16 items-center rounded-full border border-[var(--border-2)] bg-[color-mix(in_srgb,var(--surface)_62%,transparent)] px-[1.7rem] text-[1.44rem] font-extrabold tracking-[0.02em] text-[var(--text)]">
          01 / About
        </span>
      </div>

      <div className="about-grid grid grid-cols-2 items-start gap-24 max-[980px]:grid-cols-1 max-[980px]:gap-10">
        <div className="portrait-column flex flex-col gap-8 max-[980px]:mx-auto max-[980px]:w-full max-[980px]:max-w-[560px] max-[760px]:max-w-[260px] max-[380px]:max-w-[240px]">
          <div className="relative aspect-square w-full overflow-hidden rounded-[28px] bg-[var(--surface)] shadow-[0_24px_70px_rgba(0,0,0,0.14)]">
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
          <h2 className="font-display section-heading mb-8 text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.1] tracking-[-0.02em] text-[var(--text)] max-[760px]:text-[1.65rem] max-[760px]:leading-[1.15] max-[520px]:text-2xl">
            Building at the
            <br />
            <span className="font-serif italic text-[var(--accent)]">
              intersection
            </span>{" "}
            of code,<br />
            & research.
          </h2>

          <div className="font-mono about-copy flex flex-col gap-4 text-base leading-[1.7] text-[var(--text-2)] max-[760px]:text-[0.95rem] max-[760px]:leading-[1.65]">
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

          <div className="skills-grid mt-11 grid grid-cols-[repeat(auto-fit,minmax(130px,1fr))] gap-6 max-[760px]:grid-cols-1 max-[760px]:gap-7 max-[380px]:gap-6">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="skill-group">
                <div className="font-mono mb-3 text-[0.6rem] uppercase tracking-[0.18em] text-[var(--accent)]">
                  {category}
                </div>
                <div className="skill-list flex flex-col gap-2 max-[760px]:gap-3">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="font-mono skill-chip inline-flex w-fit max-w-full items-center gap-[0.65rem] rounded-full border border-[var(--border)] bg-[color-mix(in_srgb,var(--surface)_70%,transparent)] px-3 py-1.5 text-[0.95rem] font-bold tracking-normal text-[var(--text)] [overflow-wrap:anywhere] max-[760px]:w-auto max-[760px]:text-[0.84rem] max-[760px]:leading-[1.35] max-[380px]:text-[0.78rem]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
