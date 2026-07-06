export default function Hero() {
  return (
    <section
      id="home"
      className="hero-section relative mx-auto flex min-h-90 w-full max-w-280 flex-col items-center justify-center px-5 pb-20 pt-32 text-center max-[760px]:min-h-auto max-[760px]:px-4 max-[760px]:pb-16 max-[760px]:pt-28"
    >
      <div className="hero-badge mb-9 inline-flex items-center gap-2 rounded-full border border-(--border-2) bg-[color-mix(in_srgb,var(--surface)_78%,transparent)] px-3.5 py-1.5 shadow-[0_14px_40px_rgba(16,34,23,0.08)] max-[760px]:mb-8">
        <span className="block size-1.75 animate-[pulse_2s_infinite] rounded-full bg-(--accent) shadow-[0_0_8px_var(--accent)]" />
        <span className="font-mono text-[0.65rem] tracking-[0.12em] text-(--text-2) pb-10">
          AVAILABLE FOR ROLES
        </span>
      </div>

      <h1 className="font-display hero-title mb-5 text-[clamp(3.2rem,7vw,6.3rem)] font-black leading-[0.9] tracking-[-0.045em] text-(--text) max-[760px]:mb-5 max-[760px]:text-[2.55rem] max-[760px]:leading-none max-[520px]:text-[2.15rem] max-[380px]:text-[1.82rem]">
        <span className="hero-name-line inline-flex items-baseline gap-[0.22em] whitespace-nowrap">
          VICTOR
          <span className="text-(--accent-warm) [-webkit-text-stroke:0px]">
            POWEIDEI
          </span>
        </span>
        <br />
        OGBONNA
      </h1>

      <div className="hero-roles mb-7 flex flex-wrap items-center justify-center gap-4 max-[760px]:mb-6 max-[760px]:gap-2">
        <span className="font-serif text-[clamp(1.05rem,2vw,1.45rem)] italic text-(--text-2)">
          Frontend Engineer
        </span>
        <span className="text-(--border-2)">—</span>
        <span className="font-serif text-[clamp(1.05rem,2vw,1.45rem)] italic text-(--text-2)">
          Technical Writer & Researcher
        </span>
      </div>

      <p className="font-mono hero-bio mb-8 max-w-180 text-[1.08rem] font-semibold leading-[1.7] text-(--text-2) max-[760px]:mb-8 max-[760px]:text-[0.95rem] max-[760px]:leading-[1.65]">
        I build responsive and user-focused web applications. My work centers
        on creating intuitive interfaces, seamless user experiences, and
        products that scale effectively.
      </p>

      <div className="hero-actions flex flex-wrap justify-center gap-4 max-[760px]:w-full max-[760px]:max-w-90">
        <a
          href="#projects"
          className="font-mono inline-flex min-h-12 items-center justify-center rounded-full bg-(--accent) px-7 py-3 text-[0.76rem] font-extrabold tracking-normal text-[#102217] no-underline shadow-[0_18px_38px_color-mix(in_srgb,var(--accent)_24%,transparent)] transition-[opacity,transform] hover:-translate-y-0.5 hover:opacity-[0.88] max-[760px]:w-full"
        >
          View my work
        </a>
        <a
          href="#contact"
          className="font-mono inline-flex min-h-12 items-center justify-center rounded-full border border-(--border-2) bg-[color-mix(in_srgb,var(--surface)_58%,transparent)] px-7 py-3 text-[0.76rem] font-bold tracking-normal text-(--text) no-underline transition-[border-color,transform] hover:-translate-y-0.5 hover:border-(--text-2) max-[760px]:w-full"
        >
          Get in touch
        </a>
      </div>

      <div className="hero-scroll absolute bottom-8 right-5 flex items-center gap-2 opacity-40 max-[760px]:hidden">
        <span className="font-mono text-[0.6rem] tracking-[0.15em] text-(--text-3)">
          SCROLL
        </span>
        <span className="text-[0.8rem] text-(--text-3)">↓</span>
      </div>
    </section>
  );
}
