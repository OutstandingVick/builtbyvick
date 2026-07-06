export default function Hero() {
  return (
    <section
      id="home"
      className="hero-section relative mx-auto flex min-h-svh w-full max-w-280 flex-col items-center justify-center px-5 pb-16 text-center max-[760px]:min-h-100svh max-[760px]:px-4 max-[760px]:pb-12 max-[760px]:pt-28"
    >
      <div className="hero-badge mb-9 inline-flex items-center gap-2 rounded-full border border-(--border-2) bg-[color-mix(in_srgb,var(--surface)_78%,transparent)] px-3.5 py-1.5 shadow-[0_14px_40px_rgba(16,34,23,0.08)] max-[760px]:mb-8">
        <span className="block size-1.75 animate-[pulse_2s_infinite] rounded-full bg-(--accent) shadow-[0_0_8px_var(--accent)]" />
        <span className="font-mono text-[0.65rem] tracking-[0.12em] text-(--text-2)">
          AVAILABLE FOR ROLES
        </span>
      </div>
      <br />
      <h1 className="font-display hero-title mb-5 text-9xl font-black leading-[0.9] tracking-[-0.045em] text-(--text) max-[760px]:text-[2.55rem] max-[760px]:leading-none max-[520px]:text-[2.15rem] max-[380px]:text-[1.82rem]">
        <span className="hero-name-line inline-flex items-baseline gap-[0.22em] whitespace-nowrap max-[760px]:whitespace-normal">
          VICTOR
          <span className="text-(--accent-warm)">
            POWEIDEI
          </span>
        </span>
        <br />
        OGBONNA
      </h1>
      <br />
      <div className="hero-roles mb-7 flex flex-wrap items-center justify-center gap-4 max-[760px]:mb-6 max-[760px]:gap-2">
        <span className="font-serif text-3xl italic text-(--text-2)">
          Frontend Engineer
        </span>
        <span className="text-(--accent-warm)">—</span>
        <span className="font-serif text-3xl italic text-(--text-2)">
          Technical Writer & Researcher
        </span>
      </div>
      <br />
      <div className="text-2xl">
        <p className="font-mono hero-bio mb-8 max-w-180 font-semibold leading-[1.7] text-(--text-2) max-[760px]:text-[0.95rem] max-[760px]:leading-[1.65]">
        My work centers on creating intuitive interfaces, seamless 
      </p>
        <p className="font-mono hero-bio mb-8 max-w-180 font-semibold leading-[1.7] text-(--text-2) max-[760px]:text-[0.95rem] max-[760px]:leading-[1.65]">
        user experiences, and products that scale effectively.
      </p>
      </div>
      <br />
      <div className="hero-actions flex flex-wrap justify-center gap-4">
        <a
          href="mailto:victor.ogbonna@hotmail.com"
          className="font-mono inline-flex min-h-14 min-w-44 items-center justify-center rounded-full bg-(--accent) px-10 py-4 text-base font-extrabold tracking-normal text-[#102217] no-underline shadow-[0_18px_38px_color-mix(in_srgb,var(--accent)_24%,transparent)] transition-[opacity,transform] hover:-translate-y-0.5 hover:opacity-[0.88] max-[760px]:w-full"
         >
          Get in touch
        </a>
      </div>
    </section>
  );
}