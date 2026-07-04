"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const work = [
  {
    role: "Frontend Engineer — React / Web3",
    org: "Bounsser",
    period: "Q2 2025 — Q4 2025",
    startMonth: "Q2",
    endMonth: "Q4",
    year: "2025",
    location: "Remote",
    initials: "BO",
    bullets: [
      "Build and maintain secure dashboard interfaces for a decentralized identity and authentication platform using React and TypeScript, shipping features directly to production.",
      "Introduced a reusable component library and standardized state management patterns, reducing UI development overhead and improving consistency across security-sensitive flows.",
      "Collaborate closely with backend engineers to optimize API integrations; responsible for end-to-end delivery of authentication and credential-management UI features.",
    ],
  },
  {
    role: "Frontend Engineer — Solana Ecosystem",
    org: "HotOdds",
    period: "Sep 2024 — Feb 2025",
    startMonth: "Sep",
    endMonth: "Feb",
    year: "2024",
    location: "Delta, Nigeria",
    initials: "HO",
    bullets: [
      "Delivered production-ready real-time dashboards and Solana-integrated data interfaces for the Solana Radar Hackathon (Q4 2024), shipping a working demo under competition deadline.",
      "Integrated frontend with Solana APIs and WebSocket services to achieve low-latency data flow across high-frequency trading interfaces.",
      "Diagnosed and resolved critical UI bugs during the final pre-demo sprint, ensuring a stable, performant product at judging time.",
    ],
  },
  {
    role: "Frontend Engineer & Web Design Tutor",
    org: "AGM Techpulse",
    period: "Jan 2020 — Oct 2024",
    startMonth: "Jan",
    endMonth: "Oct",
    year: "2020",
    location: "Bayelsa, Nigeria",
    initials: "AG",
    bullets: [
      "Designed and shipped responsive, accessible web applications using React, JavaScript, and Tailwind CSS, translating Figma specs to production UI.",
      "Led code reviews and mentored junior developers, raising team standards on accessibility compliance, performance optimization, and code quality.",
    ],
  },
  {
    role: "Freelance Frontend Engineer",
    org: "Independent",
    period: "Jan 2023 — Present",
    startMonth: "Jan",
    endMonth: "Now",
    year: "2023",
    location: "Remote",
    initials: "IN",
    bullets: [
      "Built a React product showcase for a luxury watch platform (The Uglee One), prioritizing visual performance and responsive cross-device design.",
      "Delivered a mobile-friendly HTML/CSS/JS e-commerce prototype for Nonis Designs, used in partner demos and investor pitches.",
    ],
  },
];

export default function Experience() {
  const [active, setActive] = useState(0);
  const item = work[active];

  const goPrevious = () => setActive((current) => (current === 0 ? work.length - 1 : current - 1));
  const goNext = () => setActive((current) => (current === work.length - 1 ? 0 : current + 1));

  return (
    <section
      id="experience"
      className="content-section experience-section mx-auto max-w-[1100px] px-[1.6rem] py-32 max-[980px]:max-w-[760px] max-[760px]:px-[0.8rem] max-[760px]:py-16"
    >
      <div className="section-label mb-10 flex items-center gap-4 max-[760px]:mb-9">
        <span className="font-mono inline-flex min-h-16 items-center rounded-full border border-[var(--border-2)] bg-[color-mix(in_srgb,var(--surface)_62%,transparent)] px-[1.7rem] text-[1.44rem] font-extrabold tracking-[0.02em] text-[var(--text)]">
          02 / Work Experience
        </span>
      </div>

      <div className="experience-carousel">
        <div className="experience-rail" aria-hidden="true">
          <div className="experience-rail-rule" />
          <div className="experience-rail-year font-mono">{item.year}</div>
          <div className="experience-month experience-month-start font-mono">
            <span className="experience-node" />
            {item.startMonth}
          </div>
          <div className="experience-month experience-month-end font-mono">
            <span className="experience-node" />
            {item.endMonth}
          </div>
        </div>

        <article className="experience-card">
          <div className="experience-card-header">
            <div className="experience-logo font-display">{item.initials}</div>
            <div>
              <h3 className="font-display experience-role">{item.org}</h3>
              <p className="font-mono experience-job-title">{item.role}</p>
              <p className="font-mono experience-meta">
                {item.period} · {item.location}
              </p>
            </div>
          </div>

          <div className="experience-copy">
            {item.bullets.map((bullet) => (
              <p key={bullet} className="font-mono experience-body">
                {bullet}
              </p>
            ))}
          </div>
        </article>

        <div className="experience-controls">
          <button type="button" onClick={goPrevious} aria-label="Previous experience" className="experience-arrow">
            <ChevronLeft size={26} strokeWidth={1.8} />
          </button>
          <button type="button" onClick={goNext} aria-label="Next experience" className="experience-arrow">
            <ChevronRight size={26} strokeWidth={1.8} />
          </button>
        </div>

        <div className="experience-dots" aria-label="Experience entries">
          {work.map((entry, index) => (
            <button
              key={entry.org}
              type="button"
              onClick={() => setActive(index)}
              aria-label={`Show ${entry.org} experience`}
              aria-current={active === index}
              className="experience-dot"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
