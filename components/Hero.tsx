"use client";
import { useEffect, useRef } from "react";

export default function Hero() {
  const nameRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = nameRef.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    setTimeout(() => {
      el.style.transition = "opacity 0.9s ease, transform 0.9s ease";
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }, 200);
  }, []);

  return (
    <section
      id="home"
      className="hero-section relative mx-auto flex min-h-screen max-w-[1100px] flex-col items-center justify-center px-[1.6rem] pt-20 text-center max-[760px]:min-h-[auto] max-[760px]:px-[0.8rem] max-[760px]:pb-16 max-[760px]:pt-28"
    >
      <div className="hero-badge mb-12 inline-flex items-center gap-2 rounded-full border border-[var(--border-2)] bg-[var(--bg-3)] px-3.5 py-1.5 max-[760px]:mb-8">
        <span className="block size-[7px] animate-[pulse_2s_infinite] rounded-full bg-[var(--accent)] shadow-[0_0_8px_var(--accent)]" />
        <span className="font-mono text-[0.65rem] tracking-[0.12em] text-[var(--text-2)]">
          AVAILABLE FOR ROLES
        </span>
      </div>

      <h1
        ref={nameRef}
        className="font-display hero-title mb-6 text-[clamp(2.8rem,8vw,7.4rem)] font-extrabold leading-[0.92] tracking-[-0.03em] text-[var(--text)] max-[760px]:mb-5 max-[760px]:text-[2.35rem] max-[760px]:leading-none max-[520px]:text-[2rem] max-[380px]:text-[1.72rem]"
      >
        <span className="hero-name-line inline-flex items-baseline gap-[0.35em] whitespace-nowrap">
          VICTOR
          <span className="text-[var(--accent-warm)] [-webkit-text-stroke:0px]">
            POWEIDEI
          </span>
        </span>
        <br />
        OGBONNA
      </h1>

      <div className="hero-roles mb-8 flex flex-wrap items-center justify-center gap-4 max-[760px]:mb-6 max-[760px]:gap-2">
        <span className="font-serif text-[clamp(1.1rem,2.5vw,1.6rem)] italic text-[var(--text-2)]">
          Frontend Engineer
        </span>
        <span className="text-[var(--border-2)]">—</span>
        <span className="font-serif text-[clamp(1.1rem,2.5vw,1.6rem)] italic text-[var(--text-2)]">
          Technical Writer & Researcher
        </span>
      </div>

      <p className="font-mono hero-bio mb-12 max-w-[760px] text-[1.35rem] leading-[1.75] text-[var(--text-2)] max-[760px]:mb-8 max-[760px]:text-[0.95rem] max-[760px]:leading-[1.65]">
        I build responsive and user-focused web applications. My work centers
        on creating intuitive interfaces, seamless user experiences, and
        products that scale effectively.
      </p>

      <div className="hero-actions flex flex-wrap justify-center gap-4 max-[760px]:w-full max-[760px]:max-w-[360px]">
        <a
          href="#projects"
          className="font-mono inline-flex min-h-12 items-center justify-center rounded-full bg-[var(--accent)] px-6 py-3 text-[0.72rem] font-extrabold tracking-normal text-[#102217] no-underline shadow-[0_12px_30px_color-mix(in_srgb,var(--accent)_20%,transparent)] transition-opacity hover:opacity-[0.82] max-[760px]:w-full"
        >
          View my work
        </a>
        <a
          href="#contact"
          className="font-mono inline-flex min-h-12 items-center justify-center rounded-full border border-[var(--border-2)] bg-transparent px-6 py-3 text-[0.72rem] tracking-normal text-[var(--text)] no-underline transition-colors hover:border-[var(--text-2)] max-[760px]:w-full"
        >
          Get in touch
        </a>
      </div>

      <div className="hero-scroll absolute bottom-10 right-0 flex items-center gap-2 opacity-40 max-[760px]:hidden">
        <span className="font-mono text-[0.6rem] tracking-[0.15em] text-[var(--text-3)]">
          SCROLL
        </span>
        <span className="text-[0.8rem] text-[var(--text-3)]">↓</span>
      </div>
    </section>
  );
}
